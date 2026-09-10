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


// ======================================================
// ARTIST TYPES
// ======================================================

export type ArtistStatus =
  | 'featured'
  | 'watching'
  | 'archive'


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
  images?: string[]

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

    images: [
      ben1,
      ben2,
      ben3,
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
  // FIRST FULL LIVING ARTIST PROFILE
  // ====================================================

  {
    slug: 'slawn',

    name: 'Slawn',

    issueNumber: 2,

    heroImage: slawn4,

    images: [
      slawn5,
      slawn6,
      slawn7,
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
]