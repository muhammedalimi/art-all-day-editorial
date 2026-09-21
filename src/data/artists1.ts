

import blu1 from '../assets/blu1.png'
import blu2 from '../assets/blu2.png'
import blu3 from '../assets/blu3.png'

import ben1 from '../assets/benpro.png'
import ben2 from '../assets/ben2.jpg'
import ben3 from '../assets/ben3.jpg'
import ben22 from '../assets/ben11.jpg'

import luz1 from '../assets/Luz1.jpg'

import slawn4 from '../assets/slawnpro.png'
import slawn5 from '../assets/slawn5.jpg'
import slawn6 from '../assets/slawn6.jpg'
import slawn7 from '../assets/slawn7.jpg'

import wangechi1 from '../assets/wangechi1.jpg'
import sixsiblings from '../assets/sixsiblings.png'

import bekuti5 from '../assets/bekuti5.jpg'
import bekuti6 from '../assets/bekuti6.jpg'
import bekuti3 from '../assets/bekuti3.jpg'
import bekuti8 from '../assets/bekuti8.jpg'
import bekuti1 from '../assets/julespro.png'

import okereke1 from '../assets/okereke1.jpg'
import okereke3 from '../assets/okereke3.jpg'
import okereke4 from '../assets/okereke4.jpg'
import okereke6 from '../assets/okereke6.jpg'
import okereke7 from '../assets/okereke7.jpg'
import okereke10 from '../assets/okereke10.png'

import sophia1 from '../assets/sophia1.jpg'
import sophia2 from '../assets/sophia2.jpg'
// import sophia3 from '../assets/sophia3.jpg'
// import sophia4 from '../assets/sophia4.jpg'
// import sophia6 from '../assets/sophia6.jpg'
// import sophia7 from '../assets/sophia7.jpg'
import sophia10 from '../assets/sophia10.png'



// ======================================================
// ARTIST TYPES
// ======================================================

export type ArtistStatus =
  | 'featured'
  | 'watching'
  | 'archive'


export type ArtistImage =
  | string
  | {
      src: string
      alt?: string
      caption?: string
    }


export type ArtistWork = {
  title: string
  year?: string
  medium?: string
  dimensions?: string
  image: string
}


export type ArtistVoiceNote = {
  title: string
  audio: string
  duration?: string
}


export type Artist = {
  slug: string
  name: string

  issueNumber?: number

  heroImage: string
  heroImageCaption?: string

  images?: ArtistImage[]

  // ====================================================
  // LIVING ARTIST PROFILE
  // ====================================================

  location?: string[]

  disciplines?: string[]

  themes?: string[]

  status?: ArtistStatus

  bio?: string

  website?: string

  instagram?: string

  // ====================================================
  // FUTURE PROFILE CONTENT
  // ====================================================

  works?: ArtistWork[]

  voiceNotes?: ArtistVoiceNote[]
}


// ======================================================
// ARTISTS
// ======================================================

