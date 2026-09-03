// import { getCurrentIssueDate } from '../utils/date'

// export const issues = [
//   {
//     slug: 'issue-01',
//     number: 'Issue 01',
//     title: 'Feeling in Color',
//     date: 'July 2026',
//     status: 'Current Issue',
//     description:
//       'This issue follows artists who turn pressure into pigment, faith into structure, memory into surface, and emotion into something the eye can hold.',
//   },
//   {
//     slug: 'issue-02',
//     number: 'Issue 02',
//     title: 'The Shape of Memory',
//     date: getCurrentIssueDate(),
//     status: 'Coming Next',
//     description:
//       'The next issue looks at artists working through memory, family, migration, grief, home, and the personal histories that stay inside an image.',
//   },
// ]



// import { getCurrentIssueDate } from '../utils/date'

// export type Issue = {
//   slug: string
//   issueNumber: number
//   number: string
//   title: string
//   date: string
//   status: 'Current Issue' | 'Coming Next' | 'Archive'
//   description: string
// }

// export const issues: Issue[] = [
//   {
//     slug: 'issue-01',

//     issueNumber: 1,
//     number: 'Issue 01',

//     title: 'Feeling in Color',

//     date: 'July 2026',

//     status: 'Current Issue',

//     description:
//       'This issue follows artists who turn pressure into pigment, faith into structure, memory into surface, and emotion into something the eye can hold.',
//   },

//   {
//     slug: 'issue-02',

//     issueNumber: 2,
//     number: 'Issue 02',

//     title: 'The Shape of Memory',

//     date: getCurrentIssueDate(),

//     status: 'Coming Next',

//     description:
//       'The next issue looks at artists working through memory, family, migration, grief, home, and the personal histories that stay inside an image.',
//   },
// ]


// export type Issue = {
//   slug: string
//   issueNumber: number
//   number: string
//   title: string
//   date: string
//   status: 'Current Issue' | 'Coming Next' | 'Archive'
//   description: string
// }

// export const issues: Issue[] = [
//   {
//     slug: 'issue-01',
//     issueNumber: 1,
//     number: 'Issue 01',
//     title: 'Feeling in Color',
//     date: 'July 2026',
//     status: 'Current Issue',
//     description:
//       'This issue follows artists who turn pressure into pigment, faith into structure, memory into surface, and emotion into something the eye can hold.',
//   },

//   {
//     slug: 'issue-02',
//     issueNumber: 2,
//     number: 'Issue 02',
//     title: 'The Shape of Memory',
//     date: 'September 2026',
//     status: 'Coming Next',
//     description:
//       'The next issue looks at artists working through memory, family, migration, grief, home, and the personal histories that stay inside an image.',
//   },
// ]


// export type Issue = {
//   slug: string
//   issueNumber: number
//   number: string
//   title: string
//   headline: string
//   date: string
//   status: 'Current Issue' | 'Coming Next' | 'Archive'
//   description: string
// }

// export const issues: Issue[] = [
//   {
//     slug: 'issue-01',

//     issueNumber: 1,
//     number: 'Issue 01',

//     title: 'Feeling in Color',

//     headline:
//       'Eight Artists Who Are Teaching Us How to Feel Again',

//     date: 'July 2026',

//     status: 'Current Issue',

//     description:
//       'It is happening quietly—in studios, bedrooms, streets, archives, and sacred spaces. Eight artists are making work about memory, faith, identity, desire, history, and the strange things we carry with us.',
//   },

// {
//   slug: 'issue-02',

//   issueNumber: 2,
//   number: 'Issue 02',

//   title: 'Who Gets to Be an Artist?',

//   headline:
//     'Art, Hype, Access, and the Performance of Legitimacy',

//   date: 'September 2026',

//   status: 'Coming Next',

//   description:
//     'Issue 02 looks at the artists, images, markets, and cultural signals that shape who gets taken seriously. From internet attention and celebrity to galleries, institutions, fashion, and the street, the issue asks how artistic legitimacy is built, performed, challenged, and sold.',
// },
// ]

// export const currentIssue = issues.find(
//   (issue) => issue.status === 'Current Issue'
// )

// export const nextIssue = issues.find(
//   (issue) => issue.status === 'Coming Next'
// )


// export type Issue = {
//   slug: string
//   issueNumber: number
//   number: string
//   title: string
//   headline: string
//   date: string
//   status: 'Current Issue' | 'Coming Next' | 'Archive'
//   description: string
//   openingStatement: string[]
// }

// export const issues: Issue[] = [
//   {
//     slug: 'issue-01',
//     issueNumber: 1,
//     number: 'Issue 01',

//     title: 'Feeling in Color',

//     headline:
//       'Eight Artists Who Are Teaching Us How to Feel Again',

//     date: 'July 2026',

//     status: 'Current Issue',

//     description:
//       'This issue follows artists who turn pressure into pigment, faith into structure, memory into surface, and emotion into something the eye can hold.',

