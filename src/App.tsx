

import './App.css'

import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
// import IssueTicker from './components/IssueTicker'
import Hero from './components/Hero'
// import IssueIntro from './components/IssueIntro'
// import Departments from './components/Departments'
import ArtistPick from './components/ArtistPick'
// import BenCowanFeature from './components/BenCowanFeature'
// import WorksInView from './components/WorksInView'
// import EditorsNote from './components/EditorsNote'
import ArticleSection from './components/ArticleSection'
// import ArtistArchive from './components/ArtistArchive'
// import SubmitSection from './components/SubmitSection'
import ArchivePage from './pages/ArchivePage'


// import ArtistArticlePage from './pages/ArtistArticlePage'
import StudioHoursArticlePage from './pages/StudioHoursArticlePage'
import SubmitPage from './pages/SubmitPage'
import DepartmentArticlePage from './pages/DepartmentArticlePage'
import ScrollToTop from './components/ScrollToTop'
import Footer from './components/Footer'
// import NextIssue from './components/NextIssue'
import SubscribeSection from './components/SubscribeSection'
// import BenCowanPrelude from './components/BenCowanPrelude'
import IssuePage from './pages/IssuePage'
import ArtistsPage from './pages/ArtistsPage'
import ArtistArticlePage1 from './pages/ArtistArticlePage1'


function HomePage() {
  return (
    <>
      <Navbar />
      {/* <IssueTicker /> */}
      <Hero />
      <ArtistPick />
      {/* <IssueIntro /> */}
      
      <ArticleSection />
      {/* <BenCowanPrelude /> */}
      {/* <IssueIntro /> */}
      {/* <Departments /> */}
      <SubscribeSection />
      
      {/* <BenCowanFeature /> */}
      {/* <WorksInView /> */}
      {/* <EditorsNote /> */}
      
      {/* <ArtistArchive /> */}
      {/* <SubmitSection /> */}
      {/* <NextIssue /> */}
      
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
              <Route
        path="/archive"
        element={<ArchivePage />}
      />
        <Route path="/artists" element={<ArtistsPage />}/>
        {/* <Route path="/artists/:slug" element={<ArtistArticlePage />} /> */}
        <Route path="/test-artists/:slug" element={<ArtistArticlePage1 />}/>
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