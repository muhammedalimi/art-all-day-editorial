// import { Link } from 'react-router-dom'
// import { artists } from '../data/artists'
// import '../styles/ArchivePage.css'

// function ArchivePage() {
//   return (
//     <main className="archivePage">
//       <section className="archiveHeader">
//         <p className="sectionLabel">
//           Artist Archive
//         </p>

//         <h1>
//           Featured Voices
//         </h1>

//         <p>
//           A growing archive of artists, essays,
//           interviews, and visual studies.
//         </p>
//       </section>

//       <section className="archiveGrid">
//         {artists.map((artist) => (
//           <Link
//             key={artist.slug}
//             to={`/artists/${artist.slug}`}
//             className="archiveCard"
//           >
//             {artist.heroImage && (
//               <img
//                 src={artist.heroImage}
//                 alt={artist.name}
//               />
//             )}

//             <p>
//               Issue {String(artist.issueNumber).padStart(2, '0')}
//             </p>

//             <h2>
//               {artist.name}
//             </h2>

//             <span>
//               {artist.intro}
//             </span>
//           </Link>
//         ))}
//       </section>
//     </main>
//   )
// }

// export default ArchivePage



import {
  Link,
  useNavigate,
} from 'react-router-dom'

import { artists } from '../data/artists'

import '../styles/ArchivePage.css'

function ArchivePage() {
  const navigate = useNavigate()

  return (
    <main className="archivePage">
      <div className="archiveBackBar">
        <button
          type="button"
          className="archiveBackLink"
          onClick={() => navigate(-1)}
        >
          ← Back
        </button>
      </div>

      <section className="archiveHeader">
        <p className="sectionLabel">
          Artist Archive
        </p>

        <h1>
          Featured Voices
        </h1>

        <p>
          A growing archive of artists, essays,
          interviews, and visual studies.
        </p>
      </section>

      <section className="archiveGrid">
        {artists.map((artist) => (
          <Link
            key={artist.slug}
            to={`/artists/${artist.slug}`}
            className="archiveCard"
          >
            {artist.heroImage && (
              <img
                src={artist.heroImage}
                alt={artist.name}
              />
            )}

            <p>
              Issue{' '}
              {String(
                artist.issueNumber
              ).padStart(2, '0')}
            </p>

            <h2>
              {artist.name}
            </h2>

            <span>
              {artist.intro}
            </span>
          </Link>
        ))}
      </section>
    </main>
  )
}

export default ArchivePage