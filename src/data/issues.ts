


import sixsiblings from '../assets/sixsiblings.png'
import benCover from '../assets/ben-cover.png'
import slawnCover from '../assets/slawn-cover.png'
import julesCover from '../assets/jules-cover.png'
import okerekeCover from '../assets/okereke-cover.png'
import sophiaCover from '../assets/sophia-cover.png'
import waCover from '../assets/wa-cover.png'
import bluCover from '../assets/blu-cover.png'

import oyeleye5 from '../assets/oyeleye5.png'

type StudioNoteTeaser = {
  title: string
  artist: string
  label: string
  status: string
  image: string
  imageAlt: string
  description: string
  quote: string
}

export type Issue = {
  slug: string
  issueNumber: number
  number: string
  title: string
  headline: string
  date: string
  status:
    | 'Current Issue'
    | 'Coming Next'
    | 'Archive'

  coverImage: string
  articleSlug?: string

  description: string
  openingStatement: string[]

  studioNoteTeaser?: StudioNoteTeaser
}

export const issues: Issue[] = [
  {
    slug: 'issue-01',

    issueNumber: 1,
    number: 'Issue 01',

    title: 'Dear God What Remains of Faith?',

    headline:
     'Ben Cowan paints faith, doubt, sacred imagery, and the uneasy space between belief and contemporary life.',

    date: 'September 2026',

    status: 'Archive',
    coverImage: benCover,
    articleSlug: 'dear-god-what-remains-of-faith',

    description:
      'Issue 01 looks at Ben Cowan and the way religious imagery, memory, doubt, beauty, and contradiction move through his paintings. Sacred references sit beside contemporary anxieties, asking what remains of faith when inherited symbols no longer feel simple.',

    openingStatement: [
      'Faith rarely disappears all at once.',

      'Sometimes it remains in fragments — an image, a ritual, a memory, a symbol we no longer know exactly what to do with.',

      'In Ben Cowan’s paintings, Christian imagery is not treated as something settled or easily understood. Angels, biblical references, sacred gestures, and familiar symbols become places where belief and uncertainty meet.',

      'The work can feel reverent and questioning at the same time.',

      'Issue 01 begins there: with the possibility that faith can survive even when certainty does not.',

      'Dear God asks what remains when belief becomes complicated, when sacred imagery enters contemporary life, and when the questions begin to matter as much as the answers.',
      ],
  },

{
  slug: 'issue-02',

  issueNumber: 2,
  number: 'Issue 02',

  title: 'Living Dangerously',

  headline:
    'Slawn turns chaos, humor, provocation, and street energy into a visual language that refuses to behave.',

  date: 'September 2026',

  status: 'Archive',

  coverImage: slawnCover,

  articleSlug: 'living-dangerously',

  description:
    'Issue 02 focuses on Slawn and the unruly visual language behind his work — part painting, part performance, part provocation. Moving between Lagos, London, street culture, fashion, music, and the gallery world, his practice resists neat categories and treats irreverence as a creative position.',

  openingStatement: [
    'Slawn’s work does not enter a room quietly.',

    'The faces are exaggerated, the gestures are loud, and the paintings often seem to arrive with the energy of something made before anyone had time to ask whether it was appropriate.',

    'That refusal to behave properly around art is part of the point.',

    'From Lagos skate culture to London, from spray paint and cartoon-like faces to collaborations across music and fashion, Slawn has built a visual language that feels immediate, disruptive, and difficult to separate from the culture surrounding it.',

    'His work can look playful at first, even reckless, but beneath that surface is a sharp understanding of image, attention, branding, and what it means to make art inside a culture that moves quickly.',

    'Issue 02 looks at that tension — between chaos and control, joke and seriousness, street and studio.',

    'Living dangerously is not only an attitude in Slawn’s work.',

    'It is part of the method.',
  ],
    studioNoteTeaser: {
      title: 'Six Siblings',

      artist: 'Woolly Mo',

      label: 'Studio Note',

      status: 'Part of Issue 02',

      image: sixsiblings,

      imageAlt:
        'Six Siblings artwork',

      description:
        'An unreleased recording moving through family, memory, inheritance, survival, and six lives shaped by one history.',

      quote:
        'Six siblings, six painters, one unfinished stroke.',
    },

  },

  {
  slug: 'issue-03',

  issueNumber: 3,
  number: 'Issue 03',

  title: 'When Peace Has a History',

  headline:
    'Jules Bekuti on identity, migration, memory, and the quiet weight of belonging.',

  date: 'September 2026',

  status: 'Archive',
  coverImage: julesCover,
  articleSlug: 'when-peace-has-a-history',

  description:
    'Issue 03 looks at Jules Bekuti and the quiet emotional force of paintings shaped by identity, migration, memory, inclusion, and the desire to make art feel accessible rather than distant.',

  openingStatement: [
    'There is a kind of peace in Jules Bekuti’s paintings, but it does not feel empty.',

    'The longer you look, the more that calm begins to carry history.',

    'Behind the softness are questions of migration, Black identity, memory, inclusion, and what it means to feel seen.',

    'Issue 03 begins with that tension: the possibility that serenity is not the absence of struggle, but evidence that someone survived it.',
  ],
},

{
  slug: 'issue-04',

  issueNumber: 4,
  number: 'Issue 04',

  title: 'The Good Old Days',
  articleSlug: 'the-good-old-days',

  headline:
    'Okereke paints memory, cultural identity, and the ordinary objects through which a generation remembers Nigeria.',

  date: 'September 2026',

  status: 'Archive',
  coverImage: okerekeCover,

  description:
    'Cabin biscuits, Coke bottles, NYSC uniforms, crowded gatherings, hair, and photographs that took weeks to return — Issue 04 looks at Okereke and a Nigeria that survives through memory.',

  openingStatement: [
    'Some histories announce themselves through major events. Others sit quietly on the table.',

    'In Okereke’s paintings, Cabin biscuits, Coke bottles, hairstyles, NYSC uniforms, family photographs, and crowded gatherings become evidence of how a generation lived.',

    'The work looks backward toward a pre-digital Nigeria while asking what memory means for a generation increasingly living through screens.',

    'Issue 04 begins with a simple recognition: sometimes the things that looked most ordinary while we were living with them become the things we miss most.',
  ],
},

{
  slug: 'issue-05',

  issueNumber: 5,
  number: 'Issue 05',

  title: 'Pleasure Without Performance',
  articleSlug: 'pleasure-without-performance',

  headline:
    'Sophia Oshodin paints Black women enjoying life without performing happiness for the viewer.',

  date: 'September 2026',

  status: 'Archive',
  coverImage: sophiaCover,

  description:
    'Issue 05 looks at Sophia Oshodin’s portraits of Black women shopping, dining, smoking, resting, and occupying pleasure on their own terms. Through bold color, composed expressions, and scenes of everyday freedom, her paintings challenge the expectations placed on how women should look, behave, and express happiness.',

  openingStatement: [
    'The women in Sophia Oshodin’s paintings are enjoying life, but they are not smiling for us.',

    'They shop, dine, smoke, rest, dress boldly, and occupy their surroundings without turning their happiness into a performance for the viewer.',

    'Viewed through Oshodin’s Nigerian-British identity, these scenes also carry questions about respectability, independence, and the traditional expectations placed upon women.',

    'Issue 05 begins with a different understanding of pleasure: it does not need to look cheerful, respectable, or easily understood to be real.',
  ],
},

{
  slug: 'issue-06',

  issueNumber: 6,
  number: 'Issue 06',

  title: 'Kids Are Born Painters',
  articleSlug: 'kids-are-born-painters',

  headline:
    'What happens to the freedom to create when we learn there is a proper way to do everything?',

  date: 'September 2026',

  status: 'Archive',
  coverImage: waCover,

  description:
    'Issue 06 explores the creative freedom we begin with as children and the rules, habits, and expectations that can slowly reshape it. Through childhood memory, The Wa’s A Kid Could Do It series, and the story of Ghanaian child artist Ace-Liam Nana Sam Ankrah, the issue asks when making art stops feeling natural and starts feeling like something we need permission to do.',

  openingStatement: [
    'Before there were canvases, there were sheets of paper, crayons, blunt pencils, and coloring books.',

    'As children, we made things without asking whether they were good enough, correct enough, or even understandable to anyone else.',

    'Then came the lines, the margins, the repetition, and the growing idea that there was a proper way to do things.',

    'Issue 06 asks what happens to creativity when learning structure slowly becomes learning restraint.',
  ],
},

{
  slug: 'issue-07',

  issueNumber: 7,
  number: 'Issue 07',

  title: 'What We Carry Inside',
  articleSlug: 'What We Carry Inside',

  headline:
    'BLU The Genius paints the invisible things we carry — memory, anxiety, family, absence, and belonging.',

  date: 'September 2026',

  status: 'Archive',
  coverImage: bluCover,

  description:
    'Issue 07 looks closely at the emotional world of BLU The Genius, from his recurring blue figures to the personal histories that sit quietly behind them. Through works including Lost in a Beautiful Dream and The Perfect Family, the issue considers how memory, family, anxiety, migration, and belonging can remain present even when they are not immediately visible.',

  openingStatement: [
    'Some of the most important things we carry cannot be seen.',
    'They live in memory, family, fear, absence, and the versions of ourselves we refuse to leave behind.',
    'In the work of BLU The Genius, those invisible things are given color, bodies, and somewhere to exist.',
  ],
},

  {
    slug: 'issue-08',

    issueNumber: 8,
    number: 'Issue 08',

    title: 'Black Utopia',

    headline:
      'Joshua Oyeleye and the freedom to exist without perfection.',

    date: 'October 2026',

    status: 'Current Issue',

    coverImage: oyeleye5,

    // lead story
    articleSlug: 'black-utopia',

    description:
      'Black Utopia looks at individuality, beauty, knowledge and the possibility of seeing Black identity beyond perfection, performance and imposed standards.',

    openingStatement: [
      'What if Black freedom is not the freedom to become perfect, but the freedom to exist without being required to be?',

      'Through the work of Joshua Oyeleye, Issue 08 looks at beauty, individuality, hair, knowledge and the many ways Black people can recognize themselves without becoming the same.',

      'This is not a search for one Black image. It is a search for the freedom to have many.',
    ],
  },
]

export const currentIssue =
  issues.find(
    (issue) =>
      issue.status === 'Current Issue'
  )

export const nextIssue =
  issues.find(
    (issue) =>
      issue.status === 'Coming Next'
  )