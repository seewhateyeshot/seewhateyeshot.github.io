import React from 'react';
import { Link } from 'react-router-dom';
import FootnoteButton from '../components/FootnoteButton';
import PortraitReel from '../components/PortraitReel';
import Soi6Poem from '../components/Soi6Poem';

const essayContent = [
  {
    type: 'text',
    content: `I first arrived in Pattaya in December 2023. My photography teacher—a close friend—had arranged a place for me to stay. It was partly an escape from the Swedish winter, partly wanderlust. I’d heard of Pattaya before—maybe from him, maybe just from its reputation. Either way, I was curious. I had three weeks of vacation from my software engineering job, which was draining the life out of me, and I decided to take it all.`
  },
  {
    type: 'component',
    render: () => (
      <div className="max-w-2xl mx-auto px-4">
        <p className="essay-text">
          I had just started photography that summer. My teacher, to whom I inevitably refer a lot and pay a proper homage in{" "}
          <Link to="/blog/starting-to-shoot" className="underline text-blue-600 hover:text-blue-800">
            this blog post
          </Link>
          , mentored me with informal lessons and themed assignments like nightlife, dreams, and taxi drivers. His homework taught me how to move around with a camera, approach strangers, and "shoot with my heart, not my brain".
        </p>
      </div>
    )
  },
  {
    type: 'text',
    content: `But by September, our informal kitchen classes came to an end. It was time for my teacher to return to Pattaya, Thailand, where he spent his winters. He wasn't the typical sex tourist—rather, staying in a friend’s apartment in Thailand rent-free made financial sense, and so did escaping another Swedish winter. In fact, he had been talking about photographing Pattaya long before I even picked up a camera, though by now, I think he’s too disinterested to photograph and publish another book.

    He gave me a key to his apartment though and I spent long hours in his home library. He owns more than a thousand books—mostly doorstops, many by masters, quite a few signed to his name. I’d leaf through monographs, street photography collections, retrospective volumes. I cataloged them all for him, and helped sell a few in his absence, hoping it might help his finances.

    That winter, Stockholm felt lifeless. Colder and darker than usual. My job was draining me. I was buried under my mortgage and rising interest rates. I could barely afford to do the things I used to. I remember spending what little remained of my salary on a few screenings at the film festival, then scraping by on potatoes and lentils for the rest of the month. Street photography no longer gave me the same spark it had in the summer. Maybe it’s a weak excuse, but I still think Stockholm isn’t the most exciting place for photography—too clean, too quiet, too conforming.

    We stayed in touch often. When I asked him about visiting him in Thailand, he said I could come. He had a place for me to stay—the vacant unit next door was his friend’s too. I asked if three weeks, all I could take off from work, would be too long. He said, “You can stay here rent-free for as long as you want.”`
  },
  {
    type: 'image',
    src: '/images/pattaya/soi6-02.jpg',
    caption: 'The customer is always welcome. June 2024.'
  },
  {
    type: 'text',
    content: `He welcomed me at the bus station in Pattaya, took me to the flat, handed me a key, and let me rest. The next morning, despite the jetlag, I fell into his rhythm: gym, breakfast, a walk along Beach Road, dinner at the same family-run restaurant every evening.

    I had broken my camera back in Stockholm just before the trip. I worried I wouldn’t be able to photograph anything—especially after all the hype about Pattaya’s sex tourism—but he lent me his: the older Fujifilm X-Pro1 I had practiced with during the summer. We shared the same 18mm f/2.0 lens. The setup was lightweight, unimposing. Just wide enough for the kind of close, intimate frames I wanted. Not the best in low light, but somehow the softness suited the city.`
  },
  {
    type: 'component',
    render:
      () => (
        <div className="max-w-2xl mx-auto px-4">
          <p className="essay-text">
            I was hungry for all of it. Everything was new. At first, I photographed whatever caught my eye—stray dogs, food carts, fish markets, signs I couldn’t read. I was especially drawn to international couples. Whenever I saw an older Western man—what locals call a <i>farang</i>—paired with a young, striking Thai woman—a common sight in Pattaya—I felt a strong urge to photograph it. The contrast spoke volumes.
          </p>
        </div>
      )
  },
  {
    type: 'image',
    src: '/images/pattaya/soi6-03.jpg',
    caption: 'Man with a bar-fined girl. December 2023.'
  },
  {
    type: 'text',
    content: `In my first days, whenever I saw such a pair, I had an instinct to take a photo. And I thought about a girl I once went out with. She had a Swedish father and a Filipina mother. She looked Asian, with little to give her heritage away except for her broad frame and tall height.

    She once told me she had stopped walking hand in hand with her father when she was barely a teenager—people would mistake them for a mail-order couple, and her dad for her husband. I remember how bizarre it sounded, and how deeply it must have hurt. In Sweden, growing up not looking “ethnically Swedish” already makes life hard enough. In the Philippines, she said, locals would sometimes shout at them in the street, accusing her of betraying her country by marrying an old white man—who was, in fact, her father.

    I thought about that story often in Pattaya. I caught myself hoping, foolishly, that many of the older Western men and young Thai women I saw were actually fathers and daughters. That maybe there was a happier story hidden in the pairings. Even when I saw a very young Thai woman—perhaps even underage—sandwiched between two older Western men on a motorcycle at a traffic light, even though disgust rose in me, I tried to write a kinder story in my head: maybe a father, an uncle, a niece.

    Still, I instinctively took the photo. It’s a photo that haunts me—her distressed expression frozen mid-glance. One I will not share. I didn’t ask permission, and they never noticed me. And after all the time I spent in Pattaya, I know better now. They weren’t family.`
  },
  {
    type: 'image',
    src: '/images/pattaya/soi6-19.jpg',
    caption: 'Children were often around. March 2024.',
  },
  {
    type: 'text',
    content: `My teacher spoke quite a bit of Thai and started teaching me from day one. “Sawatdee khrap” for hello. “Sabai dee mai?” for how are you. “Tai ruup dai mai?” to ask for a photo. He’d already made a long list of phrases on his phone, transliterated into Turkish—sawatdee khrap became savadikap, easier for me to read and remember. I’d review them before dinner. He was good with people—charming, quick to joke, unafraid to make a fool of himself if it helped build rapport. To a mother holding her toddler, he’d say “Nà-làk mâak mâak” (น่ารักมากมาก), meaning very cute. If the heat was unbearable, he’d complain loudly to a stranger: “Róon!” One night, when it dropped to 22 degrees and locals pulled on hoodies, he hugged himself dramatically and shrieked “Namkeng! Namkeng!”—ice—rubbing his arms like he was freezing. Maybe he didn’t know the word for “cold.” But it sure was entertaining.

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

    On my first night, after dinner, we went for a walk down Beach Road—something that quickly became our daily ritual. Halfway along, we reached the entrance to the notorious Walking Street. My teacher led me in.

    The chaos hit immediately. Crowds of tourists clogged the narrow street. Clubs blaring different music from every side, the air thick with smoke and neon. Scantily dressed women rushed around in every direction. Vendors thrust laminated flyers into my face—some with explicit, graphic images advertising sex shows. Security guards stood outside every club, sizing everyone up. It was overwhelming. I felt like I was in the eye of a neon storm, with no way to think clearly, only try to make sense of it.`
  },
  {
    type: 'image',
    src: '/images/pattaya/soi6-05.jpg',
    caption: 'A usual Soi-6 scene. April 2024.'
  },
  {
    type: 'text',
    content: `That same night, we returned to Beach Road. This was another kind of madness. Russian families—on seemingly perpetual vacation since the war in Ukraine—strolled past scenes of negotiation, where groups of Indian men huddled around a single freelancer. I assumed it was for group engagements. I’d see the same scenes again and again.

    We passed street vendors selling ready-to-smoke joints, Viagra substitutes, and children’s toys—often side by side. Children ran through the crowds. Thousands of people moved past, each one a character of their own.

    My teacher said he wanted to show me another bar street. He led me to Soi 6.

    It was a different kind of overwhelming. The bars were open-air, low to the ground, close enough to touch. Bar girls lined the fronts, outnumbering everyone else ten to one. Flickering neon bounced off high heels and bare skin. Above the bars, TVs played European football matches or old Western music videos—Guns N’ Roses, the Eagles, Aerosmith. Different songs blasted from every direction, merging into a deafening, shapeless roar.

    Older men clutched beers wrapped in foam sleeves, trying and failing to keep them cold in the humid night air.

    As we walked, women called out from every side: “Sexy man,” “Handsome man,” “Where you go?”—basic English, shouted with practiced ease. But it wasn’t just words. Every few meters, a girl would reach out—grabbing an arm, a waist, sometimes even the groin—trying to physically pull us inside.`
  },
  {
    type: 'image',
    src: 'images/pattaya/soi6-34.jpg',
    caption: 'The Goya smile. December 2023.'
  },
  {
    type: 'text',

    content: `Then on that first night again, just to test my limits, he took me to a massive brothel lounge where women lined the walls, each with a number and a color code. The colors marked the price. I wasn’t allowed in with my camera—and even without it, I noticed certain guests, especially South Asian men, being delayed or turned away. On our way out, we stopped to chat with a few Indian tourists lingering at the entrance. I hadn't seen anything like it before.`
  },
  // {
  //   type: 'component',
  //   render: () => {
  //     const beachRoadImages = Array.from({ length: 18 }, (_, i) => {
  //       const num = String(i + 1).padStart(2, '0'); // pad 1 → 01
  //       return `/images/pattaya/beach_road/beach_road-${num}.jpg`;
  //     });

  //     return <PortraitReel title="Beach Road Photos" images={beachRoadImages} caption="Before I had a clear focus on Soi 6, I collected photos during our twice-daily walks on the Beach Road. December 2023." />;
  //   }
  // },
  {
    type: 'text',
    content: `We quickly decided that Soi 6 was the most photographable street—narrow, compact, alive. There were motorcycles and the occasional car, but it was walkable. Most people didn’t mind the camera; many vloggers wandered around with selfie sticks already. It was different from Walking Street, where “No Photo” signs hung everywhere, bouncers waved laser pointers at any raised lens, and most of the action was hidden behind closed doors. I didn't go back to the Walking Street again, I wasn't interested in where I couldn't photograph. My teacher told me that when he had first photographed Pattaya, Soi 6 had been more like Walking Street: guarded, closed off, hostile to cameras. But after the pandemic, something had shifted. There were no bouncers anymore. No closed doors. The bars were open to the street. The energy was immediate.`
  },
  {
    type: 'image',
    src: 'images/pattaya/soi6-59.jpg',
    caption: 'Allure of the open bar. December 2023.',
  },
  {
    type: 'text',
    content: `Apart from a trip to Chiang Mai and Bangkok for a few days, for the rest of my stay, even though I continued taking photos wherever I was, I returned to Soi 6 almost every day as part of our Beach Road walk—sometimes twice a day, once in the afternoon and again at night. My teacher usually came with me, offering tips on how to interact. He’d watch both me and the street, and later at home, he’d offer critique—on my presence, what I did or didn’t do.

    I was starting to learn the rhythm: when the music started, when the bar stools were wiped down, when the girls stirred awake and had breakfast right where they’d work later. Later in the day, before customers started rolling in, they’d often sit idly at the bar, eyes glued to their smartphones—scrolling Instagram, dancing for TikTok, replying to messages. It was a digital lull, a quiet prelude to the chaos ahead. When the men began drifting in. Every hour had a different texture. In the afternoon, the street felt softer. There was space. By evening, it grew louder, more compressed, more electric.

    Sometimes, when the constant commotion of Soi 6 grew overwhelming, I would slip into the alley that ran parallel to it—Soi 6/1. It was narrower, darker, and quieter. The back sides of the bars opened onto it: kitchens, trash bins, stacked crates, washing lines. It wasn’t meant for show.`
  },
  {
    type: 'component',
    render: () => (
      <div className="max-w-2xl mx-auto px-4">
        <p className="essay-text">
          He also had a few Thai expressions he liked to throw at me, half-mocking, half-endearing.
          His favorite was <i>tin-ton farang</i> (ติ๊นต๊องฝรั่ง)—crazy foreigner.
          He’d call me that whenever I was too enthusiastic, acting silly, or trying too hard to charm someone.
          Another was <i>mao</i> (เมา), which means drunk.
          Sometimes, while I was crouched down taking portraits on Soi 6, he’d shout <i>tin-ton farang</i>!
          from across the street, or tease me with <i>maomao</i>! It always cracked up the bar girls nearby.
          Moments like those broke the ice. They helped soften the scene, loosen everyone’s guard.
        </p>
      </div>
    )
  },
  {
    type: 'text',
    content: `I started walking Soi 6/1 often, partly to catch my breath, partly to find more natural moments—away from the endless calls of “handsome man” and the engineered performances on the main street. It was there that I quickly learned something else: Soi 6/1 was where many of the kathoeys—Thai trans women—waited for customers.

    In the shadows of the bigger show, another reality unfolded. It was quieter, less aggressive, more vulnerable somehow. And it taught me that Pattaya’s economy of desire had many layers—not all of them equally seen.`
  },
  {
    type: 'image',
    src: '/images/pattaya/soi6-41.jpg',
    caption: 'The only bar accessible from Soi 6/1, employing trans sex workers. April 2024.'
  },
  {
    type: 'text',
    content: `I began to recognize faces. Some bar girls would wave. A few started calling me “photo man.” They’d pull me aside from the crowd, pose, and ask me to send the pictures later. I started exchanging contact info—Instagram, Line, WhatsApp. Sometimes I’d get a message within ten minutes: “Where is my pic???” At the end of each day, back at home, I made sure to send everyone their photos. It became part of my nightly ritual—reviewing the day’s shots, selecting a few to show my teacher for critique, and sending the ones I promised to the girls. Occasionally, I’d even spot my photos posted on their profiles, and feel a quiet satisfaction.

    To keep up, I started a note on my phone titled “Soi 6 Names,” where I jotted down each name after taking a photo—along with the bar where she worked, the date we met, and, if I had it, her contact information. I reviewed it often, matching names to faces. The next time I crossed paths with one of them, I’d try to surprise her by calling her by name. It didn’t hurt. It made most interactions warmer, easier—and sometimes even opened the door to longer conversations.`
  },
  {
    type: 'image',
    src: 'images/pattaya/soi6-06.jpg',
    caption: 'Makeup check before work. June 2024.'
  },
  {
    type: 'text',
    content: `Carrying a camera changes the rules of engagement. I felt I had a duty to the women to ask for their permission before taking a photo. A few times I couldn’t—like when photographing a big scene with dozens of people and only half a heartbeat to catch it—but otherwise, I made sure to ask. Some didn’t want to be seen. You could tell even without words: a hand raised to cover their face before I even lifted my camera. I never bothered them. Sometimes, if I took a photo without asking first, I would go up afterward, show it to them, and make sure they were okay with it.

Later, I would learn why some women were so cautious. Many had boyfriends, significant others, husbands, or family back in their hometown villages—people who didn’t know they were working in Pattaya. Or if they knew, they believed what they had been told: that she worked at a restaurant, a hotel, or a 7-Eleven. A photograph could unravel a carefully maintained story. And sometimes, it was simply anxiety—a reflex born from living between two worlds.

While I was still learning the ropes, it was different with the men—especially when they were rude or aggressive toward the women. I didn’t feel the same obligation to ask them. But I’ll get to that later.`
  },
  {
    type: 'image',
    src: '/images/pattaya/soi6-07.jpg',
    caption: 'A usual night at work. April 2024.'
  },
  {
    type: 'component',
    render: () => (
      <div className="max-w-2xl mx-auto px-4">
        <p className="essay-text">
          Sometimes I wasn’t just “photo man”—I was a potential customer, too. Like most men on Soi 6, I’d sometimes get grabbed by the wrist and pulled toward a bar for a drink. I learned to carry myself lightly in those situations—almost like a playful little boy—smiling, joking, gently saying no. Raising my hands in a respectful <i>namaste</i> and saying, “Nong kap, mai ao kap”—sister, I don’t want—was disarming. They would smile back, salute me, and let me go.
        </p>
      </div>
    )
  },
  {
    type: 'text',
    content: `But as I built stronger rapport with some of the workers, I started accepting their offers for a drink. Sometimes I even invited them. It was usually a small beer for me, and a “lady drink” for them—typically a non-alcoholic juice priced at a premium. I asked around: from a 150-baht lady drink, a woman might keep 30 to 50 baht. The rest went to the bar. What a business.

    Sharing a drink gave me a reason to pause—to cool off from the heat and the constant movement—and more importantly, it gave space for conversations, and for more honest photographs.`
  },
  {
    type: 'image',
    src: '/images/pattaya/soi6-31.jpg',
    caption: 'In such a bar. March 2024.'
  },
  {
    type: 'text',
    content: `Of course, part of me felt uneasy. I was “buying” time, and by extension, buying the photos. I couldn’t help but feel strange about it—here I was, a six-months-into-it, barely-budding photographer, buying drinks for sex workers. But when I managed to take a photograph that felt real, one that captured something more than a transaction, it somehow made up for it.

    Some women spoke better English. A few had once been married to Western men. One had lived in Sweden with a Swedish husband—but it hadn’t worked out. She didn’t want to talk about him. Instead, she showed me photos from her time there—the heavy food she didn’t miss, the IKEA-catalog house she didn’t love—and shivered dramatically at the memory of the cold. Another woman told me she had studied in Bangkok and “freelanced” during university to make ends meet. She was making far more in Pattaya now.

    But for most, when I asked where they came from, the answer was always the same: Isan. Isan. Isan. Thailand’s northeast. A rice-farming region. Poor. Hard to leave. After my first few conversations, I went home and started watching YouTube documentaries about it.

    They spoke about their children openly and without shame. In fact, they lit up when I asked. There was a sincere, almost childlike happiness in their voices, in their eyes. They would scroll through photos, laughing, proud. One woman tapped her phone’s lock screen and beamed: “My baby—two year!” Then grinned at me like she’d pulled off a magic trick.

    I’d ask when they last saw their children. It was usually months. Maybe that was a question better left alone. But I cared. I kept wondering about it. I kept trying to make sense of the system that had brought them here—the same system that pulled in millions of men every year.`
  },
  {
    type: 'component',
    render: () => {
      const portraitImages = Array.from({ length: 29 }, (_, i) => {
        const num = String(i + 1).padStart(2, '0'); // pad 1 → 01
        return `/images/pattaya/portraits/soi6_portrait-${num}.jpg`;
      });

      return <PortraitReel title="Friends from Soi 6" images={portraitImages} caption="Taken across March, April, and June 2024." />;
    }
  },
  {
    type: 'text',
    content: `Most of the attention, naturally, falls on the women. But the men are just as much a part of the street’s rhythm. They bring the money. They arrived from all over—Europe, the U.S., Australia, India, China, Japan, Korea. Some walked in groups, loud and confident. Others drifted alone, slowly, trying not to be noticed even as they scanned every bar.

    On Soi 6, there were the usual types: solo men in polo shirts with tanned arms, groups of Brits in football jerseys, retired men with walking sticks, a few younger travelers holding beers, looking amazed and slightly lost at the same time. People of all colors, languages, religions.`
  },
  {
    type: 'component',
    render: () => (
      <div className="max-w-2xl mx-auto px-4">
        <p className="essay-text">
          At the call of “sexy man, handsome man”—shouted with cheerful repetition—some men beamed like schoolboys, delighted at the attention. Others avoided eye contact, unsure how to respond. But for a moment, even the most average man could feel wanted, desirable—even if only because he had cash to spend. I began to suspect that for many, this was the real allure. Not just the promise of <i>boom boom</i>—as the girls referred to sex—, but the warm illusion of being chosen.
        </p>
      </div>
    )
  },
  {
    type: 'text',
    content: `At first, I judged them—harshly. I wanted to photograph them in a way that exposed something. I wanted to make them look guilty. A few times, I did. One night, out walking along Beach Road, I caught an old man mid-negotiation—his hand resting on a girl’s back, whispering something into her ear. He had a walking stick. He was old enough to be her great-grandfather. I got pissed off. I lifted my camera and took a shot—point-blank, face to face. He gave me a half-hearted chase, swinging his walking stick and shouting, “Idiot! Come back!” in a thick German accent. I didn’t stop. I didn’t even look back.

    Later at home, my teacher asked, “What were you trying to prove?”`
  },
  {
    type: 'image',
    src: '/images/pattaya/soi6-08.jpg',
    caption: 'There must be some way out of here. June 2024.'
  },
  {
    type: 'text',
    content: `He said I had picked on that man because he was old and weak. That I bullied him. And he was right—I wouldn’t have dared if it had been someone like The Rock. Or a group of intimidating young men. He reminded me that good photography doesn’t humiliate. It doesn’t create enmity. It observes, reflects, connects. He told me I needed to try to empathize—not just with the sex workers, but with the men too. That moment stayed with me.

    It’s something I’m still learning from him. As he once put it—in Turkish—“Biz insanları ayrıştırmak için çabalamıyoruz, kaynaştırmak için uğraşıyoruz.” We’re not trying to divide people, but to bring them together. There’s plenty we could disagree on, plenty that could pull us apart. But instead, we meet halfway. We find common ground, and choose to look past each other’s flaws.

    That mindset helped me talk to all kinds of people on the street—especially the tourists. If they were Swedish, I’d say, “Bra, jag pratar en liten grann svenska också.” I could hold my own with Norwegians, and catch a word or two from the Danes. If they were French, I’d mention that I religiously practiced Duolingo every day. If they were Welsh, I’d say I used to work with a guy from Caerphilly. Japanese? I had a quote from my favorite anime ready to go. Sometimes I played the like-minded tourist.

    Sometimes I didn’t need to say much at all—just mentioning I was Turkish was enough to spark a conversation. “That’s where I got my hair transplant,” they’d say, or, “I flew there for my teeth.” Cheap and professional, they’d grin, showing their pearly white smiles.`
  },
  {
    type: 'image',
    src: '/images/pattaya/soi6-09.jpg',
    caption: 'Yankees that have done several medical Turkish trips. June 2024.'
  },
  {
    type: 'text',
    content: `If they asked about my camera, I told them straight: I was a hobby photographer, documenting the street. Some didn’t mind at all. Some even bought me a beer. Some asked to pose. Others got serious—one said, “I’ve got a wife and kids back home, mate.” Another just shook his head and walked away.

    I stopped trying to capture shame. Instead, I tried to photograph the reality of it—not the scandal, but the quiet ordinariness. Because for them, that’s what it was: a drink, a smile, a bar stool, a question, an agreement. Nothing illegal. Nothing hidden. Just something you’re not supposed to look at too closely.`
  },
  {
    type: 'image',
    src: '/images/pattaya/soi6-92.jpg',
    caption: 'Man with a shawl. December 2023.'
  },
  {
    type: 'text',
    content: `Once, a huge guy—easily close to two meters tall—appeared out of nowhere and slammed his arm onto my back, shouting, “What’s up?” I was startled for a moment, but quickly realized he was simply high. He was English. We exchanged a few words, I took a photo of him, and then, just as suddenly, he spotted a bar girl. Without hesitation, he wrapped a long shawl he was carrying around her shoulders and pulled her away. She didn’t resist. She just went with him.

    At the time, I didn’t even know about the bar-fine system—how a customer pays a fee, usually between 1,500 and 2,000 baht, to the bar to “take” a woman out. All I knew was that what I had witnessed felt absurd. And it still does—unless I somehow missed him paying.

    I liked the story more than the photo I got. The girl he pulled away kept smiling theatrically for the camera. Even stranger: later that same night, I ran into the Englishman again. He didn’t recognize me at all. He just walked past without a second glance.

    As positive as I tried to keep these encounters with the men, and even though I managed to photograph many of them, I never built any real connection. Each meeting remained exactly that—a single, passing encounter.`
  },
  {
    type: 'image',
    src: '/images/pattaya/soi6-13.jpg',
    caption: 'An international couple. December 2023.',
  },
  {
    type: 'component',
    render: () => (
      <div className="max-w-2xl mx-auto px-4">
        <p className="essay-text">
          The more I walked the street, the more I began to notice the system behind the surface.
          Every bar followed a routine.
          The girls would arrive around early afternoon—sometimes still in their pajamas, sometimes already dressed for the shift.
          A few lived upstairs, I'd seen a few I knew in the balcony hanging laundry and gave me a wave before. Others came by motorbike or shared ride.
          Some grabbed a quick bowl of noodle soup from the carts parked outside for breakfast, then slipped into the bar, disappearing behind a curtain to change.
          All this would unravel under the supervision of the <em>mamasan</em>—an older Thai woman—who runs the daily operations at the bar
          recruiting workers, managing the floor, and ensuring everyone stays in character.
        </p>
      </div>
    )
  },
  {
    type: 'text',
    content: `Each day had a costume. Nurse. Schoolgirl. French maid. Police. FC Barcelona jersey, cropped just above the ribs. Matching bikinis for the lot. The outfits weren’t for fun—they were assigned by the bar. I’d sometimes see the mamasan taking a lineup photo just before opening.`
  },
  {
    type: 'image',
    src: '/images/pattaya/soi6-10.jpg',
    caption: 'Mamasan taking the roll call. March 2024.',
  },
  {
    type: 'text',
    content: `Later, I found one of the Telegram channels where those photos were uploaded—subscribed to by thousands. Each post showed the girls in matching outfits, standing against the same wall, tagged with names, short descriptions, and a bar logo. The lighting was identical. The framing never changed. You could scroll through them like a food delivery app.`
  },
  {
    type: 'text',
    content: `Some nights, if a girl was celebrating her birthday, you could spot it instantly: she’d be draped in colorful garlands of Thai baht banknotes—sometimes hundreds of them—pinned to a sash or taped to her dress. Each note, decorated with the King of Thailand’s portrait, fluttered as she moved. It was a visual symbol of both celebration and commerce.`
  },
  {
    type: 'component',
    render: () => (
      <div className="max-w-2xl mx-auto px-4">
        <p className="essay-text">
          These birthdays weren’t private affairs. Bars promoted them openly on Telegram, often with a glamorous portrait of the birthday girl. Messages like, <code className="text-sm text-gray-600">“It’s Yoshi’s and Nam’s birthday party today! Come and make great memories with us at Toy Box Pattaya Soi 6, from 4 PM till 2 AM 🎉🎂🍻🥃🍾👩🏻🎶”</code><FootnoteButton number={1} note={"From an announcement on 17 April 2025, posted in the \"We Love Soi 6\" Telegram channel with 8,032 subscribers as of 30 April 2025."} /> would pop up daily—personal milestones turned into public invitations to spend.
        </p>
      </div>
    )
  },
  {
    type: 'image',
    src: 'images/pattaya/soi6-80.jpg',
    caption: 'Birthday girl. June 2024.',
  },
  {
    type: 'text',
    content: `Eventually, my vacation ended. I flew back to Sweden—back to the grey skies and quiet desperation of Stockholm. I was still buzzing from what I’d shot. My teacher said I’d made strong work. But I knew the truth: I didn’t have much. A few decent frames. A few lucky moments.

    Still, I made a small album on my phone of what I thought were the best. I showed it to a few friends. They were astonished. A photographer I look up to told me I should get them published—easy for him to say, but I was flattered. Their reactions made me want to return. To go deeper.

    But life in Stockholm was far from great. Work was still draining me. Money was tight. The thought of enduring another few months of Swedish winter filled me with dread. I started looking for another job, but the idea of jumping straight into another software engineering role without a real break felt unbearable. I had no energy left.

    Then in February 2024, my manager set up a meeting. I got fired—part of a global layoff that affected thousands of people across the company. And honestly, I couldn’t have been happier. At least for myself.

    I rented out my Stockholm bedsit, which more or less covered the mortgage, and booked a one-way ticket to Singapore. My teacher joined me there. We walked, took pictures, ate well. After a few days of sightseeing, we returned to Pattaya. The plan was to take photos, travel somewhere new in Asia, return to our base in Pattaya and repeat.`
  },
  {
    type: 'image',
    src: '/images/pattaya/soi6-11.jpg',
    caption: 'Flower-selling girls putting on makeup. April 2024.'
  },
  {
    type: 'text',
    content: `I spent a week in Pattaya that March. This time, my teacher didn’t join me in Soi 6. He said that street drained him. I understood. It wasn’t light work. We continued on to the Philippines and Taiwan—two of the few countries in Asia my teacher hadn’t yet visited. I’d been to the Philippines before and helped translate here and there and assumed the tour guide's mantle. A few days after the earthquake in Taiwan we were back in our base. And soon later my teacher returned to Stockholm. Now I was alone.

    What I hadn’t planned for was a motorcycle accident. It happened just before we left for Manila—another rider crashed into me, and I twisted my ankle badly. I still feel it at the time of writing this, 13 months after the crash and I still haven't managed to see a doctor about it, which is a long story in itself. We, anyways, continued the trip, but my ankle certainly didn't make it easier. After a few weeks of touristing, we returned to Pattaya. During our travels—whether in Singapore, Davao City, or Cebu City—we stumbled upon scenes that echoed Pattaya’s nightlife and sex work culture, though always on a smaller scale. Pattaya remained unmatched in scale, openness, and intensity. And I wasn't ready to deal with that intensity when we returned to Pattaya in April, the pain lingered and I just didn't mentally have the energy to put myself out there. I stayed home some days. But later on, I pushed through. I figured I’d keep photographing for the project while I still had the energy, and start traveling once I needed space. A win-win. I spent another three weeks in Pattaya that April.`
  },
  {
    type: 'component',
    render: () => (
      <div className="max-w-2xl mx-auto px-4">
        <p className="essay-text">
          I went out a couple of days during Songkran with my back-up camera, an OM System TG-7. Waterproof just as it needed to be.
          I took quite a few photos then, some of which I put up{" "}
          <Link to="/brief/songkran" className="underline text-blue-600 hover:text-blue-800">
            here
          </Link>
          .
        </p>
      </div>
    )
  },
  {
    type: 'text',
    content: `After Songkran, once my ankle had started to heal, I spent more time sitting down for drinks, talking with the women. Conversations usually happened over a lady drink and a smartphone—usually an expensive iPhone—using Google Translate. I’d inadvertently see the translations pop up, along with dozens of other notifications sliding in from the top of their screens: usually messages from foreign men, and usually obscene. It was a strange window into their daily life—something halfway between public and private.

Sometimes, when a woman proudly showed me photos of her children, I couldn’t help but notice what else was on the screen. In the same photo gallery, right next to pictures of smiling toddlers, there would be dozens of selfies taken with different farangs. It was jarring. Before the night was over, they often asked to take a selfie with me too—adding me, I guess, to that same ongoing gallery.

Phone conversations could also get funny. Over these broken, phone-assisted chats, I was asked more than once if I had a boyfriend. At first, I thought it was just teasing, but later I learned that the Thai word they used—แฟน (faen)—doesn’t specify gender. It just means “romantic partner.”`
  },
  {
    type: 'image',
    src: '/images/pattaya/soi6-32.jpg',
    caption: 'There is too much confusion. June 2024.'
  },
  {
    type: 'text',
    content: ``
  },
  {
    type: 'component',
    render: () => (
      <div className="max-w-2xl mx-auto px-4">
        <p className="essay-text">
          Cambodia was next. I went to see Angkor Wat.
          Originally, it was supposed to be just a visa run—but it turned into a much-needed breather from Pattaya.
          I missed being on the road, in more ordinary places, far from the world’s sex tourism capital.
          So I kept going. I forced myself to walk everywhere.
          Slowly, the pain in my ankle started to subside.
          I took photos constantly, slipping into places I doubt many tourists ever did.
          I went to Battambang,
          Cardamom Mountains,
          Khemarak Phoumin,
          Pursat,
          Sihanoukville from where I share some photos{" "}
          <Link to="/brief/sihanoukville" className="underline text-blue-600 hover:text-blue-800">
            here
          </Link>
          ,
          Koh Rong where I even took a run along the white beach,
          and once French colonial city Kampot and eventually to the capital Phnom Penh.
        </p>
        <p className="essay-text">
          My first night in Phnom Penh, I started noticing familiar signs—ads from the Nightwish Group, saying they own more than 30 bars in Pattaya.
          I was immediately alerted.
          The ad was plastered on the side of a passing tuk-tuk and it promoted that they <i>finally</i> opened a bar in Phnom Penh too.
          There I already noticed I was on a red-light street of sorts.
          Not as brazen as Pattaya's any, but I noticed young women idling outside bars on their smartphones.
          A sight not too far off that of Soi 6's bars.
          It must have been the same machinery, just smaller.
          Built on the same logic of exploitation and now one bar by the same people that exploit Thai sex workers in Pattaya.
          It made my stomach turn.
          I remember immediately texting my teacher who was back in Stockholm.
          He said to be careful, and not be too rash to take photos.
        </p>
      </div>
    )
  },
  {
    type: 'component',


  },
  {
    type: 'image',
    src: '/images/pattaya/cambodia.jpg',
    caption: 'At a Phnom Penh bar. May 2024.',
  },
  {
    type: 'text',
    content: `This above photo is from that night still haunts me. At the time, I didn’t fully realize what I was seeing, but I had a bad feeling about it. I took a photo of this boy next to the bar girls at a bar's entrance in Phnom Penh's red light street. Then I gave him a few coins as pocket money and went in for a beer and to see what it's like. I got my beer, but the mamasan that show my interest in the kid brought him to my table and said he wants an orange juice. I said sure get him one, but she sat the boy on my table next to me and was making him say thank you and everything. I felt really bizarre and soon left. I thought it was her kid, but that bad feeling lingered. Only later, when editing my photos from Cambodia, did the horror hit. I researched. I found reports. I found NGOs fighting child trafficking in Cambodia. I contacted them, but never heard back. But just the sheer fact that such NGOs must exist fills me with dread.

    Sorry for the digression—but it had to be said. After Phnom Penh, I crossed into Vietnam by land, traveling from the south all the way to the north. Then into Laos. I was back to walking again without so much pain, saw wonderful things. I'm grateful for that getaway.`
  },
  {
    type: 'image',
    src: '/images/pattaya/soi6-12.jpg',
    caption: 'A short getaway. December 2023.',
  },
  {
    type: 'text',
    content: `That’s when I got the news—my mother had been diagnosed with cancer back in Turkey. I cut the trip short, hitchhiked to the Laotian captial and began making my way back to Pattaya, trying to figure out how to return home.

    On the way, I stopped in Khon Kaen and Udon Thani—two cities in the Isan region, the same part of Thailand where many of the women I’d met in Pattaya had come from. I had hoped to stay longer, to meet people, to see the poor villages they had described. I wanted to understand what made them leave. I wanted to photograph what I found. But I didn’t have time. I passed through quickly, knowing these would be my final days photographing Soi 6.

    I spent my remaining days in June—right up until my flight—on Soi 6. I stayed longer than usual each day, moving slower, shooting more deliberately. I gave it everything I had in those final days, trying to get closer to people. Some of my favorite photos—most of the ones I ended up picking—came from that stretch.`
  },
  {
    type: 'image',
    src: '/images/pattaya/soi6-33.jpg',
    caption: 'French maids. June 2024.',
  },
  {
    type: 'text',
    content: `It was also then that I noticed a shift. More Western bar managers had appeared since I’d returned from my trip. They noticed me too. A few came up to me, trying to intimidate me. Some threatened me outright—speaking in British or American accents, telling me not to take photos if I liked my face the way it was. The space felt tighter. And maybe that meant it was time to stop.

    I remember praying for rain. I had never seen Soi 6 in the rain, and I longed for that different kind of light, that different kind of mood. It came—just once. And I went out with my camera. But by then, I’d already exhausted what little energy I had left. That was it.`
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
    type: 'component',
    render: () => {
      const scenes = Array.from({ length: 24 }, (_, i) => {
        const num = String(i + 1).padStart(2, '0'); // pad 1 → 01
        return `/images/pattaya/scenes/scene-${num}.gif`;
      });

      return (
        <PortraitReel
          title={'"Scenes"'}
          images={scenes}
          caption={`In June 2024, in my stay in Pattaya for about a week I did a lot of "burst" shots. And I noticed some of them play out like an old silent film. Thanks to this realization and with an intention perhaps to stitch together a short film out of them, right after I left Pattaya I exported low-resolution JPEGs of the photos I took then that are lost now. They are just wide enough to display on a computer screen so here we go. And here are the fragmented scenes that led to the mass export.
            Big majority from June 2024, and a few from April 2024.`}
        />
      );
    }
  },
  {
    type: 'text',
    content: `Pattaya is not a mystery. It’s a system. It’s built on mobility, memory, exchange. Some people come for a week. Some never leave. Many of the women I met were supporting families. Most of the men were running from something. And me? I came back with photographs—fragments of a place that’s always moving, always just out of frame.

    Now I don’t know what these photos are for. Will this system ever change? The men won’t stop being rich, and they won’t stop wanting these women. The women won’t stop being poor, and they won’t stop wanting to make money. The Thai government looks the other way, as long as the economy moves and the tourists keep coming.`
  },
  {
    type: 'image',
    src: '/images/pattaya/soi6-14.jpg',
    caption: 'Breaking the fourth wall. April 2024.',
  },
  {
    type: 'text',
    content: `Sometimes I wonder if I documented something or just circled around it. But I kept walking. I kept looking. And these photos—what’s left of them—are what I brought back.

    And still—through all of it—photography brought me joy. Maybe that’s the most complicated part.`
  },
  {
    type: 'component',
    render: () => (
      <div className="max-w-2xl mx-auto px-4">
        <Soi6Poem />
      </div>
    )
  },
  {
    type: 'image',
    src: '/images/pattaya/soi6-15.jpg',
    alt: 'Closing image from Soi 6',
    caption: 'Dog with a bottle. December 2023.',
  },
];

export default essayContent;