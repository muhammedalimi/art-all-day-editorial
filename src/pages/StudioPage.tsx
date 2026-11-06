
import blu4 from '../assets/blu4.png'
import StudioPackages from '../components/StudioPackages'


export default function StudioPage() {
  return (
    <main className="studio-page">

      {/* =========================
          HERO
      ========================= */}

      <section className="studio-hero">
        <p>ART ALL DAY STUDIO</p>

        <h1>
          Your art deserves a beautiful home online.
        </h1>

        <p>
          Professional artist portfolios,
          digital galleries, and online stores.
        </p>

        <a href="#studio-packages">
          Explore Our Packages
        </a>
      </section>

      {/* =========================
          SERVICES AND CART
      ========================= */}

      <StudioPackages />

      {/* =========================
          PORTFOLIO SHOWCASE
      ========================= */}

      <section
        className="studio-showcase"
        id="studio-work"
      >

        <div className="studio-showcase-header">

          <span className="studio-eyebrow">
            01 / SELECTED WORK
          </span>

          <h2>
            Designed for the artist.
            <br />
            Built around the work.
          </h2>

          <p>
            We create thoughtful digital spaces
            that allow artists to present their
            work, share their stories, and
            connect with new audiences.
          </p>

        </div>

        {/* PORTFOLIO PREVIEW */}

        <div className="studio-preview-frame">

          <div className="studio-preview-toolbar">
            <span className="studio-preview-dots">
              <i></i>
              <i></i>
              <i></i>
            </span>

            <span>ARTIST PORTFOLIO / CONCEPT</span>
          </div>

          <div className="studio-preview-site">

            <div className="studio-preview-top">
              <span>BLU THE GENIUS</span>
              <span>WORKS / ABOUT / CONTACT</span>
            </div>

            <div className="studio-preview-content">

              <div className="studio-preview-copy">

                <span>CONTEMPORARY ARTIST</span>

                <h3>
                  A space
                  <br />
                  for the work.
                </h3>

                <p>
                  An independent portfolio designed
                  to showcase the artist's practice,
                  selected works, and creative journey.
                </p>

                <span className="studio-preview-explore">
                  EXPLORE THE WORK ↗
                </span>

              </div>

              <div className="studio-preview-art">
                <img
                  src={blu4}
                  alt="Artwork by BLU THE GENIUS"
                />
              </div>

            </div>

          </div>

        </div>

        <div className="studio-showcase-footer">
          <span>
            ARTIST PORTFOLIO — DESIGN CONCEPT
          </span>

          <p>
            Interactive demonstration coming soon.
          </p>
        </div>

      </section>

    </main>
  )
}