//     openingStatement: [
//       'It is happening quietly—in studios, bedrooms, streets, archives, and sacred spaces.',

//       'Eight artists are making work about memory, faith, identity, desire, history, and the strange things we carry with us.',
//     ],
//   },

//   {
//     slug: 'issue-02',
//     issueNumber: 2,
//     number: 'Issue 02',

//     title: 'Africa Is Not the Periphery',

//     headline:
//       'Contemporary African art and the artists reshaping the center.',

//     date: 'September 2026',

//     status: 'Coming Next',

//     description:
//       'African contemporary art is already shaping the visual language of the world. Issue 02 looks at the artists, ideas, materials, cities, and cultures moving that language forward.',

//     openingStatement: [
//       'African contemporary art does not need permission to enter the conversation. It is already shaping it.',

//       'Across the continent and its diasporas, artists are building visual languages that move through painting, photography, sculpture, fashion, music, film, design, and the street.',

//       'Yet there remains a strange imbalance. African artists can influence global culture while still fighting for the institutional space, critical attention, and historical recognition given more automatically elsewhere.',

//       'Issue 02 begins there—not with the question of whether African contemporary art has arrived, but with the recognition that it has been here.',

//       'There is no single African image, material, story, or way of making. What connects these pages is something larger: artists creating from their own positions while participating in—and increasingly shaping—the visual language of the world.',

//       'Maybe the problem was never that Africa existed outside the center. Maybe we were looking at the map wrong.',
//     ],
//   },
// ]

// export const currentIssue = issues.find(
//   (issue) => issue.status === 'Current Issue'
// )

// export const nextIssue = issues.find(
//   (issue) => issue.status === 'Coming Next'
// )

import sixsiblings from '../assets/sixsiblings.png'

// export type Issue = {
//   slug: string
//   issueNumber: number
//   number: string
//   title: string
//   headline: string
//   date: string
//   status: 'Current Issue' | 'Coming Next' | 'Archive'
//   description: string
//   openingStatement: string[]
// }

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
  status: 'Current Issue' | 'Coming Next' | 'Archive'
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
      'Eight Artists Who Are Teaching Us How to Feel Again',

    date: 'July 2026',

    status: 'Current Issue',

    description:
      'This issue follows artists who turn pressure into pigment, faith into structure, memory into surface, and emotion into something the eye can hold.',

    openingStatement: [
      'It is happening quietly—in studios, bedrooms, streets, archives, and sacred spaces.',

      'Eight artists are making work about memory, faith, identity, desire, history, and the strange things we carry with us.',
    ],
  },

//   {
//     slug: 'issue-02',

//     issueNumber: 2,
//     number: 'Issue 02',

//     title: 'Africa Is Not the Periphery',

//     headline:
//       'Contemporary African art and the artists reshaping the center.',

//     date: 'September 2026',

//     status: 'Coming Next',

//     description:
//       'African contemporary art is already shaping the visual language of the world. Issue 02 looks at artists across the continent and its diasporas whose work moves through painting, photography, sculpture, fashion, music, design, history, and the street.',

//     openingStatement: [
//       'African contemporary art does not need permission to enter the conversation. It is already shaping it.',

//       'Across Lagos, Accra, Dakar, Johannesburg, Nairobi, London, New York, and everywhere between, artists connected to Africa are building visual languages that move through painting, photography, sculpture, fashion, music, film, design, and the street.',

//       'Their influence travels far beyond the borders used to categorize their work. Yet there remains a strange imbalance: African artists can influence global culture while still fighting for the institutional space, critical attention, and historical recognition given more automatically elsewhere.',

//       'Issue 02 begins there—not with the question of whether African contemporary art has arrived, but with the recognition that it has been here.',

//       'This issue does not treat Africa as a single aesthetic. There is no single African image, material, story, city, generation, or way of making. The continent and its diasporas contain different histories, languages, traditions, economies, tensions, and artistic positions.',

//       'What connects these pages is something larger: artists creating from their own positions while participating in—and increasingly shaping—the visual language of the world.',

//       'The center is changing.',

//       'Maybe the problem was never that Africa existed outside it. Maybe we were looking at the map wrong.',
//     ],
//   },
// ]

  {
    slug: 'issue-02',

    issueNumber: 2,
    number: 'Issue 02',

    title: 'Africa Is Not the Periphery',

    headline:
      'Contemporary African art and the artists reshaping the center.',

    date: 'September 2026',

    status: 'Coming Next',

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
      status: 'Coming with Issue 02',

      image: sixsiblings,
      imageAlt: 'Six Siblings artwork',

      description:
        'An unreleased recording moving through family, memory, inheritance, survival, and six lives shaped by one history.',

      quote:
        'Six siblings, six painters, one unfinished stroke.',
    },
  },
]

export const currentIssue = issues.find(
  (issue) => issue.status === 'Current Issue'
)

export const nextIssue = issues.find(
  (issue) => issue.status === 'Coming Next'
)