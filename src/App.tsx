// import './App.css'
// import ben1 from './assets/ben1.jpg'

// function Navbar() {
//   return (
//     <nav className="navbar">
//       <div className="logo">Studio Hours</div>

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

// function Hero() {
//   return (
//     <section className="hero">
//       <p className="eyebrow">Art Journalism / Daily Studio Culture</p>

//       <h1>
//         We talk art all day.
//       </h1>

//       <p className="heroText">
//         Studio Hours is an editorial space for artist profiles, studio visits,
//         exhibition notes, interviews, and essays on contemporary art.
//       </p>

//       <button className="heroButton">Read the Latest</button>
//     </section>
//   )
// }

// // function FeaturedArtist() {
// //   return (
// //     <section className="featuredArtist">
// //       <div>
// //         <p className="sectionLabel">Featured Artist</p>
// //         <h2>Ben Cowan</h2>
// //         <p>
// //           A look into painting, architecture, surfaces, and the visual rhythm
// //           of Brooklyn spaces.
// //         </p>
// //         <button>Read Profile</button>
// //       </div>

// //       <div className="artistImage">
// //         <span>Artist Feature</span>
// //       </div>
// //     </section>


// function FeaturedArtist() {
//   return (
//     <section className="featuredArtist">
//       <div>
//         <p className="sectionLabel">Featured Artist</p>

//         <h2>Ben Cowan</h2>

//         <p>
//           A look into painting, architecture, surfaces, and the visual rhythm
//           of Brooklyn spaces.
//         </p>

//         <button>Read Profile</button>
//       </div>

//       <div className="artistImage">
//         <img src={ben1} alt="Ben Cowan artwork feature" />
//         <span>Artist Feature</span>
//       </div>
//     </section>
//   )
// }



// function ArticleCard({ category, title, text }) {
//   return (
//     <article className="articleCard">
//       <p>{category}</p>
//       <h3>{title}</h3>
//       <span>{text}</span>
//     </article>
//   )
// }

// function ArticleSection() {
//   return (
//     <section className="articles">
//       <div className="sectionHeader">
//         <p className="sectionLabel">Latest Writing</p>
//         <h2>Notes from the art world</h2>
//       </div>

//       <div className="articleGrid">
//         <ArticleCard
//           category="Interview"
//           title="Inside the studio practice"
//           text="Conversations with artists about process, doubt, materials, and meaning."
//         />

//         <ArticleCard
//           category="Essay"
//           title="Why surfaces matter"
//           text="A short reflection on texture, architecture, and the emotional weight of paintings."
//         />

//         <ArticleCard
//           category="Criticism"
//           title="Looking longer"
//           text="How slow attention changes the way we experience contemporary art."
//         />
//       </div>
//     </section>
//   )
// }

// function Footer() {
//   return (
//     <footer className="footer">
//       <p>Studio Hours © 2026</p>
//       <p>Art. Interviews. Essays. All day.</p>
//     </footer>
//   )
// }

// function App() {
//   return (
//     <div className="app">
//       <Navbar />
//       <Hero />
//       <FeaturedArtist />
//       <ArticleSection />
//       <Footer />
//     </div>
//   )
// }

// export default App



// import './App.css'

// import Navbar from './components/Navbar'
// import Hero from './components/Hero'
// import FeaturedArtist from './components/FeaturedArtist'
// import ArticleSection from './components/ArticleSection'
// import SubmitSection from './components/SubmitSection'
// import Footer from './components/Footer'
// import ArtistGallery from './components/ArtistGallery'



// function App() {
//   return (
//     <div className="app">
//       <Navbar />
//       <Hero />
//       <FeaturedArtist />
//       <ArtistGallery />
//       <ArticleSection />
//       <SubmitSection />
//       <Footer />
//     </div>
//   )
// }

// export default App

// import './App.css'
// import { Routes, Route } from 'react-router-dom'

