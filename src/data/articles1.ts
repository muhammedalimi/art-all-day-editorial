

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
}
