


import { Link } from 'react-router-dom'

import { artists } from '../data/artists1'
import { issues } from '../data/issues'

function Navbar() {
  const featuredArtists = artists.filter(
    (artist) => artist.status === 'featured'
  )

  return (
    <nav className="navbar">

      {/* =========================
          LOGO
      ========================= */}

      <Link
        to="/"
        className="logo"
      >
        Art All Day
      </Link>


      {/* =========================
          MAIN NAVIGATION
      ========================= */}

      <div className="navLinks">

        {/* =========================
            FEATURED ARTISTS
        ========================= */}

        <div className="navMenu">

          <button
            className="navMenuButton"
            type="button"
          >
            Featured Artists <span>▾</span>
          </button>


          <div className="navDropdown artistDropdown">

            <p className="dropdownLabel">
              Featured Artists
            </p>


            {featuredArtists.map((artist) => {

              const issue = issues.find(
                (item) =>
                  item.issueNumber ===
                  artist.issueNumber
              )

              return (
                <Link
                  key={artist.slug}
                  // to={`/artists/${artist.slug}`}
                  to={`/test-artists/${artist.slug}`}
                  className="dropdownItem"
                >
                  <div className="dropdownItemText">

                    <strong>
                      {artist.name}
                    </strong>

                    <span>
                      {issue?.number ||
                        'Artist Feature'}
                    </span>

                  </div>


                  <span className="dropdownArrow">
                    ↗
                  </span>

                </Link>
              )
            })}

          </div>

        </div>


        {/* =========================
            WRITING
        ========================= */}

        <div className="navMenu">

          <button
            className="navMenuButton"
            type="button"
          >
            Writing <span>▾</span>
          </button>


          <div className="navDropdown">

            <p className="dropdownLabel">
              Writing
            </p>


            <a
              href="/#latest"
              className="dropdownItem"
            >
              <div className="dropdownItemText">

                <strong>
                  Latest Writing
                </strong>

                <span>
                  Essays, criticism,
                  interviews, and observations
                </span>

              </div>


              <span className="dropdownArrow">
                ↗
              </span>

            </a>

          </div>

        </div>


        {/* =========================
            ARCHIVE
        ========================= */}

        {/* <div className="navMenu">

          <button
            className="navMenuButton"
            type="button"
          >
            Archive <span>▾</span>
          </button>


          <div className="navDropdown">

            <p className="dropdownLabel">
              Browse Archive
            </p>


            <Link
              to="/archive"
              className="dropdownItem"
            >
              <div className="dropdownItemText">

                <strong>
                  Artist Archive
                </strong>

                <span>
                  Featured artists,
                  visual studies,
                  and previous work
                </span>

              </div>


              <span className="dropdownArrow">
                ↗
              </span>

            </Link>

          </div>

        </div> */}

      </div>


      {/* =========================
          SUBMIT CTA
      ========================= */}

      <div className="navActions">

      <a
      href="https://artalldaystudio.substack.com/subscribe"
      target="_blank"
      rel="noopener noreferrer"
      className="navMemberButton"
    >
      Become a Member
    </a>

      <Link
        to="/submit"
        className="navButton"
      >
        Submit Work
      </Link>
      </div>

    </nav>
  )
}

export default Navbar