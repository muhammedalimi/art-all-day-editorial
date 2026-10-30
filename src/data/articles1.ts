

import ben22 from '../assets/ben22.jpg'

import benIronGate from '../assets/ben23.jpg'
import benFeatherStone from '../assets/ben25.jpg'
import benRailSpike from '../assets/ben26.jpg'
import benPoussin from '../assets/ben27.jpg'


import sixsiblings from '../assets/sixsiblings.png'
import sixsiblingsAudio from '../assets/sixsiblings.mp3'
// import slawn1 from '../assets/slawn1.png'
import slawn4 from '../assets/slawn4.jpg'
// import slawn5 from '../assets/slawn5.jpg'
// import slawn6 from '../assets/slawn6.jpg'
import slawn7 from '../assets/slawn7.jpg'
// import slawn8 from '../assets/slawn8.jpg'
// import slawn9 from '../assets/slawn9.jpg'
import slawn10 from '../assets/slawn10.jpg'
import slawn11 from '../assets/slawn11.jpg'
import slawn12 from '../assets/slawn12.jpg'
import slawn13 from '../assets/slawn13.jpg'
import slawn14 from '../assets/slawn14.png'
import bekuti1 from '../assets/bekuti1.jpg'
import bekuti2 from '../assets/bekuti2.jpg'
import bekuti3 from '../assets/bekuti3.jpg'
import bekuti4 from '../assets/bekuti4.jpg'
import okereke1 from '../assets/okereke1.jpg'
import okereke2 from '../assets/okereke2.jpg'
import okereke3 from '../assets/okereke3.jpg'
import okereke4 from '../assets/okereke4.jpg'
import okereke6 from '../assets/okereke6.jpg'
import okereke7 from '../assets/okereke7.jpg'
// import sophia1 from '../assets/sophia1.jpg'
import sophia2 from '../assets/sophia2.jpg'
import sophia3 from '../assets/sophia3.jpg'
import sophia4 from '../assets/sophia4.jpg'
// import sophia5 from '../assets/sophia5.jpg'
import sophia6 from '../assets/sophia6.jpg'
import sophia7 from '../assets/sophia7.jpg'
// import liam7 from '../assets/liam7.png'
// import liam8 from '../assets/liam8.png'
import liam9 from '../assets/liam9.png'
// import liam10 from '../assets/liam10.png'
import liam11 from '../assets/liam11.jpeg'
import liam2 from '../assets/liam2.jpeg'
import wa2 from '../assets/wa2.jpg'
import wa3 from '../assets/wa3.jpg'
import mo1 from '../assets/mo1.png'
import blu1 from '../assets/blu1.png'
import blu2 from '../assets/blu2.png'
import blu3 from '../assets/blu3.png'
// import blu4 from '../assets/blu4.png'
// import blu5 from '../assets/blu5.png'
// import blu6 from '../assets/blu6.png'
// import blu7 from '../assets/blu7.png'
// import blu8 from '../assets/blu8.png'
import blu9 from '../assets/blu9.png'
// import blu10 from '../assets/blu10.png'
// import bluIntro from '../assets/blu-intro-mastered.mp3'
import bekutiAudio from '../assets/bekuti-intro.mp3'
import supportingCover from '../assets/supporting-cover.png'
import oyeleye4 from '../assets/oyeleye4.png'
import oyeleye3 from '../assets/oyeleye3.png'

import oyeleye1 from '../assets/oyeleye1.png'
// import oyeleyeCover from '../assets/oyeleye-cover.png'
import oyeleye5 from '../assets/oyeleye5.png'
import pelumi1 from '../assets/pelumi1.jpeg'
import pelumi2 from '../assets/pelumi2.jpeg'
import pelumi3 from '../assets/pelumi3.jpeg'
import pelumi4 from '../assets/pelumi4.png'
import pelumi5 from '../assets/pelumi5.png'
import krystal1 from '../assets/krystal1.webp'
import jack1 from '../assets/jack1.webp'
import hilma1 from '../assets/hilma2.jpg'
import georgia1 from '../assets/georgia1.png'
import romeoCover1 from '../assets/romeoCover1.jpg'
import romeo8 from '../assets/romeo8.png'
import romeo10 from '../assets/romeo10.jpg'
import romeo6 from '../assets/romeo6.png'
import romeo5 from '../assets/romeo5.png'
import romeo4 from '../assets/romeo4.png'

import gallen2 from '../assets/gallen2.webp'
import gallen1 from '../assets/gallen1.webp'
import gallen3 from '../assets/gallen3.jpg'
import gallen4 from '../assets/gallen4.jpg'
import gallen5 from '../assets/gallen5.jpg'
import gallen6 from '../assets/gallen6.jpg'
// import winnie1 from '../assets/winnie1.png'
// import winnie2 from '../assets/winnie2.jpeg'
import winnie3 from '../assets/winnie3.jpeg'
import jude1 from '../assets/jude1.png'
import jude2 from '../assets/jude2.png'
import jude3 from '../assets/jude3.png'
import jude4 from '../assets/jude4.png'
import jude6 from '../assets/jude6.png'
import jude7 from '../assets/jude7.png'
// type BodyB
// lock =
//   | string
//   | {
//       type: 'heading'
//       text: string
//     }
//   | {
//       type: 'image'
//       src: string
//       alt: string
//       caption?: string
//       title?: string
//       details?: string
//     }
// type Article = {
//   category: string
//   title: string
//   author: string
//   readTime: string
//   publishedAt: string
//   issueNumber: number
//   issue: string
//   intro: string
//   heroImage: string
//   heroImageCaption?: string
//   body: BodyBlock[]
//   images: string[]
//   youtube: string
//   audio?: {
//   src: string
//   type: 'intro' | 'music'
//   label?: string
// }
  
type BodyBlock =
  | string
  | {
      type: 'heading'
      text: string
    }
  | {
      type: 'image'
      src: string
      alt: string
      caption?: string
      title?: string
      details?: string
    }


type Article = {
  category: string
  title: string
  author: string
  readTime: string
  publishedAt: string
  issueNumber: number
  issue: string
  intro: string
  heroImage: string
  heroImageCaption?: string
  body: BodyBlock[]
  images: string[]
  youtube: string

  audio?:
    | string
    | {
        src: string
        type: 'intro' | 'music'
        label?: string
      }

  artistSlug?: string
}

  // Connects this story to a Living Artist Profile
//   artistSlug?: string
// }