// import Navbar from './components/Navbar'
// import Hero from './components/Hero'
// import ArtistPick from './components/ArtistPick'
// // import WorksInView from './components/WorksInView'
// import ArticleSection from './components/ArticleSection'
// import SubmitSection from './components/SubmitSection'
// import Footer from './components/Footer'
// import BenCowanFeature from './components/BenCowanFeature'
// import ArtistArticlePage from './pages/ArtistArticlePage'

// import ArtistArchive from './components/ArtistArchive'
// import SubmitSection from './components/SubmitSection'
// // function App() {
// //   return (
// //     <div className="app">
// //       <Navbar />
// //       <Hero />
// //       <ArtistPick />
// //       <BenCowanFeature />
// //       {/* <WorksInView /> */}
// //       <ArticleSection />
// //       <SubmitSection />
// //       <Footer />
// //     </div>
// //   )
// // }

// // export default App

// function HomePage() {
//   return (
//     <>
//       <Navbar />
//       <Hero />
//       <ArtistPick />
//       <BenCowanFeature />
//       {/* <WorksInView /> */}
//       <ArtistArchive />
//       <SubmitSection />
//       <Footer />
//     </>
//   )
// }

// function App() {
//   return (
//     <div className="app">
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/artists/:slug" element={<ArtistArticlePage />} />
//       </Routes>
//     </div>
//   )
// }

// export default App

import './App.css'

import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
// import IssueTicker from './components/IssueTicker'
import Hero from './components/Hero'
import IssueIntro from './components/IssueIntro'
import Departments from './components/Departments'
import ArtistPick from './components/ArtistPick'
// import BenCowanFeature from './components/BenCowanFeature'
// import WorksInView from './components/WorksInView'
// import EditorsNote from './components/EditorsNote'
import ArticleSection from './components/ArticleSection'
import ArtistArchive from './components/ArtistArchive'
// import SubmitSection from './components/SubmitSection'


import ArtistArticlePage from './pages/ArtistArticlePage'
import StudioHoursArticlePage from './pages/StudioHoursArticlePage'
import SubmitPage from './pages/SubmitPage'
import DepartmentArticlePage from './pages/DepartmentArticlePage'
import ScrollToTop from './components/ScrollToTop'
import Footer from './components/Footer'
import NextIssue from './components/NextIssue'
import SubscribeSection from './components/SubscribeSection'
// import BenCowanPrelude from './components/BenCowanPrelude'
import IssuePage from './pages/IssuePage'
import ArtistsPage from './pages/ArtistsPage'


function HomePage() {
  return (
    <>
      <Navbar />
      {/* <IssueTicker /> */}
      <Hero />
      <IssueIntro />
      {/* <BenCowanPrelude /> */}
      {/* <IssueIntro /> */}
      {/* <Departments /> */}
      <SubscribeSection />
      <ArtistPick />
      {/* <BenCowanFeature /> */}
      {/* <WorksInView /> */}
      {/* <EditorsNote /> */}
      <ArticleSection />
      <ArtistArchive />
      {/* <SubmitSection /> */}
      <NextIssue />
      
      <Footer />
    </>
  )
}

function App() {
  return (
    <div className="app">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/artists" element={<ArtistsPage />}/>
        <Route path="/artists/:slug" element={<ArtistArticlePage />} />
        {/* <Route path="/departments/:slug" element={<DepartmentArticlePage />} /> */}
        <Route path="/issues/:issueSlug/departments/:slug" element={<DepartmentArticlePage />}/>
        <Route path="/departments/:slug" element={<DepartmentArticlePage />}/>
        <Route path="/issues/:issueSlug" element={<IssuePage />}/>
      
      
        
        {/* <Route path="/studio-hours/inside-the-studio-practice" element={<StudioHoursArticlePage />} />
        <Route path="/studio-hours/why-surfaces-matter" element={<StudioHoursArticlePage />} />
        <Route path="/studio-hours/faith-and-form" element={<StudioHoursArticlePage />} /> */}
        <Route path="/studio-hours/:slug" element={<StudioHoursArticlePage />} />
        <Route path="/submit" element={<SubmitPage />} />
      </Routes>
    </div>
  )
}

export default App