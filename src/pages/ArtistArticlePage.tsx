// import { Link, useParams } from 'react-router-dom'
// import { artists } from '../data/artists'

// function ArtistArticlePage() {
//   const { slug } = useParams()

//   const artist = artists.find((item) => item.slug === slug)

//   if (!artist) {
//     return (
//       <main className="articlePage">
//         <h1>Artist not found</h1>
//         <Link to="/">Back home</Link>
//       </main>
//     )
//   }

//   return (
//     <main className="articlePage">
//       <section
//         className="articleHero"
//         style={{ backgroundImage: `url(${artist.heroImage})` }}
//       >
//         <div className="articleOverlay">
//           <Link to="/" className="backLink">
//             ← Back to Home
//           </Link>

//           <p className="articleCategory">{artist.category}</p>

//           <h1>{artist.title}</h1>

//           <div className="articleInfo">
//             <span>{artist.date}</span>
//             <span>{artist.author}</span>
//           </div>
//         </div>
//       </section>

//       <section className="articleBodyLayout">
//         <article className="articleBody">
//           <p className="articleIntro">{artist.intro}</p>

//           {artist.paragraphs.map((paragraph) => (
//             <p key={paragraph}>{paragraph}</p>
//           ))}
//         </article>

//         <aside className="articleSidebar">
//           <img src={artist.heroImage} alt={artist.name} />
//           <h3>{artist.name}</h3>
//           <p>{artist.category}</p>
//         </aside>
//       </section>

//       <section className="articleImages">
//         {artist.images.map((image, index) => (
//           <img
//             key={image}
//             src={image}
//             alt={`${artist.name} artwork ${index + 1}`}
//           />
//         ))}
//       </section>
//     </main>
//   )
// }

// export default ArtistArticlePage



/*  Version 2 */

// import { useState } from 'react'
// import { Link, useParams } from 'react-router-dom'
// import { artists } from '../data/artists'

// function ArtistArticlePage() {
//   const { slug } = useParams()
//   const [showFullText, setShowFullText] = useState(false)

//   const artist = artists.find((item) => item.slug === slug)

//   if (!artist) {
//     return (
//       <main className="articlePage">
//         <h1>Artist not found</h1>
//         <Link to="/">Back home</Link>
//       </main>
//     )
//   }

//   const visibleParagraphs = showFullText
//     ? artist.paragraphs
//     : artist.paragraphs.slice(0, 2)

//   return (
//     <main className="articlePage">
//       <section
//         className="articleHero"
//         style={{ backgroundImage: `url(${artist.heroImage})` }}
//       >
//         <div className="articleOverlay">
//           <Link to="/" className="backLink">
//             ← Back to Home
//           </Link>

//           <p className="articleCategory">{artist.category}</p>

//           <h1>{artist.title}</h1>

//           <div className="articleInfo">
//             <span>{artist.date}</span>
//             <span>{artist.author}</span>
//           </div>
//         </div>
//       </section>

//       <section className="articleBodyLayout">
//         <article className="articleBody">
//           <p className="articleIntro">{artist.intro}</p>

//           {visibleParagraphs.map((paragraph) => (
//             <p key={paragraph}>{paragraph}</p>
//           ))}

//           {artist.paragraphs.length > 2 && (
//             <button
//               className="readMoreButton"
//               onClick={() => setShowFullText(!showFullText)}
//             >
//               {showFullText ? 'Show Less' : 'Read More'}
//             </button>
//           )}
//         </article>

//         <aside className="articleSidebar">
//           <img src={artist.heroImage} alt={artist.name} />
//           <h3>{artist.name}</h3>
//           <p>{artist.category}</p>
//         </aside>
//       </section>

//       {showFullText && (
//         <section className="articleImages">
//           {artist.images.map((image, index) => (
//             <img
//               key={image}
//               src={image}
//               alt={`${artist.name} artwork ${index + 1}`}
//             />
//           ))}
//         </section>
//       )}
//     </main>
//   )
// }

// export default ArtistArticlePage

/*  Version 3 */

// import { useState } from 'react'
// import { Link, useParams } from 'react-router-dom'
// import { artists } from '../data/artists'
// import ReadingProgress from '../components/ReadingProgress'

// function ArtistArticlePage() {
//   const { slug } = useParams()
//   const [isExpanded, setIsExpanded] = useState(false)

