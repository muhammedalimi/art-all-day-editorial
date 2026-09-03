// import blu1 from '../assets/blu1.png'
// import blu2 from '../assets/blu2.png'
// import blu3 from '../assets/blu3.png'

// import ben1 from '../assets/ben1.jpg'
// import ben2 from '../assets/ben2.jpg'
// import ben3 from '../assets/ben3.jpg'

// import luz1 from '../assets/Luz1.jpg'

// export const artists = [
//   {
//     slug: 'blu-the-genius',
//     name: 'BLU The Genius',
//     category: 'Artist Pick',
//     title: 'Color, Pressure, and Emotional Visibility',
//     date: 'July 4, 2026',
//     author: 'Mo Alimi',
//     heroImage: blu1,
//     images: [blu1, blu2, blu3],
//     intro:
//       'BLU The Genius sits in that space where art feels emotional before it feels decorative.',
//     paragraphs: [
//       'The work is bold, colorful, and easy to recognize, but what makes it more interesting is the intention behind it. BLU has described the work as coming from personal experience, raw emotion, and a desire to raise awareness around mental health.',
//       'That matters because the paintings do not just ask to be looked at; they try to turn insecurity, anxiety, and inner pressure into something visible.',
//       'There is also a clear understanding of presentation. The public profile frames the pieces as numbered, hand-signed works, with acrylic and oil pastel listed as part of the practice.',
//       'What works best about BLU’s art is the honesty. The pieces do not feel like they are trying to be quiet or overly academic. They speak in color, character, emotion, and repetition.',
//       'Still, BLU The Genius represents an artist building from feeling, not just aesthetics. The work is polished enough to live in a gallery setting, but personal enough to still feel close to the street, the studio, and the emotional life that created it.',
//     ],
//   },
//   {
//     slug: 'ben-cowan',
//     name: 'Ben Cowan',
//     category: 'Faith & Form',
//     title: 'Painting, Faith, Memory, and the Sacred Surface',
//     date: 'July 4, 2026',
//     author: 'Mo Alimi',
//     heroImage: ben1,
//     images: [ben1, ben2, ben3],
//     intro:
//       'Ben Cowan’s work sits at the intersection of painting, faith, architecture, memory, and doubt.',
//     paragraphs: [
//       'His practice uses religious imagery, leaves, frames, and symbolic fragments to explore how belief is built, questioned, broken, and rebuilt through visual form.',
//       'What makes the work compelling is that it does not treat spirituality as simple decoration. The paintings carry the weight of personal history and suggest that faith can be both beautiful and difficult.',
//       'Cowan’s use of leaves is especially powerful. A leaf can feel fragile and ordinary, but in his paintings it becomes a spiritual object carrying grief, movement, renewal, and mystery.',
//       'The strongest part of Cowan’s practice is its patience. The work asks the viewer to slow down, look again, and consider how sacred meaning can appear through surface, repetition, image, and silence.',
//     ],
//   },

//    {
//     slug: 'luz-carabano',

//     name: 'Luz Carabano',

//     category: 'Artist Pick',

//     title: 'The Intimacy of Painting',

//     date: 'August 22, 2026',

//     author: 'Mo Alimi',

//     heroImage: luz1,

//     images: [luz1],

//     intro:
//       'Luz Carabano approaches painting intuitively rather than descriptively, allowing intimacy and feeling to guide the work.',

//     paragraphs: [
//       'Her practice asks what happens when painting becomes less about describing the world and more about experiencing it through color, gesture, presence, and emotion.',

//       'Carabano’s paintings resist the need to explain everything. Forms emerge and disappear, colors move across the surface, and gestures create a sense of something remembered rather than directly described.',

//       'There is an intimacy in this uncertainty. The paintings leave enough space for the viewer to enter them emotionally, allowing meaning to develop through looking rather than explanation.',

//       'What makes the work compelling is its sensitivity to presence. A line, a shift in color, or an unfinished edge can carry as much weight as a recognizable image.',

//       'The result is painting that feels less like an illustration of the world and more like an experience of being inside it.',
//     ],
//   },
// ]


/*version 2*/


import blu1 from '../assets/blu1.png'
import blu2 from '../assets/blu2.png'
import blu3 from '../assets/blu3.png'

import ben1 from '../assets/ben1.jpg'
import ben2 from '../assets/ben2.jpg'
import ben3 from '../assets/ben3.jpg'

import luz1 from '../assets/Luz1.jpg'

import slawn4 from '../assets/slawn4.jpg'
import slawn5 from '../assets/slawn5.jpg'
import slawn6 from '../assets/slawn6.jpg'
import slawn7 from '../assets/slawn7.jpg'
import wangechi1 from '../assets/wangechi1.jpg'
import sixsiblings from '../assets/sixsiblings.png'

type Artist = {
  slug: string
  name: string
  issueNumber: number
  title: string
  date: string
  author: string
  heroImage: string
  images: string[]
  intro: string
  paragraphs: string[]
}

