// import blu2 from '../assets/blu2.png'
// import { Link } from 'react-router-dom'

// function ArtistPick() {
//   return (
//     <section id="artists" className="artistPick">
//       <div className="artistPickText">
//         <p className="sectionLabel">Artist Pick</p>

//         <h2>BLU The Genius</h2>

//         <p>
//           BLU The Genius sits in that space where art feels emotional before it
//           feels decorative. The work is bold, colorful, and easy to recognize,
//           but what makes it more interesting is the intention behind it.
//         </p>

//         <p>
//           BLU has described the work as coming from personal experience, raw
//           emotion, and a desire to raise awareness around mental health. That
//           matters because the paintings do not just ask to be looked at; they
//           try to turn insecurity, anxiety, and inner pressure into something
//           visible.
//         </p>

//         {/* <p>
//           What works best about BLU’s art is the honesty. The pieces do not feel
//           like they are trying to be quiet or overly academic. They speak in
//           color, character, emotion, and repetition.
//         </p>

//         <p>
//           Still, BLU The Genius represents an artist building from feeling, not
//           just aesthetics. The work is polished enough to live in a gallery
//           setting, but personal enough to still feel close to the street, the
//           studio, and the emotional life that created it.
//         </p> */}

//         {/* <button>Read Artist Note</button> */}
//         <Link to="/artists/blu-the-genius" className="artistButton">
//         Read More
//         </Link>
//       </div>

//       <div className="artistPickImage">
//         <img src={blu2} alt="Artwork by BLU The Genius" />
//         <span>LOST IN A BEAUTIFUL DREAM</span>
//       </div>
//     </section>
//   )
// }

// export default ArtistPick

/* version2 */

// import { Link } from 'react-router-dom'
// import blu1 from '../assets/blu2.png'

// function ArtistPick() {
//   return (
//     <section id="artists" className="artistPick">
//       <div className="artistPickText">
//         <p className="sectionLabel">Artist Pick</p>

//         <h2>BLU The Genius</h2>

//         <p>
//           BLU The Genius sits in that space where art feels emotional before it
//           feels decorative. The work is bold, colorful, and easy to recognize,
//           but what makes it more interesting is the intention behind it.
//         </p>

//         <p>
//           BLU represents an artist building from feeling, not just aesthetics —
//           polished enough for a gallery setting, but personal enough to still
//           feel close to the street, the studio, and the emotional life that
//           created it.
//         </p>

//         <Link to="/artists/blu-the-genius" className="artistButton">
//           View Full Feature
//         </Link>
//       </div>

//       <div className="artistPickImage">
//         <img src={blu1} alt="Artwork by BLU The Genius" />
//         <span>LOST IN A BEAUTIFUL DREAM</span>
//       </div>
//     </section>
//   )
// }

// export default ArtistPick


/* version3 */

// import { Link } from 'react-router-dom'
// import { departments } from '../data/departments'

// function ArtistPick() {
//   const department = departments.artistPick

//   return (
//     <section id="artists" className="artistPick">
//       <div className="artistPickText">
//         <p className="sectionLabel">{department.label}</p>

//         <h2>{department.title}</h2>

//         {department.description.map((paragraph, index) => (
//           <p key={index}>{paragraph}</p>
//         ))}

//         <Link to={department.link} className="artistButton">
//           View Full Feature
//         </Link>
//       </div>

//       <div className="artistPickImage">
//         <img
//           src={department.image}
//           alt={department.imageAlt}
//         />

//         <span>{department.caption}</span>
//       </div>
//     </section>
//   )
// }

// export default ArtistPick


// /* version4 */

// import { Link } from 'react-router-dom'
// import { issues } from '../data/issues'

// function ArtistPick() {
//   const artistPick = issues['issue-01'].departments['artist-pick']

//   return (
//     <section id="artists" className="artistPick">
//       <div className="artistPickText">
//         <p className="sectionLabel">
//           {artistPick.department}
//         </p>

//         <h2>{artistPick.title}</h2>

//         {artistPick.description.map((paragraph, index) => (
//           <p key={index}>
//             {paragraph}
//           </p>
//         ))}

//         <Link
//           to={artistPick.link}
//           className="artistButton"
//         >
//           View Full Feature
//         </Link>
//       </div>

//       <div className="artistPickImage">
//         <img
//           src={artistPick.image}
//           alt={artistPick.imageAlt}
//         />

//         <span>{artistPick.caption}</span>
//       </div>
//     </section>
//   )
// }

// export default ArtistPick

/* version5 */

// import { Link } from 'react-router-dom'
// import blu1 from '../assets/blu2.png'

// function ArtistPick() {
//   return (
//     <section id="artists" className="artistPick">
//       <div className="artistPickText">
//         <p className="sectionLabel">Artist Pick</p>

//         <h2>BLU The Genius</h2>

//         <p>
//           BLU The Genius sits in that space where art feels emotional before it
//           feels decorative. The work is bold, colorful, and easy to recognize,
//           but what makes it more interesting is the intention behind it.
//         </p>

//         <p>
//           BLU represents an artist building from feeling, not just aesthetics —
//           polished enough for a gallery setting, but personal enough to still
//           feel close to the street, the studio, and the emotional life that
//           created it.
//         </p>

//         <Link to="/artists/blu-the-genius" className="artistButton">
//           View Full Feature
//         </Link>
//       </div>

//       <div className="artistPickImage">
//         <img src={blu1} alt="Artwork by BLU The Genius" />
//         <span>LOST IN A BEAUTIFUL DREAM</span>
//       </div>
//     </section>
//   )
// }

// export default ArtistPick

/* version6 */

import { Link } from 'react-router-dom'
import { issueDepartments } from '../data/issueDepartments'

function ArtistPick() {
  const artistPick = issueDepartments['issue-01']['artist-pick']

  return (
    <section id="artists" className="artistPick">
      <div className="artistPickText">
        <p className="sectionLabel">Artist Pick</p>

        <h2>{artistPick.title}</h2>

        {artistPick.description.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}

        <Link
          to={artistPick.link}
          className="artistButton"
        >
          View Full Feature
        </Link>
      </div>

      <div className="artistPickImage">
        <img
          src={artistPick.image}
          alt={artistPick.imageAlt}
        />

        <span>{artistPick.caption}</span>
      </div>
    </section>
  )
}

export default ArtistPick