//   const artist = artists.find((item) => item.slug === slug)

//   if (!artist) {
//     return (
//       <main className="articlePage">
//         <h1>Artist not found</h1>
//         <Link to="/">Back home</Link>
//       </main>
//     )
//   }

//   const visibleParagraphs = isExpanded
//     ? artist.paragraphs
//     : artist.paragraphs.slice(0, 2)

//   return (
//     <main className="articlePage">
//       <section
//         className="articleHero"
//         style={{ backgroundImage: `url(${artist.heroImage})` }}
//       >
//         <div className="articleOverlay">
//           <Link to="/" className="backLink">
//             ← Back to Home
//           </Link>

//           <p className="articleCategory">{artist.category}</p>
//           <h1>{artist.title}</h1>

//           <div className="articleInfo">
//             <span>{artist.date}</span>
//             <span>{artist.author}</span>
//           </div>
//         </div>
//       </section>

//       <section className="articleBodyLayout">
//         <article className={`articleBody ${!isExpanded ? 'articlePreview' : ''}`}>
//           <p className="articleIntro">{artist.intro}</p>

//           {visibleParagraphs.map((paragraph) => (
//             <p key={paragraph}>{paragraph}</p>
//           ))}

//           {artist.paragraphs.length > 2 && (
//             <button
//               className="continueButton"
//               onClick={() => setIsExpanded(!isExpanded)}
//             >
//               {isExpanded ? 'Show Less' : 'Continue Reading'}
//             </button>
//           )}
//         </article>

//         <aside className="articleSidebar">
//           <img src={artist.heroImage} alt={artist.name} />
//           <h3>{artist.name}</h3>
//           <p>{artist.category}</p>
//         </aside>
//       </section>

//       {isExpanded && (
//         <section className="articleImages">
//           {artist.images.map((image, index) => (
//             <img
//               key={image}
//               src={image}
//               alt={`${artist.name} artwork ${index + 1}`}
//             />
//           ))}
//         </section>
//       )}
//     </main>
//   )
// }

// export default ArtistArticlePage

/*  Version 4 */

import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { artists } from '../data/artists'
import ReadingProgress from '../components/ReadingProgress'
import ListenButton from '../components/ListenButton'

function ArtistArticlePage() {
  const { slug } = useParams()
  const [isExpanded, setIsExpanded] = useState(false)

  const artist = artists.find((item) => item.slug === slug)

  if (!artist) {
    return (
      <main className="articlePage">
        <h1>Artist not found</h1>
        <Link to="/">Back home</Link>
      </main>
    )
  }
  const articleText = [
  artist.title,
  artist.intro,
  ...artist.paragraphs,
  ].join('. ')

  const visibleParagraphs = isExpanded
    ? artist.paragraphs
    : artist.paragraphs.slice(0, 2)

  return (
    <main className="articlePage">
      <ReadingProgress />

      <section
        className="articleHero"
        style={{ backgroundImage: `url(${artist.heroImage})` }}
      >
        <div className="articleOverlay">
          <Link to="/" className="backLink">
            ← Back to Home
          </Link>

          <p className="articleCategory">{artist.category}</p>

          <h1>{artist.title}</h1>

          <div className="articleInfo">
            <span>{artist.date}</span>
            <span>{artist.author}</span>
          </div>
        </div>
      </section>

      <section className="articleBodyLayout">
        <article className={`articleBody ${!isExpanded ? 'articlePreview' : ''}`}>
          <ListenButton text={articleText} />
          <p className="articleIntro">{artist.intro}</p>

          {visibleParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}

          {artist.paragraphs.length > 2 && (
            <button
              className="continueButton"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? 'Show Less' : 'Continue Reading'}
            </button>
          )}
        </article>

        <aside className="articleSidebar">
          <img src={artist.heroImage} alt={artist.name} />
          <h3>{artist.name}</h3>
          <p>{artist.category}</p>
        </aside>
      </section>

      {isExpanded && (
        <section className="articleImages">
          {artist.images.map((image, index) => (
            <img
              key={image}
              src={image}
              alt={`${artist.name} artwork ${index + 1}`}
            />
          ))}
        </section>
      )}
    </main>
  )
}

export default ArtistArticlePage