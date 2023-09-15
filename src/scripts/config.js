// Number of slides that will drive (more = smoother)
// If this doesn't match the number of slides named 'drive-slide' in config below you will not complete the full journey
var driveSlides = 11;

// Number of points on drive route (more = higher quality, but slower to process)
var driveSmoothness = 120;

// Value used to drive
var driveTime = driveSlides*driveSmoothness;

// Do you want to follow the point? True = follow
var followPoint = true;

// ...If so, what zoom, pitch, and bearing should be used to follow?
var followZoomLevel = 14;
var followBearing = 15;
var followPitch = 20;

// to add 'driving' slides just make sure to add 'drive to beginning of slide id'
// you also need to add a running total to the end of each 'drive-slide', (ex. drive-slide-0, drive-slide-1, drive-slide-2, etc.)
var config = {
    style: 'mapbox://styles/mapbox/navigation-night-v1',

    accessToken: 'pk.eyJ1IjoiZGV2b24tY2FtcGJlbGwiLCJhIjoiY2xtM2w5cGZwMTFqajNlbndvdXJ6YTI1YyJ9.wz4bFrxHBVQH-UGf8RkDTw',
    
    showMarkers: false,
    theme: 'dark',
    alignment: 'left',
    title: 'One Train Blinks',
    subtitle: 'A series of reflections and perspectives as the staff of the Eye rides the 1 train throughout New York City.',
    byline: 'Eye Staff',
    footer: 'Source: source citations, etc.',
    chapters: [
        // SOUTH FERRY
        {
            id: 'slide-south-1',
            title: 'South Ferry',
            //image: './path/to/image/source.png',
            description: `
                <p><strong style="font-size: 14px;">By Dorothea Dwomoh</strong></p>
                <p>South Ferry is probably the most pristine subway station in New York City. The tunnel’s walls are made of glossy white tiles, and the quartz columns are edged with steel. It’s symmetrical, futuristic, and illuminated with LEDs. It smells fresh. The speckled subway floor glistens.</p>
            `,
            location: {
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-south-2',
            description: "The whirring of the ventilation system and faint electrical buzz tempts me to sleep here. There’s a soothing rhythm and consistency—all the trains are either settling down or starting back up. With the constant upkeep, there’s no time for the station to decay.",
            location: {
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-south-3',
            description: "I love standing at the mezzanine and looking through its transparent panels to see the curved tops of trains as they roll into the station. Ascending the escalators to the Whitehall Terminal, I am swamped with sunlight from the glass roof. The station’s entrance is a jutting, curved glass pane, supported by steel, with polished granite walls. It connects to the bustling Peter Minuit Plaza, featuring sinuous architecture—zipper benches, a flowering pavilion.",
            location: {
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-south-4',
            description: "While I appreciate how modern South Ferry is, I wonder if that is only because disasters forced it to renovate. September 11’s aftermath led to an overhaul of Lower Manhattan’s transportation system, and MTA officials proposed a new South Ferry station that would revitalize it as a hub for seamless operation and intermodal connectivity. The station was completed in 2009 and only operated for three years before Hurricane Sandy ravaged it. After undergoing extensive repairs, it reopened in 2017.",
            location: {
            },
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: 'slide-south-5',
            description: "I strain my eyes trying to discern the individual branches of the inky, veiny silhouettes of trees that sprawl across the walls on the upper level. The artwork is a tangled, intricate mess, like interconnected subway routes.",
            location: {
            },
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: 'slide-south-6',
            description: "There’s a fused glass panel of an inverted, browning leaf and a mosaic of a vintage topographical map of Manhattan. While building the station in 2005, workers excavated a segment of the Battery Wall, a stone fortification from New York’s colonial era. At time of discovery, the wall was considered to be the oldest intact man-made structure in Manhattan. A section of it is embedded into the wall adjacent to the escalator exits. When I approach it, I am afraid to touch it. It looks strong but at the same time looks like it could pulverize into dust.",
            location: {
            },
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: 'slide-south-7',
            description: "As the station that feeds into the Staten Island Ferry, which millions depend on for transportation and famous views of New York City, South Ferry is always maintained. The polished architecture can’t eliminate South Ferry’s history, its geographical importance, and its function as a connector—past to present, people to ferry, ferry to city. Where it stands in Manhattan, South Ferry is the end and beginning. ",
            location: {
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        // CHRISTOPHER
        {
            id: 'drive-slide-0',
            title: 'Christopher Street—Sheridan Square',
            description: `
                <p><strong style="font-size: 14px;">By Haniya Cheema</strong></p>
                <p>On my first-year dorm room wall, I pasted the poem The Guttural Muse by Seamus Heaney, unframed and yellow against the plaster-white.</p>
            `,
            location: {
                
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-1',
            //image: './path/to/image/source.png',
            description: "The poem tells the story of an old poet watching a young crowd leave a discotheque on a midsummer night. As he reflects on the isolation and invisibility of middle age, Heaney writes of a girl in a white dress “courted out among the cars,” socializing and puddling into laughter.",
            location: {
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-chris-2',
            description: "The poet recognizes his functional value as a writer, referring to himself as a “doctor fish” because his “slime”—poetry—“was said to heal the wounds of fish that touched it.” Despite his skills, in comparison to the youth around him, he feels like “some old pike all badged with sores / Wanting to swim in touch with soft-mouthed life.” ",
            location: {
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-chris-3',
            description: "During my first year in New York City, the elderly man’s insecurity linked me to him: We both felt distinctly unbeautiful. Everything from the grand museums to the run-down bodegas were infused with meaning and edified by history in a way that was unbeknownst to me. I felt honored to be surrounded by so much beauty but was simultaneously aware of the extent of my dissociation from it. ",
            location: {
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-chris-4',
            description: "The city’s things, places, and people existed, to some extent, toward an aesthetic end; they possessed beauty for its own sake. I, on the other hand, had defined my life thus far by the measure of how much work I could produce, or good I could do, in the shortest period of time—I was a “doctor fish” through and through.",
            location: {
            },
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: 'slide-chris-5',
            description: "The only place in my new home that felt just as purely functional was the subway. Within those cavernous stations, people disregarded the dirt and grime, fixing their eyes on their cellphones and their minds on their destination. As long as the 1 train was en route, it fulfilled the only role required of it. The subway wasn’t beautiful; it was a “doctor fish” as well. ",
            location: {
            },
            onChapterEnter: [],
            onChapterExit: []
        },{
            id: 'slide-chris-6',
            description: "That was, until one spring night, I stumbled into the Christopher Street station wearing a white dress after exiting a discotheque. In my post-club haze, the subway radiated with a color and vibrancy I hadn’t taken the time to notice before. I found myself entranced with a small mosaic impressed into the wall, admiring the precision and care that must have gone into the placement of the sapphire and ochre tiles. Someone found Christopher Street station beautiful enough to adorn and worthy enough to admire: Maybe this place wasn’t just a “doctor fish” after all.",
            location: {
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-chris-7',
            description: "My gaggle of friends swarmed me and the station, their voices oily and thick against the brash metal scream of the subway tracks. The train rushed by and the end of my dress lifted along with it, pulling me into the perpetual motion of the city. Frozen in a vignette, the subway and I were at once the aged poet in Heaney’s poem and the youth he craved so deeply to swim in touch with—equal parts slimy tench and soft-mouthed life. ",
            location: {
            },
            onChapterEnter: [],
            onChapterExit: []
        },
    
        // 14th
        {
            id: 'drive-slide-2',
            title: '14th St',
            description: `
                <p><strong style="font-size: 14px;">By Mayra Kalaora</strong></p>
                <p>Dearest 14th Street-6th Avenue,</p>
                <p>I’m writing to you to disclose the sticky situation that I’ve found myself in—stickier than your floors that make that ever-so-familiar schllack sound when I peel my sneakers off of it. </p>
            `,
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-14-1',
            description: "Here’s the deal, 14th Street-6th Avenue station: I’ve been inside of you one too many times for me to deny any longer the tender affection that has grown for you. Perhaps it’s just infatuation, or an attachment that one might characterize as Stockholm syndrome, but I’m inclined to believe that it is genuine, glorious Love.",
            location: {
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-14-2',
            description: "While you’re just a boundary for all those New York University students who would not dare venture any further north, to me you represent boundlessness.",
            location: {
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-14-3',
            description: "Standing on your island platforms and gazing across the tracks, I hope to get a glimpse of a long-lost friend, or perhaps a lover of times past—but no, it’s just that one guy who always hangs around Washington Square Park, serenading someone against their will in exchange for money.",
            location: {
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-14-4',
            description: "But your true infinitude lies in the long and winding road that is the passageway from the 1 to the L. As I waft through the hazy corridor fogged up by incense, I am greeted with an out-of-tune guitar rendition of Yesterday—I swear, I’ve been in New York City for more than two years, and that man will exclusively play the Beatles—and someone selling unidentifiable trinkets laid out on the ground. Watching those black polyester L train bags pass me one by one, carried by those who would never thrift in Manhattan even if their life depended on it, I understand: I’m exactly where I need to be.",
            location: {
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-14-5',
            description: "I apologize for all the times I’ve accidentally gotten off of the L train at the 14th Street-Union Square station instead of you—the Union Square station is just, well, not like the other girls. Sometimes, I confess, I am drawn to her. But she deceives me, in a way that I know you never would. I now know you are the 1 for me. ",
            location: {
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-14-6',
            description: "Make no mistake: If I were to truly follow my heart, it would lead me to you, oh sweet 14th Street-6th Avenue, for all roads lead to you—the 1, 2, 3, F, L, and M trains. ",
            location: {
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-14-7',
            description: "I’ve shivered in your freezing temperatures and held my breath against your warm, moist air; I’ve trudged through your platforms holding someone’s hand or a bag of leftover chicken and waffles from IHOP after hours; oh, so many seasons have changed since I first met you, but you haven’t changed one bit. ",
            location: {
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-14-8',
            description: "I will love you forever, 14th Street-6th Avenue, despite—actually, for—your ability to show me someone I really didn’t want to see, your teasing of the L train that will never come, and your precious, perennial stench of piss-tainted incense.",
            location: {
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-14-9',
            description: `
                <p>Until the end of time,</p>
                <p>M</p>
            `,
            location: {
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        // 23rd
        {
            id: 'drive-slide-3',
            title: '23rd Street',
            description: `
                <p><strong style="font-size: 14px;">By Itzel Franco</strong></p>
                <p>As I sat down to write about the 1 train subway station at 23rd Street, my first instinct was to research the station and its history on Google. But after a couple of days, I realized, in some ways, I am a part of this history.</p>
            `,
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-23-1',
            description: "To a certain extent, my accounts of the station are nonrealistic. I always return to Tennessee Williams’ The Glass Menagerie, which I’ve recently reread on the subway: “Memory takes a lot of poetic license. It omits some details.” Admittingly, there is nothing remarkable about the 1 train stop at 23rd Street. There are four other trains that make stops at 23rd Street, and the 1 train stop is the least frequented, or at least it was in 2019.—I couldn’t stop myself from doing some basic research.",
            location: {
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-23-2',
            description: "For me, 23rd Street symbolizes the end of a very important journey. Just five minutes prior, I made awkward eye contact with the security at Michaels as they watched me try to aggressively shove 10 skeins of yarn into my two tote bags. On the way to the station, I constantly looked back to make sure my yarn hasn’t flown away in the New York City wind that often comes out of nowhere. ",
            location: {
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-23-3',
            description: "The subway station, conveniently nestled about a quarter mile away from Michaels, safeguards me from the outside weather. The brown and white tile arranged to say “23rd Street” reassures me I’m at the right place. I am alone as I wait for the train.",
            location: {
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-23-4',
            description: "I think about the woman I saw at the stop weeks prior. She managed to carry eight full bags in her hands. I have learned this is a skill most New Yorkers possess. Although it was just me and her at 23rd Street, the train uptown was packed. We ended up sitting next to each other and, somehow, she was able to keep the bags at her feet without taking up much space at all.",
            location: {
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-23-5',
            description: "I can hear the train coming now. ",
            location: {
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-23-6',
            description: "Tennessee Williams also wrote poetry, which I learned existed recently thanks to some long subway rides. The last four lines of “We Have Not Long to Love” read, “So moments pass as though / they wished to stay. / We have not long to love. / A night. A day.…”",
            location: {
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-23-7',
            description: "In the subway, night and day are indistinguishable. Although 23rd Street marks the end of my quasi-shopping sprees, it also marks a space where I am removed from time. For a moment, the train is the only thing passing me by as it comes to a stop at the empty station. In this, I find comfort.",
            location: {
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        
        // COLUMBUS
        {
            id: 'drive-slide-4',
            title: 'Columbus Circle',
            description: `
                <p><strong style="font-size: 14px;">By Ewa Siemiatkowska</strong></p>
                <p>More often than I would like to admit, I find myself aimlessly getting off at the Columbus Circle station—which, some would argue, is a fat waste of a MetroCard swipe, considering it could be put toward an excursion to a new part of town that I haven’t yet entered a codependent relationship with.</p>
            `,
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-5',
            description: "This journey has nothing to do with my soft spot for the flagship seven-story Nordstrom on 57th Street and Magnolia’s overrated banana pudding. No, it’s because 59th Street is, scientifically and incontestably, the 1 train’s gem. ",
            location: {
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-columbus-2',
            description: 'An escape from Butler and the stench of anxiety, the 12-minute ride is just long enough to swipe through 60 Tinder candidates but avoid “dead butt” syndrome. If you’re lucky to be accompanied by your Eastern European parents upon arrival at the 59th Street station, you’ll have the pleasure of explaining—for the third time—that no, Columbus Circle is not part of Columbia University and admit that no, you have not the faintest idea whether it has anything to do with the Selma Blair thriller “Columbus Circle.”',
            location: {
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-columbus-3',
            description: "Energy squandered in this frustrating conversation may be easily replenished with food from one of the trucks parked around the subway entrance—which also happens to be the setting of some spectacular toddler tantrums. I once witnessed a crying youngster inhale a hot dog and then projectile vomit all over his caretaker.",
            location: {
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-columbus-4',
            description: "Not to be confused with the shoeless teenager who, after a Friday night out, hopelessly sat in a puddle graciously spewed out by her wingwoman. I blame this unfortunate sequence of events on the circular architecture of the station, which is known to provoke dizziness and merry-go-round throwbacks.",
            location: {
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-columbus-5',
            description: "If that’s the case for you, there’s a CVS conveniently located just three minutes away. I learned about it the hard way. Without getting into too much detail, stay away from the 59th Street station during the New York City Marathon and its crowds of foam-fingered supporters yelling their spouse’s name directly into your ear. Unless you’re ready to, no pun intended, run. Otherwise, see you there! I’ll be the one dreading the return trip.",
            location: {
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        
        // 96
        {
            id: 'drive-slide-6',
            title: '96 Street',
            description: `
                <p><strong style="font-size: 14px;">By  Jesse Levine</strong></p>
                <p>The subway system is the force of gravity of New York City—the most ubiquitous, powerful entity that everyone depends on and nobody can control. It’s over us and under us, it moves us, and it stops us. There’s nowhere I feel this more than at the 96th Street station.</p>
            `,
            location: {
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-7',
            description: "It’s a cold Friday at the end of January. Skies are blue—a refreshing breath of air amid the heavy hues of gray above my head for the past week.",
            location: {
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-96-2',
            description: "I venture to the 116th Street stop at noon to go grocery shopping after my unfortunately scheduled Friday morning class. I’m in my head about all sorts of things—the paper due next week, the wrong answer I gave in class, the decisions I’ve made or need to make. I dart down the stairs and scan my phone on the reader, bracing to see the red flashing light and feel the cold, hard metal turnstile jab into my thigh. Yet, for once, the payment goes through, and I make the train.",
            location: {
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-96-3',
            description: "As 116th becomes 110th becomes 103rd, I plot my next course of action: to stay on the 1 or not to stay on the 1. But a glistening 3 train enters the 96th Street station at the same time as my unhurried, methodical 1 train. I exit the 1, navigate the crowded platform, and take my seat on the 3.",
            location: {
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-96-4',
            description: "The 1 train departs a handful of seconds before my 3 train. Yet within seconds, the two trains move in unison—or are they moving at all? For as I lock eyes with the woman on the train across from me, it seems as if we, ourselves, are not moving. Instead, the world moves around us. In this city of more than eight million, I look at this woman who I’ve never seen before nor will ever see again, and yet somehow, the moment doesn’t feel fleeting at all. ",
            location: {
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-96-5',
            description: "As the tunnel lights flash, and the 1 train seems to drift upwards into space, I lose eye contact with the woman. Instead, my eyes settle on my own reflection in the window across from me.",
            location: {
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-96-6',
            description: "Look at this world around you, the train beckons, and look at yourself in it. Though I’m traveling several miles per hour and being bombarded with sounds of screeching tires, it’s the most still and serene I’ve felt in weeks.",
            location: {
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        
        // 116
        {
            id: 'drive-slide-8',
            title: '116 Street - Columbia University',
            description: `
                <p><strong style="font-size: 14px;">By Isabella Noonen</strong></p>
                <p>Maybe it’s because I’ve become overly attached to “being a history major,” but one of my favorite hobbies has to be going down rabbit holes in the Spectator archives. Spectator is the “paper of record” for the Columbia community: Nigh every historical event, campus controversy, or “what the hell” moment in Morningside Heights for the 145 years of publication has made itself into Spectator’s pages.</p>
            `,
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-116-1',
            description: "But I don’t know if any issue has inspired more rage, melodrama, and purple prose in Spectator’s writers than the entrance to the 116th Street subway station. ",
            location: {
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-116-2',
            description: "Up until the late 1960s, Columbia students accessed the subway not via stairways in front of College Walk or the Barnard Quad, but a kiosk in the middle of Broadway. A long stone building with a decorative facade, it stood on the median dividing uptown and downtown traffic. A century ago, aboveground entrances could be found across the early subway system—if you take the 1 train to 72nd Street, you’ll exit through a kiosk similar to the one that used to stand at 116th Street. Looking at pictures of the 116th Street kiosk in Spectator, its ornate architecture completing the momentous Columbia buildings around it, I wonder why such a beautiful historic building was ever demolished.",
            location: {
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-116-3',
            description: "Beautiful and historic it may have been, but the kiosk was also—in the words of then Manhattan Borough President Edward R. Dudley—a “danger to life and an inconvenience.” The location of the kiosk not only forced passengers to cross Broadway, but it obstructed the view of oncoming traffic, resulting in numerous accidents and even two pedestrian deaths. ",
            location: {
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-116-4',
            description: "These tragedies mobilized the Columbia community. In 2004, Chauncey Olinger, GSAS ’71, recalled the effort to replace the kiosk in his contribution to C250 Perspectives—a digital time capsule celebrating Columbia University’s 250th anniversary. During his time as president of the 1963-64 Columbia University Student Council, Olinger helped collect almost 7,000 signed petitions demanding the city destroy the kiosk. Though the mayor responded positively, the city failed to allocate funds for the demolition until 1966, and work on the station continued into spring 1968.",
            location: {
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-116-5',
            description: "Olinger’s retrospective remembered the campaign as “one of the most positive stories about student life at Columbia”—students had successfully used “the long-accepted devices of the American political tradition to rectify a public hazard.” Spectator coverage of the kiosk from the time, however, expressed far less confidence in the civic process.",
            location: {
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-116-6',
            description: "“A new assault against the seemingly indestructible IRT subway kiosk at Broadway and West 116th St. is now being planned by the City Department of Highways,” announced a March 1965 article, the tone resembling a grim missive sent back from the trenches of the Somme. A year and a half later, Spectator was referring to the kiosk as if it were a prisoner awaiting execution: A rise in projected replacement costs from $600,000 to $800,000, one article reported, had granted the kiosk “another reprieve from its long-planned demolition.”",
            location: {
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-116-7',
            description: "Finally, the November 7, 1966 issue declared a “Requiem for a Kiosk”: The city had finally made available the first of the funds needed to “raze… the ugly little structure” to the ground. By December of 1967, Spectator was finally able to announce “SIC TRANSIT GLORIA KIOSK”—thus passes the glory of the kiosk! The two sidewalk entrances had finally opened, and the kiosk’s reign of terror was over.",
            location: {
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-116-8',
            description: "Today, the only reminders that the kiosk ever existed—or the rage and indignation that it inspired—can be found in the archives. As someone whose own contributions to Spectator’s historical record have often focused on historic preservation, I think I should feel saddened by the fact that all traces of the kiosk have been wiped from the physical landscape. But maybe, at least for this particular building, the archives is where it belongs.",
            location: {
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        // 242
        {
            id: 'drive-slide-9',
            title: 'Van Cortlandt Park–242nd Street',
            description: `
                <p><strong style="font-size: 14px;">By Claire Burke</strong></p>
                <p>Van Cortlandt Park is haunted. </p>
            `,
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-10',
            description: "Or at least it feels like ghosts are watching me, as I stand on dead winter grass by the barbecue pits. I’m sure during the summer children race around under their parents’ feet here, laughing as someone slings hotdogs onto plates, but right now the only sound is the rustle of the wind. ",
            location: {
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-11',
            description: "Walking past a waving willow tree and long grass, I feel miles away from the city I had just left behind. There’s a sense of history and preservation that feels incongruent with the rattling modernity of the subway nearby. But it makes sense that, of any station, it would be Van Cortlandt Park–242nd Street’s wooden steps that lead into a haunted park.",
            location: {
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-12',
            description: "The station is the only one in New York City with its original Victorian Gothic design still intact; it’s a monument, classified as so. Before I made the hour-long journey—hoping to take a few photos for my nature photography class—I googled Van Cortlandt. Both the station and park are a relic of the Van Cortlandt family’s influence, wealthy Dutch and English colonists whose house waited for me just beyond the trees, locked behind towering black gates, up crumbling gray stairs.",
            location: {
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        
        {
            id: 'drive-slide-13',
            description: "Under my feet, concentric lines had been carved into a spiral in the path, their shape surrounded by words I can’t read. The lines point forward, daring my eyes to follow them. A dog barks, my head snaps up, and past walls of brick, up feet of crumbling stairs, a black gate frames the Van Cortlandt mansion, and someone inside is glaring down at me. Except no, no one’s there. Just the sensation that, with its long history and imposing stance on the hill, 1600s spirits had found their way into the open windows. But I’d expect them to stop at the park’s border where green grass hits a bustling street, where the facade of a bar reads “The Last Stop est. 1985,” and wooden steps lead past red and green window panes to the 1 train.",
            location: {
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-242-5',
            description: "When my train rattled to a stop, the man who sat across from me made no move to get up. We had been together as the train crawled its way into the Bronx, past Manhattan College, over honking cars and stoplights to the last four streets before our stop. Staring out the window, I listened to the brakes screech. He settled into his brown coat, closed his eyes. ",
            location: {
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-242-6',
            description: "Doors opened, and in swarmed MTA workers in orange vests, sweeping, and inspecting a train that had seen a whole city since it last was home. The man began to sleep. I exited onto the platform, eyes distracted from the park to my right as the doors began to close again, trapping my traveling companion in stasis, riding a train without end, just another ghost in a city full of them.",
            location: {
            },
            onChapterEnter: [],
            onChapterExit: []
        },
    ]
};

export default config