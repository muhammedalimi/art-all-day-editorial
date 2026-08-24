// import { Link } from 'react-router-dom'

// function ArtistArchive() {
//   return (
//     <section id="archive" className="artistArchive">
      
//       <div className="sectionHeader">
//         <p className="sectionLabel">Artist Archive</p>
//         <h2>Featured voices</h2>
//         <span>
//           A growing archive of artists, essays, interviews, and visual studies.
//         </span>
//       </div>

//       <div className="archiveGrid">
//         <Link to="/artists/blu-the-genius" className="archiveCard">
//           <p>Artist Pick</p>
//           <h3>BLU The Genius</h3>
//           <span>Color, pressure, emotion, and mental health awareness.</span>
//         </Link>

//         <Link to="/artists/ben-cowan" className="archiveCard">
//           <p>Faith & Form</p>
//           <h3>Ben Cowan</h3>
//           <span>Painting, faith, memory, leaves, and sacred surfaces.</span>
//         </Link>

//         <article className="archiveCard comingSoon">
//           <p>Coming Soon</p>
//           <h3>Studio Visit</h3>
//           <span>Conversations from inside artists’ working spaces.</span>
//         </article>

//         <article className="archiveCard comingSoon">
//           <p>Coming Soon</p>
//           <h3>Exhibition Notes</h3>
//           <span>Short reflections on shows, rooms, walls, and looking.</span>
//         </article>
//       </div>
//     </section>
//   )
// }

// export default ArtistArchive

/* version 2 */

// import { Link } from 'react-router-dom'
// import blu1 from '../assets/blu2.png'
// import ben1 from '../assets/ben1.jpg'

// function ArtistArchive() {
//   return (
//     <section id="archive" className="artistArchive">
      
//       <div className="sectionHeader">
//         <p className="sectionLabel">Artist Archive</p>

//         <h2>Featured voices</h2>

//         <span>
//           A growing archive of artists, essays, interviews, and visual studies.
//         </span>
//       </div>

//       <div className="archiveGrid">

//         {/* BLU */}
//         <Link
//           to="/artists/blu-the-genius"
//           className="archiveCard"
//         >
//           <div className="archiveImage">
//             <img
//               src={blu1}
//               alt="Artwork by BLU The Genius"
//             />
//           </div>

//           <p>Artist Pick</p>

//           <h3>BLU The Genius</h3>

//           <span>
//             Color, pressure, emotion, and mental health awareness.
//           </span>
//         </Link>

//         {/* BEN */}
//         <Link
//           to="/artists/ben-cowan"
//           className="archiveCard"
//         >
//           <div className="archiveImage">
//             <img
//               src={ben1}
//               alt="Artwork by Ben Cowan"
//             />
//           </div>

//           <p>Faith & Form</p>

//           <h3>Ben Cowan</h3>

//           <span>
//             Painting, faith, memory, leaves, and sacred surfaces.
//           </span>
//         </Link>

//         {/* STUDIO VISIT */}
//         <article className="archiveCard comingSoon">

//           <div className="archiveImage archivePlaceholder">
//             <span>Coming Soon</span>
//           </div>

//           <p>Coming Soon</p>

//           <h3>Studio Visit</h3>

//           <span>
//             Conversations from inside artists’ working spaces.
//           </span>

//         </article>

//         {/* EXHIBITION NOTES */}
//         <article className="archiveCard comingSoon">

//           <div className="archiveImage archivePlaceholder">
//             <span>Coming Soon</span>
//           </div>

//           <p>Coming Soon</p>

//           <h3>Exhibition Notes</h3>

//           <span>
//             Short reflections on shows, rooms, walls, and looking.
//           </span>

//         </article>

//       </div>
//     </section>
//   )
// }

// export default ArtistArchive


// import { Link } from 'react-router-dom'

// import { artists } from '../data/artists'
// import { issues } from '../data/issues'
// import { issueDepartments } from '../data/issueDepartments'
// import { departments } from '../data/departments'

// function ArtistArchive() {
//   return (
//     <section id="archive" className="artistArchive">
//       <div className="sectionHeader">
//         <p className="sectionLabel">
//           Artist Archive
//         </p>