export const articles: Record<string, Article> = {
  // LEAD STORY
  'dear-god-what-remains-of-faith': {
    category: 'Criticism',
    title: 'Dear God: What Remains of Faith?',
    //     audio: {
    //   src: bluIntro,
    //   type: 'intro',
    //   label: 'Hear Mo Introduce This Story',
    // },
    author: 'Mo Alimi',
    readTime: '9 min read',
    publishedAt: '2026-09-10T12:00:00-06:00',

    issueNumber: 1,
    issue: 'Issue 01',

    artistSlug: 'ben-cowan',

    intro:
      'Ben Cowan’s Dear God takes inherited religious imagery apart and places it beside fragments of the material world, raising questions about faith, confinement, detachment, mortality, and what remains when belief is reconstructed.',

    heroImage: ben22,
    heroImageCaption: 'Dear God (Helleborus), 2018',

    body: [
      `Religion is supposed to be sacred. It is protected by belief, ritual, tradition, and the people who inherit it. Artists, however, have always had a tendency to approach the things we are told not to disturb. Sometimes they preserve them. Sometimes they question them. Sometimes they take them apart completely.`,

      `Ben Cowan’s Dear God seems to exist somewhere along that thin line.`,

      `At first, the series can feel almost devotional. Cowan borrows fragments from centuries of religious painting—Christ, angels, Adam and Eve, the Annunciation—and places them alongside flowers, leaves, stone, iron, wood, feathers, and other objects from the physical world.`,

      `The combinations are beautiful, but they are not entirely comfortable.`,

      `Cowan has described Dear God as emerging from his own experiences with American Christianity. The series brings together fragments of art-historical religious imagery with objects carrying contemporary significance or what he calls “past religious baggage.” Themes of devotion, sexuality, individuality, and consumerism move through the work.`,

      `But knowing that does not necessarily make the paintings easier to understand.`,

      `If anything, it makes them more complicated.`,

      `The title itself gives us somewhere to begin.`,

      `Dear God.`,

      `It sounds less like a declaration of faith than the opening of a letter. There is intimacy in it, but also distance. You write Dear God because there is something you need to say, ask, confess, challenge, or understand.`,

      `And throughout the series, Cowan seems interested in what happens when the visual language of faith is removed from the structures that once made its meaning certain.`,

      {
        type: 'heading',
        text: 'Taking Faith Apart',
      },

      `In Iron Gate Fragment, Wood, Michelangelo Adam and Eve, Cowan places a heavy fragment of an iron gate directly in front of a cropped image of Adam and Eve.`,
      {
        type: 'image',
        src: benIronGate,
        alt: 'Iron Gate Fragment, Wood, Michelangelo Adam and Eve by Ben Cowan',
        caption:
        'Ben Cowan, Iron Gate Fragment, Wood, Michelangelo Adam and Eve, 2023.',
      },

      `The obvious association is exclusion. Adam and Eve belong to the story of humanity’s expulsion from Eden, and a gate controls who is permitted to enter and who must remain outside.`,

      `But looking at Cowan’s composition, the gate can produce another sensation.`,

      `It does not simply appear behind Adam and Eve as though Paradise has been closed after their departure. It obstructs them. The iron crosses their bodies and separates them from the viewer.`,

      `They almost appear trapped behind it.`,

      `That distinction matters.`,

      `Knowing Cowan’s complicated relationship with Christianity makes it tempting to read the gate psychologically: not merely as the barrier keeping humanity out of Paradise, but as the possibility of being contained within an inherited structure of belief.`,

      `Cowan does not tell us that this is what the gate means. The painting does not need to. The possibility exists because of where he puts it.`,

      `And then there is the word fragment.`,

      `The gate is no longer a gate. It has been removed from the larger structure that once gave it function.`,

      `The Michelangelo image has undergone something similar. Cowan has removed Adam and Eve from a much larger historical composition.`,

      `A fragment of an object sits against a fragment of a religious image.`,

      `The act of taking things apart begins to feel important.`,

      {
        type: 'heading',
        text: 'What Happens When We Detach?',
      },

      `That idea becomes even stronger in Rail Spike, Wood, Bellini Dead Jesus.`,

      `A rail spike normally belongs to an enormous system. Its purpose is attachment: it fastens rail to wood and helps hold a larger structure together.`,

      `Cowan removes it.`,

      `What remains is a single piece of iron.`,

      `Detached.`,

      `Placed beside wood.`,

      `Placed beside the dead body of Christ.`,

      `There is an immediate Christian association available to us. Metal driven into wood beside Christ inevitably recalls the physical violence of the Crucifixion.`,

      `But the isolated spike can carry another meaning.`,

      `An object designed to bind something together has itself been separated from the structure it once held.`,

      `That contradiction begins to resemble the larger spiritual question running through Dear God: what happens to faith when it is detached from the structures through which we inherited it?`,

      `Church. Tradition. Family. Doctrine. Community.`,

      `If those structures are removed, does faith disappear with them? Or can something more individual remain?`,

      `Cowan’s cropping of Bellini makes that question even more uncomfortable. Much of the historical narrative disappears, leaving the viewer confronted with Christ’s exposed flesh, wound, and physical intimacy.`,

      `Without its complete religious setting, the sacred body can suddenly register simply as a body.`,

      `Flesh. Touch. Vulnerability. Even sexuality.`,

      `Cowan identifies sexuality as one of the concerns within Dear God, but the work becomes interesting precisely because the boundary is not clean. The sacred and sexual are not necessarily opposites here. The paintings force us to confront how much context determines which one we believe we are seeing.`,

      {
        type: 'heading',
        text: 'The Weight of Heaven',
      },

      `Feather, Stone, Giotto Angel approaches the same uncertainty much more quietly.`,

      `The elements are almost absurdly simple: a feather, a stone, an angel.`,

      `Yet their relationship changes everything.`,

      {
        type: 'image',
        src: benFeatherStone,
        alt: 'Feather, Stone, Giotto Angel by Ben Cowan',
        caption:
        'Ben Cowan, Feather, Stone, Giotto Angel, 2024.',
      },

      `The feather carries almost no weight. It belongs to flight. The stone belongs completely to gravity.`,

      `Placed beside an angel, the detached feather begins to feel like evidence of something missing.`,

      `I found myself seeing a fallen angel.`,

      `Not because Cowan paints one falling, but because he gives the imagination enough material to construct the fall.`,

      `The angel supplies heaven. The feather supplies flight. The stone supplies gravity.`,

      `Suddenly something spiritual feels subjected to the physical laws of the earth.`,

      `This is one of Cowan’s most effective strategies throughout Dear God. The ordinary object does not simply sit beside the religious image. Each changes the way we understand the other.`,

      `A feather beside an angel stops being only a feather. A gate beside Adam and Eve stops being only a gate. A rail spike beside the dead Christ stops being only industrial metal.`,

      `The sacred gives the ordinary object spiritual baggage, while the ordinary object pulls the sacred image back toward the physical world.`,

      {
        type: 'heading',
        text: 'When Something Dies',
      },

      `Death becomes quieter in Poussin Lamentation of Christ and Dry Leaf.`,

      `There is no heavy iron necessary here.`,

      `Cowan gives us a dead Christ and a dry leaf.`,

      {
        type: 'image',
        src: benPoussin,
        alt: 'Poussin Lamentation of Christ and Dry Leaf by Ben Cowan',
        caption:
        'Ben Cowan, Poussin Lamentation of Christ and Dry Leaf, 2023.'
      },

      `The comparison is almost painfully ordinary.`,

      `Leaves die. They lose what sustains them, detach, dry out, and eventually return to the earth`,

      `Christ dies too.`,

      `But Christianity makes a radically different promise about his death. It is not supposed to be the end.`,

      `Resurrection follows.`,

      `That makes the dry leaf difficult to read simply as a symbol of death. It can also suggest transition: something old passing away before something new can emerge.`,

      `Within a body of work created around a changing relationship with Christianity, the image begins to invite another possibility.`,

      `What if a form of faith can die without faith itself disappearing?`,

      `What if dismantling belief is not necessarily the same thing as destroying it?`,

      `Perhaps sometimes something has to be allowed to die before we discover what, if anything, deserves to grow back.`,

      {
        type: 'heading',
        text: 'And Then, Buddha',
      },

      `Marigold, Rice, Gold Buddha complicates an easy interpretation of Dear God as simply Cowan’s argument with Christianity.`,

      `Here the familiar Christian art-historical vocabulary gives way to another religious figure.`,

      `A Buddha. Rice. A marigold.`,

      
      {
        type: 'image',
        src: benRailSpike,
        alt: 'Marigold, Rice, Gold Buddha by Ben Cowan',
        caption:
        'Marigold, Rice, Gold Buddha, 2023'
      },




      `It would be convenient to make the painting fit neatly into the argument—to call the Buddha a symbol of detachment or spiritual searching and move on.`,

      `But the work deserves more uncertainty than that.`,

      `Its presence suggests that Dear God may eventually be asking something larger than what remains after Christianity is dismantled.`,

      `Perhaps the question becomes what spirituality looks like when inherited structures no longer provide all of the answers.`,

      `Perhaps it does not.`,

      `Cowan leaves enough distance between these objects that certainty would defeat part of their power.`,

      `And that uncertainty may be precisely the point.`,

      {
        type: 'heading',
        text: 'Dear God...',
      },

      `When I first encountered the series, I wondered whether Cowan was expressing faith, mocking it, or crossing a line that religious imagery is not supposed to cross.`,

      `After spending more time with the paintings, that question feels less important.`,

      `Dear God does not strike me as the destruction of religion.`,

      `It feels more like dismantling.`,

      `Cowan takes fragments from inherited religious history and removes them from the environments that once stabilized their meanings. He places them beside equally isolated pieces of the material world: a feather, stone, gate, spike, leaf, flower, wood.`,

      `Then he asks them to coexist.`,

      `Sometimes the result feels devotional.`,

      `Sometimes sexual.`,

      `Sometimes mournful.`,

      `Sometimes almost archaeological, as though we are looking at remnants of a belief system and trying to understand what they once meant.`,

      `And sometimes something new appears between them.`,

      `That may be what makes the title Dear God so fitting.`,

      `It does not sound like the end of a conversation.`,

      `It sounds like someone beginning one.`,

      `Perhaps faith is not always lost when its structure comes apart.`,

      `Perhaps sometimes we have to examine the fragments before deciding what deserves to be carried forward.`,

      `Dear God...`,
    ],

    images: [],
    youtube: '',
 
  },

    // STUDIO NOTES — ISSUE 02
  'six-siblings': {
    category: 'studio notes',
    title: 'Six Siblings ',
      audio: {
        src: sixsiblingsAudio,
        type: 'music',
      },
    author: ' Woolly Mo',
    readTime: 'Listen + Lyrics',
    publishedAt: '2026-09-10T12:00:00-06:00',

    issueNumber: 2,
    issue: 'Issue 02',

    artistSlug: 'woolly-mo',

    intro:
      'An unreleased recording about family, memory, survival, and the different ways siblings carry the same history.',

    heroImage: sixsiblings,

    body: [
      `Six siblings, six painters, different stroke  

Dinner table stories never fully spoke  

Mama held the roof while the floorboard broke  

Everybody chasing light through the cigarette smoke  

Youngest move different, more like a leader  

Planet like Jupiter, the stars wanna meet her  

Pressure make diamonds, pain made a preacher  

Brothers writing poems, she turned them into ether  

She branched out the family tree gracefully  

Carried all the scars like they came with a receipt 

Patches and pieces from her brother’s poetry  

Now she wear the words like designers on the street  

See the oldest moved militant, heart cold winter  

Middle child gambling dreams with the sinners  

One stayed quiet, paint walls, remember  

Another lost time tryna  chase contenders  

Big house energy with small room trauma  

Everybody tough till it’s tears for mama  

Thanksgiving tension, silenced by marijuana  

Love get complicated when survival’s be problem  


Chorus

All my life on the road 

I can tell you what have seen  

Sell my soul that’s no  

How you expect to fucking win

I don't know, girl let’s go

It’s time to flee the scene  

And life is not  a dream  

ṣùgbọ́n, gbọ́ mi 

ṣùgbọ́n, gbọ́ mi


He tortured artist that opted to live that space,

The darkness that sparked the ravaging rage.

Turned every scar on his skin into lines on the page.

Held a storm in his chest, put himself in a cage. 

He wasn’t born cold, he was forged in the fire,

A kid with a dream and a heart full of wires.

Watching heroes fall, watching love expire,

So he built up walls higher than his own desires.

His painting scream words his mouth couldn’t mention

Every color carried a lost childhood sentence.

Every shadow on the canvas held a confession,

Every masterpiece came with a hidden depression 

Mama saw the boy underneath the anger,

Knew the pain made him into a stranger.

She prayed for his soul when the world called him danger

Because even broken wings still remember  sky’s nature.

Brothers all carried their father’s reflection,

Different versions of the same imperfection. 

Some chased power, some chased affection,

Some ran from pain with no direction.

But the youngest watched every chapter unfold,

Saw how family turn trauma into gold.

Collected all the stories the elders never told,

Turned  broken history into something that is bold.

She said, We ain’t cursed, we just from survival.

Ancestors fought wars without a title.

Every tear in the house was a hidden recital,

Every scar was a map to a place more vital.

So, she painted the names that were lost in the dust,

Gave voices to the ones who forgot how to trust.

Built bridges from memories, rebuilt from the rust,

Because love is the only thing stronger than us.

Now six painters stand with six different frames,

Six different fires but one family name.

Some found peace, some still wrestle with flames,

But nobody leaves without carrying A change.

Now, the tortured artist finally looked at his own creation,

Saw not just pain, but a whole generation.

Realized his suffering wasn’t his destination,

It was the first page of a new family narration.

The brush hit the canvas, the silence broke,

A house full of ghosts finally learned how to cope.

Six siblings, six painters, one unfinnished stroke,

Still chasing the light through the old cigarette smoke.`,
    ],

    images: [],
    youtube: '',

  },

'living-dangerously': {
  category: 'Street to Studio',

  title: 'Living Dangerously',
    // audio: {
    //   src: bluIntro,
    //   type: 'intro',
    //   label: 'Hear Mo Introduce This Story',
    // },

  author: 'Mo Alimi',

  readTime: '8 min read',
  publishedAt: '2026-09-10T12:00:00-06:00',

  issueNumber: 2,

  issue: 'Issue 02',

  artistSlug: 'slawn',

  intro:
    'The first time I really tried to understand Slawn’s art, I wasn’t sure I did. Maybe I was looking too hard at the paintings.',

  heroImage: slawn12,
  heroImageCaption: '5 Of Them, 2024',
  
 

  body: [
    `There are the faces, the spray paint, the roughness, the repetition. Everything feels immediate, almost like it happened before anyone had time to ask whether it was a good idea.`,

    `Then there is Slawn himself.`,

    `Cigarettes. Skateboards. Clothes. Cars. Parties. Fights. Lagos. London. A café. A spray can is never too far away.`,

    `Some would call it chaotic.`,

    `I dare to call it breaking free.`,

    `Because the more I looked at Slawn, the less interested I became in trying to understand him through the paintings alone. The paintings are part of something larger. Slawn seems to have built a world where almost anything can become art, and almost anything surrounding the art can become part of the experience.`,

    `There is something dangerous about that kind of freedom.`,

    `Not dangerous because it is violent or destructive, but because once you stop respecting the boundaries people have drawn around art, you have to decide for yourself where the boundaries are.`,

    `Slawn seems perfectly comfortable with that.`,

    {
      type: 'image',
      src: slawn4,
      alt: 'Slawn',
      caption:
        'Nigeria, My Country, 2024',
    },

    {
      type: 'heading',
      text: 'Lagos Before London',
    },

    `Before the galleries, auctions, and collaborations, there was skateboarding.`,

    `Olaolu Slawn grew up in Nigeria and, in his late teens, worked at Wafflesncream, widely recognized as Nigeria’s first skate shop.`,

    `It was there that he met Leo and Onyedi. They skated, made films, created artwork, and eventually built Motherlan together.`,

    `That part of the story matters to me.`,

    `Because skateboarding teaches you to look at the world differently.`,

    `A staircase is not only a staircase.`,

    `A railing is not only something to hold.`,

    `An empty stretch of concrete suddenly has possibilities that someone walking past it might never notice.`,

    `I think there is something similar happening in Slawn’s relationship with art.`,

    `He sees surfaces.`,

    {
      type: 'image',
      src: slawn11,
      alt: 'Slawn',
      caption:
        'Mickey, 2026',
      
    },

    `In 2018, he moved to London and later studied graphic design at Middlesex University.`,

    `During the pandemic, he began painting more seriously, giving work to people at parties and putting it online.`,

    `But moving to London did not erase Lagos from the story.`,

    `When I look at Slawn, I do not necessarily mean that I see Lagos literally represented in every painting.`,

    `I recognize something else.`,

    `An energy.`,

    `Improvisation. Noise. Humor. Hustle. Youth.`,

    `The confidence to make something out of whatever happens to be in front of you.`,

    `The kind of energy that says:`,

    `Why not?`,

    {
      type: 'heading',
      text: 'I Can Spray on Anything',
    },

    `This might be what finally made Slawn click for me.`,

    `I can spray on anything.`,

    `It sounds almost stupidly simple, but there is a philosophy inside it.`,

    `A T-shirt has an empty corner? Spray it.`,

    `A suitcase looks too clean? Spray it.`,

    `A wall, a canvas, a car?`,

    `Why should the material decide whether something deserves to become art?`,

    {
      type: 'image',
      src: slawn13,
      alt: 'American Ice by Slawn',
      caption: 'Dreadful, 2026'

    },

    `There is something about the spray can itself that fits Slawn perfectly.`,

    `It does not carry the ceremony of traditional painting.`,

    `You do not need to carefully prepare a palette.`,

    `You shake it, press down, and leave a mark.`,

    `It encourages movement.`,

    `It encourages risk.`,

    `It allows the artist to get there before doubt does.`,

    `And Slawn’s world seems built around that instinct.`,

    `I started thinking about those moments when you look at an object and suddenly notice the empty space on it.`,

    `The edge of a shirt.`,

    `The side of a suitcase.`,

    `Something about it feels unfinished.`,

    `Most of us leave it alone.`,

    `Slawn does not.`,

    `That is where I started understanding the breaking-free energy I felt when I first encountered him.`,

    `The artwork does not necessarily stop at the canvas because Slawn does not seem particularly interested in where art is supposed to stop.`,

    {
      type: 'heading',
      text: 'The Basquiat Problem',
    },

    {
      type: 'image',
      src: slawn10,
      alt: 'American Ice by Slawn',
      caption: 'Skepta SBTV, 2026',
    
    },

    
    `Jean-Michel Basquiat came to my mind almost immediately.`,

    `The cigarettes, the young-wild-and-free mythology, the marks, the speed, the feeling of someone moving through culture without asking permission.`,

    `But I hesitate even writing his name here.`,

    `Because there is a lazy habit of encountering a young Black artist with an expressive visual language and reaching immediately for Basquiat.`,

    `Slawn does not need that.`,

    `And Slawn is not Basquiat.`,

    `What interests me about the comparison is not whether their paintings look alike.`,

    `It is the attitude I feel underneath them.`,

    `A refusal to behave properly around Art.`,

    `Basquiat moved between streets, galleries, language, celebrity, music, and painting.`,

    `The mythology surrounding the person became difficult to separate from the artwork.`,

    `With Slawn, I feel another version of that collapse.`,

    `Where does Slawn the artist end and Slawn the cultural figure begin?`,

    `Maybe nowhere.`,

    `Maybe separating them misses the point.`,

    {
      type: 'heading',
      text: 'The Artist Becomes the Artwork',
    },

    `Slawn once spoke about his own work with an almost ridiculous lack of preciousness, questioning why people wanted it and essentially describing painting as something he did so he could mess around.`,

    `I love the contradiction in that.`,

    `Because the art world kept becoming more serious about someone who appeared determined not to become too serious about himself.`,

    `His trajectory since then almost reads like someone testing how far the joke can travel.`,

    `A debut exhibition.`,

    `Sotheby’s.`,

    `The BRIT Awards, where in 2023 he became the youngest person to design the Britannia statuette.`,

    `BeauBeau’s, the East London café named after his son.`,

    `Cars turned into artworks.`,

    `Fashion and design collaborations.`,

    {
      type: 'image',
      src: slawn7,
      alt: 'Slawn and his wider creative practice',
      caption:
        'Ben, 2024',
    },

    `Then came his 2024 exhibition I present to you, Slawn, where a huge installation composed of 1,000 individual canvases became the center of the show.`,

    `At some point you have to ask:`,

    `What exactly is the artwork anymore?`,

    `Is it the canvas?`,

    `The object?`,

    `The event?`,

    `The person?`,

    `The crowd?`,

    `The mythology?`,

    `With Slawn, I think the answer might simply be yes.`,

    {
      type: 'heading',
      text: 'Why Not Squabble for It?',
    },

    `That same attitude is why the fight-club energy around Slawn does not feel completely separate from the paintings to me.`,

    `There is something absurd about the proposition:`,

    `Two people want something.`,

    `So why not squabble for it?`,

    `It turns desire into spectacle.`,

    `The polite machinery around art — private views, collectors, waiting lists, careful conversations about acquisition — gets replaced by something almost primitive.`,

    `You want it?`,

    `How badly?`,

    `That does not necessarily make the fight itself art.`,

    `But it tells us something about the world Slawn has constructed around his work.`,

    `He understands attention.`,

    `He understands spectacle.`,

    `And most importantly, he seems to understand that contemporary culture does not always experience an artist by standing silently in front of a canvas.`,

    `We encounter artists through Instagram posts, clothes, videos, collaborations, memes, interviews, parties, and stories we tell each other afterward.`,

    `Slawn does not resist that.`,

    `He plays with it.`,

    {
      type: 'heading',
      text: 'But Is It Enough?',
    },

    `This is where my uncertainty about Slawn has not completely disappeared.`,

    `And I do not think it should.`,

    `Sometimes I look at the work and wonder whether freedom can become its own formula.`,

    `A face.`,

    `A spray can.`,

    `A few gestures.`,

    `Another object.`,

    `Another collaboration.`,

    `Another moment.`,

    `When an artist becomes recognizable enough that almost any surface can carry their language, recognition itself can become dangerous.`,

    `Because eventually the question changes from:`,

    `Can I spray on anything?`,

    `to:`,

    `Should everything I spray automatically matter?`,

    `Those are different questions.`,

    `The energy surrounding Slawn can become so compelling that it risks doing some of the work for the paintings.`,

    `The personality is enormous.`,

    `The mythology is entertaining.`,

    `The world moves quickly.`,

    `Sometimes I want the painting to make me stop when Slawn himself makes me want to move.`,

    `But strangely, that tension is part of why I keep looking.`,

    `I am not convinced that Slawn wants every object to carry some enormous hidden meaning.`,

    `Maybe demanding that from him would be another way of forcing him back inside the rules he seems determined to escape.`,

    {
      type: 'heading',
      text: 'Young, Wild and Free',
    },

    `What I eventually found in Slawn was not an explanation for every painting.`,

    `It was permission.`,

    `Permission to move between worlds.`,

    `To be Nigerian without allowing that identity to become a box around the work.`,

    `To come through skate culture and end up inside galleries.`,

    `To make clothes and still be an artist.`,

    `To open a café.`,

    `To paint a car.`,

       {
      type: 'image',
      src: slawn14,
      alt: 'Slawn and his wider creative practice',
      caption:
        'Slawn-Strip',
    },


    `To design a trophy.`,

    `To make something expensive and still laugh at the seriousness surrounding it.`,

    `To look at an empty surface and think:`,

    `I could put something there.`,

    `There is something very Lagos in that spirit to me.`,

    `And something very much of this generation.`,

    `We inherited a world obsessed with categories.`,

    `Artist.`,

    `Designer.`,

    `Musician.`,

    `Skater.`,

    `Entrepreneur.`,

    `Pick one.`,

    `Slawn’s answer seems to be:`,

    `Why?`,

    `That is why I hesitate to describe him simply as chaotic.`,

    `Chaos suggests there is no direction.`,

    `I think there is a direction here.`,

    `Outward.`,

    `Beyond the canvas.`,

    `Beyond the gallery.`,

    `Beyond whatever somebody decided an artist was supposed to look like.`,

    `Slawn may not be giving us a new definition of art.`,

    `He might be doing something more interesting.`,

    `He is behaving as though he never needed the definition in the first place.`,

    `And maybe that is what living dangerously looks like.`,

    `Because once you realize the edge of the canvas is not actually the edge —`,

    `what exactly is supposed to stop you?`,
  ],

  images: [],

  youtube: '',

},


'when-peace-has-a-history': {
  category: 'quiet reflection',

  title: 'When Peace Has a History',
    audio: {
      src: bekutiAudio,
      type: 'intro',
      label: 'Hear Mo Introduce This Story',
    },

  author: 'Mo Alimi',

  readTime: '7 min read',
  publishedAt: '2026-09-10T12:00:00-06:00',

  issueNumber: 3,
  artistSlug: 'jules-bekuti',

  issue: 'Issue 03',

  intro:
    'There’s a serenity in staring at Jules Bekuti’s paintings. The longer I look, the more I wonder whether peace is really the absence of struggle.',

  heroImage: bekuti1,
  heroImageCaption: 'Echoes in the Eyes, 2025',

  body: [
    `There’s a serenity in staring at Jules Bekuti’s paintings.`,

    `I don’t mean simply that they are beautiful. It is something quieter than that. Looking at them almost feels as though every traumatic experience I’ve carried has finally sat down with a therapist, and somewhere inside me, my inner child feels seen.`,

    `The longer I stare, the more at peace I feel.`,

    `Maybe it’s the softness of the colors. The closeness of the figures. The way they occupy the canvas without demanding anything from you. Dark faces sit against whites, warm yellows and pale greens. There is tenderness here, but there is also protection.`,

    `They seem to belong to one another, and somehow, for a moment, I feel invited into that belonging too.`,

    `Maybe that is what I am responding to: not happiness exactly, but safety.`,

    {
      type: 'image',
      src: bekuti3,
      alt: 'Painting by Jules Bekuti',
      caption: 'Closer Than Words, 2026',
    },

    `Bekuti creates that safety without making the figures overly expressive. Their faces are restrained, sometimes almost difficult to read. Instead, the tenderness seems to exist around them — in the bodies standing close together, in the repetition of white clothing, in the soft yellows surrounding dark skin.`,

    `Even the small patterns across the fabric begin to feel intimate.`,

    `Nothing is screaming for attention, yet the paintings hold you there.`,

    `But the longer I look, the less certain I am that serenity is the whole story.`,

    `Bekuti’s figures do not necessarily smile back at me. Their expressions can feel distant, guarded, even unreadable.`,

    `I began by calling what I felt peace, but perhaps stillness and peace are not always the same thing.`,

    {
      type: 'heading',
      text: 'The Face as an Exchange',
    },

    `That uncertainty becomes more interesting when you begin to understand who Jules Bekuti is.`,

    `Born in 1993 and raised in France, Bekuti describes his practice through his experience as a Black person living in France. His work explores identity, discrimination, marginalization, memory and the experience of living within cultural boundaries that are becoming increasingly difficult to define.`,

    `Blackness in these paintings is not incidental.`,

    `Bekuti has spoken about using different shades of black to represent diversity.`,

    `That feels important.`,

    `Black identity is often spoken about as though it represents one experience, one culture, one history.`,

    `Bekuti seems interested in the opposite.`,

    `Difference within Blackness.`,

    `Different shades. Different faces. Different stories.`,

    `He has described his work as a call for greater inclusion and art itself as a powerful tool capable of changing how people think.`,

    `The goal is not simply representation.`,

    `It is reflection.`,

    `That makes his attention to the face particularly interesting.`,

    `Bekuti says he concentrates on the eyes, nose and mouth because these are the places through which emotion can travel between subject and viewer without words.`,

    `The painting becomes an exchange.`,

    `We look at the figure, but the figure also asks something of us.`,

    `And perhaps that explains why I felt something before I understood what I was looking at.`,

    {
      type: 'image',
      src: bekuti2,
      alt: 'Artwork by Jules Bekuti',
      caption: 'Child of immigrants, 2025',
    },

    {
      type: 'heading',
      text: 'Child of Immigrant',
    },

    `There is something very telling about Jules Bekuti’s work, even when what it is telling you feels hidden.`,

    `Child of Immigrant caught my attention, not because of the title, but because of the thought that came to me almost immediately:`,

    `Immigrants often go through hell just to give their children a better life.`,

    `There is sacrifice in that.`,

    `Leaving what you know.`,

    `Starting again.`,

    `Carrying uncertainty, loneliness, rejection and sometimes humiliation, all while holding onto the belief that the person coming after you might have an easier life.`,

    `What struck me was that I had already felt this strange sense of peace in Bekuti’s paintings before encountering Child of Immigrant.`,

    `Suddenly, that peace began to make sense.`,

    `Maybe the serenity in these paintings is not innocent.`,

    `Maybe it has been earned.`,

    {
      type: 'image',
      src: bekuti4,
      alt: 'Child of Immigrant by Jules Bekuti',
      caption: 'Rêves Inaccessibles, 2024',
    },

    `The figures appear composed. The colors remain gentle. There is closeness, softness and a sense of protection.`,

    `Yet underneath that calm, I keep thinking about everything that might have had to happen for this moment of peace to exist.`,

    `The struggle does not necessarily have to appear on the canvas.`,

    `Perhaps that is what makes the work so affecting.`,

    `You don’t need to see the journey to understand that somebody traveled.`,

    `You don’t need to see the suffering to recognize what safety might have cost.`,

    `And you don’t need to see the wounds to understand why tenderness can feel so precious.`,

    `For an immigrant, giving your child a better life can mean hoping that some of what hurt you ends with you.`,

    `That fear becomes security.`,

    `That uncertainty becomes stability.`,

    `That survival eventually becomes the freedom to simply exist.`,

    `And perhaps that is why my inner child felt seen before I could explain what I was seeing.`,

    `The paintings gave me the peace first.`,

    `Child of Immigrant gave me a language for it.`,

    {
      type: 'heading',
      text: 'Art Is Not Luxury',
    },

    `There is another part of Bekuti’s thinking that makes this feeling of connection particularly meaningful.`,

    `For years, he made paintings knowing that most people who encountered them would never be able to take one home.`,

    `He believes art should be available to everyone.`,

    `That its value should not depend entirely on exclusivity or the ability to own an original.`,

    `So he created a print club.`,

    `It is a relatively simple decision, but philosophically it says a great deal about how he sees his role as an artist.`,

    `The original can remain the original without access to the image belonging exclusively to whoever can afford it.`,

    `For Bekuti, art is not simply luxury.`,

    `It is connection.`,

    `And connection runs through almost everything here.`,

    `Between artist and viewer.`,

    `Between one Black experience and another.`,

    `Between different shades of Blackness.`,

    `Between immigrant and child.`,

    `Between memory and identity.`,

    `Even his insistence on accessibility feels connected to the paintings themselves.`,

    `If the work is supposed to encourage reflection, then it needs people in front of it.`,

    `Art cannot change someone’s mind if access to it is reserved only for a few.`,

    {
      type: 'heading',
      text: 'Peace Has a History',
    },

    `That changes the way I think about my own reaction to his paintings.`,

    `Perhaps feeling seen is not accidental.`,

    `Bekuti says his work should make the viewer engage with the subject’s story both physically and emotionally.`,

    `He wants an exchange to happen without words.`,

    `Mine happened before I knew anything about him.`,

    `I encountered the peace first.`,

    `Then the faces.`,

    `Then Child of Immigrant.`,

    `And only afterward did I encounter the artist explaining diversity, inclusion, access and his belief that art can change the way we see one another.`,

    `There is something hidden inside Jules Bekuti’s softness — a history that does not announce itself loudly, but seems to sit quietly behind the figures.`,

    `And the longer I look, the more I wonder whether peace is really the absence of struggle.`,

    `Maybe sometimes, peace is evidence that someone survived it.`,
  ],

  images: [],

  youtube: '',


},


 'the-good-old-days': {
  category: 'Criticism',

  title: 'The Good Old Days',
    // audio: {
    //   src: bluIntro,
    //   type: 'intro',
    //   label: 'Hear Mo Introduce This Story',
    // },

  author: 'Mo Alimi',

  readTime: '8 min read',

  publishedAt: '2026-09-17T09:43:00-06:00',

  issueNumber: 4,

  issue: 'Issue 04',

  artistSlug: 'okereke',

  intro:
    'Cabin biscuits, Coke bottles, NYSC uniforms, and photographs that took weeks to return: Okereke paints a Nigeria that survives in memory.',

  // Keep this empty until you add an Okereke artwork to /assets.
  // Then import it above and replace this with: heroImage: okereke1,
  heroImage: okereke3,

  heroImageCaption: 'The Christening II',

  body: [
    `I recognize Okereke’s paintings before I fully understand them.`,

    `There are objects in them that do not need an introduction. A packet of Cabin biscuits. An old bottle of Coca-Cola. The clothes people wore to gatherings. The cars. The hairstyles. The crowded rooms. They belong to a Nigeria that feels close enough for me to remember and distant enough to already feel historical.`,

    `For someone looking from the outside, a Coke bottle and a packet of biscuits might simply register as objects from another time. For me, they carry something else.`,

    `Growing up in Nigeria, especially in a struggling or middle-class household, small things could announce that today was different. There was a birthday. Someone was visiting. A child was being celebrated. There might not have been an elaborate party or a table overflowing with food, but a bottle of Coke and some biscuits could still make the day feel like an occasion.`,

    `Sometimes the smallest object was enough to tell you that something good was happening.`,

    `That is where Okereke’s work begins to affect me personally. The objects in his paintings do not arrive as vintage props. I know them too well for that. They arrive as memory.`,

    {
      type: 'heading',
      text: 'Before We Could See the Picture',
    },

    `There was also a time when taking a photograph required patience.`,

    {
        type: 'image',
        src: okereke2,
        alt: 'The Beetle',
        caption:
        'Sincerely speaking',
      },

    `A photographer could arrive at a birthday, a ceremony, a family gathering, or another important occasion. You stood where you were told to stand. You fixed your clothes. You tried to make the right face. The shutter clicked, and then the photographer left with the image.`,

    `Sometimes it took days. Sometimes it took weeks before you saw the photograph.`,

    `There was no screen to check. No instant retake. No way of knowing whether your eyes were closed, whether your smile looked strange, or whether the angle you thought was perfect had betrayed you completely.`,

    `The photograph existed before you were allowed to see it.`,

    `Memory had a delay to it.`,

    `Looking at Okereke’s paintings reminds me of that delay. At times they feel like photographs that have taken years to return — images from a Nigeria that was never necessarily trying to preserve itself as history while it was being lived.`,

    `The people inside these scenes were simply living. Dressing for an occasion. Standing beside a car. Sitting together. Holding a drink. Fixing their hair. Showing up for one another.`,

    `Now those details carry the weight of evidence.`,

    {
      type: 'heading',
      text: 'The Good Old Days',
    },

    `Older Nigerians have a phrase for this kind of remembering: “the good old days.”`,

    `It is often said with affection and, sometimes, with disappointment at what came after. The phrase can contain childhood, family, old neighbourhoods, old music, ceremonies, lower prices, familiar routines, and versions of the country that seem to become more beautiful the further away they move.`,

    `But memory is not an objective historian.`,

    `The past can become softer once we have survived it. Scarcity becomes simplicity. Waiting becomes patience. Things that may have frustrated us at the time become charming because they have disappeared.`,

    `That is what makes Okereke’s relationship with the past interesting to me. His paintings can make an older Nigeria feel desirable without needing to prove that everything about that time was better.`,

    `The importance is in remembering that these things existed at all.`,

    `The bottle on the table. The way people dressed. The texture of a family photograph. The hair. The crowd. The car behind the group. The things nobody thought would someday need to be preserved.`,

    {
      type: 'heading',
      text: 'An NYSC Uniform Can Contain a Family',
    },

    `Some parts of Nigerian life become so familiar that it is easy to forget how dramatically they can shape individual histories.`,

    `NYSC is one of them.`,
    {
        type: 'image',
        src: okereke1,
        alt: 'The Beetle',
        caption:
        'The Beetle',
      },


    `My father was serving in Benue State when he met my mother. They fell in love there. What began during a service year eventually became a marriage and a family of six children.`,

    `Because of that, I cannot see NYSC only as khaki trousers, boots, orientation camps, or a government programme. Somewhere inside that uniform is one of the reasons I exist.`,

    `That is what ordinary history can do.`,

    `A Coke bottle can contain a birthday. A photograph can contain weeks of anticipation. An NYSC uniform can contain the beginning of a family.`,

    `The objects remain small. Their consequences do not.`,

    {
      type: 'heading',
      text: 'A Painter of Crowds',
    },

    `Okereke’s paintings are rarely only about objects. They are also about people being together.`,

     {
        type: 'image',
        src: okereke6,
        alt: 'The Beetle',                     
        caption:
        'Labyrinth of contemporary culture',
      },
                                                 

    `Crowds recur in his work. Families, ceremonies, groups, gatherings — people occupying space in relation to one another rather than existing as isolated figures.`,

    `Okereke has spoken about chaos as something that shaped him, and about his attraction to painting crowds. That makes the pandemic an especially interesting interruption in his development.`,

    `The world stopped. Gathering became dangerous. The crowd — something his paintings repeatedly return to — suddenly became something people were being told to avoid.`,

    `In that stillness, Okereke has described finding a stronger sense of purpose in himself and in his work.`,

    `Perhaps that helps explain why human connection feels so important in the paintings. A crowd is never only a compositional device. It can also be evidence that people were once able to occupy the same space, touch one another, celebrate together, argue, laugh, dress up, and simply be present.`,

    {
      type: 'heading',
      text: 'Documenting a Generation',
    },

    `Okereke has described his work as a way of documenting the African millennial experience.`,

    `That word — documenting — changes the way I look at the paintings.`,

    `A Coke bottle stops being only a Coke bottle. Hair stops being only hair. An NYSC uniform is no longer simply costume. A crowded celebration is not merely an attractive composition.`,

    
    `They become evidence.`,

    `Evidence of how people lived. How they gathered. How they celebrated. How they presented themselves. What they consumed. What they considered beautiful. What they carried into adulthood. What disappeared before anyone realized it was disappearing.`,

    `Official histories usually make room for governments, elections, conflicts, dates, and public figures. Personal history remembers what was sitting on the table.`,

    {
      type: 'heading',
      text: 'What I Know, and What I Do Not',
    },

    `There are parts of Okereke’s cultural world that I cannot claim as lived experience.`,

    `I did not grow up deeply immersed in Igbo traditions. Much of my relationship with that history has come through reading — through writers such as Chinua Achebe and Chimamanda Ngozi Adichie, and through the stories and histories that have travelled beyond their immediate communities.`,

    `That distinction matters.`,

    `Recognition does not mean ownership.`,

    `I can recognize the wider Nigerian world surrounding these paintings without pretending that every symbol, tradition, or memory represented inside them belongs to me.`,

    `Perhaps that is part of what makes the work compelling. Something can feel familiar while still containing histories that ask you to stop, look again, and learn.`,

    {
      type: 'heading',
      text: 'Hair Is Also an Archive',
    },

    {
        type: 'image',
        src: okereke4,
        alt: 'The Beetle',                     
        caption:
        'Quiet Mind, no quiet time',
      },

    `Okereke’s interest in cultural identity also appears through hair.`,

    `He has spoken about African hair as a form of identity that predates colonial intervention, while also considering the ways Black hair has been policed, judged, and forced toward particular standards.`,

    `Hair, then, becomes another archive.`,

    `It can contain the history of what people were encouraged to abandon. What they were told was professional. What they were told was beautiful. What they learned to hide, straighten, cut, or change in order to move through particular spaces.`,

    `The policing of Black hair does not only alter appearance. It can create an internal conflict between what is inherited and what a person has been taught to consider acceptable.`,

    `This is where the nostalgia in Okereke’s work becomes more complicated. Looking backward is not only about recovering what was beautiful. It can also mean asking what was interrupted.`,

    {
      type: 'heading',
      text: 'What Happens When Memory Goes Digital?',
    },

    `And yet this is also where I begin to question Okereke’s project.`,

    `An artist does not have to paint the present in order to belong to it. Sometimes looking backward is itself a response to the times.`,

    `There may even be something especially contemporary about Okereke’s affection for a pre-digital Nigeria at a moment when almost everything about memory is becoming instantaneous.`,

    `The photographer who once disappeared with your image for weeks has been replaced by a phone that shows you the photograph before the moment is even over.`,

    `Family albums have moved into cloud storage. Birthdays become Instagram stories. Relationships happen through screens. Algorithms decide which memories are resurfaced for us. Images are created, edited, distributed, and forgotten at extraordinary speed.`,

    `So if Okereke sees his work as documenting the African millennial experience, what happens as that experience becomes increasingly digital?`,

    `The question is not whether he should abandon painting for digital art.`,

    `The more interesting question is whether his idea of documentation can expand with the generation he is trying to document.`,

    `Can an artist whose work is so invested in analogue memory continue looking backward while also accounting for the ways Africans are now constructing memory in real time?`,

    `The next chapter of the African millennial experience may not contain the photographer who made us wait weeks to find out whether we smiled correctly.`,

    `It may contain thousands of photographs we never look at again.`,

    {
      type: 'heading',
      text: 'What We Keep',
    },

    `Maybe that is why Okereke’s paintings matter now.`,

    `They do not need to convince me that the past was perfect. I am not sure that is what “the good old days” ever really means.`,

    `Perhaps the phrase is less about wanting everything back and more about realizing, too late, that the ordinary things around us were carrying a life we would eventually miss.`,

    `A biscuit packet.`,

    `A glass Coke bottle.`,

       {
        type: 'image',
        src: okereke7,
        alt: 'The Beetle',                     
        caption:
        'Quiet Mind, no quiet time',
      },


    `A hairstyle.`,

    `An NYSC uniform.`,
     

    `A car parked behind a gathering.`,

    `A photograph nobody knew would someday become evidence of an era.`,

    `The history hidden in Okereke’s paintings is powerful precisely because much of it never looked like history while people were living through it.`,

    `It just looked like life.`,

    `And history does not always announce itself while we are living through it.`,

    `Sometimes it is sitting quietly on the table.`,
  ],

  images: [],

  youtube: '',

},


'pleasure-without-performance': {
  category: 'The Inner Image',

  title: 'Pleasure Without Performance',
    // audio: {
    //   src: bluIntro,
    //   type: 'intro',
    //   label: 'Hear Mo Introduce This Story',
    // },

  author: 'Mo Alimi',

  readTime: '8 min read',

  // Future date keeps it scheduled until Issue 05 is published.
  // Replace this timestamp if you publish on a different day.
  publishedAt: '2026-09-21T09:00:00-06:00',

  issueNumber: 5,

  issue: 'Issue 05',

  artistSlug: 'sophia-oshodin',

  intro:
    'Sophia Oshodin paints Black women enjoying life without performing happiness for the viewer.',

  heroImage: sophia3,

  heroImageCaption: 'A Contemplation of the Unstated Fears',

  body: [
    `The women in Sophia Oshodin’s paintings are enjoying life, but they are not smiling for us.`,

    `They smoke cigarettes, go shopping, gather around dinner tables, dress boldly, and move through scenes of leisure with a commanding presence. The colors are lively and the settings suggest pleasure, yet the women’s expressions often remain composed. Their enjoyment is visible, but it is not exaggerated for the viewer.`,

    `That distinction is what makes the paintings feel powerful.`,

    `Women are often expected to smile—to appear warm, approachable, and grateful while being observed. Oshodin’s figures do not accept that responsibility. They do not perform happiness to persuade us that their lives are good. They simply inhabit them.`,

    `Their straight faces do not signal an absence of joy. Instead, they suggest that joy can be private, self-possessed, and free from explanation.`,

    {
      type: 'heading',
      text: 'Joy Without the Smile',
    },

     {
        type: 'image',
        src: sophia4,
        alt: 'The Beetle',                     
        caption:
        'What Was Said',
      },

    `There is a difference between experiencing pleasure and displaying it in a form other people recognize.`,

    `A smile is commonly treated as proof: proof that someone is friendly, proof that a woman is content, proof that the viewer has been welcomed into her world. Oshodin removes that reassurance.`,

    `Her women can enjoy a meal without looking delighted for an audience. They can shop without presenting consumption as a celebration. They can sit together without transforming friendship into a cheerful group portrait.`,

    `Even when surrounded by bold color, fashion, food, or the material signs of a good life, they retain something for themselves.`,

    `The result is not coldness.`,

    `It is control.`,

    `Oshodin’s women decide how much emotion becomes available to us. Their faces prevent pleasure from becoming spectacle. We can see that they are living, but we cannot demand that they make their lives emotionally legible for our comfort.`,

    `This tension aligns with Oshodin’s broader practice. Her artist statement describes women “contemplating, resting, riding and simply existing.”`,

    `Working across acrylic and oil, she draws from imagination, memory, everyday experience, and popular culture to explore joy, hope, space, mental health, and healing.`,

    `In a 2021 interview with Cass Art, Oshodin also described her figurative storytelling as connected to family, love, strength, community, and the role of women in society.`,

    {
      type: 'heading',
      text: 'Twelve Windows, Many Lives',
    },

       {
        type: 'image',
        src: sophia2,
        alt: 'The Beetle',                     
        caption:
        'The Story Of Our Lives',
      },

    

    `In Story of Our Lives, Oshodin arranges twelve windows into a three-by-four grid.`,

    `Together, they resemble fragments from the same apartment building: separate lives unfolding beside one another, contained within similar architectural frames.`,

    `Curtains, balconies, plants, furniture, clothing, and bodies offer partial views into spaces that would ordinarily remain private.`,

    `In the first window, a man and woman stand closely together, appearing to kiss.`,

    `The image can be read as conventional romantic partnership—the kind of companionship, marriage, and shared domestic life that society frequently presents as the expected destination for a woman.`,

    `Yet Oshodin gives the couple only one window.`,

    `Their relationship is not established as the complete story of womanhood, but as one possibility among many.`,

    `Elsewhere, women appear alone without necessarily appearing lonely.`,

    `One stands behind a balcony overflowing with plants. Another sits quietly at a table. A woman in a yellow two-piece stands confidently before an open curtain, while another, dressed in underwear and a headwrap, looks through a wardrobe.`,

    `Their bodies are visible, but they do not feel arranged for the viewer’s pleasure. They appear comfortable within their own spaces.`,

    `The empty windows matter too.`,

    `Some curtains are closed; other rooms contain furniture but no visible person. These spaces suggest lives that cannot be fully accessed, stories still being formed, or identities that refuse to be completely revealed.`,

    `Oshodin lets us look, but she does not let us know everything.`,

    `The grid places partnership, solitude, domesticity, sensuality, and independence beside one another without creating a hierarchy.`,

    `The title Story of Our Lives becomes especially significant: there is no single correct way for a woman’s life to look.`,

    `The window also creates a tension between privacy and public judgment. We are allowed to look inside, but we are not given permission to discipline what we see.`,

    `Each woman occupies her own frame, controls her own body, and lives within her own version of a full life.`,

    {
      type: 'heading',
      text: 'A Nigerian-British Tension',
    },

    `Oshodin is frequently described as a Nigerian-British artist based in London, while her own biography identifies her as a British painter inspired by African art, art history, fashion, politics, and color.`,

    `That position between cultures gives these scenes another layer of tension.`,

    `As a Nigerian viewer, I cannot separate her women from the expectations women often encounter within conservative parts of Nigerian society.`,

    `A woman smoking publicly, spending freely, dressing boldly, or simply prioritizing her own enjoyment can quickly become the subject of judgment.`,

    `She may be called irresponsible, improper, or too independent—not because she has harmed anyone, but because she has stepped outside an accepted image of womanhood.`,

    `Oshodin paints women who appear to resist that containment.`,

    `They dine, shop, rest, ride, dress, and smoke without seeming ashamed of themselves. They do not pause to ask whether their pleasure looks respectable.`,

    `Even their serious expressions feel important: they are not smiling to reassure us that they remain agreeable while exercising their freedom.`,

    `Through a conservative lens, some of the women in Story of Our Lives might be described as immodest, undisciplined, or outside the boundaries of respectable womanhood.`,

    `But that judgment belongs to society, not necessarily to the painting.`,

    `Oshodin does not portray them as out of control. She portrays them as self-directed.`,

    `This distinction matters.`,

    `Freedom does not always look dramatic. Sometimes it looks like choosing what to wear, sitting alone, buying something for yourself, closing the curtain, or allowing your face to rest without worrying about how others will interpret it.`,

    {
      type: 'heading',
      text: 'Red as Refusal',
    },

       {
        type: 'image',
        src: sophia7,
        alt: 'The Beetle',                     
        caption:
        'What Was It That You Were Saying About Beauty',
      },


    `The repeated presence of red lipstick adds another layer to the women’s individuality.`,

    `Dark-skinned women have often been discouraged from wearing vivid shades and directed toward colors considered safer or more flattering.`,

    `A 2025 NecoleBitchie article titled “Can Black Women Wear Red Lipstick?” confronts that prejudice directly:`,

    `“The notion that Black women cannot wear red lipstick is an outdated and harmful myth.”`,

    `The article connects that belief to colorism and to the expectation that darker skin should be paired with muted colors.`,

    `In Oshodin’s paintings, red lipstick can be read as a rejection of that restraint. Against dark skin, the color becomes a declaration of visibility—bold, deliberate, and unwilling to be softened for someone else’s comfort.`,

    `It is important not to claim this as Oshodin’s stated intention unless she has discussed the lipstick herself.`,

    `But as a recurring visual symbol, the red lip strengthens the paintings’ larger language of self-definition.`,

    `These women decide how they will be seen. They do not restrict themselves to what others have decided is tasteful, appropriate, or flattering.`,

    `The lipstick does not manufacture their confidence.`,

    `It marks it.`,

    {
      type: 'heading',
      text: 'The Right to an Ordinary Good Life',
    },

    `Across Oshodin’s work, shopping bags, dinner tables, cigarettes, fashionable clothing, private rooms, and moments of rest form a vocabulary of pleasure.`,

    `None of these objects automatically equals empowerment.`,

    `Shopping can become another demand placed on women. Smoking carries its own danger. Luxury can exclude as easily as it can liberate.`,

    `The paintings are most interesting when these objects are not treated as simple symbols of success, but as evidence of choice.`,

    `The women choose how to spend their time, how to dress their bodies, what to desire, and whether to reveal their feelings.`,

    `Their strength does not come only from surviving hardship. It also appears in their ability to enjoy beauty, friendship, solitude, abundance, and leisure without apology.`,

    `That is especially meaningful within a visual culture that often asks Black women to represent struggle.`,

    `Oshodin does not deny complexity—her stated interests include mental health, healing, and the difficulty of navigating everyday life—but she refuses to make pain the only serious subject available to them.`,

    `Joy, hope, rest, and ordinary domestic life deserve the scale and attention of painting too.`,

    `Her women are not required to earn pleasure through suffering.`,

    `They are not asked to make their independence charming.`,

    `They do not need husbands, families, smiles, or respectable appearances to validate their existence.`,

    `They are simply allowed to live.`,

    {
      type: 'heading',
      text: 'Pleasure Without Performance',
    },

    {
        type: 'image',
        src: sophia6,
        alt: 'The Beetle',                     
        caption:
        'Riding Towards Joy',
      },


    `Oshodin’s paintings propose a kind of girl power that does not need to announce itself.`,

    `It can be found in the woman who stands alone at her window, the woman who chooses the red lipstick, the woman who enjoys dinner without smiling for the photograph, and the woman whose closed curtain tells us that not every part of her life is available for public judgment.`,

    `The women take up space, embrace their individuality, and experience pleasure on their own terms.`,

    `Their serious expressions keep that pleasure from becoming a service offered to the viewer.`,

    `We may witness it, but we do not own it.`,

    `Their happiness does not need to look cheerful.`,

    `Their freedom does not need to look respectable.`,

    `Their lives do not need to follow one approved story.`,

    `Their pleasure belongs to them.`,

    `It does not need to be explained, exaggerated, or performed.`,
  ],

  images: [],

  youtube: '',

 
},

'kids-are-born-painters': {
  category: 'Essay',

  title: 'Kids Are Born Painters',
    // audio: {
    //   src: bluIntro,
    //   type: 'intro',
    //   label: 'Hear Mo Introduce This Story',
    // },

  author: 'Mo Alimi',

  readTime: '8 min read',

  publishedAt: '2026-09-27T12:00:00-06:00',

  issueNumber: 6,

  issue: 'Issue 06',

  intro:
    'An essay on crayons, rules, and the creativity we learn to leave behind.',

  heroImage: wa3,

  heroImageCaption:
    'The Wa, A Kid Could Do It, 2021, Atlantic Wall. Image via the artist’s official website.',

  body: [
    `Before there were canvases, there were sheets of paper. Before acrylic and oil, there were crayons with the wrappers peeling off, half-used coloring books, blunt pencils and little boxes of watercolor paint.`,

    `We drew houses with square windows. The sun lived in the corner of the page. Trees were green. Clouds were blue. People were circles and lines.`,

    `Nobody asked whether any of it was contemporary art.`,

    `We just made things.`,
    `While writing this, I realized how long it had been since I made something without worrying whether it was good enough. So I painted this.`,

       {
      type: 'image',
      src: mo1,
      alt: 'The Wa painted vacant house for A Kid Could Do It at PFFFestival 2026 in Stuttgart',
      
      caption:
        'Country Road, 2026. Painted by Mo Alimi while writing “Kids Are Born Painters”.',

    },
    `It is not technically perfect. That is partly the point. I spend a lot of time writing about artists whose command of their work is far beyond mine. But somewhere along the way, I had also become one of those adults who hesitated before drawing because I already knew what “good” was supposed to look like.`,
    `This time, I just made something.`,
  

    `Growing up in Nigeria, school slowly introduced another relationship with the page.`,

    `We had handwriting books filled with lines. Letters, words and sentences were repeated again and again across pages until they looked the way they were supposed to look. The purpose was practical: your handwriting needed to be clear enough for another person to read.`,

    `We were taught to write properly.`,

    `At the time, I never thought much about it. It was simply school. You followed the lines. You copied what was written above. You repeated it until your handwriting became consistent.`,

    `But years later, I find myself thinking about what else those pages were teaching us.`,

    `Consistency.`,

    `Order.`,

    `Legibility.`,

    `How to make one line resemble the line before it.`,

    `There was a correct way for the letters to sit on the page, and our job was to reproduce it.`,

    `Meanwhile, at the back of my notebooks, another education was happening.`,

    `That was where the drawings lived.`,

    `Faces. Shapes. Names written in strange lettering. Signatures I kept redesigning. Little images that had nothing to do with whatever lesson was happening at the front of the book.`,

    `Nobody assigned those pages.`,

    `There was no mark for them. No teacher had asked me to make them.`,

    `I made them because I wanted to.`,

    `Most of my elementary-school notebooks had something happening at the back. Drawings, scribbles, signatures — whatever came into my head.`,

    `And then, slowly, they disappeared.`,

    `The further I moved through school, the cleaner the notebooks became.`,

    `There was more to learn. More to memorize. More that could be right or wrong.`,

    `The drawings at the back became fewer until eventually there were hardly any at all.`,

    `For a long time, I thought that was simply growing up.`,

    `Now I wonder whether it was also conditioning.`,

    `As children, we are constantly being taught how to make ourselves understandable.`,

    `Write on the line.`,

    `Form the letter properly.`,

    `Follow the example.`,

    `Stay within the margin.`,

    `And these lessons are necessary. Being understood matters. Learning structure matters.`,

    `But somewhere inside all that instruction, I wonder if we begin to confuse being understood with being correct — and being correct with being good.`,

    `Maybe that is where some of us first learn not to create like artists, but like conformists.`,

    `The strange thing is that before anybody teaches us how to write properly, most of us are already drawing.`,

    `We pick up crayons before we understand composition. We make people out of circles and lines before anyone explains proportion. We put the sun in the corner of the page because that is where the sun belongs in the world we have made.`,

    `Nobody needs to tell us to make something.`,

    `We just do.`,

    {
      type: 'heading',
      text: 'A Kid Could Do It',
    },

    `If we are artists first, and children are naturally comfortable making things, why do so many adults eventually say, “I can’t draw”?`,

    `Maybe because somewhere along the way, making becomes something we believe we have to know how to do properly.`,

    `We learn that there is a correct way to write, a correct way to solve a problem, a correct way to structure an answer. Eventually, that instinct can follow us into art.`,

    `The question changes from “What do I want to make?” to “Do I know how to make this correctly?”`,

    `French artist The Wa seems interested in reversing that question.`,

    `For PFFFestival 2026 in Stuttgart, he painted an entire vacant house as part of his ongoing series, A Kid Could Do It.`,

    `The title almost sounds like an insult — the sort of thing somebody might say while standing in front of contemporary art they do not understand.`,

    `A kid could do that.`,

    `But in The Wa’s work, that sentence becomes something closer to a compliment.`,

    {
      type: 'image',
      src: wa2,
      alt: 'The Wa painted vacant house for A Kid Could Do It at PFFFestival 2026 in Stuttgart',
      
      caption:
        'The Wa, A Kid Could Do It, 2021. Atlantic Wall. Image via The Wa’s official website.',
    },

    `The house is covered in broad shapes, bright colors and marks that refuse to behave like architecture is supposed to behave. Windows do not interrupt the painting. Doors are not boundaries. Grass, flowers and the structure of the building itself become part of the image.`,

    `It does not seem particularly interested in perspective, balance or refinement.`,

    `That is the point.`,

    `The series began with The Wa and his mother along the Atlantic Wall. Its premise follows something close to the unfiltered creative logic of a child. In Stuttgart, that logic takes over an entire house.`,

    `Looking at it reminded me of those pages at the back of my schoolbooks.`,

    `There was no concern then about whether a face had the right proportions. A house could be larger than a tree. The sun could sit permanently in the corner of the page. A person could be nothing more than a circle with four lines attached to it.`,

    `And somehow, we still knew exactly what everything was.`,

    `Children do not necessarily misunderstand the rules of art.`,

    `They simply have not learned to be intimidated by them yet.`,

    `There is something powerful about an adult artist trying to return to that place.`,

    `But what happens when the artist is still a child?`,

    {
      type: 'heading',
      text: 'Before the Rules Arrive',
    },

    `The Wa is an adult artist trying to return to the freedom of a child.`,

    `Ace-Liam Nana Sam Ankrah never had to return to it.`,

    `The Ghanaian artist began painting when he was six months old. His mother, visual artist Chantelle Kuukua Eghan, was working on a commission when she placed a canvas and paint on the floor beside him. As he crawled through the colors, he spread the paint across the canvas.`,

    `The resulting work became his first painting, The Crawl.`,

    {
      type: 'image',
      src: liam9,
      alt: 'Ghanaian child artist Ace-Liam Nana Sam Ankrah painting',
    
      caption:
        'Ace-Liam Nana Sam Ankrah painting at an early age. Image via @ace_liam_paints on Instagram',
    },

    `Think about that for a moment.`,

    `Six months old.`,

    `There was no formal understanding of composition. No art history. No concern about whether the colors belonged together. No anxiety about whether somebody would understand the work.`,

    `There was paint.`,

    `There was a surface.`,

    `And there was curiosity.`,

    `By the time he was one year and 152 days old, Guinness World Records had recognized Ace-Liam with a record for his age as an artist.`,

    `His debut came at the Soundout Premium Exhibition at Ghana’s Museum of Science and Technology, where nine of the ten works he exhibited sold within three days.`,

    `His work would go on to appear in exhibitions and private collections, and he was later recognized among the young achievers featured by Guinness World Records.`,

    `The record itself is extraordinary.`,

      {
      type: 'image',
      src: liam11,
      alt: 'Ghanaian child artist Ace-Liam Nana Sam Ankrah painting',
    
      caption:
        'Image via Ace-Liam Nana Sam Ankrah’s official website, aceliam.com.',
    },

    `But for me, the more interesting part of Ace-Liam’s story is not how young he was when the world decided to call him an artist.`,

    `It is that he was making art long before he could possibly understand what being an artist meant.`,

    `He could paint before he could explain painting.`,

    `And maybe that is the point.`,

    `When an adult stands in front of a work and says, “A kid could do that,” the sentence is usually meant to diminish the work.`,

    `But what if we have it backwards?`,

    `What if the remarkable thing is that a kid could do it?`,

    `A child has not yet accumulated all the reasons an adult gives for not making something.`,

    `They have not decided that they cannot draw.`,

    `They have not learned which colors supposedly clash.`,

    `They are not embarrassed by the crooked line.`,

    `They have not learned to look over their shoulder for approval before putting something onto the page.`,

    `Ace-Liam’s paintings make that freedom literal.`,
    
      {
      type: 'image',
      src: liam2,
      alt: 'Ghanaian child artist Ace-Liam Nana Sam Ankrah painting',
    
      caption:
        'Whispers of Colour',
    },

    `His hands meet the paint before judgment does.`,

    `And suddenly The Wa’s title, A Kid Could Do It, begins to sound different.`,

    `A kid could do it.`,

    `Perhaps the question is why so many of us eventually believe we cannot.`,

    `Not because technique does not matter.`,

    `Not because education has no value.`,

    `Formal training can sharpen an artist’s eye, deepen their knowledge of history and give them tools they may never have discovered alone.`,

    `But tools are different from permission.`,

    `The problem begins when learning how something is traditionally done becomes a belief that it is the only way it can be done.`,

    `Art has always made room for the crooked line, the strange proportion, the unexpected color and the thing that initially looks wrong.`,

    `One person can walk past a painting and say, “My child could do that.”`,

    `Another person can stand in front of the same painting for twenty minutes.`,

    `Perhaps both responses tell us something about art.`,

    `But I keep returning to the child.`,

    `The child would probably just pick up the crayon.`,

    `And draw.`,
  ],

images: [],
youtube: "",

},




'What We Carry Inside': {
  category: 'Essay',

  title: 'What We Carry Inside',
//   audio: {
//   // src: bluIntro,
//   type: 'intro',
//   label: 'Before You Read',
// },


  author: 'Mo Alimi',

  readTime: '9 min read',

  publishedAt: '2026-09-28T12:00:00-06:00',

  issueNumber: 7,

  issue: 'Issue 07',
intro:
    'Before BLU became a language of blue figures, dark eyes, and interior worlds, I knew him as a teenager in Debrecen, Hungary.',

  heroImage: blu9,

  heroImageCaption:
    'Woman With A Cane” ( 2021 )',

  body: [
    'BLU hails from Benin City, Nigeria, a place known for its deep artistic heritage. He moved to Debrecen, Hungary at a young age to study electrical engineering at University of Debrecen(Debreceni Egyetem).',

    'We became friends quickly.',

    'We were both young Nigerians trying to understand Europe, its social codes, its institutions, and the power structures that came with moving through a place that was not originally ours. There were difficult moments, but there was also freedom in those years. Looking back, it is an experience we both still cherish.',

    'Art was one of the things that made those years easier to understand.',

    'We spent endless hours picking beats, talking about music, trying to express ideas, and finding different ways to turn whatever we were experiencing into something creative. Sometimes there was no finished song or grand idea at the end of it. We were simply young people trying to make sense of ourselves.',

    'Years later, when I look at BLU’s paintings, I sometimes feel as though those conversations never completely disappeared.',

    'They simply changed form.',

    'His work is bright, immediately recognizable, and filled with characters that can seem playful at first. Electric blue sits beside orange, yellow, red, green, and purple. The figures have oversized heads, dark circular eyes, simplified bodies, and an almost childlike softness.',

    'You can look at them quickly and enjoy the color.',

    'But I do not think they are paintings that should be looked at quickly.',

    'Stay with them long enough and something else begins to emerge.',

    'The figures can feel quiet even when the paintings are loud. They can appear surrounded and still somehow alone. Their faces rarely tell you exactly what they are feeling, yet you sense that something is happening underneath.',

    'That tension feels familiar to me.',

    'During BLU’s early years in America, I remember him telling me about experiencing anxiety at a social gathering.',

    'It was not some dramatic confession. It was just a conversation between friends.',

    'But I remembered it.',

    'And later, looking through his work, I began noticing small traces of that emotional sensitivity everywhere.',

    'Not because I believe every painting is secretly about anxiety.',

    'That would be too easy.',

    'What interests me is something broader: BLU seems deeply interested in the distance between what a person looks like from the outside and what they may be carrying internally.',

    {
      type: 'heading',
      text: 'BLU',
    },

    'Blue is a color.',

    'But it is also one of the words we have given to feeling.',

    'We say someone feels blue. The color can suggest sadness, quiet, distance, melancholy, calm, depth, even spirituality.',

    'I do not know whether any of that explains why he chose the name BLU, and I would not want to invent an explanation for him.',

    'But knowing him has made it difficult for me to see the name as merely branding.',

    'It feels emotional.',

    'And once you begin looking at the paintings through that possibility, the blue figure starts to become more than a recurring character.',

    'Sometimes it feels like an emotional body.',

    'A place where something internal has been given a physical form.',

    {
      type: 'heading',
      text: 'Lost in a Beautiful Dream',
    },

    'One painting made me think about this more deeply than most.',

    'BLU calls it Lost in a Beautiful Dream.',

    {
      type: 'image',
      src: blu2,
      alt: 'Lost in a Beautiful Dream by BLU The Genius',
      title: 'Lost in a Beautiful Dream',
      // caption: 'BLU The Genius',
    },

    'A young girl stands against an intense orange-red background. She wears yellow. Flowers rise from the ground around her feet. The entire painting feels alive with color.',

    'But under one arm, she carries a smaller BLU figure.',

    'That is the detail I keep returning to.',

    'She does not appear to cradle it carefully.',

    'Her arm closes around it firmly, almost possessively, pressing the smaller figure against her body.',

    'It looks less like the casual way a child might carry a toy and more like the way someone holds onto something they are not prepared to lose.',

    'That distinction changes the painting for me.',

    'Maybe it is simply a doll.',

    'But the longer I look at it, the less interested I become in whether the object is literally a toy.',

    'I am interested in the grip.',

    'She is holding on.',

    'People do that emotionally all the time.',

    'We hold onto memories. We hold onto people. We hold onto fear. We hold onto younger versions of ourselves. We hold onto dreams that have not happened yet.',

    'Sometimes we carry these things so closely that they begin to feel inseparable from who we are.',

    'The smaller BLU figure even resembles the person carrying it.',

    'That opens another possibility.',

    'Perhaps she is not carrying somebody else at all.',

    'Perhaps she is carrying some smaller version of herself.',

    'That thought takes me back to the conversation about anxiety.',

    'Someone can walk into a room full of people and still be carrying an entirely separate world inside.',

    'From the outside, there is simply a person attending a social gathering.',

    'Inside, there may be discomfort, noise, insecurity, pressure, memory, or the sudden desire to disappear.',

    'You can be physically present while emotionally somewhere else.',

    'Maybe that is what makes the title Lost in a Beautiful Dream so compelling.',

    'There is beauty.',

    'There is dreaming.',

    'And there is still the possibility of being lost.',

    {
      type: 'heading',
      text: 'The Perfect Family',
    },

    'There is another painting by BLU that complicates the idea of what a family is supposed to look like.',

    'He calls it The Perfect Family.',

    {
      type: 'image',
      src: blu1,
      alt: 'The Perfect Family by BLU The Genius',
      title: 'The Perfect Family',
      // caption: 'BLU The Genius',
    },

    'At the center stands a mother, surrounded by children. She is considerably larger than everyone around her, almost architectural in the way she holds the composition together. The children gather around her body as though she is not simply another member of the family but its structure.',

    'Behind them, however, another figure appears.',

    'It is much darker, almost swallowed by the purple background. Its features are familiar — the same circular eyes, the same simplified BLU form — but unlike the rest of the family, it does not fully occupy the foreground.',

    'It watches.',

    'Knowing that BLU grew up with a single mother makes the painting difficult for me to see in conventional terms.',

    'The mother appears to occupy both maternal and paternal space. She is the visible authority, protector and physical center of the household.',

    'And yet the shadowed figure behind the family creates another possibility.',

    'I read it almost spiritually.',

    'Not necessarily as an absent father in the literal sense, but as the idea that family can contain people who are no longer physically standing beside us. Ancestors, memories, inherited presence — those who remain part of a family even when they exist somewhere beyond the visible world.',

    'That makes the title The Perfect Family especially important.',

    'BLU does not seem to define perfection through the conventional picture of mother, father and children standing neatly together.',

    'His perfect family is already complete.',

    'The mother is there.',

    'The children are there.',

    'And behind them, perhaps, are the people and histories that helped make them who they are.',

    'Perfection here is not symmetry.',

    'It is belonging.',

    {
      type: 'heading',
      text: 'The Invisible Things',
    },

    'That sense of belonging — of carrying people, memories, and emotions even when they are not physically present — begins to feel like a thread running through BLU’s work.',

    'In Lost in a Beautiful Dream, the smaller figure is held tightly against the body.',

    'In The Perfect Family, another figure exists quietly in the background.',

    'One is carried.',

    'The other watches.',

    'Both are present without demanding the center of the painting.',

    'That interests me because so much of emotional life works the same way. The things that shape us are not always the things other people can immediately see.',

    'We carry our childhood.',

    'We carry our families.',

    'We carry the people who raised us.',

    'We carry the places we have left.',

    'We carry old fears into new rooms.',

    'Sometimes we even carry versions of ourselves that no longer fully exist.',

    'BLU seems to understand that people are rarely only what is visible in front of you.',

    'Perhaps that is why his characters can look so simple while feeling emotionally complicated.',

    'The circular eyes rarely tell us exactly what is happening. They do not smile for reassurance. They do not cry to announce sadness. They simply look.',

    'And in that lack of explanation, the viewer is forced to stay a little longer.',

    'You begin wondering what sits behind the expression.',

    {
      type: 'heading',
      text: 'Budapest',
    },

    'I think back to Budapest.',

    'Before the paintings, before the recurring blue characters, there were two young Nigerians far from home, trying to understand a new continent and ourselves inside it.',

    'We spent hours picking beats, talking about art, music, ideas, and whatever else young people talk about when they are still becoming who they will eventually be.',

    'Neither of us could have fully understood then what migration, friendship, family, anxiety, ambition, or distance would eventually mean to us.',

    'You understand some experiences only after you have left them.',

    'And perhaps art is one of the places those experiences return.',

    {
      type: 'heading',
      text: 'Feeling in Color',
    },

    'What makes BLU’s emotional language particularly interesting is that none of it arrives quietly.',

    'The paintings are alive with color.',

    'Blue dominates, but it is constantly pushed against yellow, orange, red, green, and purple.',

    'There is almost a contradiction between what the paintings look like and what they can make you feel.',

    'We often give difficult emotions dark colors.',

    'Sadness becomes grey.',

    'Fear becomes black.',

    'Loneliness becomes an empty room.',

    'BLU does not seem interested in that visual shorthand.',

    'His difficult feelings can exist beneath an orange sky.',

    'A family can carry absence while surrounded by purple.',

    'A figure can appear lost while standing inside something beautiful.',

    'That feels closer to real life.',

    'A beautiful day does not prevent anxiety.',

    'A loving family does not mean nobody is missing.',

    'Success does not erase insecurity.',

    'Moving somewhere new can be exciting and isolating at the same time.',

    'Human beings are capable of holding opposing feelings together.',

    'BLU paints as though color can hold those contradictions too.',

    //     {
    //   type: 'heading',
    //   text: 'Timelines',
    // },

    // 'Earlier today, BLU and I got on a call.',

    // 'We spoke about timelines, numbers, combinations, permutations — all the different ways a life can come together.',

    // 'At one point, he said something that stayed with me: do not spend your time simply asking for money. Ask for the wisdom to recognize the right timeline, and the wisdom to place yourself inside it.',

    // 'I understood what he meant.',

    // 'Roll the dice.',

    // 'Try different things.',

    // 'Change the combination.',

    // 'Move the pieces around.',

    // 'There is rarely only one permutation through which a life can work.',

    // 'The opportunity might come through art. Through engineering. Through a friendship. Through moving countries. Through a conversation you did not expect to have. Through something you tried almost accidentally and decided to keep pursuing.',

    // 'You cannot always know beforehand which combination will open the next door.',

    // 'Maybe the point is not to become obsessed with predicting the exact route.',

    // 'Maybe you keep moving with enough curiosity and enough wisdom to recognize the moment when your timeline changes.',

    // 'BLU and I met years ago as two Nigerian students in Europe, picking beats and trying to understand ourselves. Neither of us could have calculated where those conversations would eventually lead.',

    // 'And yet here we are, years later, still talking about art, possibility, numbers, ideas, and what comes next.',

    // 'There is something beautiful about that.',

    // 'Keep trying the combinations. Keep rolling the dice. Keep making things.',

    // 'Life has more than one way of arriving.',

    // 'And perhaps, when you remain open enough to its possibilities, it begins to arrive in abundance.',

    {
  type: 'heading',
  text: 'Timelines',
},

'Earlier today, BLU and I got on a call.',

'We spoke about timelines, numbers, combinations, permutations — all the different ways a life can come together.',

'At one point, he said something that stayed with me: do not spend your time simply asking for money. Ask for the wisdom to recognize the right timeline, and the wisdom to place yourself inside it.',

'Then he said something else:',
  '“Even Jesus sef almost break character.”',

'I understood the point less as theology and more as a reminder that pressure can reach anyone.',

'Even the person trying to stay disciplined, faithful to a path, or committed to who they believe they are can reach a moment where the weight of things becomes difficult to carry.',

'So maybe wisdom is not about never bending.',

'Maybe it is about knowing who you are well enough to return to yourself.',

'Roll the dice.',

'Try different things.',

'Change the combination.',

'Move the pieces around.',

'There is rarely only one permutation through which a life can work.',

'The opportunity might come through art. Through engineering. Through a friendship. Through moving countries. Through a conversation you did not expect to have.',

'You cannot always know beforehand which combination will open the next door.',

'Maybe the point is not to become obsessed with predicting the exact route.',

'Maybe you keep moving with enough curiosity and enough wisdom to recognize the moment when your timeline changes.',

'Keep trying the combinations. Keep rolling the dice. Keep making things.',

'Life has more than one way of arriving.',

'And perhaps, when you remain open enough to its possibilities, it begins to arrive in abundance.',

    {
      type: 'heading',
      text: 'What We Carry Inside',
    },

    'The longer I look at BLU’s work, the less I think the blue character is simply a signature.',

    'For me, it has started to feel like a container.',

    'Something capable of holding whatever cannot easily be explained.',

    'Anxiety.',

    'Memory.',

    'Family.',

    'Protection.',

    'Absence.',

    'Belonging.',

    'Perhaps even the younger self.',

    'That does not mean every blue figure represents the same thing. Part of the strength of the character is that it does not have to.',

    'It can change depending on the painting.',

    'And depending on who is looking.',

    'That is why I return again to the name.',

    'BLU.',

    'Blue is a color.',

    'But it is also one of the words we have given to feeling.',

    'I do not know whether BLU chose the name for that reason.',

    'Maybe he did.',

    'Maybe he did not.',

    'But after knowing him across different places and different stages of life, and after spending time with these paintings, it has become difficult for me to separate the color from the emotional world he has built around it.',

    'Perhaps that is what stays with me most.',

    'BLU’s paintings remind me that what makes a person whole is not always visible.',

    'Sometimes it is the memory standing behind us.',

    'Sometimes it is the smaller version of ourselves we are still holding onto.',

    'Sometimes it is the family that does not look the way the world expects it to look.',

    'And sometimes it is simply a feeling we have carried for so long that, eventually, we have to give it a color.',
  ],

  images: [blu1, blu2, blu3],

  youtube: '',

  

  artistSlug: 'blu-the-genius',
},

'black-utopia': {
  category: 'Criticism',

  title: 'Black Utopia',

  author: 'Mo Alimi',

  readTime: '9 min read',

  publishedAt: '2026-10-05T12:00:00-06:00',

  issueNumber: 8,

  issue: 'Issue 08',

  // Add this after you create his artist profile
  artistSlug: 'joshua-oyeleye',

  intro:
    'Joshua Oyeleye paints Black figures with a sense of individuality that resists perfection, uniformity and the pressure to perform identity. The longer I spend with the work, the more I begin to wonder whether Black utopia is not Black perfection at all, but Black permission.',

  heroImage: oyeleye5,

  heroImageCaption:
    '"A Reader" Artwork by Joshua Oyeleye',

  body: [
    `Lately, I have been spending time with Joshua Oyeleye’s work, and the first thing that came to my mind was Black Utopia.`,

    `I called it that because I began to see in Oyeleye’s work something close to the transformative power of art — the possibility for Black people to see themselves as whole, and perhaps reconnect with an identity that history has repeatedly tried to strip away.`,

    `The more I stare into the paintings, though, the less this utopia seems to be about perfection.`,

    `Oyeleye paints as though beauty has room for flaws. His figures feel alive, confident and individual.`,

    `There are bald-headed women, Afros, braids and hairstyles that might, in another context, be considered rebellious.`,

    `But what interests me is that Oyeleye’s Blackness does not always announce itself through confrontation.`,

    `There is softness here.`,

    `The figures do not seem to be performing Blackness for anybody. They simply exist inside it.`,

    {
      type: 'heading',
      text: 'Beyond the Surface',
    },

    `Oyeleye describes his practice as an exploration of human nature through realism, figures and expression.`,

    `He believes art should reflect reality while also becoming a space for emotional and intellectual exploration.`,

    `In his own description of the work, each piece becomes a dialogue between artist and observer — a place where personal stories and universal themes intersect.`,

    `That matters to the way I have been reading these paintings.`,

    `Oyeleye does not seem interested in prescribing one meaning for every figure. The viewer is given room to bring something of themselves into the image.`,

    `Perhaps that is why I arrived at Black Utopia.`,

    `Not because Oyeleye himself calls the work utopian, and not because I believe every figure represents some ideal Black future. The phrase emerged from what happened to me while looking.`,

    `His figures made me imagine a world in which Black people could occupy an image without being reduced to stereotype, explanation or performance.`,

    {
      type: 'image',
      src: oyeleye3,
      alt: 'Artwork by Joshua Oyeleye',
      caption: '"Beauty in Virtue II" Artwork by Joshua Oyeleye',
    },

    `This becomes especially interesting when placed beside his commitment to realism.`,

    `Realism usually suggests accuracy — an attempt to represent the world as it is.`,

    `But Oyeleye’s paintings make me wonder whether realism can also reveal possibilities hidden inside reality.`,

    `Can a portrait show us not only who we are, but who we have been prevented from imagining ourselves to be?`,

    {
      type: 'heading',
      text: 'The Free World of Art',
    },

    `While reading bell hooks’ Art on My Mind, I came across an idea that stayed with me: art as a space where, even momentarily, we might become whatever we wanted to be.`,

    `That idea began to change the way I looked at Oyeleye’s paintings.`,

    `What happens when Black people enter an image and are allowed to become whatever they want to be?`,

    `A bald Black woman does not necessarily have to symbolize resistance.`,

    `An Afro does not always have to announce militancy.`,

    `Braids do not have to explain Africa.`,

    `Dark skin does not have to carry the burden of becoming a political statement.`,

    `A Black person can simply be beautiful, strange, thoughtful, soft, imperfect, stylish, serious, uncertain, intelligent or completely self-contained.`,

    `Maybe that is part of the utopia.`,

    `Not the disappearance of history, but freedom from having every part of your existence explained through it.`,

    {
      type: 'heading',
      text: 'Hair, Freedom and the Right to Appear',
    },

    `Hair has never been neutral in the history of Black identity.`,

    `Afros, braids, shaved heads, natural textures and hairstyles outside European beauty standards have often carried social and political meaning.`,

    `That history makes it tempting to approach every unconventional hairstyle in Oyeleye’s work as an act of defiance.`,

    `But I am not sure that is always necessary.`,

    `Perhaps there is another kind of freedom in allowing Black hair to exist without requiring it to constantly symbolize struggle.`,

    `The Afro can carry history and still just be somebody’s hair.`,

    `Braids can hold cultural memory and still be beautiful without explanation.`,

    `A shaved head does not have to prove rebellion.`,

    {
      type: 'image',
      src: oyeleye4,
      alt: 'Portrait painting by Joshua Oyeleye',
      caption: '"The African bald" Artwork by Joshua Oyeleye',
    },

    `Maybe one of the freedoms these paintings offer is the freedom from constant interpretation.`,

    `The figures can carry history without becoming trapped inside it.`,

    {
      type: 'heading',
      text: 'Black Permission',
    },

    `The more time I spend with Oyeleye’s work, the more I return to one thought:`,

    `Black Utopia is not Black perfection. It is Black permission.`,

    `Permission to be bald.`,

    `Permission to wear braids.`,

    `Permission to wear an Afro.`,

    `Permission to be soft.`,

    `Permission to be difficult.`,

    `Permission to be beautiful without becoming ornamental.`,

    `Permission to carry history without allowing history to determine the limits of who you can become.`,

    `Perhaps the transformative power of art is not that it gives Black people a new identity.`,

    `Perhaps it reminds us that there was never only one version of us to begin with.`,

    `Not a perfect Black world.`,

    `Not a world where everybody looks the same, thinks the same or speaks with one voice.`,

    `A world where difference does not threaten belonging.`,

    `A world where Black people can exist in many forms and still recognize one another.`,

    `A world where beauty can contain flaws.`,

    `A world where Blackness can be political, but does not always have to announce itself politically.`,

    `Not momentarily.`,

    `But fully.`,
  ],

  images: [
    oyeleye1,
    oyeleye3,
    oyeleye4,
  ],

  youtube: '',
},

'who-taught-you-what-success-looks-like': {
  category: 'Studio Notes',

  title: 'Who Taught You What Success Looks Like?',

  author: 'Mo Alimi',

  readTime: '5 min read',

  publishedAt: '2026-10-05T12:00:00-06:00',

  issueNumber: 8,

  issue: 'Issue 08',

  artistSlug: 'joshua-oyeleye',

  intro:
    'Joshua Oyeleye’s We Have Ambition made me question why we so quickly associate knowledge with books, institutions and formal education — and what happens when education becomes tied to migration, survival and the idea of success.',

  heroImage: supportingCover,

  heroImageCaption:
    '"We Have Ambition" Artwork by Joshua Oyeleye',

  body: [
    `There is a painting in Joshua Oyeleye’s work that made me hesitate.`,

    `In We Have Ambition, a young Black boy stands against a vivid red background. He is formally dressed, books pressed tightly against his chest, his eyes looking upward.`,

    `You almost know how to read the image before you begin looking.`,

    `Education.`,

    `Ambition.`,

    `Possibility.`,

    `A future.`,

    `And perhaps that familiarity is precisely what interests me.`,

    `Oyeleye is Nigerian and connected to Ibadan, a city deeply associated with higher education in Nigeria.`,

    `So when I look at this boy holding books, the image feels particularly familiar.`,

    `For many of us who grew up around African ideas of success, education was rarely presented as just one possible path through life.`,

    `It could feel like the path.`,

    `You went to school.`,

    `Then university.`,

    `Then perhaps a master’s.`,

    `Then perhaps a PhD.`,

    `And increasingly, somewhere inside that progression sits another dream:`,

    `Leave.`,

    {
      type: 'heading',
      text: 'Education as a Way Out',
    },

    `There is a particular relationship many African families have with education.`,

    `A degree does not simply represent knowledge.`,

    `It can represent security.`,

    `It can represent status.`,

    `It can represent a visa.`,

    `It can represent the possibility of entering another country, another economy, another life.`,

    `Sometimes academia becomes refuge.`,

    `A master’s program abroad can become an entry point.`,

    `A PhD can become another.`,

    `Scholarships, research positions and universities can offer routes through borders that might otherwise be difficult to cross.`,

    `And so education becomes tangled with something larger than learning.`,

    `Survival.`,

    `Migration.`,

    `Escape.`,

    `The Nigerian word japa has come to describe the desire — and increasingly the strategy — to leave in search of opportunity elsewhere.`,

    `And there is a version of the japa dream that looks remarkably similar to the traditional American Dream.`,

    `Study hard.`,

    `Acquire qualifications.`,

    `Leave home.`,

    `Work.`,

    `Become successful.`,

    `Send something back.`,

    `Build a different life.`,

    `For many people, that path is real.`,

    `Education has transformed families, opened borders and created possibilities that previous generations could not access.`,

    `I would never dismiss that.`,

    `But We Have Ambition made me ask another question:`,

    `When education becomes one of our most dependable routes toward freedom, what happens to the way we define ambition itself?`,

    {
      type: 'heading',
      text: 'What Does Ambition Look Like?',
    },

    `Look again at the boy.`,

    `The suit.`,

    `The tie.`,

    `The books.`,

    `The upward gaze.`,

    `Even before knowing the title, the visual language feels legible.`,

    `This child is going somewhere.`,

    `But why?`,

    `Would I have understood him as ambitious without the books?`,

    `Would I have understood him as successful without the formal clothes?`,

    `Would the same upward gaze mean something different if he were holding a paintbrush, learning a trade, working beside his mother, or simply standing alone?`,

    `That is where the painting begins to turn back toward me.`,

    `Perhaps Oyeleye is not telling us what ambition must look like.`,

    `Perhaps I have already been taught.`,

    {
      type: 'heading',
      text: 'Knowledge Before the Classroom',
    },

    `That becomes uncomfortable because many of the people who taught us how to survive did not necessarily have the qualifications we later learned to associate with intelligence.`,

    `Many of our mothers and grandmothers did not experience Western education in the way later generations did.`,

    `That did not make them without knowledge.`,

    `They understood people.`,

    `Family.`,

    `Trade.`,

    `Community.`,

    `Memory.`,

    `Language.`,

    `Responsibility.`,

    `Faith.`,

    `Survival.`,

    `Knowledge could move through storytelling, observation, apprenticeship, repetition and oral tradition.`,

    `Sometimes you learned because somebody sat you down and explained something.`,

    `Sometimes you learned because nobody explained anything at all.`,

    `You watched until you understood.`,

    `Some wisdom never entered a textbook.`,

    `Some intelligence never received a certificate.`,

    `A person can be educated without being Westernized.`,

    `And wisdom does not begin when somebody learns how to read a book.`,

    {
      type: 'heading',
      text: 'The Loop',
    },

    `Still, I understand why we hold onto formal education so tightly.`,

    `Because sometimes it works.`,

    `You study because education offers mobility.`,

    `You pursue another degree because the previous one did not provide enough mobility.`,

    `Then perhaps another qualification creates access to another country.`,

    `But there is a strange contradiction there.`,

    `The thing intended to move us beyond survival can sometimes keep us permanently preparing to survive.`,

    `Bachelor’s.`,

    `Master’s.`,

    `PhD.`,

    `Postdoc.`,

    `Another application.`,

    `Another visa.`,

    `Another institution.`,

    `Another threshold to cross before life supposedly begins.`,

    `Education can liberate us while also becoming a loop.`,

    `That tension is more interesting to me than simply criticizing Western education.`,

    `The question is not whether university is good or bad.`,

    `The question is what happens when education becomes one of the only futures we know how to imagine.`,

    {
      type: 'heading',
      text: 'The Painting Is Not the Accusation',
    },

    `I want to be careful here.`,

    `I do not know that Oyeleye intended We Have Ambition as a critique of education, migration or Western ideas of success.`,

    `I would be placing too much on the painting if I claimed that.`,

    `Oyeleye has described his work as a dialogue between the artist and the observer.`,

    `So perhaps this is my side of the conversation.`,

    `He gives me a boy.`,

    `Books.`,

    `A suit.`,

    `A gaze turned upward.`,

    `And my own history supplies the rest.`,

    `University.`,

    `Success.`,

    `Migration.`,

    `The American Dream.`,

    `Japa.`,

    `That may tell me as much about the world that taught me to look as it does about the painting itself.`,

    {
      type: 'heading',
      text: 'What Does Black Utopia Know?',
    },

    `This is where We Have Ambition begins to speak to the larger question of Black Utopia.`,

    `If Black Utopia means freedom from externally imposed standards, then we cannot stop with beauty.`,

    `We cannot only ask who taught us what beautiful Black people should look like.`,

    `We also have to ask:`,

    `Who taught us what an intelligent Black person looks like?`,

    `Who taught us what success looks like?`,

    `Who taught us what ambition looks like?`,

    `And who taught us that moving farther away from home could sometimes be evidence that we had made it?`,

    `There is nothing wrong with books.`,

    `There is nothing wrong with master’s degrees.`,

    `There is nothing wrong with PhDs.`,

    `There is nothing wrong with leaving.`,

    `For generations, these things have opened real doors.`,

    `But perhaps freedom also means being able to imagine a life in which they are possibilities rather than requirements.`,

    `Maybe the books in Oyeleye’s painting represent access.`,

    `Maybe curiosity.`,

    `Maybe aspiration.`,

    `Maybe they simply belong to this boy.`,

    `I do not need the painting to resolve that for me.`,

    `What interests me is that I knew what I thought those books meant before I had even finished looking.`,

    `And perhaps that is what compelling art can do.`,

    `It gives us an image.`,

    `Then it makes us examine the world that taught us how to read it.`,

    `Who taught you what knowledge looks like?`,

    `And perhaps the harder question:`,

    `Who taught you what a successful life is supposed to look like?`,
  ],

  images: [],

  youtube: '',
},


'okada-man': {
  category: 'street-to-studio',

  title: 'Okada Man',

  author: 'Mo Alimi',

  readTime: '7 min read',

  publishedAt: '2026-10-08T09:00:00-06:00',

  issueNumber: 9,

  issue: 'Issue 09',

  artistSlug: 'adekoya-pelumi',

  intro:
    'I remember the sensation of being carried more clearly than the people who carried me. Through Pelumi Adekoya’s Artwork, a familiar Nigerian journey becomes a reflection on labor, memory, and the lives behind the handlebars.',

  // Import the artwork at the top of Article1.tsx:
  // import okadaMan from '../assets/okada-man.jpg';
  // Adjust the path and extension to match your file.

  heroImage: pelumi1,

  heroImageCaption: 'Happiness in the garage',

  body: [
    {
      type: 'heading',
      text: 'Oga, take am easy!',
    },

    `I remember hopping on the back of an Okada without a helmet, fully aware that anything could happen.`,

    `There was nothing between my head and the road but hope, perhaps a little prayer.`,

    `Yet there was something about those rides that made the risk feel worthwhile. The wind against my face, the sound of the engine, the adrenaline rushing through my body, and the occasional small talk with a man whose name I would probably never know.`,

    `Whenever the rider stepped too hard on the accelerator, I would shout, "Oga, take am easy!"`,

    `Sometimes he listened. Sometimes I found myself holding on a little tighter.`,

    `There was something strangely exciting about it all. The uncertainty of the road, the speed, the freedom of moving through a familiar place in a way that made it feel unfamiliar again.`,

    `For a few minutes, my destination was in the hands of a stranger, and somehow, that felt like freedom.`,

    `But looking back, I have come to realize something.`,

    `I hardly ever thought about the man whose hands held the handlebars.`,

    `Where was he coming from? How many passengers had he carried that day? Was he going home to someone? Was he tired?`,

    `I never really asked.`,

    `To me, he was the Okada man. The person who got me from one place to another.`,

    `And once I arrived, I paid my fare and continued with my day.`,

    `He waited for the next passenger.`,

    {
      type: 'heading',
      text: 'The Men Behind the Handlebars',
    },

    
    {
      type: 'image',
      src: pelumi4,
      alt: 'Artwork by Pelumi Adekoya',
      caption: '"The Queue" Artwork by Pelumi Adekoya',
    },


    `Looking at Pelumi Adekoya's Okada Man, I find myself thinking less about the motorcycles and more about the men sitting on them.`,

    `The drawing presents several riders gathered on their motorcycles. The man closest to us appears to be speaking, his hand raised in a gesture that suggests a conversation already underway.`,

    `Another turns his head away from the viewer. Behind him, other figures seem to be engaged in their own moments.`,

    `There is no obvious urgency to the scene.`,

    `For men whose work depends on movement, the artist has captured an interesting moment of stillness.`,

    `The motorcycles are rendered with remarkable precision. We can follow the spokes of the wheels, the mechanical arrangements of the engines, the worn surfaces, and the folds of clothing.`,

    `Meanwhile, the background almost disappears into the white paper.`,

    `The surrounding city is barely visible, yet the men remain.`,

    `It is as though the artist has momentarily removed the noise of the streets so that we might finally look at the people who move through them.`,

    `And that makes me wonder how often we actually do.`,

    {
      type: 'heading',
      text: 'The State of the Nation',
    },

    `I remember that conversations with Okada riders often found their way to Nigerian politics.`,

    `The state of the nation was never too far from anybody's lips.`,

    `You could begin a journey as complete strangers and, before reaching your destination, find yourselves discussing the economy, the government, employment, or the direction the country was heading.`,

    `There was something informal about these conversations. No introductions were necessary. No one needed to explain why politics mattered.`,

    `The condition of the country was already part of everyday life.`,

    `Other times, a rider would begin telling me about his education.`,

    `He had gone to school. He had studied something. He had imagined a different future.`,

    `And somehow, life had brought him to the handlebars of an Okada.`,

    `I remember these conversations, but I don't remember asking many questions.`,

    `Perhaps I was too occupied with the road, the wind against my face, and the occasional need to remind him to slow down.`,

    `But looking back, I wonder whether those men were trying to tell me something beyond their educational qualifications.`,

    `Perhaps they wanted me to know that their lives had not begun with the motorcycle.`,

    `That before the handlebars, there were classrooms, examinations, expectations, and imagined futures.`,

    `There were probably people who celebrated their admission into school, encouraged them through difficult examinations, and believed that education would open certain doors.`,

    `And here they were, telling a stranger about those experiences while transporting him through the city.`,

    `I cannot say what each man intended by sharing his story. Perhaps it was simply conversation. Perhaps it was frustration. Perhaps it was pride in an education he had worked hard to obtain.`,

    `But I wonder whether part of it was a desire to be seen beyond the work he was doing.`,

    {
      type: 'heading',
      text: 'What Does a Man Become When His Dreams Change?',
    },

    `There is a temptation to look at a graduate riding an Okada and immediately interpret his life as a story of failure.`,

    `But whose failure would that be?`,

    `The man who found a way to earn a living, or the expectations that told him his education should lead somewhere else?`,

    `We often speak of work as though it gives us a complete understanding of a person.`,

    `A teacher teaches. A driver drives. A mechanic repairs engines. An Okada rider carries passengers.`,

      {
      type: 'image',
      src: pelumi3,
      alt: 'Artwork by Pelumi Adekoya',
      caption: '"Happiness in the garage" Artwork by Pelumi Adekoya',
    },
  

    `We identify people by what they do, sometimes forgetting that work is only one part of a life.`,

    `The man riding an Okada might also be a father, a musician, a university graduate, a football enthusiast, a storyteller, or someone saving money to begin another chapter.`,

    `He may love his work. He may be frustrated by it. He may have chosen it deliberately, or arrived there because other opportunities were unavailable.`,

    `We cannot know simply by looking at him.`,

    `And perhaps that is why I find this drawing so interesting.`,

    `The artist does not present these men as helpless figures waiting for our sympathy.`,

    `They occupy the picture with presence.`,

    `The man on the right is expressive, almost theatrical. His raised hand commands attention. The other men appear absorbed in the world around them.`,

    `They are not reduced to their economic circumstances.`,

    `They are simply there, existing as people.`,

    {
      type: 'heading',
      text: 'The Freedom of One, the Labor of Another',
    },

    `There is another contradiction in my memory that I cannot ignore.`,

    `For me, riding an Okada could feel like an adventure.`,

    `The speed, the wind, the closeness to the road. It was an experience I could enjoy precisely because I knew it would eventually end.`,

    `I would reach my destination, step off the motorcycle, and return to whatever occupied my day.`,

    `For the rider, however, my exciting journey was part of his working day.`,

    `The road I experienced for a few minutes might be one he travelled repeatedly for hours.`,

    `The same traffic, the same uncertainty, the same exposure to danger.`,

    `I was worried about getting to my destination safely.`,

    `He had to think about getting me there safely, finding another passenger, and earning enough to make the day worthwhile.`,

    `Two people sat on the same motorcycle, feeling the same wind, travelling along the same road, but experiencing the journey from entirely different positions.`,

    `I wonder how much of everyday life works this way.`,

    `How often does one person's convenience depend on another person's labor?`,

    `How often do we remember the service and forget the person?`,

    {
      type: 'heading',
      text: 'A Moment Before the Next Passenger',
    },

      {
      type: 'image',
      src: pelumi5,
      alt: 'Artwork by Pelumi Adekoya',
      caption: '"Our Comfort Zone" Artwork by Pelumi Adekoya',
    },


    `What I appreciate about Okada Man is that Pelumi allows these men a moment outside the immediate act of transporting somebody.`,

    `They are not racing through traffic.`,

    `They are not being defined by the passenger sitting behind them.`,

    `They are gathered, speaking, listening, looking around.`,

    `Perhaps they are discussing the day's earnings. Perhaps politics has entered the conversation again. Perhaps someone is telling a joke.`,

    `We do not know.`,

    `And I think it is important that we do not pretend to know.`,

    `The drawing gives us enough to become curious without telling us everything.`,

    `Its remarkable attention to mechanical detail initially draws our eyes toward the motorcycles, but the gestures and expressions of the riders invite us to stay with the people.`,

    `There is something significant about that shift.`,

    `The Okada is the reason we encounter these men, but it does not have to be the limit of our understanding of them.`,

    `Pelumi has drawn the machines that make their work possible while giving us a reason to look beyond the machines.`,

    {
      type: 'heading',
      text: 'The People We Pass Through',
    },

       {
      type: 'image',
      src: pelumi2,
      alt: 'Artwork by Pelumi Adekoya',
      caption: '"Happiness in the Garage" Artwork by Pelumi Adekoya',
    },

    `I have spent a considerable amount of time thinking about those rides since encountering this drawing.`,

    `Not because I can suddenly remember every rider or every conversation.`,

    `I cannot.`,

    `Most of their faces have disappeared from my memory.`,

    `I do not remember their names, where they lived, or what happened after they dropped me off.`,

    `But I remember the wind.`,

    `I remember the sound of the engines.`,

    `I remember conversations about Nigerian politics and men telling me about their education.`,

    `And, perhaps most vividly, I remember myself shouting, "Oga, take am easy!" whenever the motorcycle began moving faster than I was comfortable with.`,

    `It is strange how memory works.`,

    `I remember the sensation of being carried more clearly than the people who carried me.`,

    `Perhaps this is what art can sometimes do. It does not necessarily return us to the past exactly as it happened. Instead, it changes what we notice when we look back.`,

    `Where I once saw a motorcycle and a means of reaching my destination, I now find myself thinking about the person at the front.`,

    `Not as a symbol of suffering. Not as evidence of a country's failures. Not even necessarily as a man whose dreams did not come true.`,

    `But as someone with a life that continued long after I stepped off his motorcycle.`,

    `I paid my fare and went on with my day.`,

    `He probably called out for another passenger.`,

    `And somewhere between one destination and the next, there was an entire human life I never really stopped to consider.`,

    {
      type: 'heading',
      text: 'About the Artist — Pelumi Adekoya',
    },

    `Born on September 28, 2001, in Lagos, Nigeria, Pelumi Adekoya  is a visual artist originally from Ijebu East, Ogun State.`,

    `His passion for drawing began at an early age, eventually leading him to pursue formal art education in Lagos.`,

    `For Pelumi, art is a way of documenting personal experiences and interpreting the world around him. His practice is rooted in observation, capturing scenes as he sees them while sharing the beauty and diversity of everyday life.`,

    `In Okada Man, this interest in ordinary experience comes into focus. Through detailed drawing and careful attention to human presence, Pelumi invites viewers to look more closely at figures who are familiar within Nigerian society but whose individual stories may remain largely unknown.`,
  ],

  images: [],

  youtube: '',
},


// 'a-generation-that-feels-more-than-it-can-explain': {
//   category: 'culture-criticism',

//   title: 'A Generation That Feels More Than It Can Explain',

//   author: 'Mo Alimi',

//   readTime: '9 min read',

//   publishedAt: '2026-10-13T00:00:00-06:00',

//   issueNumber: 10,

//   issue: 'Issue 10',

//   intro:
//     'I started writing this piece trying to understand something I have never quite been able to connect with. Abstract art. Why does something I struggle to understand still leave me so confused and intrigued?',

//   heroImage: krystal1,

//   heroImageCaption:
//     'Abstract artwork by Krystal Bradford — title to be confirmed',

//   body: [
//     `I started writing this piece trying to understand something I have never quite been able to connect with.`,

//     `Abstract art.`,

//     `Why does something I struggle to understand still leave me so confused and intrigued?`,

//     `I have looked at paintings that seem to represent nothing familiar. No recognizable figures, no obvious narratives, sometimes not even a clear beginning or end. Just colors, shapes, and gestures existing on a canvas.`,

//     `And yet, something about them holds my attention.`,

//     `I find myself searching for meaning in things I cannot identify, trying to understand feelings I cannot quite describe.`,

//     `But perhaps I have been asking the wrong question.`,

//     `What if abstraction is not always something we are supposed to understand?`,

//     `What if its power lies in the very things it refuses to explain?`,

//     `Lately, I have been thinking about the deeper search for meaning that seems to shape so much of our generation. Beyond careers, relationships, achievements, and the identities we present to the world, there is a quieter search taking place.`,

//     `The search for ourselves.`,

//     `For inner peace. For spiritual connection. For something that feels true, even when we cannot explain why.`,

//     `And I wonder whether our fascination with abstract art is connected to that search.`,

//     `Perhaps we are drawn to the unknown not because it offers answers, but because it reminds us how much of ourselves remains undiscovered.`,

//     {
//       type: 'heading',
//       text: 'The Things We Cannot Put Into Words',
//     },

//     `We belong to a culture that constantly asks us to explain ourselves.`,

//     `Explain what you do. Explain who you are. Explain your ambitions, your feelings, your relationships, your choices.`,

//     `Even our creativity is expected to arrive with an explanation.`,

//     `A photograph needs a caption. A painting needs a statement. An experience becomes a story, and that story is often expected to mean something to someone else.`,

//     `But what happens to the feelings we cannot explain?`,

//     `The strange sadness that arrives on an otherwise beautiful afternoon. The excitement of moving somewhere new, accompanied by the grief of leaving something behind. The feeling of being surrounded by people and still being unable to describe your loneliness.`,

//     `Sometimes two contradictory emotions can exist within us without either being less real.`,

//     `Perhaps abstraction gives those contradictions somewhere to live.`,

//     `A painting can be chaotic and peaceful at once. A color can appear joyful in one corner and unsettling in another. A composition can feel unfinished without necessarily feeling incomplete.`,

//     `And we are not required to resolve any of it.`,

//     `Maybe that is what makes abstraction so interesting.`,

//     `It does not always ask us to identify what we are seeing. Sometimes it invites us to confront what we are feeling.`,

//     `But even that raises another question.`,

//     `Are those feelings coming from the artwork itself, or are we bringing something of ourselves into it?`,

//     `Perhaps both possibilities deserve consideration.`,

//     {
//       type: 'heading',
//       text: 'When Color Becomes a Language',
//     },

//     `Long before we learn to describe our emotions, we respond to color, movement, sound, and form.`,

//     `A child does not always need to understand why a particular color excites them. They reach for it because something about it feels right.`,

//     `As we grow older, we become more concerned with making things recognizable.`,

//     `We learn to draw inside the lines. We learn that the sky is blue and the grass is green. We learn to compare what we create with what something is supposed to look like.`,

//     `Eventually, many of us stop drawing altogether.`,

//     `We say, "I can't draw."`,

//     `But perhaps what we really mean is that we can no longer draw according to the standards we have learned to accept.`,

//     `This is something I keep returning to when thinking about children and their relationship with art.`,

//     `A child can paint an entire page red without feeling obligated to explain why. They can give a human figure three eyes, make the sun purple, or place a house somewhere in the clouds.`,

//     `We may see a failure of representation.`,

//     `The child may simply see possibility.`,

//     `Of course, abstract art is not the same thing as children's painting. Abstraction can involve enormous technical discipline, historical awareness, and deliberate artistic decisions.`,

//     `But there is a freedom they can sometimes share.`,

//     `The freedom to create without making resemblance the final measure of success.`,

//     `And perhaps some of us spend adulthood trying to recover that freedom.`,

//     {
//       type: 'heading',
//       text: 'A World That Shows Us Everything',
//     },

//     `There is also something strange about the visual world we inhabit.`,

//     `Never before have so many images been so easily accessible to so many people.`,

//     `We can watch someone's wedding in Lagos, a protest in Paris, an exhibition in New York, and a stranger's morning routine in Tokyo, all within a few minutes.`,

//     `We encounter more faces, places, objects, and experiences than we can meaningfully absorb.`,

//     `And increasingly, the images themselves arrive with instructions.`,

//     `This is beautiful. This is desirable. This is successful. This is what you should become.`,

//     `Even our attention is measured.`,

//     `How long did we look? Did we react? Did we share it? Did we understand the message quickly enough to keep scrolling?`,

//     `Abstract art offers an interesting contradiction.`,

//     `On the one hand, its bold colors and unusual forms can be immediately attractive on social media. We might stop scrolling because a painting looks beautiful against a white gallery wall.`,

//     `But visual attraction is not necessarily emotional connection.`,

//     `We can admire a painting's colors without engaging with its ideas. We can photograph something we have barely looked at.`,

//     `And perhaps this is worth questioning rather than celebrating.`,

//     `Are we becoming more connected to abstract art, or simply more attracted to its appearance?`,

//     `The distinction matters.`,

//     `Because some abstract paintings reveal very little in the first few seconds. Their relationships, textures, decisions, and tensions only begin to emerge when we give them time.`,

//     `In a culture that encourages us to move quickly, abstraction can invite us to remain.`,

//     `Not every painting will reward that patience. Not every arrangement of colors carries profound meaning.`,

//     `But sometimes, standing before an image without knowing exactly what to make of it becomes an experience in itself.`,

//     `And maybe that experience is increasingly rare.`,

//     {
//       type: 'heading',
//       text: 'The Spirituality of the Unknown',
//     },

//     `Perhaps there is another reason we find ourselves drawn toward abstraction.`,

//     `Something beyond color, aesthetics, or the desire to express complicated emotions.`,

//     `I wonder whether we are witnessing a deeper search within ourselves.`,

//     `A search for identity that has little to do with the identities we present to the world. A search for spiritual peace, belonging, and the quiet parts of ourselves that often get lost in the noise of everyday life.`,

//     `We spend so much time discovering what exists outside us that we sometimes forget how much remains unexplored within.`,

//     `And perhaps that is where abstract art becomes interesting.`,

//     // =====================================
//     // KRYSTAL BRADFORD — ARTIST CONNECTION
//     // =====================================

//     `Looking at the work of Brisbane-based artist Krystal Bradford, I find myself returning to the uncertainty that first drew me into this conversation.`,

//     `Her abstract paintings explore relationships between color, texture, and surface, drawing on memories and the landscapes surrounding her. Her practice is rooted in drawing, mixed media, and painting, with an interest in raw, vulnerable, and imperfect forms.`,

//     `Yet looking at her work, I find myself searching for something I cannot quite identify.`,

//     {
//       type: 'image',
//       src: krystal1,
//       alt: 'Abstract painting by Krystal Bradford featuring layered shapes and earthy colors',
//       caption: 'Artwork by Krystal Bradford — title to be confirmed',
//     },

//     `There are overlapping forms, earthy colors, and shapes that seem to suggest something familiar without ever fully revealing themselves.`,

//     `I wonder what memories exist within these forms. What part of a landscape has been transformed into color, or what experience has found its way onto the canvas.`,

//     `Perhaps what she remembers and what I recognize are entirely different things.`,

//     `I cannot assume that her intentions were spiritual simply because the painting makes me reflect on my own search for meaning.`,

//     `Krystal approaches the canvas with her own experiences, while I encounter it carrying questions about identity, spirituality, and the unknown.`,

//     `We do not necessarily arrive at the same meaning.`,

//     `But somewhere between what the artist creates and what the viewer experiences, something unexpected can happen.`,

//     `A connection becomes possible without either person needing to explain everything.`,

//     // =====================================
//     // CONTINUE MAIN ARTICLE
//     // =====================================

//     `A painting that represents something familiar can direct our attention toward the subject. But a painting that offers no recognizable subject may redirect that attention toward ourselves.`,

//     `Suddenly, we are not only asking what the artist intended.`,

//     `We are asking why a particular color makes us uncomfortable. Why an unfamiliar shape reminds us of home. Why something we cannot identify brings us an unexpected feeling of peace.`,

//     `There is something almost spiritual about that encounter.`,

//     `Not necessarily religious, but spiritual in the sense of searching for a connection to something that exists beyond what we can immediately see or explain.`,

//     `And I wonder whether the unknown plays an important role in this.`,

//     `We often treat the unknown as something to fear, something to solve, or something to eventually understand.`,

//     `But the unknown can also be a place of possibility.`,

//     `Before we define something, it can exist in several forms within our imagination. Before we attach meaning to an experience, we are free to encounter it without the limitations of what we already know.`,

//     `Perhaps this is why abstraction can feel so powerful.`,

//     `It does not always provide the comfort of an answer. Sometimes it provides the comfort of knowing that an answer is not required.`,

//     `And maybe inner peace is not always found by understanding everything about ourselves.`,

//     `Sometimes it begins with accepting that there are parts of us we have not yet discovered.`,

//     `Perhaps the unknown is powerful because it leaves room for us to become something we have not yet imagined.`,

//     {
//       type: 'heading',
//       text: 'Does Everything Have to Represent Something?',
//     },

//     `I also wonder whether our attraction to abstraction is connected to the expectations we place on artists.`,

//     `When we encounter art, we often arrive carrying assumptions about what it should tell us.`,

//     `We want to know the artist's background, their identity, their struggles, and the social conditions that produced the work.`,

//     `These questions can be important. Art does not exist outside history.`,

//     `But they can also become limitations.`,

//     `A Black artist, for example, may find that their work is continually interpreted through race, politics, or cultural representation, even when their interests extend far beyond those subjects.`,

//     `A painting containing an Afro might be read as resistance. A dark-skinned figure might become a statement about identity. An ordinary moment of beauty might be expected to carry the weight of an entire historical experience.`,

//     `But what about the freedom to make something simply because it is beautiful, strange, playful, or emotionally compelling?`,

//     `What about the freedom not to explain everything through identity?`,

//     `Abstraction can offer one way of challenging those expectations.`,

//     `Not because abstract art is free from politics or history. Some of the most significant abstract practices have emerged directly from political struggles, cultural memory, and questions of belonging.`,

//     `Rather, abstraction reminds us that meaning does not always have to arrive through recognizable symbols.`,

//     `An artist can speak about memory through repetition, about displacement through fractured space, or about intimacy through the relationship between two colors.`,

//     `Sometimes the story is present without being illustrated.`,

//     `And sometimes there may be no story at all.`,

//     `That possibility deserves room, too.`,

//     {
//       type: 'heading',
//       text: 'The Comfort of Not Knowing',
//     },

//     `There is a temptation, especially when writing about art, to explain every artistic decision until the painting becomes something like a puzzle with a correct answer.`,

//     `This color represents grief.`,

//     `That shape symbolizes freedom.`,

//     `The empty space signifies isolation.`,

//     `Sometimes those interpretations are useful. Sometimes they are supported by the artist's intentions.`,

//     `But sometimes they reveal our discomfort with allowing a work to remain uncertain.`,

//     `We want meaning because meaning makes us feel that we have understood something.`,

//     `Yet I wonder whether understanding must always be the destination.`,

//     `Perhaps an abstract painting can move us without our being able to translate that experience into language.`,

//     `Perhaps we can stand before a canvas, feel something intensely, and leave without knowing what it was.`,

//     `Looking at a painting by Jack Kabangu, I find myself thinking again about how quickly abstraction can move us before we fully understand what we are seeing.`,

// {
//   type: 'image',
//   src: jack1,
//   alt: 'Circular abstract painting by Jack Kabangu with red, black, yellow, white, and green forms',
//   caption: '"Red sun/rød sol" — by Jack Kabangu',
// },

// `The work feels immediate. Its circular form, bold contrasts, and intense colors create an encounter that feels almost instinctive before it becomes interpretive.`,

// `I do not know exactly what I am looking at, and that uncertainty becomes part of the experience.`,

// `There are shapes that seem to suggest a presence, a face, or an energy, but nothing settles long enough to become fully fixed.`,

// `And perhaps that is what keeps me there.`,

// `Not the comfort of recognition, but the tension between familiarity and mystery.`,

// `Jack Kabangu’s painting reminds me that abstraction does not always ask for explanation first. Sometimes it asks for attention. Sometimes it asks for feeling.`,

// `What I bring to the work may not be what the artist intended, but that does not make the encounter any less real.`,

// `If anything, it reveals how much of art happens in the space between what is created and what is received.`,

// `That does not necessarily mean the artist has communicated a particular emotion successfully. What we feel may come as much from our own memories and associations as from the artist's intentions.`,

// `But that encounter is still real.`,

// `The painting has become a place where something within us has surfaced.`,

// `And there is something beautiful about that.`,

//     `That does not necessarily mean the artist has communicated a particular emotion successfully. What we feel may come as much from our own memories and associations as from the artist's intentions.`,

//     `But that encounter is still real.`,

//     `The painting has become a place where something within us has surfaced.`,

//     `And there is something beautiful about that.`,

//     {
//       type: 'heading',
//       text: 'A Generation Still Trying to Understand Itself',
//     },

//     `I don't think abstract art belongs to this generation any more than it belonged to those who came before us.`,

//     {
//       type: 'image',
//       src: hilma1,
//       alt: 'Abstract painting by Hilma af Klint with circular forms in various colors',
//       caption: '"The Swan, No. 17, Group IX/SUW (1914–1915)" — by Hilma af Klint',
//     },



//     `Its history is too long, too complicated, and too culturally diverse for that.`,

//     `Nor do I believe younger people have suddenly become more emotional than everyone else.`,

//     `Every generation has experienced fear, love, uncertainty, loneliness, and the difficulty of finding its place in the world.`,

//     `What may be different is the environment in which we are asked to understand those experiences.`,

//     `We live with extraordinary access to information, but information does not always produce clarity.`,

//     `We have more ways to communicate, yet communication does not guarantee that we will feel understood.`,

//     `We have more opportunities to present ourselves to the world, but presentation is not the same as self-knowledge.`,

//     `Perhaps that is why the idea of abstraction feels so relevant to me.`,

//     `It reminds us that not everything meaningful must first become understandable.`,

//     `That emotion can exist before explanation.`,

//     `That uncertainty is not necessarily emptiness.`,

//     `And that what we cannot recognize immediately may still have something to offer us.`,

//     `I began this piece trying to understand an art form I have never quite connected with.`,

//     `And I am not sure I understand it any better now.`,

//     `I still find myself questioning the meaning behind certain paintings. I still wonder whether some abstract works communicate something profound or whether I am simply searching for meaning because I expect art to provide it.`,

//     `But perhaps something has changed.`,

//     `I am beginning to appreciate the questions themselves.`,

//     `The possibility that curiosity does not always require understanding. That fascination does not always begin with recognition. That what confuses us can still invite us closer.`,

//     `You don't have to connect with something to be curious about it. And sometimes curiosity is the beginning of connection.`,

//     `Perhaps this is what I have been searching for all along.`,

//     `Not an explanation for every shape, color, or gesture.`,

//     `Not a final answer to what abstract art is supposed to mean.`,

//     `But the freedom to encounter something unfamiliar without immediately demanding that it become familiar.`,

//     `Maybe the unknown is not something we are meant to conquer.`,

//     `Maybe it is something we are meant to encounter.`,
//   ],

//   images: [],

//   youtube: '',
// },


'a-generation-that-feels-more-than-it-can-explain': {
  category: 'culture-criticism',

  title: 'A Generation That Feels More Than It Can Explain',

  author: 'Mo Alimi',

  readTime: '9 min read',

  publishedAt: '2026-10-13T00:00:00-06:00',

  issueNumber: 10,

  issue: 'Issue 10',

  intro:
    'I started writing this piece trying to understand something I have never quite been able to connect with. Abstract art. Why does something I struggle to understand still leave me so confused and intrigued?',

  heroImage: krystal1,

  heroImageCaption:
    'Meet me there by Krystal Bradford',

  body: [
    `I started writing this piece trying to understand something I have never quite been able to connect with.`,

    `Abstract art.`,

    `Why does something I struggle to understand still leave me so confused and intrigued?`,

    `I have looked at paintings that seem to represent nothing familiar. No recognizable figures, no obvious narratives, sometimes not even a clear beginning or end. Just colors, shapes, and gestures existing on a canvas.`,

    `And yet, something about them holds my attention.`,

    `I find myself searching for meaning in things I cannot identify, trying to understand feelings I cannot quite describe.`,

    `But perhaps I have been asking the wrong question.`,

    `What if abstraction is not always something we are supposed to understand?`,

    `What if its power lies in the very things it refuses to explain?`,

    `Lately, I have been thinking about the deeper search for meaning that seems to shape so much of our generation. Beyond careers, relationships, achievements, and the identities we present to the world, there is a quieter search taking place.`,

    `The search for ourselves.`,

    `For inner peace. For spiritual connection. For something that feels true, even when we cannot explain why.`,

    `And I wonder whether our fascination with abstract art is connected to that search.`,

    `Perhaps we are drawn to the unknown not because it offers answers, but because it reminds us how much of ourselves remains undiscovered.`,

    {
      type: 'heading',
      text: 'The Things We Cannot Put Into Words',
    },

    `We belong to a culture that constantly asks us to explain ourselves.`,

    `Explain what you do. Explain who you are. Explain your ambitions, your feelings, your relationships, your choices.`,

    `Even our creativity is expected to arrive with an explanation.`,

    `A photograph needs a caption. A painting needs a statement. An experience becomes a story, and that story is often expected to mean something to someone else.`,

    `But what happens to the feelings we cannot explain?`,

    `The strange sadness that arrives on an otherwise beautiful afternoon. The excitement of moving somewhere new, accompanied by the grief of leaving something behind. The feeling of being surrounded by people and still being unable to describe your loneliness.`,

    `Sometimes two contradictory emotions can exist within us without either being less real.`,

    `Perhaps abstraction gives those contradictions somewhere to live.`,

    `A painting can be chaotic and peaceful at once. A color can appear joyful in one corner and unsettling in another. A composition can feel unfinished without necessarily feeling incomplete.`,

    `One painting titled A Time of Great Destruction brings me back to a saying: “If only you knew what it took to be this calm.”`,

    {
      type: 'image',
      src: georgia1,
      alt: 'Expressive abstract painting with turbulent blue, red, cream, and dark brushstrokes',
      caption: 'A Time of Great Destruction by Georgia Spain',
    },

    `The colors seem to collide like bodies in an arena. Blues and reds press against one another; pale gestures cut through darker marks. It feels almost gladiatorial, as though the painting has been through a war. Yet, when I take it in as a whole, I find a strange sense of peace.`,

    `I am not saying the artist intended a story of survival. That is simply where the painting takes me: to the possibility that calm is not always the absence of struggle. Sometimes it is what remains after it.`,

    `And we are not required to resolve any of it.`,

    `Maybe that is what makes abstraction so interesting.`,

    `It does not always ask us to identify what we are seeing. Sometimes it invites us to confront what we are feeling.`,

    `But even that raises another question.`,

    `Are those feelings coming from the artwork itself, or are we bringing something of ourselves into it?`,

    `Perhaps both possibilities deserve consideration.`,

    {
      type: 'heading',
      text: 'When Color Becomes a Language',
    },

    `Long before we learn to describe our emotions, we respond to color, movement, sound, and form.`,

    `A child does not always need to understand why a particular color excites them. They reach for it because something about it feels right.`,

    `As we grow older, we become more concerned with making things recognizable.`,

    `We learn to draw inside the lines. We learn that the sky is blue and the grass is green. We learn to compare what we create with what something is supposed to look like.`,

    `Eventually, many of us stop drawing altogether.`,

    `We say, "I can't draw."`,

    `But perhaps what we really mean is that we can no longer draw according to the standards we have learned to accept.`,

    `This is something I keep returning to when thinking about children and their relationship with art.`,

    `A child can paint an entire page red without feeling obligated to explain why. They can give a human figure three eyes, make the sun purple, or place a house somewhere in the clouds.`,

    `We may see a failure of representation.`,

    `The child may simply see possibility.`,

    `Of course, abstract art is not the same thing as children's painting. Abstraction can involve enormous technical discipline, historical awareness, and deliberate artistic decisions.`,

    `But there is a freedom they can sometimes share.`,

    `The freedom to create without making resemblance the final measure of success.`,

    `And perhaps some of us spend adulthood trying to recover that freedom.`,

    {
      type: 'heading',
      text: 'A World That Shows Us Everything',
    },

    `There is also something strange about the visual world we inhabit.`,

    `Never before have so many images been so easily accessible to so many people.`,

    `We can watch someone's wedding in Lagos, a protest in Paris, an exhibition in New York, and a stranger's morning routine in Tokyo, all within a few minutes.`,

    `We encounter more faces, places, objects, and experiences than we can meaningfully absorb.`,

    `And increasingly, the images themselves arrive with instructions.`,

    `This is beautiful. This is desirable. This is successful. This is what you should become.`,

    `Even our attention is measured.`,

    `How long did we look? Did we react? Did we share it? Did we understand the message quickly enough to keep scrolling?`,

    `Abstract art offers an interesting contradiction.`,

    `On the one hand, its bold colors and unusual forms can be immediately attractive on social media. We might stop scrolling because a painting looks beautiful against a white gallery wall.`,

    `But visual attraction is not necessarily emotional connection.`,

    `We can admire a painting's colors without engaging with its ideas. We can photograph something we have barely looked at.`,

    `And perhaps this is worth questioning rather than celebrating.`,

    `Are we becoming more connected to abstract art, or simply more attracted to its appearance?`,

    `The distinction matters.`,

    `Because some abstract paintings reveal very little in the first few seconds. Their relationships, textures, decisions, and tensions only begin to emerge when we give them time.`,

    `In a culture that encourages us to move quickly, abstraction can invite us to remain.`,

    `Not every painting will reward that patience. Not every arrangement of colors carries profound meaning.`,

    `But sometimes, standing before an image without knowing exactly what to make of it becomes an experience in itself.`,

    `And maybe that experience is increasingly rare.`,

    {
      type: 'heading',
      text: 'The Spirituality of the Unknown',
    },

    `Perhaps there is another reason we find ourselves drawn toward abstraction.`,

    `Something beyond color, aesthetics, or the desire to express complicated emotions.`,

    `I wonder whether we are witnessing a deeper search within ourselves.`,

    `A search for identity that has little to do with the identities we present to the world. A search for spiritual peace, belonging, and the quiet parts of ourselves that often get lost in the noise of everyday life.`,

    `We spend so much time discovering what exists outside us that we sometimes forget how much remains unexplored within.`,

    `And perhaps that is where abstract art becomes interesting.`,

    `Long before our generation began searching for meaning in abstract paintings, Hilma af Klint was exploring what she believed existed beyond the visible world. Her work reminds me that abstraction has long been connected to spiritual questions, even if the reasons people approach it differ.`,

    {
      type: 'image',
      src: hilma1,
      alt: 'Abstract painting by Hilma af Klint with circular forms in various colors',
      caption: '"The Swan, No. 17, Group IX/SUW (1914–1915)" — by Hilma af Klint',
    },

    `In The Swan, the balanced circle and opposing colors offer a striking contrast to the uncertainty of what those forms might mean. I can recognize the geometry without claiming to understand her spiritual beliefs.`,

    // KRYSTAL BRADFORD — ARTIST CONNECTION

    `Looking at the work of Brisbane-based artist Krystal Bradford, I find myself returning to the uncertainty that first drew me into this conversation.`,

    `Her abstract paintings explore relationships between color, texture, and surface, drawing on memories and the landscapes surrounding her. Her practice is rooted in drawing, mixed media, and painting, with an interest in raw, vulnerable, and imperfect forms.`,

    {
      type: 'image',
      src: krystal1,
      alt: 'Abstract painting by Krystal Bradford featuring layered shapes and earthy colors',
      caption: 'Meet me there by Krystal Bradford',
    },

    `There are overlapping forms, earthy colors, and shapes that seem to suggest something familiar without ever fully revealing themselves.`,

    `I wonder what memories exist within these forms. What part of a landscape has been transformed into color, or what experience has found its way onto the canvas.`,

    `Perhaps what she remembers and what I recognize are entirely different things.`,

    `I cannot assume that her intentions were spiritual simply because the painting makes me reflect on my own search for meaning.`,

    `Krystal approaches the canvas with her own experiences, while I encounter it carrying questions about identity, spirituality, and the unknown.`,

    `A painting that represents something familiar can direct our attention toward the subject. But a painting that offers no recognizable subject may redirect that attention toward ourselves.`,

    `We are asking why a particular color makes us uncomfortable. Why an unfamiliar shape reminds us of home. Why something we cannot identify brings us an unexpected feeling of peace.`,

    `There is something almost spiritual about that encounter.`,

    `Not necessarily religious, but spiritual in the sense of searching for a connection to something that exists beyond what we can immediately see or explain.`,

    `And I wonder whether the unknown plays an important role in this.`,

    `We often treat the unknown as something to fear, something to solve, or something to eventually understand.`,

    `But the unknown can also be a place of possibility.`,

    `Before we define something, it can exist in several forms within our imagination. Before we attach meaning to an experience, we are free to encounter it without the limitations of what we already know.`,

    `Perhaps this is why abstraction can feel so powerful.`,

    `It does not always provide the comfort of an answer. Sometimes it provides the comfort of knowing that an answer is not required.`,

    `And maybe inner peace is not always found by understanding everything about ourselves.`,

    `Sometimes it begins with accepting that there are parts of us we have not yet discovered.`,

    `Perhaps the unknown is powerful because it leaves room for us to become something we have not yet imagined.`,

    {
      type: 'heading',
      text: 'Does Everything Have to Represent Something?',
    },

    `I also wonder whether our attraction to abstraction is connected to the expectations we place on artists.`,

    `When we encounter art, we often arrive carrying assumptions about what it should tell us.`,

    `We want to know the artist's background, their identity, their struggles, and the social conditions that produced the work.`,

    `These questions can be important. Art does not exist outside history.`,

    `But they can also become limitations.`,

    `A Black artist, for example, may find that their work is continually interpreted through race, politics, or cultural representation, even when their interests extend far beyond those subjects.`,

    `A painting containing an Afro might be read as resistance. A dark-skinned figure might become a statement about identity. An ordinary moment of beauty might be expected to carry the weight of an entire historical experience.`,

    `But what about the freedom to make something simply because it is beautiful, strange, playful, or emotionally compelling?`,

    `What about the freedom not to explain everything through identity?`,

    `Abstraction can offer one way of challenging those expectations.`,

    `Not because abstract art is free from politics or history. Some of the most significant abstract practices have emerged directly from political struggles, cultural memory, and questions of belonging.`,

    `Rather, abstraction reminds us that meaning does not always have to arrive through recognizable symbols.`,

    `An artist can speak about memory through repetition, about displacement through fractured space, or about intimacy through the relationship between two colors.`,

    `Sometimes the story is present without being illustrated.`,

    `And sometimes there may be no story at all.`,

    `That possibility deserves room, too.`,

    {
      type: 'heading',
      text: 'The Comfort of Not Knowing',
    },

    `There is a temptation, especially when writing about art, to explain every artistic decision until the painting becomes something like a puzzle with a correct answer.`,

    `Sometimes those interpretations are useful. Sometimes they are supported by the artist's intentions.`,

    `But sometimes they reveal our discomfort with allowing a work to remain uncertain.`,

    `Yet I wonder whether understanding must always be the destination.`,

    `Perhaps an abstract painting can move us without our being able to translate that experience into language.`,

    `Perhaps we can stand before a canvas, feel something intensely, and leave without knowing what it was.`,

    `Looking at a painting by Jack Kabangu, I find myself thinking again about how quickly abstraction can move us before we fully understand what we are seeing.`,

    {
      type: 'image',
      src: jack1,
      alt: 'Circular abstract painting by Jack Kabangu with red, black, yellow, white, and green forms',
      caption: '"Red sun/rød sol" — by Jack Kabangu',
    },

    `The work feels immediate. Its circular form, bold contrasts, and intense colors create an encounter that feels almost instinctive before it becomes interpretive.`,

    `There are shapes that seem to suggest a presence, a face, or an energy, but nothing settles long enough to become fully fixed.`,

    `Jack Kabangu’s painting reminds me that abstraction does not always ask for explanation first. Sometimes it asks for attention. Sometimes it asks for feeling.`,

    `I can attend to the image without resolving the tension between what Jack created and what I bring to it.`,

    {
      type: 'heading',
      text: 'A Generation Still Trying to Understand Itself',
    },

    `I don't think abstract art belongs to this generation any more than it belonged to those who came before us.`,

    `Its history is too long, too complicated, and too culturally diverse for that.`,

    `Nor do I believe younger people have suddenly become more emotional than everyone else.`,

    `Every generation has experienced fear, love, uncertainty, loneliness, and the difficulty of finding its place in the world.`,

    `What may be different is the environment in which we are asked to understand those experiences.`,

    `We live with extraordinary access to information, but information does not always produce clarity.`,

    `We have more ways to communicate, yet communication does not guarantee that we will feel understood.`,

    `We have more opportunities to present ourselves to the world, but presentation is not the same as self-knowledge.`,

    `Perhaps that is why the idea of abstraction feels so relevant to me.`,

    `It reminds us that not everything meaningful must first become understandable.`,

    `I began this piece trying to understand an art form I have never quite connected with.`,

    `And I am not sure I understand it any better now.`,

    `I still find myself questioning the meaning behind certain paintings. I still wonder whether some abstract works communicate something profound or whether I am simply searching for meaning because I expect art to provide it.`,

    `But perhaps something has changed.`,

    `I am beginning to appreciate the questions themselves.`,

    `The possibility that curiosity does not always require understanding. That fascination does not always begin with recognition. That what confuses us can still invite us closer.`,

    `You don't have to connect with something to be curious about it. And sometimes curiosity is the beginning of connection.`,

    `Perhaps this is what I have been searching for all along.`,

    `But the freedom to encounter something unfamiliar without immediately demanding that it become familiar.`,

    `Maybe the unknown is not something we are meant to conquer.`,

    `Maybe it is something we are meant to encounter.`,
  ],

  images: [],

  youtube: '',
},


'what-if-i-stayed': {
  category: 'culture-criticism',

  title: 'What If I Stayed?',

  author: 'Mo Alimi',

  readTime: '12 min read',

  publishedAt: '2026-10-20T00:00:00-06:00',

  issueNumber: 11,

  issue: 'Issue 11',

  intro:
    'I left Nigeria when I was barely older than a teenager. Before I knew it, there I was in Debrecen, Hungary, trying to figure life out in a country so different from the one I had always known. And looking at Romeo Niyigena’s paintings, I find myself asking a question I rarely allow myself to sit with. What if I stayed?',

  heroImage: romeoCover1,

  heroImageCaption:
    'Thrilled thoughts by Romeo Niyigena',

  body: [
    `I left Nigeria when I was barely older than a teenager.`,

    `Before I knew it, there I was in Debrecen, Hungary, trying to figure life out in a country so different from the one I had always known.`,

    `I was young, ambitious, and perhaps a little naive about what it meant to leave home.`,

    `Like many immigrants, especially those from backgrounds like mine, I carried a familiar story with me. The promise of a better life.`,

    `It is a story we tell ourselves long before we ever board a plane. Somewhere beyond the borders of our country, there are opportunities waiting for us. More possibilities, more freedom, perhaps even a greater chance of becoming whoever we imagine ourselves to be.`,

    `And so we leave.`,

    `But nobody really tells you what happens to the person you were before you left.`,

    `The version of me that left Nigeria is still somewhere deep down. I think about him sometimes. What he imagined life would look like. The things he was afraid of. The confidence he carried without knowing how much the world would challenge it.`,

    `I wonder whether he would recognize the person I am today.`,

    `Having lived in Africa, Europe, and now North America, I have come to understand that leaving is not a single event.`,

    `You leave once physically, but emotionally, you spend years negotiating what it means to have left.`,

    `And looking at Romeo Niyigena's paintings, I find myself returning to a question I rarely allow myself to sit with.`,

    `What if I stayed?`,

    `Not because I regret leaving. Not because I believe the life I might have lived in Nigeria would necessarily have been better.`,

    `But because every decision creates another life we will never get to experience.`,

    `Somewhere in my imagination, there is a version of me who never left.`,

    `And I wonder who he became.`,

    {
      type: 'heading',
      text: 'Learning to Belong Everywhere',
    },

    `I think there are phases to living in the diaspora.`,

    `The first is integration.`,

      {
      type: 'image',
      src: romeo6,
      alt: 'Painting by Romeo Niyigena of a woman in a flowing orange outfit seated in an ornate chair, surrounded by sunflowers and white flowers',
      caption: 'My Comfort II — Romeo Niyigena',
    },


    `When you arrive somewhere new, you are almost immediately confronted with how much of the world you do not know.`,

    `The language is different. The food is different. The humor, the social rules, even the little things people take for granted are unfamiliar.`,

    `You learn.`,

    `You observe how people interact. You begin to understand their jokes. You develop friendships, adopt new habits, and gradually become comfortable in places that once made you feel like a stranger.`,

    `You allow yourself to become a global citizen.`,

    `I remember arriving in Debrecen and slowly adjusting to a world that operated differently from the one I grew up in. At some point, what was unfamiliar became ordinary. The city became part of my everyday life.`,

    `It is a remarkable thing, the human ability to adapt.`,

    `But adaptation also changes you.`,

    `Not always dramatically. Sometimes it happens in the smallest ways. The expressions you begin using. The food you develop a taste for. The way you approach conversations, relationships, ambition, and even your understanding of yourself.`,

    `Then one day, you realize you have become a collection of all the places you have lived.`,

    `And that realization brings another question.`,

    `How much of the person I used to be is still here?`,

    {
      type: 'heading',
      text: 'The Responsibility of Remembering',
    },

    `The second phase, I think, is preservation.`,

    
      {
      type: 'image',
      src: romeo5,
      alt: 'Painting by Romeo Niyigena of a woman in a flowing orange outfit seated in an ornate chair, surrounded by sunflowers and white flowers',
      caption: 'Aware of my mind — Romeo Niyigena',
    },


    `At first, holding on to your roots feels like a matter of identity.`,

    `You want to remain Nigerian. You want your accent, your food, your expressions, your childhood memories, and your understanding of the world to remain recognizable.`,

    `There is a certain pride in being able to say where you come from.`,

    `But as you grow older and spend more time away, preservation begins to mean something different.`,

    `It becomes less about proving your identity to others and more about protecting something within yourself.`,

    `You begin to realize that a part of who you are exists because of a particular place, a particular time, and particular people.`,

    `And none of those things are guaranteed to remain the same.`,

    `Culture does not always carry itself forward.`,

    `Sometimes someone has to make a deliberate decision to keep it alive.`,

    `It might be something as simple as remembering an expression your mother used when you were younger. Cooking a meal you grew up eating. Speaking your language even when everyone around you speaks another.`,

    `Sometimes it is returning to music you haven't listened to in years.`,

    `Other times, it is realizing that certain memories have become so distant that you can no longer tell whether you remember the moment itself or simply the story you have told yourself about it.`,

    `I think that is one of the quiet complications of living abroad.`,

    `You spend so much time learning how to belong somewhere new that one day, you find yourself making a conscious effort not to forget where you first belonged.`,

    `Integration teaches you how to live in the world. Preservation teaches you how not to disappear inside it.`,

    `And somewhere between those two things, you begin to construct a different kind of identity.`,

    `One that belongs to several places, but never entirely to just one.`,

    {
      type: 'heading',
      text: 'The Rich Aunty',
    },

    `There is something about Romeo Niyigena's paintings that makes it easy for me to enter a particular state of mind.`,

    `Born in Kigali, Rwanda, in 1999, Romeo is a multidisciplinary artist whose relationship with art began in childhood. His desire to pursue art formally led him to École d'Arts de Nyundo, where he studied and graduated in 2018, developing his skills in graphic design.`,

    `Working with oils, acrylics, and sometimes newspaper collage on canvas, Romeo draws inspiration from the diversity of the world around him. Through the internet, he has explored cultures beyond his immediate surroundings, particularly across Africa. His work often carries a poetic expression, with each piece offering its own story or meaning.`,

    `What interests me is how much of his artistic world is rooted in ordinary human experiences. The body, culture, social life, the way people carry themselves and exist within their surroundings.`,

    `As a Nigerian who has lived across three continents, I find myself recognizing people, moods, and experiences in his work that are difficult to explain.`,

    `One painting, in particular, makes me smile.`,

    {
      type: 'image',
      src: romeo10,
      alt: 'Painting by Romeo Niyigena of a woman in a flowing orange outfit seated in an ornate chair, surrounded by sunflowers and white flowers',
      caption: 'My Comfort I — Romeo Niyigena',
    },

    `A woman sits comfortably in an elaborate chair, dressed in beautiful shades of orange, surrounded by sunflowers and white flowers. Her expression is thoughtful, almost as though she has been interrupted in the middle of remembering something.`,

    `And immediately, I think of someone familiar.`,

    `The rich aunty.`,

    `You know the one.`,

    `She never got married, but she has lived a little more than a lot of people.`,

    `Perhaps she has traveled to countries you have only heard about. She has friends in cities you have never visited. She knows how to carry herself, how to enter a room, how to enjoy the things she has worked for.`,

    `She has stories.`,

    `And there is something about the way she sits that makes me imagine she no longer feels the need to explain herself.`,

    `I find that interesting.`,

    `We often measure people's lives through the milestones they have achieved. Marriage, children, careers, houses, the things society has taught us to associate with a successful life.`,

    `But here, I imagine a woman whose life has been rich in a different way.`,

    `Rich in experiences.`,

    `Rich in encounters.`,

    `Rich in the many versions of herself she has had the opportunity to become.`,

    `Of course, I do not know the story Romeo intended to tell through this woman. The life I imagine for her may be entirely different from the life the artist had in mind.`,

    `But that is part of what I enjoy about looking at art.`,

    `Sometimes a painting gives you enough room to recognize someone who exists only in your memory or imagination.`,

    `And this woman reminds me of people who have spent years moving through the world without completely surrendering their sense of where they come from.`,

    `Perhaps she has learned something I am still trying to understand.`,

    `That becoming a citizen of the world does not mean abandoning home.`,

    `It means learning how to carry home differently.`,

    {
      type: 'heading',
      text: 'The People I Left Behind',
    },

    `But there is another side to leaving that I have come to understand.`,

    `The people I left behind aren't the same either.`,

    `And the Nigeria I left does not exist anymore. At least not in the way I remember it.`,

    `For a long time, I think I carried an image of home that remained untouched by time.`,

    `The familiar streets. The people. The friendships. The conversations.`,

    `Somewhere in my mind, they were all waiting exactly as I had left them.`,

    `But life does not stop because you leave.`,

    `People grow older.`,

    `Friendships change.`,

    `The people you once knew so intimately develop lives you are no longer part of. They experience things you weren't there to witness, and you experience things they may never fully understand.`,

    `You try to stay in touch.`,

    `A message here. A phone call there. The occasional conversation that makes it feel as though no time has passed.`,

    `But friendship that survives beyond proximity is a rare thing.`,

    `There is something about growing up together that creates a kind of familiarity difficult to reproduce elsewhere.`,

    `These are people who knew you before you had anything to prove. Before the degrees, the countries, the ambitions, and all the different versions of yourself you have had to become.`,

    `And perhaps that is why we hold on so tightly.`,

    `You try not to change too much.`,

    `You want to remain recognizable to the people who truly knew you.`,

    `You want to return to a conversation years later and still laugh at the same jokes, speak the same language, remember the same things.`,

    `But the expectation to remain unchanged creates its own burden.`,

    `You begin preserving yourself not only because you are afraid of forgetting where you came from, but because you are afraid the people who knew you might no longer recognize who you have become.`,

    `And yet, they have changed too.`,

    `That is the strange thing about distance.`,

    `Everyone is moving forward, but we keep remembering one another in the past.`,

    `We become custodians of versions of people who no longer exist.`,

    `Maybe this is another kind of homesickness.`,

    `Not simply missing a country or a particular person, but missing a time when you and the people you loved occupied the same world.`,

    `A world that cannot be returned to, even with a plane ticket.`,

    `And perhaps that is why the question What If I Stayed? becomes so difficult.`,

    `Because staying would not have stopped life from changing.`,

    `It would only have allowed me to witness those changes from a different place.`,

    {
      type: 'heading',
      text: 'The Weight of Becoming',
    },

    `I return to another of Romeo's paintings.`,

    {
      type: 'image',
      src: romeo8,
      alt: 'Painting by Romeo Niyigena featuring a contemplative figure in a brown winter coat and gray fur hat with sunflowers against a dark green background',
      caption: 'In the moment of What If by Romeo Niyigena',
    },

    `A figure sits wrapped in a heavy brown coat, wearing a thick fur hat. The colors are darker, the atmosphere quieter. Beside the figure, sunflowers grow against a deep green background.`,

    `There is something about the image that makes me think of the emotional experience of being somewhere unfamiliar.`,

    `The coat makes me think of winter.`,

    `And winter makes me think of arriving in a place where even the weather reminds you that you are far from home.`,

    `But what holds my attention is the figure's expression.`,

    `I cannot say exactly what they are thinking.`,

    `Perhaps nothing particularly dramatic.`,

    `Perhaps they are simply resting.`,

    `Still, I find myself projecting something familiar onto the image.`,

    `The quiet moments when you are far away from everything you once knew, when the excitement of having made it somewhere new gives way to the ordinary responsibility of building a life.`,

    `Because leaving is often celebrated as an achievement.`,

    `And sometimes it is.`,

    `But after the excitement comes the everyday reality.`,

    `You have to make friends. Find your way around. Learn how things work. Understand a culture you were not raised in. Discover who you are when the things that once defined you are no longer immediately visible to everyone around you.`,

    `You have to become comfortable with being misunderstood.`,

    `And through all of that, you continue changing.`,

    `I look at the sunflowers beside the figure and think about the strange ways familiar things can follow us into unfamiliar places.`,

    `Something small can suddenly remind you of home.`,

    `A smell. A song. A voice. A face.`,

    `And for a moment, the distance between where you are and where you came from seems to disappear.`,

    `Maybe that is one of the things art can do.`,

    `It can bring you close to a feeling without requiring you to explain it first.`,

    {
      type: 'heading',
      text: 'A Home That Exists in Memory',
    },

       {
      type: 'image',
      src: romeo4,
      alt: 'Painting by Romeo Niyigena featuring a contemplative figure in a brown winter coat and gray fur hat with sunflowers against a dark green background',
      caption: 'NGIRA NKUGIRE by Romeo Niyigena',
    },


    `There is something I have been thinking about lately.`,

    `When I say I miss Nigeria, what exactly am I missing?`,

    `Is it the country as it exists today?`,

    `Or the Nigeria I remember?`,

    `The one I knew when I was younger. When my understanding of life was smaller, when my friendships felt permanent, when the future was still something I could imagine without knowing what it would demand of me.`,

    `Because the more I think about it, the more I realize that I do not only miss a place.`,

    `I miss a period of my life.`,

    `And those are two very different things.`,

    `You can return to a country.`,

    `You can visit the streets you grew up around, see familiar faces, eat the food you have missed, and sit with people who remember you from before.`,

    `But you cannot return to being that age.`,

    `You cannot recreate the exact circumstances that made those memories possible.`,

    `Even if everything around you somehow remained unchanged, you would still arrive as a different person.`,

    `Perhaps that is one of the more difficult truths about growing older.`,

    `We spend so much time imagining that the things we love are waiting for us somewhere, only to discover that many of them existed at a particular moment in time.`,

    `And time does not preserve things simply because they matter to us.`,

    `This is where I find Romeo's paintings especially moving.`,

    `Not because they necessarily tell a story about migration, but because they give me space to think about the people, places, and experiences I carry within me.`,

    `Romeo's interest in cultural diversity and everyday human life makes this encounter even more meaningful to me. His paintings emerge from his own experiences and observations, yet they leave enough room for someone from another country, with an entirely different journey, to find something familiar within them.`,

    `The woman in orange reminds me of the possibility of becoming comfortable in the life you have built.`,

    `The figure in the winter coat reminds me of the uncertainty that often comes before that comfort.`,

    `And somewhere between the two, I see my own journey.`,

    `Not literally, but emotionally.`,

    `A younger version of me arriving in Debrecen, unsure of what the world had waiting.`,

    `And the person I am today, still figuring out what it means to belong.`,

    {
      type: 'heading',
      text: 'What If I Stayed?',
    },

    `I have spent years searching for a better life.`,

    `And I imagine I will spend many more trying to understand what that really means.`,

    `When I was younger, a better life felt like something waiting somewhere else.`,

    `A destination.`,

    `A country.`,

    `An opportunity.`,

    `Something I could reach if I was willing to go far enough.`,

    `Now, I am beginning to think that a better life is not always a place you arrive at.`,

    `Sometimes it is the ability to look at everything you have experienced and recognize that each version of yourself mattered.`,

    `The boy who left Nigeria.`,

    `The young man trying to figure things out in Debrecen.`,

    `The person learning to build a life in America.`,

    `None of them is entirely gone.`,

    `They exist in the way I think, the things I value, the people I miss, and the memories I continue to carry.`,

    `And perhaps that is why the question remains with me.`,

    `What if I stayed?`,

    `Would I have been happier?`,

    `Would the friendships have lasted longer?`,

    `Would I have felt more connected to the people and places that shaped me?`,

    `Would I have become someone entirely different?`,

    `I don't know.`,

    `And I will never know.`,

    `But I am beginning to understand that the life I left behind was never going to remain exactly as I remembered it.`,

    `The people would have changed.`,

    `The country would have changed.`,

    `And I would have changed with them.`,

    `Maybe the real question is not whether I should have stayed.`,

    `Maybe it is whether I can learn to appreciate the life I have lived without constantly measuring it against the life I might have had.`,

    `I think about the rich aunty again.`,

    `The way I imagine her sitting comfortably in that chair, surrounded by flowers, carrying a lifetime of experiences I know nothing about.`,

    `Perhaps she has asked herself the same question.`,

    `Perhaps she has wondered about the people she could have become, the places she could have lived, the decisions she could have made differently.`,

    `Or perhaps she has learned to stop asking.`,

    `I don't know.`,

    `But there is something beautiful about imagining a person who has lived enough to understand that every life contains things we gain and things we leave behind.`,

    `And perhaps becoming comfortable with that is its own kind of freedom.`,

    `I left Nigeria in search of a better life.`,

    `Along the way, I have found different places to call home, different people to love, and different versions of myself to become.`,

    `But somewhere deep down, that young boy who left home is still with me.`,

    `And as much as I sometimes wonder who he might have become if he had stayed, I hope he would be curious about the person we are becoming.`,

    `Because perhaps the most important thing I have learned from leaving is that home is not always somewhere we can return to.`,

    `Sometimes, it is something we spend the rest of our lives learning how to carry.`,

    `— Mo Alimi, Editor, Art All Day`,
  ],

  images: [],

  youtube: '',
},


'the-beauty-of-tea-the-burden-of-land': {
  category: 'culture-criticism',

  title: 'The Beauty of Tea, the Burden of Land',

  author: 'Waithera wa Mwangi',

  readTime: '9 min read',

  publishedAt: '2026-10-27T00:00:00-06:00',

  issueNumber: 12,

  issue: 'Issue 12',

  intro:
    `Art, Memory and the Work of Decolonising in Kikuyu Land. An encounter with Kikuyu Land reveals how cinema can challenge inherited narratives, confront family histories and invite us to reconsider the land beneath our feet—and the tea in our cups.`,

  heroImage: gallen2,

  heroImageCaption:
    'Kikuyu Woman by Akseli Gallen-Kallela',

  body: [
    `There is something unsettling about discovering that a thing you have always been proud of carries a history you were never taught to question.`,

    `As a Kikuyu, a Kenyan and a lover of tea, I approached *Kikuyu Land* with a familiar affection for one of my country's most celebrated exports. I left thinking differently about the relationship between beauty, memory and power.`,

    
       {
      type: 'image',
      src: winnie3,
      alt: '',
      caption: 'Photograph by Waithera wa Mwangi',
    },

    `Co-directed by Kenyan journalist and filmmaker **Bea Wangondu** and Emmy Award-winning filmmaker **Andrew H. Brown**, *Kikuyu Land* is a feature documentary that examines the enduring consequences of colonial land dispossession in Kenya's tea-growing highlands. At its centre is a struggle to reclaim ancestral land, a history of corporate power and an investigation that leads Wangondu towards uncomfortable discoveries about her own family. The film premiered at the 2026 Sundance Film Festival before travelling to international audiences. [1](https://fest26-wp.festival.sundance.org/blogs/kikuyu-land-chronicles-historic-injustice-and-one-womans-quest-for-truth/) [2](https://www.thegardencinema.co.uk/film/kikuyu-land-qa/)`,

    `What makes the film particularly compelling is not simply the history it uncovers, but the way it asks us to encounter that history through images, personal testimony and the intimate details of everyday life.`,
    
    {
      type: 'heading',
      text: 'Looking beyond the green',
    },

    `Kenyan tea is beautiful. Its rolling hills, carefully cultivated plantations and seemingly endless green landscapes have become part of the country's visual identity. Tea is an important export, a source of national pride and an everyday pleasure enjoyed far beyond Kenya's borders.`,

    `But what happens when we look beyond the green?`,

    `*Kikuyu Land* asks us to consider the colonial dispossession beneath this picturesque landscape and the inequalities that continue to shape relationships between land, labour and corporate wealth.`,

    `Land is never simply land. In Kenya, it carries ancestry, belonging, livelihood and cultural memory. To lose it is to lose more than a physical possession; it is to have one's relationship with place and generations of family history disrupted.`,

    `The film's investigation brings these consequences into the present, challenging the assumption that colonialism ended when Kenya gained independence. Its central questions concern not only what happened in the past, but who continues to benefit from it and what meaningful accountability might look like today.`,

    `For me, this was the film's first challenge: **how do we celebrate an industry without confronting the conditions under which its foundations were laid?**`,

    {
      type: 'heading',
      text: 'When the camera becomes an act of reclamation',
    },

          {
      type: 'image',
      src: gallen1,
      alt: '',
      caption: 'Portrait of Kenosua by Gallen-Kallela, 1909–1910',
    },

    `One of the film's most powerful qualities is its cinematography, shaped by the collaboration between its co-directors, particularly Brown's work behind the camera.`,

    `The images hold two realities together: the undeniable beauty of the landscape and the painful history it contains. The camera does not need to diminish the landscape's beauty to reveal its injustices. Instead, it invites us to look more carefully.`,

    `Equally important is the dignity with which people are represented. They are not merely illustrations of historical suffering, but individuals with relationships, ambitions and lives extending beyond the circumstances being documented.`,

    `This matters in a world where images of Africa have too often been shaped by external perspectives, reducing complex lives to familiar narratives of poverty, conflict or helplessness.`,

    `A particularly moving thread in the film is a young boy's interest in photography and cameras. His curiosity offers a quiet counterpoint to the history surrounding him. It also raises a question central to the politics of representation: who gets to hold the camera, and who gets to tell the story?`,

    `For this child, photography represents a possibility—the opportunity to become the person documenting his community rather than simply appearing in someone else's images.`,

    `Art cannot undo historical violence, but it can change who has the power to narrate it. When communities document their own experiences, they create opportunities to preserve memories, challenge imposed narratives and build archives for future generations.`,

    {
      type: 'heading',
      text: 'The histories we inherit',
    },

             {
      type: 'image',
      src: gallen3,
      alt: '',
      caption: 'Kikuyu by the Riverbank by Akseli Valdemar Gallen-Kallela',
    },


    `The film's most uncomfortable revelations emerge when Wangondu's investigation turns towards her own family.`,

    `During the post-screening discussion I attended, she spoke about discovering her grandfather's relationship with the British colonial establishment and his involvement in acquiring land around the transition to independence. The discovery complicated her understanding of her family and challenged the story she had initially set out to tell.`,

    `This moment stayed with me because it exposed something deeply human: our desire to believe that the people who came before us stood on the right side of history.`,

    `We want to be proud of our families. We want their achievements to reflect courage, integrity and hard work. But what happens when the historical record complicates that pride?`,

    `The audience discussion brought this question closer to home when another attendee described discovering that their own grandparent had benefited from land redistribution during the transition away from colonial rule.`,

    `Suddenly, the conversation was no longer simply about colonial authorities or multinational corporations. It was about family memory, inheritance and the stories we preserve to protect the people we love.`,

    `How many family histories remain incomplete because certain questions have never been asked? How often do we confuse loving our ancestors with protecting them from scrutiny?`,

    `Acknowledging complicity does not require us to reduce a person's entire life to a single decision. It requires a willingness to examine how power and wealth were accumulated, and what those processes cost others.`,

    `We cannot choose the circumstances into which we are born, but we can choose what we do with the knowledge we acquire.`,

    `Perhaps one of the most meaningful ways to honour our ancestors is to tell the truth about them, even when that truth unsettles the stories through which we have understood ourselves.`,

    {
      type: 'heading',
      text: 'Decolonisation begins at home',
    },

              {
      type: 'image',
      src: gallen4,
      alt: '',
      caption: 'Dancing Kikuyu Warriors (1909)',
    },


    `For me, the film's questions extend beyond land ownership into language, identity and the values we inherit.`,

    `During the discussion, Wangondu reflected on how her upbringing had shaped her relationship with language, including her distance from her mother tongue, Kikuyu.`,

    `As a Kikuyu, I found this particularly resonant.`,

    `What does it mean to inherit a language without fully possessing it? What is lost when the language through which our grandparents understood the world becomes something the next generation struggles to speak?`,

    `Decolonisation is often discussed in terms of institutions, political movements and economic structures. These are essential, but the process also asks us to examine the assumptions that shape our everyday lives: what we consider sophisticated, whose knowledge we value and which parts of ourselves we have learned to leave behind.`,

    `This is not about rejecting English or dismissing the opportunities it provides. It is about recognising the cost of allowing one language or worldview to become the unquestioned measure of everything else.`,

    `Nor is introspection a substitute for structural change. Examining our inherited assumptions must sit alongside questions of land restitution, corporate accountability and the institutions responsible for addressing historical injustice.`,

    `The challenge is to move beyond awareness towards meaningful action.`,

    {
      type: 'heading',
      text: 'From remembrance to responsibility',
    },
                 {
      type: 'image',
      src: gallen5,
      alt: '',
      caption: 'Kikuyu In Papyrus Reeds (1909)',
    },

    

    `Screened in the UK during Black History Month, *Kikuyu Land* offers an opportunity to reconsider how Britain engages with its colonial past and how that past continues to shape relationships between former colonies and the societies that benefited from imperial expansion.`,

    `For British audiences, the film connects the history of empire to the contemporary products, institutions and economic systems through which its consequences remain visible.`,

    `For Kenyan audiences, it invites a reconsideration of national narratives, contested land ownership and the histories that have been overlooked or left unresolved.`,

    `For those of us who inhabit both worlds in different ways, it asks what we carry between them.`,

    `Yet storytelling alone cannot restore lost land or compensate for generations of harm. Recognition matters, but it is not the same as justice.`,

    `The questions raised by the film require credible investigations, transparent processes and meaningful engagement with the communities affected. They also demand support for the people who take risks to bring difficult histories into public view.`,

    `Documentary filmmakers need resources, independent journalists need protection, and the people who share their experiences deserve to have their safety taken seriously.`,

    `If we celebrate art's ability to challenge injustice, we must also consider our responsibility to the people who make that work possible.`,

    {
      type: 'heading',
      text: 'Let the stories travel',
    },

             {
      type: 'image',
      src: gallen6,
      alt: '',
      caption: 'A Kikuyu Man (1909)',
    },


    

    `I left the screening thinking about tea—not simply as an export or a national symbol, but as an ordinary part of everyday life.`,

    `I thought about how easily we inherit national pride without inheriting the full story, and how often beauty allows us to overlook the histories that made it possible.`,

    `I also thought about the power of art to connect personal experience with collective memory.`,

    `Through its combination of landscape, testimony and family history, *Kikuyu Land* transforms a story about Kenyan tea into a wider conversation about identity, complicity, belonging and justice.`,

    `Its importance lies not in offering easy answers, but in making it harder to ignore the questions.`,

    `As a Kikuyu, a Kenyan and a lover of tea, I want more stories like this to be told, shared and discussed. I want them to reach audiences who have never considered the histories behind the products they consume or the landscapes they admire.`,

    `And I want us to support the filmmakers and communities making these stories possible.`,

    `Decolonisation is not a destination reached simply by learning the right language. It is an ongoing practice of examining what we have inherited, questioning what we have been taught to value and remaining willing to change.`,

    `Sometimes the most important thing a work of art can do is change the way we see something we thought we already knew.`,

    `I went into *Kikuyu Land* proud of my country, my heritage and my love of tea.`,

    `I left with a more complicated understanding of all three.`,

    `Perhaps that is where the real work begins.`,
  ],

  images: [],

  youtube: '',
},


// 'mama-said-cut-your-hair': {
//   category: 'culture-criticism',

//   title: 'Mama Said Cut Your Hair',

//   author: 'Mo Alimi',

//   readTime: '10 min read',

//   publishedAt: '2026-10-30T00:00:00-06:00',

//   issueNumber: 13,

//   issue: 'Issue 13',

//   intro:
//     `Before the world taught us what was professional, home taught us what was presentable. Through the paintings of Nigerian artist Jude Adebayo, childhood memories of the barber's chair, and the cultural significance of Black hair, we question why something so natural became something we were constantly asked to fix.`,

//   heroImage: jude1,

//   heroImageCaption:
//     '"i hate my hair, perhaps I was taught to hate it III" by Jude Adebayo',

//   body: [
//     `Before we shift the conversation to the world, perhaps we should begin at home, with what we were taught about our own hair.`,

//     `Growing up, we often heard familiar expressions.`,

//     `*"Your hair is bushy."*`,

//     `*"You look like a rascal."*`,

//     `*"Go and make yourself look responsible."*`,

//     `These were ordinary comments, sometimes said with affection, sometimes with frustration, and often without much thought. But somewhere between being told to look neat and being reminded to visit the barber, we began to associate the appearance of our hair with the kind of person we were expected to become.`,

//     `As a child, I was often celebrated by my mother whenever I returned home with a fresh low cut. Suddenly, I was handsome, neat, and responsible. The compliments came almost immediately.`,

//     `But even the slightest appearance of an afro was enough to signal that another trip to the salon was approaching.`,

//     `My hair had barely grown before it was already time to cut it again.`,

//     `I never really questioned it. A haircut was simply part of looking presentable, much like wearing clean clothes or polishing your shoes before leaving the house.`,

//     `And like many children, I enjoyed the compliments.`,

//     `But looking back, I find myself wondering why the approval seemed to depend so much on how little hair was left on my head.`,

//     `When did having too much hair become a sign of irresponsibility? And how did something growing naturally from our bodies become something that constantly needed fixing?`,

//     `I don't believe my mother's intention was ever to make me dislike my hair. Perhaps, like many parents, she simply wanted her child to look well-groomed and respectable.`,

//     `But there is something worth examining about the things we praise in children and the things we repeatedly ask them to change.`,

//     `Nobody ever explicitly told me to hate my hair.`,

//     `**Perhaps I was simply taught that it looked better when there was less of it.**`,

//     {
//       type: 'heading',
//       text: 'Perhaps I was taught to hate it',
//     },

//             {
//       type: 'image',
//       src: jude2,
//       alt: '',
//       caption: '""I hate my hair, perhaps I was taught to hate it" II" by Jude Adebayo',
//     },


//     `This question became more interesting to me when I encountered *Hate My Hair*, a series of paintings by Lagos-based Nigerian artist **Jude Adebayo**.`,

//     `Working primarily in painting and drawing, Jude explores identity, memory, human emotions, and the often-unspoken stories of African experiences. His artistic practice is interested in how culture, upbringing, and society shape the ways people see themselves and others.`,

//     `What first caught my attention was the title of the series.`,

//     `*Hate My Hair.*`,

//     `It sounds almost like a confession. A simple statement, yet one that invites a much larger conversation.`,

//     `Can we truly hate something about ourselves without first developing an idea of what it should look like?`,

//     `Or do we gradually become uncomfortable with certain parts of ourselves because of the reactions they receive?`,

//     `In one of Jude's paintings, a woman appears deep in thought. Her gaze is lowered, one hand resting near her face. She wears a dark burgundy jacket against a largely white background.`,

//     `But it is her hair that commands the painting.`,

//     `Dark, textured, and almost sculptural, it expands far beyond the familiar proportions of a traditional portrait. Thick layers of paint spread across the canvas, interrupted by rough edges and traces of purple. The hair appears to resist the boundaries of the figure itself.`,

//     `There is something fascinating about the contrast.`,

//     `**The woman's expression is quiet, but her hair is anything but.**`,

//     `It occupies space without apology.`,

//     `To me, the painting presents a kind of freedom that feels strangely at odds with the title of the series.`,

//     `I see beauty in the texture, the movement, the unpredictability of it all. Yet the words *Hate My Hair* invite me to consider how the very features we admire in art can become subjects of criticism in everyday life.`,

//     `A hairstyle celebrated on a canvas might receive an entirely different reaction in a classroom, at home, or during a job interview.`,

//     `Of course, the artist's intentions may extend beyond my own reading of the work. But perhaps that is part of what makes art interesting. Sometimes a painting raises questions about experiences we had never thought to examine.`,

//     `For me, Jude's work brings back a childhood memory of the barber's chair and a mother who seemed happiest when my hair was neatly cut.`,

//     `It also raises a bigger question.`,

//     `**Were we being taught how to care for our hair, or were we being taught how much of it other people would tolerate?**`,

//     {
//       type: 'heading',
//       text: 'The rules of looking neat',
//     },

//     `In America, conversations about embracing natural hair, skin tone, and identity have become part of a larger movement toward self-acceptance and confidence.`,

//     `There is growing encouragement to love the features we were born with, rather than constantly trying to meet someone else's expectations of beauty.`,

//     `But the conversation becomes more complicated when we enter professional spaces.`,

//     `A hairstyle that represents freedom and self-expression outside the office can suddenly become a question of professionalism within it.`,

//     `*Be yourself, but not too much.*`,

//     `*Express yourself, but remain presentable.*`,

//     `And what exactly does presentable mean?`,

//     `We often discuss professionalism as though it is a universal standard. But much of what we consider professional has been shaped by social expectations, cultural preferences, and the appearance of those who have traditionally occupied positions of authority.`,

//     `In the United States, [research by scholars at Duke University](https://www.fuqua.duke.edu/duke-fuqua-insights/ashleigh-rosette-research-suggests-bias-against-natural-hair-limits-job) found that Black women wearing natural hairstyles were perceived as less professional and less competent than women with straightened hairstyles in certain recruitment settings.`,

//     `A [2023 workplace study commissioned by Dove and LinkedIn](https://www.linkedin.com/business/learning/blog/dove-linkedin-partnership) also reported that approximately two-thirds of Black women surveyed changed their hair for job interviews.`,

//     `Think about that for a moment.`,

//     `Before someone has spoken about their qualifications, experience, or ambitions, they may already be thinking about whether their hair will make them appear suitable for the opportunity.`,

//     `It is not necessarily a question of whether they like their hair.`,

//     `**It is a question of whether somebody else will.**`,

//     `Of course, not every person who straightens their hair, wears a wig, chooses a low cut, or ties their hair back is doing so out of fear. People should have the freedom to experiment with their appearance without having their choices turned into political statements.`,

//     `There is beauty in versatility.`,

//     `But there is a difference between choosing a hairstyle because you enjoy it and choosing one because you believe your natural appearance might cost you an opportunity.`,

//     `The problem is not the low cut, the straightened hair, or the ponytail.`,

//     `The problem begins when one appearance is treated as respectable and another as something that must be corrected.`,

//     `And perhaps that is why the language we use matters.`,

//     `*Bushy. Rough. Untidy. Unprofessional.*`,

//     `These descriptions do more than characterize hair. Depending on how they are used, they can begin to characterize the person wearing it.`,

//     `We gradually stop discussing appearance and start making assumptions about discipline, intelligence, ambition, and character.`,

//     `**But when did responsibility become something we could measure with a haircut?**`,

//     {
//       type: 'heading',
//       text: 'Before the dress code',
//     },

//     `It would be easy to blame colonization for the complicated relationship Black people have with their appearance.`,

//     `And certainly, the influence of colonialism and Western beauty standards deserves examination. But I also find myself looking further back, toward African cultures before European influence became so dominant.`,

//     `In Yoruba culture, where I come from, hair was never simply decoration.`,

//     `**It was a language.**`,

//     `Hairstyles could communicate social status, age, marital status, and cultural or spiritual identity. The hair of a young girl might be arranged differently from that of a married woman. Particular styles could be associated with ceremony, social standing, or royalty.`,

//     `A hairstyle could say something about you before you introduced yourself.`,

//     `The cultural significance of Yoruba hairstyling is explored by historian Toyin Falola in [Yorùbá Hair Art and the Agency of Women](https://www.cambridge.org/core/books/abs/decolonizing-african-knowledge/yoruba-hair-art-and-the-agency-of-women/CE79860318271A423F0A02AE5D6B2104), which examines the relationship between hair, identity, spirituality, and social expectations.`,

//     `There was also considerable artistry in the process.`,

//     `The careful parting of the scalp, the arrangement of braids, the symmetry of patterns, and the patience required to create elaborate designs turned hair into something close to architecture.`,

//     `It was both personal expression and a form of visual communication.`,

//     `I find that fascinating.`,

//     `Today, we sometimes speak about Black hair as though its natural texture is a problem waiting to be managed. Yet generations of African hairstyling traditions demonstrate just how much beauty and creativity can emerge from those same textures.`,

//     `That is not to suggest that traditional African societies existed without strict expectations about appearance. Different communities had their own rules about grooming, gender, status, and presentation. In Yoruba society, too, neatness and proper grooming could be closely associated with social respectability.`,

//     `Nor does every modern preference for straight hair come from colonial influence.`,

//     `Our relationship with beauty has always been complicated.`,

//     `But the history reminds us that there have been other ways of understanding the significance of hair.`,

//     `Black hair can curl, coil, shrink, stretch, twist, and rise into extraordinary forms. It can be braided into intricate patterns or left to grow freely.`,

//     `There is something almost architectural about it, as though each strand participates in a design of its own.`,

//     `**And like a wildflower, it does not need to resemble another flower to be beautiful.**`,

//     `Perhaps that is what I find so compelling about Jude's painting.`,

//     `The woman's hair seems to exceed every expectation of where it should begin and end.`,

//     `And I wonder why that kind of expression is so easily celebrated in a gallery but can still make people uncomfortable elsewhere.`,

//     {
//       type: 'heading',
//       text: 'When success changes the rules',
//     },

//     `I sometimes think about Jay-Z.`,

//     `For much of his early career, the rapper maintained a closely cropped haircut. Years later, he began growing his hair, eventually developing the freeform locs that reminded many observers of the late artist Jean-Michel Basquiat.`,

//     `His changing appearance raises an interesting question about success and personal freedom.`,

//     `Would someone entering a corporate office with that hairstyle be judged differently from a billionaire walking into the same room?`,

//     `Does success give people the freedom to challenge expectations that others are still expected to follow?`,

//     `Or are we simply assigning our own ideas about respectability to someone else's appearance?`,

//     `Jay-Z's story also offers an interesting reminder that we should be careful about assuming why people choose their hairstyles.`,

//     `In June 2026, Beyoncé [explained that Jay-Z began growing his locs](https://www.revolt.tv/article/beyonce-combing-out-jay-z-locs-cecred-vlog) partly to help their daughter, Blue Ivy, appreciate her natural hair texture. Years later, he combed out his locs and wore an afro in tribute to his late father.`,

//     `That detail changes how I think about the story.`,

//     `What I initially saw as a possible transformation connected to professional success was also a father's attempt to help his daughter see beauty in something about herself.`,

//     `And suddenly, I find myself thinking about my own mother again.`,

//     `Two parents, different approaches, perhaps both trying to prepare their children for the world.`,

//     `One celebrated a fresh haircut. Another grew his hair to encourage his daughter's confidence.`,

//     `Neither experience can explain every choice a person makes about their appearance. But together, they raise an interesting question about the influence parents have on how children come to understand beauty.`,

//     `What would happen if we celebrated a child's natural hair with the same enthusiasm we give a fresh haircut?`,

//     `Would they grow up seeing their hair differently?`,

//     `Would they still feel the need to adjust their appearance before entering certain spaces?`,

//     `Perhaps the answer is not as simple as refusing to cut our hair.`,

//     `Perhaps it begins with examining why we sometimes feel that we must.`,

//     {
//       type: 'heading',
//       text: 'What exactly are we fixing?',
//     },

//     `Returning to Jude Adebayo's painting, I am drawn once again to the difference between the woman's quiet expression and the overwhelming presence of her hair.`,

//     `It is difficult to ignore.`,

//     `The hair stretches across the canvas, breaking into rough, unpredictable forms. There is no attempt to make every edge smooth or every strand behave.`,

//     `At least in my interpretation, that is where much of the painting's beauty lies.`,

//     `It reminds me that art often encourages us to admire qualities that everyday social expectations ask us to suppress.`,

//     `We praise originality in paintings, celebrate unconventional forms in sculpture, and admire artists who refuse to follow established rules.`,

//     `Yet when those same qualities appear in people, we sometimes respond with discomfort.`,

//     `We ask them to look neater.`,

//     `To appear more serious.`,

//     `To look responsible.`,

//     `And perhaps what troubles me most is how ordinary these requests can sound.`,

//     `I don't remember my mother ever sitting me down to explain why a low cut made me more respectable. There was no lecture about identity or beauty standards.`,

//     `There were simply compliments when my hair was short and reminders when it grew.`,

//     `That was enough to make me understand what was preferred.`,

//     `And I imagine many of us have similar stories.`,

//     `The child whose braids were called too rough. The young woman who was advised to straighten her hair before an interview. The young man whose afro was interpreted as a lack of seriousness.`,

//     `Not everyone experiences these moments in the same way. Some may laugh them off. Others may remember them long after the conversation has ended.`,

//     `And perhaps some never question them at all.`,

//     `I still believe there is value in grooming, in taking care of ourselves, and in dressing appropriately for different occasions.`,

//     `But taking care of something should not require us to believe there is something wrong with its natural state.`,

//     `My mother wanted me to look responsible.`,

//     `I understand that.`,

//     `What I question now is why responsibility had to look a particular way.`,

//     `Perhaps the conversation should never have been about whether our hair was too long, too thick, too rough, or too difficult to manage.`,

//     `Perhaps it should have been about why those qualities made us uncomfortable in the first place.`,

//     `And when I look at Jude's *Hate My Hair*, I no longer see the title as a statement that must be accepted at face value.`,

//     `I see a question worth asking ourselves.`,

//     `**Did we ever truly hate our hair?**`,

//     `**Or did we simply become accustomed to seeing it through the expectations of others?**`,

//     `Before we ask the world to change how it sees us, perhaps we should examine the language we use in our own homes.`,

//     `The next time a child walks into the room with a growing afro, maybe the conversation doesn't have to begin with a reminder to visit the barber.`,

//     `Maybe we can allow the hair to grow without making it a reflection of the child's character.`,

//     `Because a fresh haircut can make someone look different.`,

//     `**But it has never been what makes them responsible.**`,
//   ],

//   images: [],

//   youtube: '',
// },

'mama-said-fix-your-hair': {
  category: 'culture-criticism',

  title: 'Mama Said Fix Your Hair',

  author: 'Mo Alimi',

  readTime: '9 min read',

  publishedAt: '2026-10-30T00:00:00-06:00',

  issueNumber: 13,

  issue: 'Issue 13',


    
intro:
  `Growing up, a fresh haircut earned compliments. A growing afro raised concerns. But when did the hair growing naturally from our heads become something we needed to fix? Through Jude Adebayo's Hate My Hair series, we question the rules of beauty, respectability, and professionalism.`,


  heroImage: jude1,

  heroImageCaption:
    '"i hate my hair, perhaps I was taught to hate it III" by Jude Adebayo',

  body: [
    `Before we start pointing fingers at the world, perhaps we should have a conversation about what happened at home.`,

    `Growing up, my mum loved a fresh haircut. Every time I came back from the barber with a low cut, the compliments would start. I looked handsome, responsible, like a child who was being raised properly. You would think I had just graduated from university.`,

    `But let my hair grow into a little afro and suddenly there was a problem. The reminders would begin, and from the way she reacted, you would think my hair had committed an offence.`,

    `It was funny because I never understood what had changed about me. I was still the same boy, only with a little more hair on my head.`,

    `We heard these things all the time growing up. Your hair is bushy. You look like a rascal. Go and make yourself look responsible. Nobody really explained the relationship between a haircut and responsibility. It was simply something we understood.`,

    `And for a long time, I didn't think much of it either. I liked getting compliments from my mum, and if cutting my hair was what brought them, then a trip to the barber wasn't such a terrible thing.`,

    `To be fair to her, I don't think she was trying to make me dislike my hair. She liked seeing her son looking neat. That was her idea of being presentable, and like many parents, she probably believed it would help me make a good impression on people.`,

    `But the interesting thing about childhood is that you don't always need someone to explain a lesson before you learn it. Sometimes the excitement they show when you do something, and the disappointment when you don't, is enough.`,

    `I knew my mother preferred my hair short long before I understood why.`,

    `As I grew older, I started paying more attention to the things we were taught about appearance. Looking responsible, looking respectable, looking like someone people should take seriously. Somehow, all of these things could be connected to the amount of hair growing on your head.`,

    `And that is where my curiosity began.`,

    {
      type: 'heading',
      text: 'Perhaps I was taught to hate it',
    },
         {
      type: 'image',
      src: jude2,
      alt: '',
      caption: '""I hate my hair, perhaps I was taught to hate it" II" by Jude Adebayo',
    },

    `I recently came across a painting series called Hate My Hair by Lagos-based Nigerian artist Jude Adebayo, and the title immediately caught my attention.`,

    `Jude works primarily in painting and drawing, exploring identity, memory, human emotions, and the stories that make up African experiences. He is particularly interested in how our culture, upbringing, and society influence the way we see ourselves and others.`,

    `There was something about the title that brought me back to my childhood.`,

    `Hate My Hair. Three simple words, but I kept thinking about how someone arrives at that feeling in the first place.`,

    `I don't remember ever waking up and deciding that I hated my hair. As a child, I probably had more important things to worry about. But I understood that a particular version of me received more approval than another.`,

    `Maybe hate is too strong a word for what I experienced. Perhaps I was simply taught that my hair looked better when there was less of it.`,

    `Looking at one of Jude's paintings, I was struck by the amount of space the woman's hair occupies. Her face is almost quiet in comparison. She appears thoughtful, with her head slightly lowered and one hand resting near her face. But her hair is doing something entirely different.`,

    `It spreads across the painting in thick, textured forms, almost as if it has no intention of staying within the boundaries of the portrait. There is something wild about it, but not in the negative way we often use that word to describe Black hair.`,

    `I actually find it beautiful.`,

    `The texture, the movement, the way the paint itself gives the hair a personality. It reminds me of how much we can do with our hair when we stop expecting it to behave like somebody else's.`,

    `Of course, that is my own interpretation of the painting. Jude's work may be speaking to experiences beyond the ones I recognize in it. But I think that is part of the beauty of art. Two people can look at the same painting and find themselves thinking about entirely different things.`,

    `For me, it brought back memories of the barber's chair, my mother's compliments, and the strange relationship between hair and responsibility.`,

    `We can admire a painting because of its unusual texture and the freedom of its expression. We might even pay good money to hang it on our walls. Yet when somebody walks into a professional setting with an afro that occupies just as much attention, the conversation can suddenly become about whether they look presentable.`,

    `Funny how that works.`,

    {
      type: 'heading',
      text: 'Looking presentable',
    },
  {
      type: 'image',
      src: jude3,
      alt: '',
      caption: '""I hate my hair, perhaps I was taught to hate it" II" by Jude Adebayo',
    },



    `Living in America, I have noticed how conversations about natural hair, skin tone, and self-acceptance are often connected to confidence and mental well-being. People are encouraged to embrace the features they once felt pressured to change.`,

    `There is something refreshing about that. I think everyone deserves to feel comfortable with the way they naturally look.`,

    `But the conversation changes when we start talking about work.`,

    `You can spend the weekend celebrating your natural hair, taking pictures, and feeling good about yourself. Then Monday comes around, you have a job interview, and suddenly you are standing in front of the mirror trying to decide whether that same hairstyle is a good idea.`,

    `The hair hasn't changed. The setting has.`,

    `And I think that says something interesting about what we call professionalism.`,

    `We often treat professionalism as though everyone agrees on what it looks like. Wear the right clothes, keep your appearance neat, speak properly, and make a good impression. Most of us understand the importance of presenting ourselves well.`,

    `But looking presentable is not always as straightforward as we make it sound. What one person considers neat, another might consider inappropriate. What looks perfectly normal within one culture can attract unwanted attention in another.`,

    `Black hair has often found itself somewhere in the middle of those disagreements.`,

    `There is actual research behind this discomfort. A study discussed by [Duke University](https://www.fuqua.duke.edu/duke-fuqua-insights/ashleigh-rosette-research-suggests-bias-against-natural-hair-limits-job) found that Black women with natural hairstyles were sometimes judged as less professional during recruitment evaluations than women with straightened hair.`,

    `I find that troubling, not because there is anything wrong with straightened hair, but because of what it suggests about the way we judge people before getting to know them.`,

    `Imagine spending years studying, developing your skills, preparing for a career, and still having to wonder whether the hair growing from your head might affect how someone evaluates your abilities.`,

    `I don't believe every Black person who straightens their hair or keeps it low is trying to impress white America. That would be an unfair assumption. Some people genuinely prefer those styles. Others enjoy switching things up. Hair is personal, and the freedom to change it should be part of the conversation too.`,

    `But there is a difference between choosing a hairstyle because you like it and choosing one because you are worried about how people will react.`,

    `Sometimes we straighten it, tie it back, trim it down, or make it look less noticeable. And maybe we do these things so often that eventually we stop thinking about why.`,

    `I am not against looking neat. I enjoy a good haircut myself. But I find it strange that we sometimes use appearance as a shortcut for judging someone's character.`,

    `A low cut does not automatically make someone responsible, just as an afro does not make someone careless.`,

    `Yet somehow we have become quite comfortable acting as though it does.`,

    {
      type: 'heading',
      text: 'Before the world called it bushy',
    },

     {
      type: 'image',
      src: jude4,
      alt: '',
      caption: '"On my own Terms II" by Jude Adebayo',
    },




    `Whenever conversations about Black identity and beauty standards come up, colonialism is often one of the first things we discuss. And there are good reasons for that. European influence changed many aspects of African life, including ideas about appearance, education, class, and what it meant to look respectable.`,

    `But I also think we should look at how African societies understood hair before Western beauty standards became so dominant.`,

    `I am Yoruba, and in Yoruba culture, hair has a history that goes far beyond visiting the salon to look nice.`,

    `Different hairstyles could communicate different things about a person. Age, marital status, social standing, cultural identity, and even spiritual beliefs could be expressed through the arrangement of hair. Certain styles were associated with ceremonies and important stages of life, while elaborate designs could reflect status or royalty.`,

    `A young girl's hairstyle could look different from that of a newly married woman. A queen might wear something that communicated her position without needing an introduction.`,

    `It is fascinating to think that hair could tell so much of a person's story without a single word being spoken.`,

    `And then there is the artistry itself.`,

    `Think about the patience required to create some of the traditional Yoruba hairstyles. The careful parting of the scalp, the patterns, the braids, the arrangement. Some of these styles are so elaborate that they almost resemble architecture.`,

    `When I look at that history, I find it difficult to think of Black hair as something that simply needs to be controlled.`,

    `It can be twisted, braided, stretched, sculpted, decorated, or allowed to grow. The possibilities seem endless. There is something almost rebellious about how it refuses to follow one particular shape.`,

    `Like a wildflower, it can grow in its own direction and still be beautiful.`,

    `But I don't want to romanticize the past either. African cultures had their own beauty standards, grooming expectations, and social rules. Yoruba society was no exception. Looking neat and being properly groomed mattered then too.`,

    `That is why I hesitate to explain every modern attitude toward Black hair as simply a consequence of colonization. The history is more complicated than that.`,

    `What interests me is how the meaning of hair changes depending on who is looking at it and where the person wearing it happens to be.`,

    `The same kind of hairstyle that might be celebrated as cultural expression at a festival could be questioned in an office. A beautifully textured afro might be praised in a painting but called bushy on a person's head.`,

    `And sometimes the criticism does not even come from outside our communities. It comes from people who look just like us, people who grew up hearing the same things we did.`,

    `That brings me right back to my mother and her preference for a fresh low cut.`,

    `Maybe the issue was never simply about Western beauty standards. Maybe it was also about the smaller everyday rules we had become accustomed to following without much discussion.`,

    {
      type: 'heading',
      text: 'Jay-Z and the freedom to look different',
    },

     {
      type: 'image',
      src: jude6,
      alt: '',
      caption: 'Jay-Z x Basquiat by Eliana Wall Art',
    },




    `I sometimes think about Jay-Z when this conversation comes up.`,

    `For much of his early career, he kept his hair low. The clean, closely cropped look was almost part of the image we associated with him. Years later, he began growing freeform locs, a hairstyle that reminded many people of the late artist Jean-Michel Basquiat.`,

    `And eventually, he returned to a shorter haircut.`,

    `I find that transformation interesting, especially when I think about how much his position in the world changed over those years.`,

    `Jay-Z was no longer just a rapper trying to establish himself in the music industry. He had become one of the most recognizable and financially successful figures in entertainment and business.`,

    `Seeing him with his locs made me wonder whether success changes how people interpret our appearance.`,

    `If an unknown young Black man walked into a major business meeting with the same hairstyle, would he receive the same reaction as Jay-Z? Would people see creativity and confidence, or would somebody quietly suggest that he should get a haircut before the next meeting?`,

    `I don't know what motivated Jay-Z to keep his hair short earlier in his career, and I wouldn't want to pretend that I do. His different hairstyles may have reflected personal preference, family, artistic expression, or simply a desire for change.`,

    `In fact, Beyoncé has explained that his decision to grow his locs was partly connected to encouraging their daughter, Blue Ivy, to appreciate her natural hair. That detail makes the story even more interesting to me.`,

    `Here was a father using his own appearance to show his daughter that there was nothing wrong with hers.`,

    `And that takes me back to how much influence parents have over the way children understand themselves.`,

    `My mother celebrated me when I had a low cut. Jay-Z, according to his wife's account, grew his hair partly to encourage his daughter to appreciate hers.`,

    `Different circumstances, different expressions of care.`,

    `I don't think one example automatically makes a parent right and the other wrong. Parenting is complicated, and people do what they believe is best for their children.`,

    `But it does make me think about how powerful those little gestures of approval can be.`,

    `A compliment can stay with a child. So can the feeling that something about their natural appearance needs to change before they look acceptable.`,

    `Maybe we underestimate how much these ordinary moments shape the way we eventually see ourselves.`,

    {
      type: 'heading',
      text: 'What exactly are we fixing?',
    },

    
     {
      type: 'image',
      src: jude7,
      alt: '',
      caption: '"I hate my hair "perhaps I was taught to hate it"" by Jude Adebayo',
    },

    `I keep returning to Jude Adebayo's painting.`,

    `There is something beautiful about how much space the woman's hair takes up. It doesn't look interested in behaving itself. The texture is thick, the shapes are unpredictable, and the hair almost seems to have a life of its own.`,

    `The more I look at it, the more I think about how strange our relationship with beauty can be.`,

    `We celebrate artists for experimenting, breaking rules, and creating things that look different from what we are used to seeing. We encourage them to be original, to challenge expectations, and to express themselves freely.`,

    `But outside the gallery, we are sometimes less generous with that freedom.`,

    `A young man grows an afro and someone tells him he looks like a rascal. A woman wears her natural hair to work and finds herself wondering whether it looks professional enough. A child is reminded that the next haircut is long overdue.`,

    `None of these moments necessarily comes from a place of hatred. Sometimes people genuinely believe they are giving helpful advice.`,

    `That is what makes the conversation complicated.`,

    `My mum wasn't trying to start a debate about Black identity every time she reminded me to cut my hair. She wanted her son to look good. And I loved that she cared about how I presented myself.`,

    `I still do.`,

    `But growing older has made me question some of the things we accepted so easily when we were children.`,

    `Maybe we should be more careful with the words we use when describing someone's natural appearance. There is a difference between telling a child to take care of their hair and making them believe the hair itself is the problem.`,

    `Not every afro is untidy. Not every low cut is respectable. And certainly, no hairstyle can tell us everything we need to know about someone's character.`,

    `There is room for grooming without making natural texture something to be ashamed of. There is room for personal preference without turning that preference into a rule for everyone else.`,

    `Perhaps the most interesting part of Jude's Hate My Hair series, at least for me, is how the title makes me examine a feeling I may never have fully recognized.`,

    `I never thought I hated my hair growing up. I simply knew my mother preferred it short, and I enjoyed the approval that came with looking the way she liked.`,

    `But what happens when a child begins to associate that approval with changing something about their natural appearance?`,

    `I don't have a perfect answer.`,

    `What I do know is that I want to be more conscious of the things we call beautiful, the things we call presentable, and the things we ask people to fix.`,

    `Because sometimes, without realizing it, we turn our personal preferences into standards that other people are expected to meet.`,

    `And perhaps the next time a child walks into the room with a growing afro, the conversation doesn't have to begin with a reminder to visit the barber.`,

    `Maybe we can just let the hair grow.`,

    `After all, it is only hair.`,

    `It was never a measure of how responsible I was in the first place.`,
  ],

  images: [],

  youtube: '',
},



}
