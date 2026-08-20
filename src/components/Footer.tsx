// function Footer() {
//   return (
//     <footer className="footer">
//       <p>Art All Day © 2026</p>
//       <p>Art. Interviews. Essays. All day.</p>
//     </footer>
//   )
// }

// export default Footer

import { Link } from 'react-router-dom'

function Footer() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <footer className="siteFooter">
      <div className="footerLogo">Art  All  Day</div>
        <div className="footerIdentity">
    <p className="footerKicker">Brand Identity</p>

    <h3>An Ecosystem for Art</h3>

    <p>
     Art All Day is an independent editorial platform for artists,
     exploring feeling, memory, faith, pressure, and visual truth through art and culture.
    </p>
{/* 
    <div className="identityTags">
      <span>Artist Discovery</span>
      <span>Visual Essays</span>
      <span>Studio Culture</span>
      <span>Slow Criticism</span>
    </div> */}
  </div>

      <div className="footerGrid">
        <div className="footerColumn">
          <h4>Departments</h4>
          <Link to="/departments/artist-pick">Artist Pick</Link>
          <Link to="/departments/faith-and-form">Faith & Form</Link>
          <Link to="/departments/the-inner-image">The Inner Image</Link>
          <Link to="/departments/studio-notes">Studio Notes</Link>
          {/* <Link to="/departments/slow-looking">Slow Looking</Link> */}
        </div>

        <div className="footerColumn">
          <h4>Artists</h4>
          <Link to="/artists/blu-the-genius">BLU The Genius</Link>
          <Link to="/artists/ben-cowan">Ben Cowan</Link>
          {/* <a href="#archive">Artist Archive</a>
          <a href="#works">Works in View</a> */}
        </div>
{/* 
        <div className="footerColumn">
          <h4>Magazine</h4>
          <a href="#issue">Issue 01</a>
          <a href="#latest">Latest Writing</a>
          <a href="#editors-note">Editor’s Note</a>
          <a href="#departments">Departments</a>
        </div> */}

        {/* <div className="footerColumn">
          <h4>About</h4>
          <Link to="/submit">Submit Work</Link>
          <a href="mailto:artalldayco@gmail.com">Contact</a>
          <a href="#">Masthead</a>
          <a href="#">Privacy Policy</a>
        </div> */}
{/* 
        <div className="footerSubscribe">
          <h4>Art in your inbox</h4>

          <p>
            Artist picks, visual essays, studio notes, and slow criticism from
            the Art All Day archive.
          </p>

          <form>
            <input type="email" placeholder="Email address" />
            <button type="submit">Submit</button>
          </form>
        </div> */}
      </div>

      <div className="footerBottom">
        <p>© 2026 Art All Day. Independent art editorial.</p>

        <div className="footerSocials">
           <a
            href="https://www.instagram.com/artallday.studio/"
            target="_blank"
            rel="noopener noreferrer">
            Instagram
          </a>
          {/* <a href="#">YouTube</a>
          <a href="#">TikTok</a> */}
        </div>
      </div>

      <button className="backToTop" onClick={scrollToTop} aria-label="Back to top">
        ↑
      </button>
    </footer>
  )
}

export default Footer