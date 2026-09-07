


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
  issueNumber: number
  issue: string
  intro: string
  heroImage: string
  body: BodyBlock[]
  images: string[]
  youtube: string
  audio: string
}

export const articles: Record<string, Article> = {
  // LEAD STORY
  'dear-god-what-remains-of-faith': {
    category: 'Criticism',
    title: 'Dear God: What Remains of Faith?',
    author: 'Mo Alimi',
    readTime: '9 min read',

    issueNumber: 1,
    issue: 'Issue 01',

    intro:
      'Ben Cowan’s Dear God takes inherited religious imagery apart and places it beside fragments of the material world, raising questions about faith, confinement, detachment, mortality, and what remains when belief is reconstructed.',

    heroImage: ben22,

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
    audio: '',
  },

  // SUPPORTING STORY
  'inside-the-studio-practice': {
    category: 'Interview',
    title: 'Inside the Studio Practice',
    author: 'Studio Hours',
    readTime: '6 min read',

    issueNumber: 1,
    issue: 'Issue 01',

    intro:
      'A conversation about process, doubt, materials, and the private rhythm behind finished work.',

    heroImage: ben22,

    body: [
      `The studio is often where the finished image begins to take shape, but the process is rarely as simple as the final work suggests.`,

      `Artists move through uncertainty, repetition, mistakes, and unexpected discoveries before arriving at something that feels complete`,

      `This conversation looks at the private rhythm behind the work and what it means to return to the studio every day.`,
    ],

    images: [],
    youtube: '',
    audio: '',
  },

  // SUPPORTING STORY
  'why-surfaces-matter': {
    category: 'Essay',
    title: 'Why Surfaces Matter',
    author: 'Editorial',
    readTime: '4 min read',

    issueNumber: 1,
    issue: 'Issue 01',

    intro:
      'A short reflection on texture, architecture, and the emotional weight carried by painted surfaces.',

    heroImage: ben22,

    body: [
      `A painted surface is never simply a background. Texture, color, and material can change the way an image is experienced.`,

      `Across painting and architecture, surfaces carry traces of time, touch, construction, and memory.`,

      `To look closely at a surface is to notice the physical history embedded within the work.`,
    ],

    images: [],
    youtube: '',
    audio: '',
  },

    // STUDIO NOTES — ISSUE 02
  'six-siblings': {
    category: 'Inside the Studio Practice',
    title: 'Six Siblings',
    author: 'Mo Alimi',
    readTime: 'Listen + Lyrics',

    issueNumber: 2,
    issue: 'Issue 02',

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
    audio: sixsiblingsAudio,
  },
'living-dangerously': {
  category: 'Street to Studio',

  title: 'Living Dangerously',

  author: 'Mo Alimi',

  readTime: '8 min read',

  issueNumber: 2,

  issue: 'Issue 02',

  intro:
    'The first time I really tried to understand Slawn’s art, I wasn’t sure I did. Maybe I was looking too hard at the paintings.',

  heroImage: slawn12,
  
 

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

  audio: '',
},
}