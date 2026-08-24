import { Link } from 'react-router-dom'

import { artists } from '../data/artists'
import { issues } from '../data/issues'

import Footer from '../components/Footer'
import '../styles/ArtistsPage.css'

function ArtistsPage() {
  return (
    <main className="artistsPage">
      <section className="artistsPageHero">
        <Link to="/" className="backLink dark">
          ← Back to Home
        </Link>

        <p className="sectionLabel">
          Artist Archive
        </p>

        <h1>
          All Artists
        </h1>

        <p>
          A growing archive of artists featured across Art All Day issues,
          criticism, interviews, and visual studies.
        </p>
      </section>

      <section className="artistsPageGrid">
        {artists.map((artist) => {
          const issue = issues.find(
            (item) =>
              item.issueNumber === artist.issueNumber
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
                {issue?.number || 'Artist Feature'}
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
      </section>

      <Footer />
    </main>
  )
}

export default ArtistsPage