import { Link } from 'react-router-dom'

function ArtistArchive() {
  return (
    <section id="archive" className="artistArchive">
      
      <div className="sectionHeader">
        <p className="sectionLabel">Artist Archive</p>
        <h2>Featured voices</h2>
        <span>
          A growing archive of artists, essays, interviews, and visual studies.
        </span>
      </div>

      <div className="archiveGrid">
        <Link to="/artists/blu-the-genius" className="archiveCard">
          <p>Artist Pick</p>
          <h3>BLU The Genius</h3>
          <span>Color, pressure, emotion, and mental health awareness.</span>
        </Link>

        <Link to="/artists/ben-cowan" className="archiveCard">
          <p>Faith & Form</p>
          <h3>Ben Cowan</h3>
          <span>Painting, faith, memory, leaves, and sacred surfaces.</span>
        </Link>

        <article className="archiveCard comingSoon">
          <p>Coming Soon</p>
          <h3>Studio Visit</h3>
          <span>Conversations from inside artists’ working spaces.</span>
        </article>

        <article className="archiveCard comingSoon">
          <p>Coming Soon</p>
          <h3>Exhibition Notes</h3>
          <span>Short reflections on shows, rooms, walls, and looking.</span>
        </article>
      </div>
    </section>
  )
}

export default ArtistArchive