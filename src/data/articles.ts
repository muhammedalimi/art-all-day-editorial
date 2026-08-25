// import ben1 from '../assets/ben1.jpg'

// export const articles = {
//   'faith-and-form': {
//     category: 'Criticism',
//     title: 'Faith & Form',

//     author: 'Mo Alimi',
//     readTime: '5 min read',
//     issue: 'Studio Hours — Issue 01',

//     intro:
//       'Ben Cowan’s work explores belief, painting, religious imagery, personal history, leaves, frames, and how faith becomes visual form.',

//     heroImage: ben1,

//     body: [
//       `Faith & Form is an exploration of how belief can move through material. In Ben Cowan’s paintings, religious imagery, memory, and natural forms come together in a visual language that feels both personal and familiar.`,

//       `Leaves, frames, painted surfaces, and sacred references become more than individual objects. They create a space where memory and spirituality can exist together.`,

//       `Cowan’s work asks us to slow down and look closely. The paintings carry a sense of history while remaining grounded in the physical qualities of paint, surface, and composition.`,
//     ],

//     images: [],

//     youtube: '',

//     audio: '',
//   },
// }

// import ben1 from '../assets/ben1.jpg'

// export const articles = {
//   'faith-and-form': {
//     category: 'Criticism',
//     title: 'Faith & Form',

//     author: 'Mo Alimi',
//     readTime: '5 min read',
//     issue: 'Studio Hours — Issue 01',

//     intro:
//       'Ben Cowan’s work explores belief, painting, religious imagery, personal history, leaves, frames, and how faith becomes visual form.',

//     heroImage: ben1,

//     body: [
//       `Faith & Form is an exploration of how belief can move through material. In Ben Cowan’s paintings, religious imagery, memory, and natural forms come together in a visual language that feels both personal and familiar.`,

//       `Leaves, frames, painted surfaces, and sacred references become more than individual objects. They create a space where memory and spirituality can exist together.`,

//       `Cowan’s work asks us to slow down and look closely. The paintings carry a sense of history while remaining grounded in the physical qualities of paint, surface, and composition.`,
//     ],

//     images: [],
//     youtube: '',
//     audio: '',
//   },

//   'inside-the-studio-practice': {
//     category: 'Interview',
//     title: 'Inside the Studio Practice',

//     author: 'Studio Hours',
//     readTime: '6 min read',
//     issue: 'Studio Hours — Issue 01',

//     intro:
//       'A conversation about process, doubt, materials, and the private rhythm behind finished work.',

//     heroImage: ben1,

//     body: [
//       `The studio is often where the finished image begins to take shape, but the process is rarely as simple as the final work suggests.`,

//       `Artists move through uncertainty, repetition, mistakes, and unexpected discoveries before arriving at something that feels complete.`,

//       `This conversation looks at the private rhythm behind the work and what it means to return to the studio every day.`,
//     ],

//     images: [],
//     youtube: '',
//     audio: '',
//   },

//   'why-surfaces-matter': {
//     category: 'Essay',
//     title: 'Why Surfaces Matter',

//     author: 'Editorial',
//     readTime: '4 min read',
//     issue: 'Studio Hours — Issue 01',

//     intro:
//       'A short reflection on texture, architecture, and the emotional weight carried by painted surfaces.',

//     heroImage: ben1,

//     body: [
//       `A painted surface is never simply a background. Texture, color, and material can change the way an image is experienced.`,

//       `Across painting and architecture, surfaces carry traces of time, touch, construction, and memory.`,

//       `To look closely at a surface is to notice the physical history embedded within the work.`,
//     ],

//     images: [],
//     youtube: '',
//     audio: '',
//   },
// }


/* Version 3 */

// import ben1 from '../assets/ben1.jpg'



// type BodyBlock =
//   | string
//   | {
//       type: 'heading'
//       text: string
//     }

// type Article = {
//   category: string
//   title: string
//   author: string
//   readTime: string
//   issueNumber: number
//   issue: string
//   intro: string
//   heroImage: string
//   body: BodyBlock[]
//   images: string[]
//   youtube: string
//   audio: string
// }

// export const articles: Record<string, Article> = {
//   // Issue 01
//   'faith-and-form': {
//     category: 'Criticism',
//     title: 'Faith & Form',
//     author: 'Mo Alimi',
//     readTime: '5 min read',

//     issueNumber: 1,
//     issue: 'Issue 01',

//     intro:
//       'Ben Cowan’s work explores belief, painting, religious imagery, personal history, leaves, frames, and how faith becomes visual form.',

//     heroImage: ben1,

//     body: [
//       {
//         type: 'heading',
//         text: 'Faith & Form is an exploration of how belief can move through material.'
//       },
//       `In Ben Cowan’s paintings, religious imagery, memory, and natural forms come together in a visual language that feels both personal and familiar.`,

//       `Leaves, frames, painted surfaces, and sacred references become more than individual objects. They create a space where memory and spirituality can exist together.`,

//       `Cowan’s work asks us to slow down and look closely. The paintings carry a sense of history while remaining grounded in the physical qualities of paint, surface, and composition.`,
//     ],

//     images: [],
//     youtube: '',
//     audio: '',
//   },


//   'inside-the-studio-practice': {
//     category: 'Interview',
//     title: 'Inside the Studio Practice',

//     author: 'Studio Hours',
//     readTime: '6 min read',

//     issueNumber: 1,
//     issue: 'Issue 01',

//     intro:
//       'A conversation about process, doubt, materials, and the private rhythm behind finished work.',

//     heroImage: ben1,

//     body: [
//       `The studio is often where the finished image begins to take shape, but the process is rarely as simple as the final work suggests.`,

//       `Artists move through uncertainty, repetition, mistakes, and unexpected discoveries before arriving at something that feels complete.`,

//       `This conversation looks at the private rhythm behind the work and what it means to return to the studio every day.`,
//     ],

//     images: [],
//     youtube: '',
//     audio: '',
//   },

//   'why-surfaces-matter': {
//     category: 'Essay',
//     title: 'Why Surfaces Matter',

//     author: 'Editorial',
//     readTime: '4 min read',

//     issueNumber: 1,
//     issue: 'Issue 01',

//     intro:
//       'A short reflection on texture, architecture, and the emotional weight carried by painted surfaces.',

//     heroImage: ben1,

//     body: [
//       `A painted surface is never simply a background. Texture, color, and material can change the way an image is experienced.`,

//       `Across painting and architecture, surfaces carry traces of time, touch, construction, and memory.`,

//       `To look closely at a surface is to notice the physical history embedded within the work.`,
//     ],

//     images: [],
//     youtube: '',
//     audio: '',
//   },
// }


import ben22 from '../assets/ben22.jpg'

import benIronGate from '../assets/ben23.jpg'
import benFeatherStone from '../assets/ben25.jpg'
import benRailSpike from '../assets/ben26.jpg'
import benPoussin from '../assets/ben27.jpg'


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
      caption: string
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
}