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

// type Artist = {
//   slug: string
//   name: string
//   issueNumber: number
//   title: string
//   date: string
//   author: string
//   heroImage: string
//   images: string[]
//   intro: string
//   paragraphs: string[]
// }

export type ContentBlock =
  | {
      type: 'paragraph'
      text: string
    }
  | {
      type: 'heading'
      text: string
    }
  | {
      type: 'quote'
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
  content?: ContentBlock[]
  paragraphs?: string[]
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

  title: 'Living Dangerously',
  date: 'September 2026',
  author: 'Mo Alimi',

  heroImage: slawn4,
  images: [slawn5, slawn6, slawn7],

  intro:
    'The first time I really tried to understand Slawn’s art, I wasn’t sure I did. Maybe I was looking too hard at the paintings.',

  content: [
    {
      type: 'paragraph',
      text:
        'There are the faces, the spray paint, the roughness, the repetition. Everything feels immediate, almost like it happened before anyone had time to ask whether it was a good idea.',
    },

    {
      type: 'paragraph',
      text:
        'Then there is Slawn himself. Cigarettes. Skateboards. Clothes. Cars. Parties. Fights. Lagos. London. A café. A spray can never too far away.',
    },

    {
      type: 'quote',
      text:
        'Some would call it chaotic. I dare to call it breaking free.',
    },

    {
      type: 'paragraph',
      text:
        'Because the more I looked at Slawn, the less interested I became in trying to understand him through the paintings alone. The paintings are part of something larger. Slawn seems to have built a world where almost anything can become art, and almost anything surrounding the art can become part of the experience.',
    },

    {
      type: 'paragraph',
      text:
        'There is something dangerous about that kind of freedom. Not dangerous because it is violent or destructive, but because once you stop respecting the boundaries people have drawn around art, you have to decide for yourself where the boundaries are.',
    },

    {
      type: 'paragraph',
      text:
        'Slawn seems perfectly comfortable with that.',
    },

    {
      type: 'heading',
      text: 'Lagos Before London',
    },

    {
      type: 'paragraph',
      text:
        'Before the galleries, auctions and collaborations, there was skateboarding.',
    },

    {
      type: 'paragraph',
      text:
        'Olaolu Slawn grew up in Nigeria and, in his late teens, worked at Wafflesncream, widely recognized as Nigeria’s first skate shop. It was there that he met Leo and Onyedi. They skated, made films, created artwork and eventually built Motherlan together.',
    },

    {
      type: 'paragraph',
      text:
        'That part of the story matters to me because skateboarding teaches you to look at the world differently. A staircase is not only a staircase. A railing is not only something to hold. An empty stretch of concrete suddenly has possibilities that someone walking past it might never notice.',
    },

    {
      type: 'quote',
      text: 'He sees surfaces.',
    },

    {
      type: 'heading',
      text: 'I Can Spray on Anything',
    },

    {
      type: 'paragraph',
      text:
        'This might be what finally made Slawn click for me.',
    },

    {
      type: 'quote',
      text: 'I can spray on anything.',
    },

      {
      type: 'paragraph',
      text:
        'It sounds almost stupidly simple, but there is a philosophy inside it. A T-shirt has an empty corner? Spray it. A suitcase looks too clean? Spray it. A wall, a canvas, a car? Why should the material decide whether something deserves to become art?',
    },

    {
      type: 'paragraph',
      text:
        'There is something about the spray can itself that fits Slawn perfectly. It does not carry the ceremony of traditional painting. You do not need to carefully prepare a palette. You shake it, press down and leave a mark.',
    },

    {
      type: 'quote',
      text:
        'It encourages movement. It encourages risk. It allows the artist to get there before doubt does.',
    },

    {
      type: 'paragraph',
      text:
        'And Slawn’s world seems built around that instinct.',
    },

    {
      type: 'paragraph',
      text:
        'I started thinking about those moments when you look at an object and suddenly notice the empty space on it. The edge of a shirt. The side of a suitcase. Something about it feels unfinished.',
    },

    {
      type: 'paragraph',
      text:
        'Most of us leave it alone. Slawn does not.',
    },

    {
      type: 'paragraph',
      text:
        'That is where I started understanding the breaking-free energy I felt when I first encountered him. The artwork does not necessarily stop at the canvas because Slawn does not seem particularly interested in where art is supposed to stop.',
    },

    {
      type: 'heading',
      text: 'The Basquiat Problem',
    },

    {
      type: 'paragraph',
      text:
        'Jean-Michel Basquiat came to my mind almost immediately. The cigarettes, the young-wild-and-free mythology, the marks, the speed, the feeling of someone moving through culture without asking permission.',
    },

    {
      type: 'paragraph',
      text:
        'But I hesitate even writing his name here because there is a lazy habit of encountering a young Black artist with an expressive visual language and reaching immediately for Basquiat.',
    },

    {
      type: 'quote',
      text:
        'Slawn does not need that. And Slawn is not Basquiat.',
    },

    {
      type: 'paragraph',
      text:
        'What interests me about the comparison is not whether their paintings look alike. It is the attitude I feel underneath them: a refusal to behave properly around Art.',
    },

    {
      type: 'paragraph',
      text:
        'Basquiat moved between streets, galleries, language, celebrity, music and painting. The mythology surrounding the person became difficult to separate from the artwork.',
    },

    {
      type: 'paragraph',
      text:
        'With Slawn, I feel another version of that collapse. Where does Slawn the artist end and Slawn the cultural figure begin?',
    },

    {
      type: 'quote',
      text:
        'Maybe nowhere. Maybe separating them misses the point.',
    },

    {
      type: 'heading',
      text: 'The Artist Becomes the Artwork',
    },

    {
      type: 'paragraph',
      text:
        'Slawn once spoke about his own work with an almost ridiculous lack of preciousness, questioning why people wanted it and essentially describing painting as something he did so he could mess around.',
    },

    {
      type: 'paragraph',
      text:
        'I love the contradiction in that because the art world kept becoming more serious about someone who appeared determined not to become too serious about himself.',
    },

    {
      type: 'paragraph',
      text:
        'His trajectory since then almost reads like someone testing how far the joke can travel.',
    },

    {
      type: 'paragraph',
      text:
        'A debut exhibition. Sotheby’s. The BRIT Awards, where in 2023 he became the youngest person to design the Britannia statuette. BeauBeau’s, the East London café named after his son. Cars turned into artworks. Fashion and design collaborations.',
    },

    {
      type: 'paragraph',
      text:
        'Then came his 2024 exhibition I present to you, Slawn, where a huge installation composed of 1,000 individual canvases became the center of the show.',
    },

    {
      type: 'paragraph',
      text:
        'At some point you have to ask:',
    },

    {
      type: 'quote',
      text:
        'What exactly is the artwork anymore?',
    },

    {
      type: 'paragraph',
      text:
        'Is it the canvas? The object? The event? The person? The crowd? The mythology? With Slawn, I think the answer might simply be yes.',
    },

    {
      type: 'heading',
      text: 'Why Not Squabble for It?',
    },

    {
      type: 'paragraph',
      text:
        'That same attitude is why the fight-club energy around Slawn does not feel completely separate from the paintings to me.',
    },

    {
      type: 'paragraph',
      text:
        'There is something absurd about the proposition: two people want something, so why not squabble for it?',
    },

    {
      type: 'paragraph',
      text:
        'It turns desire into spectacle. The polite machinery around art — private views, collectors, waiting lists, careful conversations about acquisition — gets replaced by something almost primitive.',
    },

    {
      type: 'quote',
      text:
        'You want it? How badly?',
    },

    {
      type: 'paragraph',
      text:
        'That does not necessarily make the fight itself art. But it tells us something about the world Slawn has constructed around his work.',
    },

    {
      type: 'paragraph',
      text:
        'He understands attention. He understands spectacle. And most importantly, he seems to understand that contemporary culture does not always experience an artist by standing silently in front of a canvas.',
    },

    {
      type: 'paragraph',
      text:
        'We encounter artists through Instagram posts, clothes, videos, collaborations, memes, interviews, parties and stories we tell each other afterward. Slawn does not resist that. He plays with it.',
    },

    {
      type: 'heading',
      text: 'But Is It Enough?',
    },

    {
      type: 'paragraph',
      text:
        'This is where my uncertainty about Slawn has not completely disappeared. And I do not think it should.',
    },

    {
      type: 'paragraph',
      text:
        'Sometimes I look at the work and wonder whether freedom can become its own formula.',
    },

    {
      type: 'paragraph',
      text:
        'A face. A spray can. A few gestures. Another object. Another collaboration. Another moment.',
    },

    {
      type: 'paragraph',
      text:
        'When an artist becomes recognizable enough that almost any surface can carry their language, recognition itself can become dangerous.',
    },

    {
      type: 'paragraph',
      text:
        'Because eventually the question changes from: can I spray on anything? to: should everything I spray automatically matter?',
    },

    {
      type: 'quote',
      text:
        'Those are different questions.',
    },

    {
      type: 'paragraph',
      text:
        'The energy surrounding Slawn can become so compelling that it risks doing some of the work for the paintings. The personality is enormous. The mythology is entertaining. The world moves quickly.',
    },

    {
      type: 'paragraph',
      text:
        'Sometimes I want the painting to make me stop when Slawn himself makes me want to move.',
    },

    {
      type: 'paragraph',
      text:
        'But strangely, that tension is part of why I keep looking.',
    },

    {
      type: 'paragraph',
      text:
        'I am not convinced that Slawn wants every object to carry some enormous hidden meaning. Maybe demanding that from him would be another way of forcing him back inside the rules he seems determined to escape.',
    },

    {
      type: 'heading',
      text: 'Young, Wild and Free',
    },

    {
      type: 'paragraph',
      text:
        'What I eventually found in Slawn was not an explanation for every painting.',
    },

    {
      type: 'quote',
      text:
        'It was permission.',
    },

    {
      type: 'paragraph',
      text:
        'Permission to move between worlds. To be Nigerian without allowing that identity to become a box around the work. To come through skate culture and end up inside galleries.',
    },

    {
      type: 'paragraph',
      text:
        'To make clothes and still be an artist. To open a café. To paint a car. To design a trophy. To make something expensive and still laugh at the seriousness surrounding it.',
    },

    {
      type: 'paragraph',
      text:
        'To look at an empty surface and think: I could put something there.',
    },

    {
      type: 'paragraph',
      text:
        'There is something very Lagos in that spirit to me. And something very much of this generation.',
    },

    {
      type: 'paragraph',
      text:
        'We inherited a world obsessed with categories. Artist. Designer. Musician. Skater. Entrepreneur. Pick one.',
    },

    {
      type: 'quote',
      text:
        'Slawn’s answer seems to be: why?',
    },

    {
      type: 'paragraph',
      text:
        'That is why I hesitate to describe him simply as chaotic. Chaos suggests there is no direction.',
    },

    {
      type: 'quote',
      text:
        'I think there is a direction here. Outward.',
    },

    {
      type: 'paragraph',
      text:
        'Beyond the canvas. Beyond the gallery. Beyond whatever somebody decided an artist was supposed to look like.',
    },

    {
      type: 'paragraph',
      text:
        'Slawn may not be giving us a new definition of art. He might be doing something more interesting.',
    },

    {
      type: 'paragraph',
      text:
        'He is behaving as though he never needed the definition in the first place.',
    },

    {
      type: 'paragraph',
      text:
        'And maybe that is what living dangerously looks like.',
    },

    {
      type: 'quote',
      text:
        'Because once you realize the edge of the canvas is not actually the edge — what exactly is supposed to stop you?',
    },
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