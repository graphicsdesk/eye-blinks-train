import config from  './config.js';

var layerTypes = {
  fill: ['fill-opacity'],
  line: ['line-opacity'],
  circle: ['circle-opacity', 'circle-stroke-opacity'],
  symbol: ['icon-opacity', 'text-opacity'],
  raster: ['raster-opacity'],
  'fill-extrusion': ['fill-extrusion-opacity'],
};

var alignments = {
  left: 'lefty',
  center: 'centered',
  right: 'righty',
};

function getLayerPaintType(layer) {
  var layerType = map.getLayer(layer).type;
  return layerTypes[layerType];
}

function setLayerOpacity(layer) {
  var paintProps = getLayerPaintType(layer.layer);
  paintProps.forEach(function (prop) {
    map.setPaintProperty(layer.layer, prop, layer.opacity);
  });
}

var story = document.getElementById('story');
var features = document.createElement('div');
features.classList.add(alignments[config.alignment]);
features.setAttribute('id', 'features');

var header = document.createElement('div');

if (config.title) {
  var titleText = document.createElement('h1');
  titleText.innerText = config.title;
  header.appendChild(titleText);
}

if (config.subtitle) {
  var subtitleText = document.createElement('h2');
  subtitleText.innerText = config.subtitle;
  header.appendChild(subtitleText);
}

if (config.byline) {
  var bylineText = document.createElement('p');
  bylineText.innerText = config.byline;
  header.appendChild(bylineText);
}

if (header.innerText.length > 0) {
  header.classList.add(config.theme);
  header.setAttribute('id', 'header');
  story.appendChild(header);
}

config.chapters.forEach((record, idx) => {
  var container = document.createElement('div');
  var chapter = document.createElement('div');

  if (record.title) {
    var title = document.createElement('h3');
    title.innerText = record.title;
    chapter.appendChild(title);
  }

  if (record.image) {
    var image = new Image();
    image.src = record.image;
    chapter.appendChild(image);
  }

  if (record.description) {
    var story = document.createElement('p');
    story.innerHTML = record.description;
    chapter.appendChild(story);
  }

  container.setAttribute('id', record.id);
  container.classList.add('step');
  if (idx === 0) {
    container.classList.add('active');
  }

  chapter.classList.add(config.theme);
  container.appendChild(chapter);
  features.appendChild(container);
});

story.appendChild(features);

var footer = document.createElement('div');

if (config.footer) {
  var footerText = document.createElement('p');
  footerText.innerHTML = config.footer;
  footer.appendChild(footerText);
}

if (footer.innerText.length > 0) {
  footer.classList.add(config.theme);
  footer.setAttribute('id', 'footer');
  story.appendChild(footer);
}

mapboxgl.accessToken = config.accessToken;

const transformRequest = url => {
  const hasQuery = url.indexOf('?') !== -1;
  const suffix = hasQuery
    ? '&pluginName=scrollytellingV2'
    : '?pluginName=scrollytellingV2';

  return {
    url: url + suffix,
  };
};

var map = new mapboxgl.Map({
  container: 'map',
  style: config.style,
  // center: config.chapters[0].location.center,
  // zoom: config.chapters[0].location.zoom,
  // bearing: config.chapters[0].location.bearing,
  // pitch: config.chapters[0].location.pitch,
  scrollZoom: false,
  transformRequest: transformRequest,
});

var marker = new mapboxgl.Marker();
if (config.showMarkers) {
  marker.setLngLat(config.chapters[0].location.center).addTo(map);
}

// instantiate the scrollama
var scroller = scrollama();

let isDriveSlide = false; // Flag to track if in a drive slide
let offset = 0;

let slides = {
  0: [0, 120, 0], //Chris A
  1: [120, 210, 120], //Chris B
  2: [240, 275, 210], //14th
  3: [360, 415, 240], //23
  4: [480, 600, 295], //Columbus A
  5: [600, 655, 415], //Columbus B
  6: [720, 840, 460], // 96 A
  7: [840, 905, 580], //96 B
  8: [960, 1045, 645], //116
  9: [1080, 1200, 730], //242 A
  10: [1200, 1320, 850], //242 B
  11: [1320, 1440, 970], //242 C
  12: [1440, 1560, 1090], //242 D
  13: [1560, 1655, 1210], //242 E
};

