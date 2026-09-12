


import sara10 from '../assets/sara10.jpg'
import luz1 from '../assets/Luz1.jpg'
import noor1 from '../assets/noor1.webp'
import johanna1 from '../assets/johanna1.webp'
import bendt1 from '../assets/Bendt1.jpeg'
import manoela1 from '../assets/manoela1.webp'
import jonas1 from '../assets/jonas1.jpg'
import paula1 from '../assets/paula1.png'
import slawn4 from '../assets/slawn4.jpg'
import wangechi1 from '../assets/wangechi1.jpg'
import sixsiblings from '../assets/sixsiblings.png'
import bekuti1 from '../assets/bekuti1.jpg'

type IssueDepartmentFeature = {
  artist: string
  title: string
  description: string[]
  image: string
  imageAlt: string
  caption: string
  link: string
}

type IssueDepartmentGroup = {
  issueNumber: number
  departments: Record<string, IssueDepartmentFeature>
}

type IssueDepartments = Record<string, IssueDepartmentGroup>

export const issueDepartments: IssueDepartments = {
  'issue-01': {
    issueNumber: 1,

    departments: {
      'artist-pick': {
        artist: 'Luz Carabano',
        title: 'The Intimacy of Painting',

        description: [
          'Luz Carabano approaches painting intuitively rather than descriptively, allowing intimacy and feeling to guide the work.',

          'Her practice asks what happens when painting becomes less about describing the world and more about experiencing it through color, gesture, presence, and emotion.',
        ],

        image: luz1,
        imageAlt: 'Artwork by Luz Carabano',
        caption: 'Suelo',

        link: '/artists/luz-carabano',
      },

      'faith-and-form': {
        artist: 'Sara Anstis',
        title: 'Soft Pastel, Folklore & Dreams',

        description: [
          'Sara Anstis creates strange psychological landscapes where soft pastel, folklore, dreams, nature, and biomorphic figures meet.',

          'Her work moves between the familiar and the uncanny, creating spaces where bodies, animals, landscapes, and imagination seem to exist at the same time.',
        ],

        image: sara10,
        imageAlt: 'Artwork by Sara Anstis',
        caption: 'Soft Pastel, Folklore & Dreams',

        link: '/artists/sara-anstis',
      },

      'the-inner-image': {
        artist: 'Nour Bishouty',
        title: 'Displacement of Possession',

        description: [
          'Nour Bishouty explores displacement and possession through a practice concerned with identity, belonging, memory, and the things we carry with us.',

          'Her work considers how objects, images, histories, and personal narratives can shift meaning when they move between places and contexts.',
        ],

        image: noor1,
        imageAlt: 'Artwork by Nour Bishouty',
        caption: 'Displacement of Possession',

        link: '/artists/nour-bishouty',
      },

      'studio-notes': {
        artist: 'Johanna Dumet',
        title: 'The Search for Meaning and Beauty',

        description: [
          'Johanna Dumet’s work reflects a search for meaning and beauty in everyday life.',

          'Her practice creates space for observation, feeling, and the small details through which ordinary experiences begin to carry greater significance.',
        ],

        image: johanna1,
        imageAlt: 'Artwork by Johanna Dumet',
        caption: 'Repas de société: Dames et Mandu',

        link: '/artists/johanna-dumet',
      },

      'slow-looking': {
        artist: 'Bendt Eyckermans',
        title: 'A Generation of Preservation',

        description: [
          'Bendt Eyckermans looks at a generation shaped by preservation, memory, and the tension between what is inherited and what is changing.',

          'His paintings invite a slower form of attention, allowing details, environments, and fragments of everyday life to reveal themselves gradually.',
        ],

        image: bendt1,
        imageAlt: 'Artwork by Bendt Eyckermans',
        caption: 'A Generation of Preservation',

        link: '/artists/bendt-eyckermans',
      },

      'surface-study': {
        artist: 'Manoela Medeiros',
        title: 'Space as a Living Body',

        description: [
          'Manoela Medeiros creates work shaped by material structures, treating space almost like a living body.',

          'Her practice considers how materials, architecture, surfaces, and physical environments can carry memory, movement, and presence.',
        ],

        image: manoela1,
        imageAlt: 'Artwork by Manoela Medeiros',
        caption: 'Space as a Living Body',

        link: '/artists/manoela-medeiros',
      },

      'street-to-studio': {
        artist: 'Jonas Höschl',
        title: 'A German-Born Perspective',

        description: [
          'Jonas Höschl is a German-born artist whose practice moves through contemporary culture, images, history, and the conditions surrounding everyday life.',

          'His work considers how visual language can carry social and cultural meaning while remaining connected to the world outside the studio.',
        ],

        image: jonas1,
        imageAlt: 'Artwork by Jonas Höschl',
        caption: 'A German-Born Perspective',

        link: '/artists/jonas-hoeschl',
      },

      'exhibition-notes': {
        artist: 'Paula Siebra',
        title: 'Softened Contours',

        description: [
          'Paula Siebra works through softened contours, allowing form and atmosphere to remain open rather than fixed.',

          'Her work invites attention toward subtle changes in shape, edge, color, and visual atmosphere.',
        ],

        image: paula1,
        imageAlt: 'Artwork by Paula Siebra',
        caption: 'Softened Contours',

        link: '/artists/paula-s',
      },
    },
  },
// Issue 2 Departments
'issue-02': {
  issueNumber: 2,

  departments: {

        'street-to-studio': {
      artist: 'Slawn',
      title: 'Living Dangerously',

      description: [
        'The first time I really tried to understand Slawn’s art, I wasn’t sure I did. Maybe I was looking too hard at the paintings.',

        'Slawn’s practice moves beyond the canvas into skate culture, fashion, spectacle, business, performance, and the mythology surrounding the artist himself.',
      ],

      image: slawn4,
      imageAlt: 'Artwork by Slawn',
      caption: 'Slawn',

      link: '/articles/living-dangerously',
},
  //   'street-to-studio': {
  //     artist: 'Slawn',
  //     title: 'The Joke Is Serious',

  //     description: [
  //       'Slawn moves through contemporary art with the energy of someone who understands that painting, performance, fashion, business, celebrity, and internet culture can all become part of the same artistic language.',

  //       'The work raises a larger question for contemporary art: what happens when the spectacle surrounding the artist becomes almost impossible to separate from the paintings themselves?',
  //     ],

  //     image: slawn4,
  //     imageAlt: 'Artwork by Slawn',
  //     caption: 'Selected work by Slawn',

  //     link: '/artists/slawn',
  //   },


    'studio-notes': {
      artist: 'Woolly Mo',
      title: 'Six Siblings',

      description: [
        'Six Siblings is an unreleased recording presented through Art All Day as a study of family, memory, survival, inheritance, and the different ways siblings carry the same history.',

        'Moving between music, poetry, and visual storytelling, the piece treats six siblings like six painters — each working from the same family history but leaving a different mark.',
      ],

      image: sixsiblings,
      imageAlt: 'Six siblings artwork for Six Siblings by Woolly Mo',
      caption: 'Six Siblings — unreleased recording by Woolly Mo',

      link: '/studio-hours/six-siblings',
    },


      'the-inner-image': {
        artist: 'Wangechi Mutu',
        title: 'The Body Is Not Neutral',

        description: [
          'For centuries, the African body has been looked at, classified, collected, photographed, exoticized, and explained by someone else. Wangechi Mutu reverses the direction of that gaze.',

          'Her figures do not arrive asking to be understood. They mutate. They seduce. They threaten. Human anatomy collides with plants, machines, animals, ornament, mythology, and fragments of visual culture until the body stops behaving like a stable category.',

          'That instability is part of the power.',

          'Mutu does not simply place African identity inside contemporary art. Her work questions the visual systems that decided what Africa, femininity, beauty, civilization, and even humanity were supposed to look like in the first place.',
        ],

        image: wangechi1,
        imageAlt: 'Artwork by Wangechi Mutu',
        caption: 'Wangechi Mutu',

        link: '/artists/wangechi-mutu',
      },
  },
},

      // Issue 3 Departments
'issue-03': {
  issueNumber: 3,

  departments: {
    'slow-looking': {
      artist: 'Jules Bekuti',
      title: 'When Peace Has a History',

      description: [
        'There is a serenity in Jules Bekuti’s paintings that feels almost therapeutic — soft, restrained, and deeply attentive to presence.',

        'The longer you look, the more that calm begins to carry questions of migration, Black identity, memory, belonging, and what it means for peace to have a history.',
      ],

      image: bekuti1,
      imageAlt: 'Artwork by Jules Bekuti',
      caption: 'Jules Bekuti',

      link: '/studio-hours/when-peace-has-a-history',
    },


    },
  },
}