export const artists: Artist[] = [

  // ====================================================
  // BLU THE GENIUS
  // ====================================================

  {
    slug: 'blu-the-genius',

    name: 'BLU The Genius',

    issueNumber: 1,

    heroImage: blu1,

    images: [
      blu1,
      blu2,
      blu3,
    ],

    disciplines: [
      'Painting',
    ],

    themes: [
      'Color',
      'Emotion',
      'Visibility',
    ],

    status: 'archive',
  },


  // ====================================================
  // BEN COWAN
  // ====================================================

  {
    slug: 'ben-cowan',

    name: 'Ben Cowan',

    issueNumber: 1,

    heroImage: ben1,

    heroImageCaption:
      'Ben Cowan. Photo via the artist’s Instagram.',

    images: [
      {
        src: ben22,
        alt: 'Ben Cowan',
        caption:
          'Individual Disposable Communion Cup On Shot Glass In Front Of Velasquez Tossers, 2021',
      },

      {
        src: ben2,
        alt: 'Artwork by Ben Cowan',
        caption:
          'Reach Out, 2026',
      },

      {
        src: ben3,
        alt: 'Artwork by Ben Cowan',
        caption:
          'Praying Hands 5, 2025',
      },
    ],

    disciplines: [
      'Painting',
    ],

    themes: [
      'Faith',
      'Memory',
      'Sacred Imagery',
      'Art History',
      'Surface',
    ],

    status: 'featured',
  },


  // ====================================================
  // LUZ CARABANO
  // ====================================================

  {
    slug: 'luz-carabano',

    name: 'Luz Carabano',

    issueNumber: 1,

    heroImage: luz1,

    images: [
      luz1,
    ],

    disciplines: [
      'Painting',
    ],

    themes: [
      'Intimacy',
      'Color',
      'Gesture',
      'Emotion',
    ],

    status: 'archive',
  },


  // ====================================================
  // SLAWN
  // ====================================================

  {
    slug: 'slawn',

    name: 'Slawn',

    issueNumber: 2,

    heroImage: slawn4,

    heroImageCaption:
      'Slawn. Photo via the artist’s Instagram.',

    images: [
      {
        src: slawn5,
        alt: 'Artwork by Slawn',
        caption:
          'Hot Head, 2024',
      },

      {
        src: slawn6,
        alt: 'Artwork by Slawn',
        caption:
          'American Ice, 2024',
      },

      {
        src: slawn7,
        alt: 'Artwork by Slawn',
        caption:
          'Ben, 2024',
      },
    ],

    location: [
      'Lagos',
      'London',
    ],

    disciplines: [
      'Painting',
      'Spray Paint',
      'Fashion',
      'Design',
    ],

    themes: [
      'Freedom',
      'Youth Culture',
      'Skate Culture',
      'Identity',
      'Spectacle',
    ],

    status: 'featured',
  },


  // ====================================================
  // WANGECHI MUTU
  // ====================================================

  {
    slug: 'wangechi-mutu',

    name: 'Wangechi Mutu',

    issueNumber: 2,

    heroImage: wangechi1,

    images: [
      wangechi1,
    ],

    disciplines: [
      'Painting',
      'Sculpture',
      'Collage',
    ],

    themes: [
      'Body',
      'Identity',
      'Africa',
      'Femininity',
      'Mythology',
    ],

    status: 'archive',
  },


  // ====================================================
  // WOOLLY MO
  // ====================================================

  {
    slug: 'woolly-mo',

    name: 'Woolly Mo',

    issueNumber: 2,

    heroImage: sixsiblings,

    images: [
      sixsiblings,
    ],

    disciplines: [
      'Music',
      'Writing',
      'Visual Storytelling',
    ],

    themes: [
      'Family',
      'Memory',
      'Survival',
      'Identity',
    ],

    status: 'featured',
  },


  // ====================================================
  // JULES BEKUTI
  // ====================================================

  {
    slug: 'jules-bekuti',

    name: 'Jules Bekuti',

    issueNumber: 3,

    heroImage: bekuti1,

    heroImageCaption:
      'Jules Bekuti. Photo via the artist’s Instagram.',

    images: [
      {
        src: bekuti5,
        alt: 'Artwork by Jules Bekuti',
        caption:
          'Éclats d’un ailleurs, 2024',
      },

      {
        src: bekuti6,
        alt: 'Artwork by Jules Bekuti',
        caption:
          'Les sentiments partagés, 2026',
      },

      {
        src: bekuti3,
        alt: 'Artwork by Jules Bekuti',
        caption:
          'Closer Than Words, 2026',
      },

      {
        src: bekuti8,
        alt: 'Artwork by Jules Bekuti',
        caption:
          'Sous un parapluie de rêve , 2025',
      },
    ],

    location: [
      'France',
    ],

    disciplines: [
      'Painting',
    ],

    themes: [
      'Black Identity',
      'Migration',
      'Memory',
      'Belonging',
      'Inclusion',
      'Representation',
    ],

    status: 'featured',
  },


   // ====================================================
  // OKEREKE
  // ====================================================

  {
    slug: 'okereke',

    name: 'Okereke',

    issueNumber: 4,

    heroImage: okereke10,
    heroImageCaption:
      'Kelechi Emeka-Okereke . Photo via the artist’s Instagram.',

    // images: [
    //   {
    //     src: okereke1,
    //     alt: 'Artwork by Okereke',
    //     caption: 'Artwork by Okereke',
    //   },
    // ],

    disciplines: [
      'Painting',
    ],

    themes: [
      'Cultural Identity',
      'Memory',
      'Human Connection',
      'African Millennial Experience',
      'Nigerian History',
    ],


    images: [
    {
      src: okereke1,
      alt: 'Artwork by Okereke',
      caption: 'The Beetle',
    },

    {
      src: okereke3,
      alt: 'Artwork by Okereke',
      caption: 'The Christening II',
    },

    {
      src: okereke4,
      alt: 'Artwork by Okereke',
      caption: 'Quiet Mind, no quiet time',
    },

    {
      src: okereke6,
      alt: 'Artwork by Okereke',
      caption: 'Labyrinth of contemporary culture',
    },

    {
      src: okereke7,
      alt: 'Artwork by Okereke',
      caption: 'My darling boy',
    },
  ],

    

    status: 'featured',

    bio:
      'Okereke is a Nigerian artist whose paintings explore cultural identity, memory, human connection, and the everyday histories embedded in African life. His work frequently returns to crowds, family photographs, hairstyles, familiar objects, and the visual language of a pre-digital Nigeria.',

    website:
      'https://okerekeart.com',
  },


  {
  slug: 'sophia-oshodin',

  name: 'Sophia Oshodin',

  issueNumber: 5,

  heroImage: sophia10,

  heroImageCaption:
    'Sophia Oshodin. Artwork image via the artist’s website.',

  disciplines: [
    'Painting',
  ],

  themes: [
    'Black Womanhood',
    'Pleasure',
    'Individuality',
    'Everyday Life',
    'Mental Health',
    'Healing',
  ],

  images: [
    {
      src: sophia1,
      alt:
        'Black women gathered together in a painting by Sophia Oshodin',
      caption:
        'Conversation with Wisdom',
    },

    {
      src: sophia2,
      alt:
        'Twelve apartment windows showing different scenes of everyday life in a painting by Sophia Oshodin',
      caption:
        'Story of Our Lives',
    },
  ],

  status: 'featured',

  bio:
    'Sophia Oshodin is a Nigerian-British figurative painter based in London. Working with acrylic and oil, she captures intimate moments of everyday life through women contemplating, resting, riding, dressing, and simply existing. Drawing from imagination, memory, popular culture, African art, fashion, politics, and art history, her work explores Black womanhood, joy, hope, mental health, healing, and the freedom to occupy space on one’s own terms.',

  website:
    'https://www.sophiaoshodinart.com',
},
]