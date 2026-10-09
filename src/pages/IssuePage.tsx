

// import { useEffect } from 'react'

// import {
//   Link,
//   useNavigate,
//   useParams,
// } from 'react-router-dom'

// import '../styles/IssuePage.css'

// import { issues } from '../data/issues'
// import { departments } from '../data/departments'
// import { issueDepartments } from '../data/issueDepartments'

// import Footer from '../components/Footer'

// import { trackPageView } from '../analytics'

// function IssuePage() {
//   const { issueSlug } = useParams()
//   const navigate = useNavigate()

//   const issue = issues.find(
//     (item) => item.slug === issueSlug
//   )

//   useEffect(() => {
//     if (!issue) return

//     trackPageView(
//       `${issue.number}: ${issue.title} | Art All Day`
//     )
//   }, [issue])

//   if (!issue) {
//     return (
//       <main className="issuePage">
//         <h1>Issue not found</h1>

//         <Link to="/">
//           Back home
//         </Link>
//       </main>
//     )
//   }

//   const issueData =
//     issueDepartments[issue.slug]

//   return (
//     <main className="issuePage">

//       {/* ISSUE HERO */}
//       <section className="issuePageHero">
//         <button
//           type="button"
//           className="backLink dark"
//           onClick={() => navigate(-1)}
//         >
//           ← Back
//         </button>

//         <p className="sectionLabel">
//           {issue.number}
//         </p>

//         <p className="issuePageDate">
//           {issue.date}
//         </p>

//         <h1>
//           {issue.title}
//         </h1>

//         <h2>
//           {issue.headline}
//         </h2>

//         <div className="issuePageOpening">
//           {issue.openingStatement.map(
//             (paragraph, index) => (
//               <p key={index}>
//                 {paragraph}
//               </p>
//             )
//           )}
//         </div>
//       </section>

//       {/* ISSUE DEPARTMENTS */}
//       {issueData && (
//         <section className="issuePageDepartments">

//           <div className="sectionHeader">
//             <h2>
//               Inside {issue.number}
//             </h2>
//           </div>

//           <div className="departmentGrid">

//             {departments.map((department) => {
//               const feature =
//                 issueData.departments[
//                   department.slug as keyof typeof issueData.departments
//                 ]

//               if (!feature) {
//                 return null
//               }

//               return (
//                 <Link
//                   key={department.slug}
//                   // to={`/issues/${issue.slug}/departments/${department.slug}`}
//                   to={feature.link}
//                   className="departmentCard"
//                 >

//                   {/* ARTWORK */}
//                   {feature.image && (
//                     <div className="departmentImageWrapper">
//                       <img
//                         src={feature.image}
//                         alt={
//                           feature.imageAlt ||
//                           feature.artist
//                         }
//                         className="departmentImage"
//                       />
//                     </div>
//                   )}

//                   {/* CARD CONTENT */}
//                   <div className="departmentCardContent">

//                     <p className="departmentNumber">
//                       {department.number}
//                     </p>

//                     <h3 className="departmentName">
//                       {department.name}
//                     </h3>

//                     <span className="departmentArtist">
//                       {feature.artist}
//                     </span>

//                   </div>

//                 </Link>
//               )
//             })}

//           </div>
//         </section>
//       )}

//       <Footer />

//     </main>
//   )
// }

// export default IssuePage


import { Link, useParams } from 'react-router-dom'
import { issues } from '../data/issues'
import '../styles/IssuePage.css'