//         <h2>Featured voices</h2>

//         <span>
//           A growing archive of artists, essays, interviews, and visual studies.
//         </span>
//       </div>

//       <div className="archiveGrid">
//         {artists.map((artist) => {
//           const issue = issues.find(
//             (item) =>
//               item.issueNumber === artist.issueNumber
//           )

//           const issueData = issue
//             ? issueDepartments[issue.slug]
//             : undefined

//           const departmentEntry = issueData
//             ? Object.entries(issueData.departments).find(
//                 ([, feature]) =>
//                   feature.link === `/artists/${artist.slug}`
//               )
//             : undefined

//           const departmentSlug =
//             departmentEntry?.[0]

//           const department = departments.find(
//             (item) =>
//               item.slug === departmentSlug
//           )

//           return (
//             <Link
//               key={artist.slug}
//               to={`/artists/${artist.slug}`}
//               className="archiveCard"
//             >
//               <div className="archiveImage">
//                 <img
//                   src={artist.heroImage}
//                   alt={`Artwork by ${artist.name}`}
//                 />
//               </div>

//               {/* <p>
//                 {department?.name ||
//                   'Artist Feature'}
//               </p> */}

//               <p>{issue?.number || 'Artist Feature'}</p>

//               <h3>{artist.name}</h3>

//               <span>{artist.intro}</span>
//             </Link>
//           )
//         })}
//       </div>
//     </section>
//   )
// }

// export default ArtistArchive


// import { Link } from 'react-router-dom'

// import { artists } from '../data/artists'
// import { issues } from '../data/issues'

// function ArtistArchive() {
//   return (
//     <section id="archive" className="artistArchive">
//       <div className="sectionHeader">
//         <p className="sectionLabel">
//           Artist Archive
//         </p>

//         <h2>Featured voices</h2>

//         <span>
//           A growing archive of artists, essays, interviews, and visual studies.
//         </span>
//       </div>

//       <div className="archiveGrid">
//         {artists.map((artist) => {
//           const issue = issues.find(
//             (item) =>
//               item.issueNumber === artist.issueNumber
//           )

//           return (
//             <Link
//               key={artist.slug}
//               to={`/artists/${artist.slug}`}
//               className="archiveCard"
//             >
//               <div className="archiveImage">
//                 <img
//                   src={artist.heroImage}
//                   alt={`Artwork by ${artist.name}`}
//                 />
//               </div>

//               <p>
//                 {issue?.number || 'Artist Feature'}
//               </p>

//               <h3>{artist.name}</h3>

//               <span>
//                 {artist.intro}
//               </span>
//             </Link>
//           )
//         })}
//       </div>
//     </section>
//   )
// }

// export default ArtistArchive



import { Link } from 'react-router-dom'

import { artists } from '../data/artists'
import { issues } from '../data/issues'

function ArtistArchive() {
  const latestArtists = [...artists]
    .sort(
      (a, b) =>
        new Date(b.date).getTime() -
        new Date(a.date).getTime()
    )
    .slice(0, 4)

  return (
    <section
      id="archive"
      className="artistArchive"
    >
      <div className="sectionHeader">
        <p className="sectionLabel">
          Artist Archive
        </p>

        <h2>Featured voices</h2>

        <span>
          A growing archive of artists,
          essays, interviews, and visual studies.
        </span>
      </div>

      <div className="archiveGrid">
        {latestArtists.map((artist) => {
          const issue = issues.find(
            (item) =>
              item.issueNumber ===
              artist.issueNumber
          )

          return (
            <Link
              key={artist.slug}
              to={`/artists/${artist.slug}`}
              className="archiveCard"
            >
              <div className="archiveImage">
                <img
                  src={artist.heroImage}
                  alt={`Artwork by ${artist.name}`}
                />
              </div>

              <p>
                {issue?.number ||
                  'Artist Feature'}
              </p>

              <h3>
                {artist.name}
              </h3>

              <span>
                {artist.intro}
              </span>
            </Link>
          )
        })}
      </div>

      <div className="archiveActions">
        <Link
          to="/artists"
          className="archiveButton"
        >
          View All Artists →
        </Link>
      </div>
    </section>
  )
}

export default ArtistArchive