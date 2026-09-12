
/* Department Data */

export type Department = {
  slug: string
  number: string
  name: string
  subtitle: string
  paragraphs: string[]
}

export const departments: Department[] = [
  {
    slug: 'artist-pick',
    number: '01',
    name: 'Artist Pick',

    subtitle:
      'Artists whose work creates a world worth paying attention to.',

    paragraphs: [
      'Artist Pick is where Art All Day pays attention to artists whose work creates its own visual world.',

      'The selection is not simply about popularity or market attention. It is about artists whose work gives us something worth looking at, questioning, or returning to.',

      'From painting and sculpture to work shaped by music, fashion, the internet, public space, and everyday culture, each issue introduces an artist and looks closely at the world forming around the work.',
    ],
  },

  {
    slug: 'faith-and-form',
    number: '02',
    name: 'Faith & Form',

    subtitle:
      'Work that moves through belief, memory, ritual, and image.',

    paragraphs: [
      'Faith & Form looks at artists who use visual language to approach belief, doubt, ritual, grief, and spiritual memory.',

      'It is not only about religious art. It is about the moments when an image begins to feel larger than decoration.',

      'This department is interested in how artists build sacred feeling through material choices, composition, light, repetition, silence, absence, rupture, and longing.',
    ],
  },

  {
    slug: 'studio-notes',
    number: '03',
    name: 'Studio Notes',

    subtitle:
      'Process, doubt, experiments, conversation, and the private life of making.',

    paragraphs: [
      'Studio Notes is about the life of the work before it becomes public.',

      'The sketches, failed versions, repeated attempts, unfinished surfaces, conversations, experiments, materials, memories, and private tensions surrounding a practice all matter here.',

      'To understand an artist, sometimes we have to spend less time explaining the finished object and more time understanding how they arrived there.',
    ],
  },

  {
    slug: 'quiet reflection',
    number: '04',
    name: 'Quiet Reflection',

    subtitle:
      'Criticism that asks what happens when we stay with the work.',

    paragraphs: [
      'Slow Looking is a resistance to quick judgment.',

      'It asks what happens when we stay with an artwork, exhibition, or image long enough for its color, texture, scale, composition, material, contradictions, and tensions to emerge.',

      'The goal is not to sound academic. The goal is to look carefully enough that the work — and the space around it — has a chance to reveal itself.',
    ],
  },
]