const between = (x, min, max) => {
  return x >= min && x <= max;
};

function handleStepProgress(response) {
  let stepProgress;
  // Check if the current step is a drive slide
  isDriveSlide = response.element.id.slice(0, 5) === 'drive';

  if (isDriveSlide) {
    let driveSlideNum = parseInt(response.element.id.slice(12));
    if (driveSlideNum === 0) {
      map.setLayoutProperty('animatedLine', 'visibility', 'visible');
      stepProgress = Math.round(response.progress * driveSmoothness);
    } else {
      stepProgress = Math.round(
        response.progress * driveSmoothness + driveSmoothness * driveSlideNum,
      );
    }
    min = slides[driveSlideNum][0];
    max = slides[driveSlideNum][1];
    offset = slides[driveSlideNum][2];

    /*
        console.log('min, max:', min, max)
        console.log('step:', stepProgress)
        console.log('offset', offset)
        console.log('adjStart:', stepProgress-min+offset)
        */

    // if stepProgress is w/n valid range for this slide
    if (between(stepProgress, min, max)) {
      return changeCenter(offset + stepProgress - min);
    }
  }
}

map.on('load', function () {
  let w = window.innerWidth;
  let initBounds = routeData.features[0].geometry.coordinates;

  if (followPoint === false) {
    var bounds = initBounds.reduce(function (bounds, coord) {
      return bounds.extend(coord);
    }, new mapboxgl.LngLatBounds(initBounds[0], initBounds[0]));

    if (w >= 500) {
      map.fitBounds(bounds, {
        padding: { top: 150, bottom: 150, right: -100, left: 200 },
        duration: 0,
      });
    } else {
      map.fitBounds(bounds, {
        padding: 20,
        duration: 0,
      });
    }
  } else {
    map.setZoom(followZoomLevel);
    map.setBearing(followBearing);
    map.setPitch(followPitch);
  }

  map.addSource('lineSource', {
    type: 'geojson',
    data: geojsonPoint,
  });

  map.addSource('pointSource', {
    type: 'geojson',
    data: geojsonPoint,
  });

  map.addLayer({
    id: 'animatedLine',
    type: 'line',
    source: 'lineSource',
    paint: {
      'line-opacity': 1,
      'line-color': '#FF0000',
      'line-width': 4,
    },
    layout: {
      visibility: 'none',
    },
  });

  map.addLayer({
    id: 'animatedPoint',
    type: 'circle',
    source: 'pointSource',
    paint: {
      'circle-radius': 5.5,
      'circle-opacity': 1,
      'circle-color': '#FF0000',
    },
    layout: {
      // 'visibility': 'none'
    },
  });

  // setup the instance, pass callback functions
  scroller
    .setup({
      step: '.step',
      offset: 0.5,
      progress: true,
      //debug: true,
    })
    .onStepEnter(response => {
      var chapter = config.chapters.find(
        chap => chap.id === response.element.id,
      );
      response.element.classList.add('active');
      // map.flyTo(chapter.location);
      if (config.showMarkers) {
        marker.setLngLat(chapter.location.center);
      }
      if (chapter.onChapterEnter.length > 0) {
        chapter.onChapterEnter.forEach(setLayerOpacity);
      }
    })
    .onStepExit(response => {
      var chapter = config.chapters.find(
        chap => chap.id === response.element.id,
      );
      response.element.classList.remove('active');
      if (chapter.onChapterExit.length > 0) {
        chapter.onChapterExit.forEach(setLayerOpacity);
      }
    })
    .onStepProgress(response => {
      // Dummy variable for the first call
      let newInd;

      // Call handleStepProgress with the newInd parameter
      newInd = handleStepProgress(response, newInd);
    });

  createLine();
});

// setup resize event
window.addEventListener('resize', scroller.resize);

$(document).ready(function () {
  $.ajax({
    // url:"./data/highwaydrive.geojson",
    // url:"./data/parkstroll.geojson",
    url: "../../data/one-train.geojson",
    dataType: 'json',
    success: function (data) {
      console.log('data', data.features[0]);
      routeData = data;
    },
    error: function (jqXHR, textStatus, errorThrown) {
      console.log(errorThrown);
    },
  });
});
