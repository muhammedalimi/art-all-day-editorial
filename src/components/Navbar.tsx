// function Navbar() {
//   return (
//     <nav className="navbar">
//       <div className="logo">Art All Day</div>

//       <div className="navLinks">
//         <a href="#">Artists</a>
//         <a href="#">Interviews</a>
//         <a href="#">Essays</a>
//         <a href="#">Exhibitions</a>
//       </div>

//       <button className="navButton">Submit Work</button>
//     </nav>
//   )
// }

// export default Navbar


/*  Version 2 */
// import { Link } from 'react-router-dom'

// function Navbar() {
//   return (
//     <nav className="navbar">
//       <Link to="/" className="logo">
//         Art All Day
//       </Link>

//       <div className="navLinks">
//         <a href="#artists">Artists</a>
//         <a href="#latest">Writing</a>
//         <a href="#archive">Archive</a>
//         <Link to="/submit">Submit</Link>
//       </div>

//       <Link to="/submit" className="navButton">
//         Submit Work
//       </Link>
//     </nav>
//   )
// }

// export default Navbar

/*  Version 3 */

// import { Link } from 'react-router-dom'
// import { artists } from '../data/artists'

// function Navbar() {
//   return (
//     <nav className="navbar">
//       <Link to="/" className="logo">
//         Art All Day
//       </Link>

//       <div className="navLinks">
//         <div className="artistMenu">
//           <button className="navMenuButton" type="button">
//             Artists <span>▾</span>
//           </button>

//           <div className="artistDropdown">
//             <p className="dropdownLabel">Featured Artists</p>

//             {artists.map((artist) => (
//               <Link
//                 key={artist.slug}
//                 to={`/artists/${artist.slug}`}
//                 className="dropdownArtist"
//               >
//                 <strong>{artist.name}</strong>
//                 <span>{artist.category}</span>
//               </Link>
//             ))}
//           </div>
//         </div>

//         <a href="#latest">Writing</a>
//         <a href="#archive">Archive</a>
//         {/* <Link to="/submit">Submit</Link> */}
//       </div>

//       <Link to="/submit" className="navButton">
//         Submit Work
//       </Link>
//     </nav>
//   )
// }

// export default Navbar


/*  Version 4 */

import { Link } from 'react-router-dom'
import { artists } from '../data/artists'
// import AccessibilityPanel from './AccessibilityPanel'


function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        Art All Day
      </Link>

      <div className="navLinks">
        {/* ARTISTS DROPDOWN */}
        <div className="navMenu">
          <button className="navMenuButton" type="button">
            Artists <span>▾</span>
          </button>

          <div className="navDropdown">
            <p className="dropdownLabel">Featured Artists</p>

            {artists.map((artist) => (
              <Link
                key={artist.slug}
                to={`/artists/${artist.slug}`}
                className="dropdownItem"
              >
                <strong>{artist.name}</strong>
                <span>{artist.category}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* WRITING DROPDOWN */}
        <div className="navMenu">
          <button className="navMenuButton" type="button">
            Writing <span>▾</span>
          </button>

          <div className="navDropdown">
            <p className="dropdownLabel">Departments</p>

            <a href="#latest" className="dropdownItem">
              <strong>Latest Writing</strong>
              <span>Essays, criticism, and interviews</span>
            </a>

            <a href="#departments" className="dropdownItem">
              <strong>Departments</strong>
              <span>Artist Pick, Faith & Form, Studio Notes</span>
            </a>

            <a href="#editors-note" className="dropdownItem">
              <strong>Editor’s Note</strong>
              <span>The voice and direction of the issue</span>
            </a>
          </div>
        </div>

        {/* ARCHIVE DROPDOWN */}
        <div className="navMenu">
          <button className="navMenuButton" type="button">
            Archive <span>▾</span>
          </button>

          <div className="navDropdown">
            <p className="dropdownLabel">Browse Archive</p>

            <a href="#archive" className="dropdownItem">
              <strong>Artist Archive</strong>
              <span>All featured artists and visual studies</span>
            </a>

            <a href="#issue" className="dropdownItem">
              <strong>Issue 01</strong>
              <span>Feeling in Color</span>
            </a>

            <a href="#works" className="dropdownItem">
              <strong>Works in View</strong>
              <span>Selected images from the features</span>
            </a>
          </div>
        </div>

        <Link to="/submit">Submit</Link>
      </div>

      <Link to="/submit" className="navButton">
        Submit Work
      </Link>

{/* <AccessibilityPanel /> */}
    </nav>
  )
}

export default Navbar