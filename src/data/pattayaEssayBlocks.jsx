import React from 'react';
import PortraitReel from '../components/PortraitReel';

const essayContent = [
  {
    type: 'text',
    content: `I first arrived in Pattaya in December 2023. My photography teacher—a close friend—had arranged a place for me to stay. It was partly an escape from the Swedish winter, partly wanderlust. I’d heard of Pattaya before—maybe from him, maybe just from its reputation. Either way, I was curious. I had three weeks of vacation from my software engineering job that was slowly killing me, and I decided to take it all.

  I’d started photographing that summer with real joy. At first, I asked my friend—who’s a published photographer and former teacher—about taking evening classes after work. He told me not to bother: “I’ll teach you everything I know.” And he did. We held informal lessons in his kitchen, usually after I’d finished work. Once the technical basics were out of the way, he gave me themed homework: taxi drivers, nightlife, dreams, midsummer. The goal was always the same—approach strangers, build trust, and make portraits that felt honest.

  Sometimes I brought other photographers into the mix—people I’d met through mutual circles. We critiqued each other’s work. Some of the people I met on the street I still keep in touch with.

  I spent long hours in his home library. He owns more than a thousand books—mostly doorstops, many by masters. I’d leaf through monographs, street photography collections, retrospective volumes. I cataloged them all for him, and helped sell a few, hoping it might help his finances.

  But by winter, Stockholm felt depleted. The days were short and gray. My job was draining me. I was buried under my mortgage. I spent most of my time at home. Street photography no longer gave me the same excitement it had in the summer. I needed contrast—something alive, even if chaotic.`
  },
  {
    type: 'image',
    src: '/images/pattaya/pattaya-02.jpg',
    caption: 'The customer is always welcome'
  },
  {
    type: 'text',
    content: `My teacher was already in Pattaya when I arrived. He welcomed me at the bus station, took me to the flat, handed me a key, and let me rest. The next morning, despite the jetlag, I fell into his rhythm: gym, breakfast, a walk along Beach Road, dinner at the same family-run restaurant every evening. Everything was new. At first, I photographed whatever caught my eye—stray dogs, food carts, fish markets, signs I couldn’t read.

    He spoke a bit of Thai and started teaching me from day one. “Sawatdee khrap” for hello. “Sabai dee mai?” for how are you. “Tai ruup dai mai?” to ask for a photo. He’d already made a long list of phrases on his phone, transliterated into Turkish—sawatdee khrap became savadikap, easier for me to read and remember. I’d review them before dinner. He was good with people—charming, quick to joke, unafraid to make a fool of himself if it helped build rapport. To a mother holding her toddler, he’d say “Nà-làk mâak mâak” (very cute). If the heat was unbearable, he’d complain loudly to a stranger: “Róon!” One night, when it dropped to 22 degrees and locals pulled on hoodies, he hugged himself dramatically and shrieked “Namkeng! Namkeng!”—ice—rubbing his arms like he was freezing. Maybe he didn’t know the word for “cold.” But it sure was entertaining.`
  },
  {
    type: 'image',
    src: '/images/pattaya/pattaya-03.jpg',
    caption: 'Children were always around'
  },
  {
    type: 'text',
    content: `He pointed out photo opportunities. He translated short conversations. He showed me which alleys were safe, which bars to avoid, where the light hit just right. If I misread a moment or hesitated, he’d tell me what went wrong.

    We scouted Soi 6, Walking Street, Beach Road, and a handful of other places I’ve since forgotten. The scenes were overwhelming: flickering neon bouncing off high heels and bare skin, European football on every screen, music blasting, older men cradling beers, bar girls fixing their lipstick in compact mirrors. On our first night, after what would become our usual after-dinner walk down Beach Road, he brought me to Soi 6. I was stunned—my instinct was to shoot a lot, but from a distance. I couldn’t get close.

    Then on that first night, just to test my limits, he took me to a massive brothel lounge where women lined the walls, each with a number and a color code. The colors marked the price. I wasn’t allowed in with my camera—and even without it, I noticed certain guests, especially South Asian men, being delayed or turned away. On our way out, we stopped to chat with a few Indian tourists lingering at the entrance. I hadn't seen anything like it before.

    We quickly decided Soi 6 was the most photographable street. Narrow, compact, alive. There were motorcycles and the occasional car, but it was walkable. Most people didn’t mind the camera—many vloggers wandered around with selfie sticks already. It was different from Walking Street, where “No Photo” signs are everywhere and bouncers use laser pointers to threaten any raised lens. I’d heard Soi 6 used to be like that before the pandemic. But now, there were no bouncers. No closed doors. The bars were open to the street. The energy was immediate.`
  },
  {
    type: 'image',
    src: '/images/pattaya/pattaya-04.jpg',
    caption: 'Start of another day'
  },
  {
    type: 'text',
    content: `For the next two weeks, even though I continued taking photos wherever I was, I returned to Soi 6 almost every day as part of our Beach Road walk—sometimes twice a day, once in the afternoon and again at night. My teacher usually came with me, offering tips on how to interact. He’d watch both me and the street, and later at home, he’d offer critique—on my presence, what I did or didn’t do.

    I was starting to learn the rhythm: when the music started, when the bar stools were wiped down, when the girls stirred awake and had breakfast right where they’d work later. When the men began drifting in. Every hour had a different texture. In the afternoon, the street felt softer. There was space. By evening, it grew louder, more compressed, more electric.

    I began to recognize faces. Some bar girls would wave. A few started calling me “photo man.” They’d pull me aside from the crowd, pose, and ask me to send the pictures later. I started exchanging contact info—Instagram, Line, WhatsApp. Sometimes I’d get a message within half an hour: “Where is my pic???” Occasionally, I’d see one of my photos appear on their profiles and feel a quiet satisfaction. They’d pose happily, fix each other’s makeup, laugh when I showed them the screen. I learned quickly: take many, and show the most flattering one first.

    Others didn’t want to be seen, and I never pushed. I tried to read the room. My Thai was still clumsy, but just enough to say hello, to ask politely, to thank.

    Sometimes I wasn’t just “photo man”—I was a potential customer, too. As it happens to most men on that street, I’d sometimes be grabbed by the wrist and pulled inside for a drink. I learned that raising my hands in a respectfully to give a salutation and saying nong kap, mai ao kap—sister, I don’t want—was disarming. They’d salute me back and let me go.

    Some spoke better English. A few had once been married to Western men. One had lived in Sweden. Another had studied in Bangkok. Some had foreign fathers, usually absent. But the vast majority were from rural areas. When I asked where, the answer was often “Isan”—Thailand’s northeast. A rice-farming region. Poor. Hard to leave.`
  },
  {
    type: 'component',
    render: () => {
      const portraitImages = Array.from({ length: 31 }, (_, i) => {
        const num = String(i + 1).padStart(2, '0'); // pad 1 → 01
        return `/images/pattaya/portraits/pattaya_portrait-${num}.jpg`;
      });

      return <PortraitReel title="Faces from Soi 6" images={portraitImages} />;
    }
  },
  {
    type: 'text',
    content: `Most of the attention, naturally, falls on the women. But the men are just as much a part of the street’s rhythm. They bring the money. They arrived from all over—Europe, the U.S., Australia, India, China, Japan, Korea. Some walked in groups, loud and confident. Others drifted alone, slowly, trying not to be noticed even as they scanned every bar.

There were the usual types: solo men in polo shirts with tanned arms, groups of Brits in football jerseys, retired men with walking sticks, a few younger travelers holding beers, looking amazed and slightly lost at the same time. People of all colors.

At first, I judged them—harshly. I wanted to photograph them in a way that exposed something. I wanted to make them look guilty. A few times, I did. One night, out walking on Beach Road, I caught an old man mid-negotiation—his hand on a girl’s back, whispering something into her ear. I lifted my camera, clicked, and kept walking. He gave me a half-hearted chase, yelling, “Idiot! Come back!” in a thick German accent. I didn’t stop.

Later, my teacher asked, “What were you trying to prove?”

He said I had picked on that man because he was old and weak. He reminded me that good photography doesn’t humiliate. It shouldn’t create enmity. It observes, reflects, connects. That moment stayed with me.

After that, I tried to empathize with the men. I started talking to them. If they were Swedish, I’d say, Bra, jag pratar svenska också. I could get by with the Norwegians and catch a word or two from the Danes. If they were French, I’d mention that I religiously did Duolingo every day. If they were Welsh, I’d say I used to work with a guy from Caerphilly. Sometimes I didn’t need to say much—just telling them I was Turkish was enough to spark a conversation. “That’s where I got my hair transplant,” they’d say, or, “I flew there for my teeth.” Cheap and professional, they’d add, grinning.

If they asked about my camera, I told them I was documenting the street. Some didn’t mind at all. Some bought me a beer. Some asked to pose. Others got serious—one said, “I’ve got a wife and kids back home.” Another just shook his head and walked away.

I stopped trying to capture shame. Instead, I tried to photograph the reality of it—not the scandal, but the quiet ordinariness. Because for them, that’s what it was: a drink, a smile, a bar stool, a question, an agreement. Nothing illegal. Nothing hidden. Just something you’re not supposed to look at too closely.`
  }
];

export default essayContent;