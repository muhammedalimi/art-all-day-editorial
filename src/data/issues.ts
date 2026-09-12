


import sixsiblings from '../assets/sixsiblings.png'

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
  description: string
  openingStatement: string[]

  studioNoteTeaser?: StudioNoteTeaser
}

export const issues: Issue[] = [
  {
    slug: 'issue-01',

    issueNumber: 1,
    number: 'Issue 01',

    title: 'Feeling in Color',

    headline:
      'Four Artists Who Are Teaching Us How to Feel Again',

    date: 'July 2026',

    status: 'Archive',

    description:
      'This issue follows artists who turn pressure into pigment, faith into structure, memory into surface, and emotion into something the eye can hold.',

    openingStatement: [
      'It is happening quietly—in studios, bedrooms, streets, archives, and sacred spaces.',

      'Four artists are making work about memory, faith, identity, desire, history, and the strange things we carry with us.',
    ],
  },

  {
    slug: 'issue-02',

    issueNumber: 2,
    number: 'Issue 02',

    title: 'Africa Is Not the Periphery',

    headline:
      'Contemporary African art and the artists reshaping the center.',

    date: 'September 2026',

    status: 'Archive',

    description:
      'African contemporary art is already shaping the visual language of the world. Issue 02 looks at artists across the continent and its diasporas whose work moves through painting, photography, sculpture, fashion, music, design, history, and the street.',

    openingStatement: [
      'African contemporary art does not need permission to enter the conversation. It is already shaping it.',

      'Across Lagos, Accra, Dakar, Johannesburg, Nairobi, London, New York, and everywhere between, artists connected to Africa are building visual languages that move through painting, photography, sculpture, fashion, music, film, design, and the street.',

      'Their influence travels far beyond the borders used to categorize their work. Yet there remains a strange imbalance: African artists can influence global culture while still fighting for the institutional space, critical attention, and historical recognition given more automatically elsewhere.',

      'Issue 02 begins there—not with the question of whether African contemporary art has arrived, but with the recognition that it has been here.',

      'This issue does not treat Africa as a single aesthetic. There is no single African image, material, story, city, generation, or way of making. The continent and its diasporas contain different histories, languages, traditions, economies, tensions, and artistic positions.',

      'What connects these pages is something larger: artists creating from their own positions while participating in—and increasingly shaping—the visual language of the world.',

      'The center is changing.',

      'Maybe the problem was never that Africa existed outside it. Maybe we were looking at the map wrong.',
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

  status: 'Current Issue',

  description:
    'Issue 03 looks at Jules Bekuti and the quiet emotional force of paintings shaped by identity, migration, memory, inclusion, and the desire to make art feel accessible rather than distant.',

  openingStatement: [
    'There is a kind of peace in Jules Bekuti’s paintings, but it does not feel empty.',

    'The longer you look, the more that calm begins to carry history.',

    'Behind the softness are questions of migration, Black identity, memory, inclusion, and what it means to feel seen.',

    'Issue 03 begins with that tension: the possibility that serenity is not the absence of struggle, but evidence that someone survived it.',
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