function IssuePage() {
  const { issueSlug } = useParams<{ issueSlug: string }>()

  const issue = issues.find(
    (item) => item.slug === issueSlug
  )

  if (!issue) {
    return (
      <main className="magazineIssueNotFound">
        <p>Issue not found.</p>

        <Link to="/">
          Return home →
        </Link>
      </main>
    )
  }
  const currentIndex = issues.findIndex(
    (item) => item.slug === issue.slug
  )

  const previousIssue =
    currentIndex > 0
      ? issues[currentIndex - 1]
      : undefined

  const nextIssue =
    currentIndex < issues.length - 1
      ? issues[currentIndex + 1]
      : undefined

  return (
    <main className="magazineIssue">

      <Link
      to="/"
      className="magazineBackLink"
    >
      ← Back to Issues
    </Link>

      {/* =====================================
          ISSUE HERO
      ====================================== */}

      <section className="magazineHero">

        <div className="magazineHeroMeta">
          <span>{issue.number}</span>
          <span>{issue.date}</span>
        </div>

        <h1>{issue.title}</h1>

        <p className="magazineHeadline">
          {issue.headline}
        </p>

        <div className="magazineCover">
          <img
            src={issue.coverImage}
            alt={`${issue.number} — ${issue.title}`}
          />
        </div>

      </section>


      {/* =====================================
          OPENING STATEMENT
      ====================================== */}

      <section className="magazineOpening">

        <div className="magazineSectionLabel">
          <span>Editor's Note</span>
          <span>{issue.number}</span>
        </div>

        <div className="magazineOpeningGrid">

          <h2>
            {/* {issue.title} */}
          </h2>

          <div className="magazineOpeningText">

            {issue.openingStatement.map(
              (paragraph, index) => (
                <p key={index}>
                  {paragraph}
                </p>
              )
            )}

          </div>

        </div>

      </section>


      {/* =====================================
          ISSUE INTRODUCTION
      ====================================== */}

      {/* <section className="magazineIntroduction">

        <div className="magazineSectionLabel">
          <span>Inside This Issue</span>
        </div>

        <p className="magazineDescription">
          {issue.description}
        </p>

      </section>
 */}

      {/* =====================================
          FEATURED STORY
      ====================================== */}

      <section className="magazineFeature">

        <div className="magazineSectionLabel">
          <span>Featured Story</span>
        </div>

        <div className="magazineFeatureCard">

          <div>
            <span className="magazineFeatureIssue">
              {issue.number}
            </span>

            <h2>
              {issue.title}
            </h2>

            <p>
              {issue.headline}
            </p>
          </div>

          {issue.articleSlug && (
          <Link
            to={`/studio-hours/${issue.articleSlug}`}
            className="magazineReadStory"
          >
            Read Story →
          </Link>
        )}

        </div>

      </section>


      {/* =====================================
          STUDIO NOTE
      ====================================== */}

      {issue.studioNoteTeaser && (

        <section className="magazineStudioNote">

          <div className="magazineSectionLabel">
            <span>
              {issue.studioNoteTeaser.label}
            </span>
          </div>

          <div className="magazineStudioNoteGrid">

            <div className="magazineStudioNoteImage">
              <img
                src={issue.studioNoteTeaser.image}
                alt={
                  issue.studioNoteTeaser.imageAlt
                }
              />
            </div>

            <div className="magazineStudioNoteCopy">

              <span>
                {
                  issue.studioNoteTeaser
                    .status
                }
              </span>

              <h2>
                {
                  issue.studioNoteTeaser
                    .title
                }
              </h2>

              <p className="magazineArtist">
                {
                  issue.studioNoteTeaser
                    .artist
                }
              </p>

              <p>
                {
                  issue.studioNoteTeaser
                    .description
                }
              </p>

              <blockquote>
                “
                {
                  issue.studioNoteTeaser
                    .quote
                }
                ”
              </blockquote>

            </div>

          </div>

        </section>

      )}


      {/* =====================================
          ISSUE NAVIGATION
      ====================================== */}

      <nav className="magazineIssueNavigation">

        <div>
          {previousIssue && (
            <Link
              to={`/issues/${previousIssue.slug}`}
            >
              <span>Previous Issue</span>

              <strong>
                ← {previousIssue.title}
              </strong>
            </Link>
          )}
        </div>

        <div className="magazineIssueNavigationNext">
          {nextIssue && (
            <Link
              to={`/issues/${nextIssue.slug}`}
            >
              <span>Next Issue</span>

              <strong>
                {nextIssue.title} →
              </strong>
            </Link>
          )}
        </div>

      </nav>

    </main>
  )
}

export default IssuePage