export const artists: Artist[] = [
  {
    slug: 'blu-the-genius',
    name: 'BLU The Genius',

    issueNumber: 1,

    title: 'Color, Pressure, and Emotional Visibility',
    date: 'July 4, 2026',
    author: 'Mo Alimi',

    heroImage: blu1,
    images: [blu1, blu2, blu3],

    intro:
      'BLU The Genius sits in that space where art feels emotional before it feels decorative.',

    paragraphs: [
      'The work is bold, colorful, and easy to recognize, but what makes it more interesting is the intention behind it. BLU has described the work as coming from personal experience, raw emotion, and a desire to raise awareness around mental health.',

      'That matters because the paintings do not just ask to be looked at; they try to turn insecurity, anxiety, and inner pressure into something visible.',

      'There is also a clear understanding of presentation. The public profile frames the pieces as numbered, hand-signed works, with acrylic and oil pastel listed as part of the practice.',

      'What works best about BLU’s art is the honesty. The pieces do not feel like they are trying to be quiet or overly academic. They speak in color, character, emotion, and repetition.',

      'Still, BLU The Genius represents an artist building from feeling, not just aesthetics. The work is polished enough to live in a gallery setting, but personal enough to still feel close to the street, the studio, and the emotional life that created it.',
    ],
  },

  {
    slug: 'ben-cowan',
    name: 'Ben Cowan',

    issueNumber: 1,

    title: 'Painting, Faith, Memory, and the Sacred Surface',
    date: 'July 4, 2026',
    author: 'Mo Alimi',

    heroImage: ben1,
    images: [ben1, ben2, ben3],

    intro:
      'Ben Cowan’s work sits at the intersection of painting, faith, architecture, memory, and doubt.',

    paragraphs: [
      'His practice uses religious imagery, leaves, frames, and symbolic fragments to explore how belief is built, questioned, broken, and rebuilt through visual form.',

      'What makes the work compelling is that it does not treat spirituality as simple decoration. The paintings carry the weight of personal history and suggest that faith can be both beautiful and difficult.',

      'Cowan’s use of leaves is especially powerful. A leaf can feel fragile and ordinary, but in his paintings it becomes a spiritual object carrying grief, movement, renewal, and mystery.',

      'The strongest part of Cowan’s practice is its patience. The work asks the viewer to slow down, look again, and consider how sacred meaning can appear through surface, repetition, image, and silence.',
    ],
  },

  {
    slug: 'luz-carabano',
    name: 'Luz Carabano',

    issueNumber: 1,

    title: 'The Intimacy of Painting',
    date: 'August 22, 2026',
    author: 'Mo Alimi',

    heroImage: luz1,
    images: [luz1],

    intro:
      'Luz Carabano approaches painting intuitively rather than descriptively, allowing intimacy and feeling to guide the work.',

    paragraphs: [
      'Her practice asks what happens when painting becomes less about describing the world and more about experiencing it through color, gesture, presence, and emotion.',

      'Carabano’s paintings resist the need to explain everything. Forms emerge and disappear, colors move across the surface, and gestures create a sense of something remembered rather than directly described.',

      'There is an intimacy in this uncertainty. The paintings leave enough space for the viewer to enter them emotionally, allowing meaning to develop through looking rather than explanation.',

      'What makes the work compelling is its sensitivity to presence. A line, a shift in color, or an unfinished edge can carry as much weight as a recognizable image.',

      'The result is painting that feels less like an illustration of the world and more like an experience of being inside it.',
    ],
  },

    {
    slug: 'slawn',
    name: 'Slawn',

    issueNumber: 2,

    title: 'The Joke Is Serious',
    date: 'September 2026',
    author: 'Mo Alimi',

    heroImage: slawn4,
    images: [slawn5, slawn6, slawn7],

    intro:
      'Slawn has built a practice where painting, spectacle, fashion, celebrity, business, and the art market seem to collapse into one another.',

    paragraphs: [
      // full Art All Day feature
    ],
  },
{
  slug: 'wangechi-mutu',
  name: 'Wangechi Mutu',

  issueNumber: 2,

  title: 'The Body Is Not Neutral',
  date: 'September 2026',
  author: 'Art All Day',

  heroImage: wangechi1,

  images: [
    wangechi1,
  ],

  intro:
    'Wangechi Mutu builds bodies that refuse to remain inside neat categories — human and nonhuman, beautiful and grotesque, ancient and futuristic.',

  paragraphs: [
    'For centuries, the African body has been looked at, classified, collected, photographed, exoticized, and explained by someone else. Wangechi Mutu reverses the direction of that gaze.',

    'Her figures do not arrive asking to be understood. They mutate. They seduce. They threaten. Human anatomy collides with plants, machines, animals, ornament, mythology, and fragments of visual culture until the body stops behaving like a stable category.',

    'That instability is part of the power.',

    'Mutu does not simply place African identity inside contemporary art. Her work questions the visual systems that decided what Africa, femininity, beauty, civilization, and even humanity were supposed to look like in the first place.',
  ],
},
{
  slug: 'Woolly Mo',
  name: 'Woolly Mo',

  issueNumber: 2,

  title: 'Six Siblings',
  date: 'August 28, 2026',
  author: 'Mo Alimi',

  heroImage: sixsiblings,
  images: [sixsiblings],

  intro:
    'Six Siblings moves between music, poetry, memory, and visual storytelling, using the image of six painters to explore one family through six different lives.',

  paragraphs: [
    'The work looks at family as something shared but never experienced in exactly the same way. Each sibling carries a different version of the same house, the same history, the same love, and the same wounds.',

    'Painting becomes the central metaphor. Six siblings become six painters, each leaving a different stroke while working from the same inherited canvas.',

    'Presented alongside an unreleased recording, Six Siblings expands Studio Notes beyond the traditional studio and into music, writing, memory, and personal narrative.',
  ],
},
]