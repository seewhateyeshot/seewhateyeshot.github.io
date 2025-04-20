import React from 'react';
import PortraitReel from '../components/PortraitReel';
import Soi6Poem from '../components/Soi6Poem';

const essayContent = [
  {
    type: 'text',
    content: `I first arrived in Pattaya in December 2023. My photography teacher—a close friend—had arranged a place for me to stay. It was partly an escape from the Swedish winter, partly wanderlust. I’d heard of Pattaya before—maybe from him, maybe just from its reputation. Either way, I was curious. I had three weeks of vacation from my software engineering job that was slowly killing me, and I decided to take it all.

  I’d started photographing that summer with real joy. At first, I asked my friend—who’s a published photographer and former teacher—about taking evening classes after work. He told me not to bother: “I’ll teach you everything I know.” And he did. He lent me his camera until I inevitably got a cheaper demo model of the Fujifilm X-Pro3 later. We held informal lessons in his kitchen, usually after I’d finished work. Once the technical basics were out of the way, he gave me themed homework: taxi drivers, nightlife, dreams, midsummer. The goal was always the same—approach strangers, build trust, and make portraits that felt honest.

  Sometimes I brought other photographers into the mix—people I’d met through mutual circles. We critiqued each other’s work. Some of the people I met on the street I still keep in touch with.

  I spent long hours in his home library. He owns more than a thousand books—mostly doorstops, many by masters. I’d leaf through monographs, street photography collections, retrospective volumes. I cataloged them all for him, and helped sell a few, hoping it might help his finances.

  But by winter, Stockholm felt depleted. The days were short and gray. My job was draining me. I was buried under my mortgage. I spent most of my time at home. Street photography no longer gave me the same excitement it had in the summer. I needed contrast—something alive, even if chaotic.`
  },
  {
    type: 'image',
    src: '/images/pattaya/soi6-02.jpg',
    caption: 'The customer is always welcome. June 2024.'
  },
  {
    type: 'text',
    content: `My teacher was already in Pattaya when I arrived. He welcomed me at the bus station, took me to the flat, handed me a key, and let me rest. The next morning, despite the jetlag, I fell into his rhythm: gym, breakfast, a walk along Beach Road, dinner at the same family-run restaurant every evening.

    I had broken my camera back in Stockholm just before the trip, but he lent me his—the older Fujifilm X-Pro1 I practiced with during the summer. We used the same 18mm f/2.0 lens. This setup was lightweight and unintimidating. Just wide enough for the kind of close, intimate frames I was after. Not the best in low light, but good enough. And somehow, the softness suited the city.

    I was hungry for all of it. Everything was new. At first, I photographed whatever caught my eye—stray dogs, food carts, fish markets, signs I couldn’t read. I was especially on the lookout for international couples. Whenever I saw an older Western man paired with a young, striking Thai woman—a common sight in Pattaya—I felt a strong urge to photograph it. The contrast was often jarring, but it told a story all by itself.`
  },
  {
    type: 'image',
    src: '/images/pattaya/soi6-03.jpg',
    caption: 'Children were always around. March 2024.'
  },
  {
    type: 'text',
    content: `My teacher spoke a bit of Thai and started teaching me from day one. “Sawatdee khrap” for hello. “Sabai dee mai?” for how are you. “Tai ruup dai mai?” to ask for a photo. He’d already made a long list of phrases on his phone, transliterated into Turkish—sawatdee khrap became savadikap, easier for me to read and remember. I’d review them before dinner. He was good with people—charming, quick to joke, unafraid to make a fool of himself if it helped build rapport. To a mother holding her toddler, he’d say “Nà-làk mâak mâak” (very cute). If the heat was unbearable, he’d complain loudly to a stranger: “Róon!” One night, when it dropped to 22 degrees and locals pulled on hoodies, he hugged himself dramatically and shrieked “Namkeng! Namkeng!”—ice—rubbing his arms like he was freezing. Maybe he didn’t know the word for “cold.” But it sure was entertaining.

    I even took a Thai class online through Preply, and visited a language school in Pattaya to inquire about joining in person. But honestly, I wasn’t satisfied with the teaching. What helped more were the textbooks my teacher had kept from when he’d taken formal lessons years ago. I practiced with those instead, combining them with YouTube classes, and slowly built up the basics.`
  },
  {
    type: 'image',
    src: '/images/pattaya/soi6-04.jpg',
    caption: 'Some even part of the workforce. April 2024.'
  },
  {
    type: 'text',
    content: `My teacher enabled my photography from day one. He pointed out photo opportunities, translated short conversations, and showed me which alleys were safe, which bars to avoid, where the light hit just right. If I misread a moment or hesitated, he’d tell me what went wrong.

    We scouted Soi 6, Walking Street, Beach Road, and a handful of other places I’ve since forgotten. The scenes were overwhelming: flickering neon bouncing off high heels and bare skin, European football on every screen, music blasting, older men cradling beers, bar girls fixing their lipstick in compact mirrors. On our first night, after what would become our usual after-dinner walk down Beach Road, he brought me to Soi 6. I was stunned—my instinct was to shoot a lot, but from a distance. I couldn’t get close.

    Then on that first night, just to test my limits, he took me to a massive brothel lounge where women lined the walls, each with a number and a color code. The colors marked the price. I wasn’t allowed in with my camera—and even without it, I noticed certain guests, especially South Asian men, being delayed or turned away. On our way out, we stopped to chat with a few Indian tourists lingering at the entrance. I hadn't seen anything like it before.`
  },
  {
    type: 'component',
    render: () => {
      const beachRoadImages = Array.from({ length: 18 }, (_, i) => {
        const num = String(i + 1).padStart(2, '0'); // pad 1 → 01
        return `/images/pattaya/beach_road/beach_road-${num}.jpg`;
      });

      return <PortraitReel title="Beach Road Photos" images={beachRoadImages} caption="Before I had a clear focus on Soi 6, I collected photos during our twice-daily walks on the Beach Road. December 2023." />;
    }
  },
  {
    type: 'text',
    content: `We quickly decided Soi 6 was the most photographable street. Narrow, compact, alive. There were motorcycles and the occasional car, but it was walkable. Most people didn’t mind the camera—many vloggers wandered around with selfie sticks already. It was different from Walking Street, where “No Photo” signs are everywhere and bouncers use laser pointers to threaten any raised lens. I’d heard Soi 6 used to be like that before the pandemic. But now, there were no bouncers. No closed doors. The bars were open to the street. The energy was immediate.`
  },
  {
    type: 'image',
    src: '/images/pattaya/soi6-05.jpg',
    caption: 'Start of another day at the back of a Soi 6 bar. December 2023.'
  },
  {
    type: 'text',
    content: `Apart from a trip to Chiang Mai and Bangkok for a few days, for the rest of my stay, even though I continued taking photos wherever I was, I returned to Soi 6 almost every day as part of our Beach Road walk—sometimes twice a day, once in the afternoon and again at night. My teacher usually came with me, offering tips on how to interact. He’d watch both me and the street, and later at home, he’d offer critique—on my presence, what I did or didn’t do.

    I was starting to learn the rhythm: when the music started, when the bar stools were wiped down, when the girls stirred awake and had breakfast right where they’d work later. When the men began drifting in. Every hour had a different texture. In the afternoon, the street felt softer. There was space. By evening, it grew louder, more compressed, more electric.

    I began to recognize faces. Some bar girls would wave. A few started calling me “photo man.” They’d pull me aside from the crowd, pose, and ask me to send the pictures later. I started exchanging contact info—Instagram, Line, WhatsApp. Sometimes I’d get a message within half an hour: “Where is my pic???” Occasionally, I’d see one of my photos appear on their profiles and feel a quiet satisfaction. They’d pose happily, fix each other’s makeup, laugh when I showed them the screen. I learned quickly: take many, and show the most flattering one first.`
  },
  {
    type: 'image',
    src: 'images/pattaya/soi6-06.jpg',
    caption: 'Makeup check before work. June 2024.'
  },
  {
    type: 'text',
    content: `I quickly built a rapport with many of the women on Soi 6—so quickly, in fact, that it got out of hand. To keep up, I started a fresh note in my phone titled “Soi 6 Names,” where I jotted down each name after taking a photo. I’d review it regularly, practicing pronunciation. The next time I saw one of them, I’d try to surprise her by calling her by name. It worked. Their eyes would widen in delight, often followed by a laugh or playful shove. It made the interactions warmer, easier—and sometimes even opened the door to longer conversations.

    Carrying a camera changes the rules of engagement. People noticed me, sized me up. Some assumed I was just another tourist. Others saw an opportunity—visibility, attention, a nice photo for Instagram. I often asked for permission. Sometimes I didn’t. There’s a responsibility in choosing when to lift the camera, and when to keep it down. I was learning that, slowly.`
  },
  {
    type: 'image',
    src: '/images/pattaya/soi6-07.jpg',
    caption: 'A usual night at work. April 2024.'
  },
  {
    type: 'text',
    content: `Others didn’t want to be seen, and I never pushed. I tried to read the room. My Thai was still clumsy, but just enough to say hello, to ask politely, to thank.

    Sometimes I wasn’t just “photo man”—I was a potential customer, too. As it happens to most men on that street, I’d sometimes be grabbed by the wrist and pulled inside for a drink. I learned that raising my hands in a respectfully to give a salutation and saying nong kap, mai ao kap—sister, I don’t want—was disarming. They’d salute me back and let me go.

    Some women spoke better English. A few had once been married to Western men. One had lived in Sweden and showed me photos from her time there, complaining about the cold with theatrical shivers. Another said she had studied in Bangkok and had “freelanced” during university to make ends meet—but she was making far more in Pattaya now.

    Most of the women, though, came from Isan—Thailand’s northeast. A rice-farming region. Poor. Hard to leave. The stories were often similar. They had children—young ones—and sent money home. Their phone wallpaper would usually be a photo of their son or daughter. The grandparents did the raising. The mothers did the earning.

    They spoke about their children openly and without shame. In fact, when I asked, many would light up. There was a sincere and almost childlike happiness in their voices, in their eyes. They’d scroll through photos, laughing, proud. One girl tapped her lockscreen and said, “my baby, two year.” Then grinned at me like she’d just shown off a magic trick.`
  },
  {
    type: 'component',
    render: () => {
      const portraitImages = Array.from({ length: 31 }, (_, i) => {
        const num = String(i + 1).padStart(2, '0'); // pad 1 → 01
        return `/images/pattaya/portraits/soi6_portrait-${num}.jpg`;
      });

      return <PortraitReel title="Friends from Soi 6" images={portraitImages} caption="Taken across March, April, and June 2024." />;
    }
  },
  {
    type: 'text',
    content: `Most of the attention, naturally, falls on the women. But the men are just as much a part of the street’s rhythm. They bring the money. They arrived from all over—Europe, the U.S., Australia, India, China, Japan, Korea. Some walked in groups, loud and confident. Others drifted alone, slowly, trying not to be noticed even as they scanned every bar.

There were the usual types: solo men in polo shirts with tanned arms, groups of Brits in football jerseys, retired men with walking sticks, a few younger travelers holding beers, looking amazed and slightly lost at the same time. People of all colors.

At first, I judged them—harshly. I wanted to photograph them in a way that exposed something. I wanted to make them look guilty. A few times, I did. One night, out walking on Beach Road, I caught an old man mid-negotiation—his hand on a girl’s back, whispering something into her ear. I lifted my camera, clicked, and kept walking. He gave me a half-hearted chase, yelling, “Idiot! Come back!” in a thick German accent. I didn’t stop.

Later, my teacher asked, “What were you trying to prove?”`
  },
  {
    type: 'image',
    src: '/images/pattaya/soi6-08.jpg',
    caption: 'Street scene. June 2024.'
  },
  {
    type: 'text',
    content: `He said I had picked on that man because he was old and weak. He reminded me that good photography doesn’t humiliate. It shouldn’t create enmity. It observes, reflects, connects. That moment stayed with me.

After that, I tried to empathize with the men. I started talking to them. If they were Swedish, I’d say, Bra, jag pratar svenska också. I could get by with the Norwegians and catch a word or two from the Danes. If they were French, I’d mention that I religiously did Duolingo every day. If they were Welsh, I’d say I used to work with a guy from Caerphilly. Sometimes I didn’t need to say much—just telling them I was Turkish was enough to spark a conversation. “That’s where I got my hair transplant,” they’d say, or, “I flew there for my teeth.” Cheap and professional, they’d add, grinning.

If they asked about my camera, I told them I was documenting the street. Some didn’t mind at all. Some bought me a beer. Some asked to pose. Others got serious—one said, “I’ve got a wife and kids back home.” Another just shook his head and walked away.

I stopped trying to capture shame. Instead, I tried to photograph the reality of it—not the scandal, but the quiet ordinariness. Because for them, that’s what it was: a drink, a smile, a bar stool, a question, an agreement. Nothing illegal. Nothing hidden. Just something you’re not supposed to look at too closely.`
  },
  {
    type: 'image',
    src: '/images/pattaya/soi6-09.jpg',
    caption: 'Yankees. June 2024.'
  },
  {
    type: 'component',
    render: () => (
      <p className="essay-text">
        On the ground, it’s typically the <em>mamasan</em>—an older Thai woman—who runs the daily operations:
        recruiting workers, managing the floor, and ensuring everyone stays in character.
      </p>
    )
  },
  {
    type: 'text',
    content: `The more I walked the street, the more I began to notice the system behind the surface. Every bar followed a routine. The girls would arrive around early afternoon—sometimes still in their pajamas, sometimes already dressed for the shift. A few lived upstairs. Others came by motorbike or shared ride. Some grabbed a quick bowl of noodle soup from the carts parked outside, then slipped into the bar, disappearing behind a curtain to change.

Each day had a costume. Nurse. Schoolgirl. French maid. Football jersey, cropped just above the ribs. The outfits weren’t for fun—they were assigned by the bar. I’d sometimes see the mamasan taking a lineup photo just before opening. Later, I found one of the Telegram channels where those photos were uploaded—subscribed to by thousands.

Each post showed the girls in matching outfits, standing against the same wall, tagged with names, short descriptions, and a bar logo. The lighting was identical. The framing never changed. You could scroll through them like a food delivery app.`
  },
  {
    type: 'image',
    src: '/images/pattaya/soi6-10.jpg',
    caption: 'Roll call. March 2024.',
  },
  {
    type: 'text',
    content: `Estimates suggest Pattaya receives 5–10 million visitors annually, depending on the source. A 2014 study by Empower Foundation estimated over 250,000 sex workers in Thailand, though most work outside formal brothels. The true number is likely higher. In Pattaya, it’s everywhere and nowhere—visible but rarely named.

Despite the visibility of the trade, Thai authorities officially deny the existence of sex tourism in Pattaya. Prostitution is technically illegal under the 1996 Prevention and Suppression of Prostitution Act, but enforcement is inconsistent. Soi 6 operates in a space of tolerated illegality—maintained through informal payments and a widespread belief that the industry supports the local economy.`
  },
  {
    type: 'component',
    render: () => {
      const goyaImages = Array.from({ length: 7 }, (_, i) => {
        const num = String(i + 1).padStart(2, '0'); // pad 1 → 01
        return `/images/pattaya/goya/goya-${num}.jpg`;
      });

      return (
        <PortraitReel
          title="Blurry Photos"
          images={goyaImages}
          caption={`These were some of my first night-time photos from Pattaya. Most were blurry—I was still shaken by the place, and couldn’t get close to my subjects. But looking back, there’s something in them I’ve come to like. The twisted laughter, elongated eyes, the strange, contorted energy in some of the faces—it reminds me of Goya. I know that sounds pretentious, but there’s a bit of madness here, a kind of echo of his haunted figures. All taken in December 2023, except the last one—March 2024.`}
        />
      );
    }
  },

  {
    type: 'text',
    content: `Eventually, my vacation ended. I flew back to Sweden—back to the grey skies and quiet desperation of Stockholm. I was still buzzing from what I’d shot. My teacher said I’d made strong work. But I knew I didn’t have much. A few decent frames. A few lucky moments. Still, I made a small album on my phone of what I thought were the best. I showed it to friends. They were amazed. A photographer I admired praised what he saw. Their reactions made me want to return. To go deeper.

    But life in Stockholm was far from great. Work was draining. Money was tight. The thought of enduring another few months of Swedish winter filled me with dread.

    Then in February 2024, I got fired—with severance. And honestly, I couldn’t have been happier.

    I rented out my tiny bedsit, which more or less covered the mortgage, and booked a one-way ticket to Singapore. My teacher joined me there. We walked, took pictures, ate well. After a few days of sightseeing, we returned to Pattaya.`
  },
  {
    type: 'image',
    src: '/images/pattaya/soi6-11.jpg',
    caption: 'Flower-selling girls putting on makeup. April 2024.'
  },
  {
    type: 'text',
    content: `The plan was simple: a short stay, then on to other countries. I spent a week in Pattaya that March. This time, my teacher didn’t join me in Soi 6. He said that street drained him. I understood. It wasn’t light work. We continued on to the Philippines and Taiwan—two of the few countries in Asia my teacher hadn’t yet visited. I’d been to the Philippines before and helped translate here and there. But before long, we were back in Pattaya, and by mid-April, he returned to Sweden.

    What I hadn’t planned for was the motorcycle accident. It happened just before we left for Manila—another rider crashed into me, and I twisted my ankle badly. I still feel it sometimes. We continued the trip, but it was painful to walk. When we returned to Pattaya in April, the pain lingered. I stayed home some days. But others, I pushed through. I figured I’d keep photographing for the project while I still had the energy, and start traveling once I needed space. A win-win. I spent another three weeks in Pattaya that April, survived Songkran, and when I finally got tired, I left.

    Cambodia was next. I went to see Angkor Wat. It was supposed to be just a visa run—and a much-needed breather from Pattaya—but I missed being on the road, and in more ordinary places. So I kept going. I forced myself to walk everywhere. The pain in my ankle began to subside as the days went on. I took many photos, as usual. I crossed into Vietnam by land, traveling from the south all the way to the north. Then into Laos. I’m grateful for that getaway.`
  },
  {
    type: 'image',
    src: '/images/pattaya/soi6-12.jpg',
    caption: 'A short getaway. December 2023.',
  },
  {
    type: 'text',
    content: `That’s when I got the news—my mother had been diagnosed with cancer back home in Turkey. I cut the trip short and began making my way back to Pattaya, trying to figure out how to return home.

    On the way, I stopped in Khon Kaen and Udon Thani—two cities in the Isan region where many of the girls I’d met in Pattaya had come from. I had hoped to stay longer, to meet people, to see the towns and villages they had described to me. I wanted to understand what made them leave. I wanted to photograph what I found. But I didn’t have time. I passed through quickly, knowing these would be my final days photographing Soi 6.

    I spent my remaining days in June—right up until my flight—on Soi 6. A few hours every day, moving slower but shooting more deliberately. I gave it everything I had, trying to make each frame count. Some of my favorite photos—most of the ones I ended up picking—came from those final days.

    It was also then that I noticed a shift. More Western bar managers had appeared since I’d returned from my trip. They noticed me too. A few came up to me, trying to intimidate me. Some threatened me outright—speaking in British or American accents, telling me not to take photos if I liked my face the way it was. The space felt tighter. And maybe that meant it was time to stop.

    I remember praying for rain. I had never seen Soi 6 in the rain, and I longed for that different kind of light, that different kind of mood. It came—just once. And I went out with my camera. But by then, I’d already exhausted what little energy I had left. That was it.`
  },
  {
    type: 'image',
    src: '/images/pattaya/soi6-13.jpg',
    caption: 'An international couple. December 2023.',
  },
  {
    type: 'text',
    content: `Afterwards, I flew to Turkey and went straight to my parents. Cancer is never easy, but my mom was doing better than I feared. I was relieved.

    That summer, I took more time off and did something I had dreamed of for years: I cycled from Sweden to Turkey. A journey I’d made many times before—by plane, in a few hours—but never like this. My youth felt like it was slipping, and the severance money wasn’t gone yet. I figured if not now, then when?

    I convinced my parents, packed light, and started pedaling from Sweden in late August. I crossed countries slowly, watching autumn unfold one European country at a time, and arrived home just before Christmas—though in Turkey, that’s just another day.

    The ride was long, beautiful, and not without hardship. But it recharged me. I met wonderful people. I laughed a lot. It gave me the energy I needed to return to the Pattaya photos—months later, finally ready to sit with them. To edit. To remember. To really look.

    My hard drive—where I kept the original files—broke. I neither have the money nor know the right person to attempt a proper recovery. Luckily, I do have backups from before June, and low-resolution JPEG exports from that final week. They’re only good enough to print at A5—but just fine for sharing online.

    I don’t know what else to do with these photos.`
  },
  {
    type: 'image',
    src: '/images/pattaya/soi6-14.jpg',
    caption: 'Breaking the fourth wall. April 2024.',
  },
  {
    type: 'text',
    content: `Pattaya is not a mystery. It’s a system. It’s built on mobility, memory, exchange. Some people come for a week. Some never leave. Many of the women I met were supporting families. Most of the men were running from something. And me? I came back with photographs—fragments of a place that’s always moving, always just out of frame.

    Now I don’t know what these photos are for. Will this system ever change? The men won’t stop being rich, and they won’t stop wanting these women. The women won’t stop being poor, and they won’t stop wanting to make money. The Thai government looks the other way, as long as the economy moves and the tourists keep coming.

    Sometimes I wonder if I documented something or just circled around it. But I kept walking. I kept looking. And these photos—what’s left of them—are what I brought back.

    And still—through all of it—photography brought me joy. Maybe that’s the most complicated part.`
  },
  {
    type: 'component',
    render: () => <Soi6Poem />,
  },
  {
    type: 'image',
    src: '/images/pattaya/soi6-15.jpg',
    alt: 'Closing image from Soi 6',
    caption: 'Dog with a bottle. December 2023.',
  },
];

export default essayContent;