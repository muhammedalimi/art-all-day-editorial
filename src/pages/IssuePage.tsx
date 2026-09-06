// import { Link, useParams } from 'react-router-dom'
// import '../styles/IssuePage.css'

// import { issues } from '../data/issues'
// import { departments } from '../data/departments'
// import { issueDepartments } from '../data/issueDepartments'

// import Footer from '../components/Footer'

// function IssuePage() {
//   const { issueSlug } = useParams()

//   const issue = issues.find(
//     (item) => item.slug === issueSlug
//   )

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
//         <Link
//           to="/"
//           className="backLink dark"
//         >
//           ← Back to Home
//         </Link>

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
//             <p className="sectionLabel">
//               Inside {issue.number}
//             </p>

//             <h2>
//               The Issue
//             </h2>
//           </div>

//           <div className="departmentGrid">
//             {departments.map((department) => {
//               const feature =
//                 issueData.departments[
//                   department.slug as keyof typeof issueData.departments
//                 ]

//               // Don't show unfinished Issue 02 departments yet
//               if (!feature) {
//                 return null
//               }

//               return (
//                 <Link
//                   key={department.slug}
//                   to={`/issues/${issue.slug}/departments/${department.slug}`}
//                   className="departmentCard"
//                 >
//                   {feature.image && (
//                     <img
//                       src={feature.image}
//                       alt={
//                         feature.imageAlt ||
//                         feature.artist
//                       }
//                       className="departmentImage"
//                     />
//                   )}

//                   <p>
//                     {department.number}
//                   </p>

//                   <h3>
//                     {department.name}
//                   </h3>

//                   <span>
//                     {feature.artist}
//                   </span>
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

// function IssuePage() {
//   const { issueSlug } = useParams()
//   const navigate = useNavigate()

//   const issue = issues.find(
//     (item) => item.slug === issueSlug
//   )

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
//             {/* <p className="sectionLabel">
//               Inside {issue.number}
//             </p> */}

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
//                   to={`/issues/${issue.slug}/departments/${department.slug}`}
//                   className="departmentCard"
//                 >
//                   {feature.image && (
//                     <img
//                       src={feature.image}
//                       alt={
//                         feature.imageAlt ||
//                         feature.artist
//                       }
//                       className="departmentImage"
//                     />
//                   )}

//                   <p>
//                     {department.number}
//                   </p>

//                   <h3>
//                     {department.name}
//                   </h3>

//                   <span>
//                     {feature.artist}
//                   </span>
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

// function IssuePage() {
//   const { issueSlug } = useParams()
//   const navigate = useNavigate()

//   const issue = issues.find(
//     (item) => item.slug === issueSlug
//   )

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
//                   to={`/issues/${issue.slug}/departments/${department.slug}`}
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

import { useEffect } from 'react'

import {
  Link,
  useNavigate,
  useParams,
} from 'react-router-dom'

import '../styles/IssuePage.css'

import { issues } from '../data/issues'
import { departments } from '../data/departments'
import { issueDepartments } from '../data/issueDepartments'

import Footer from '../components/Footer'

import { trackPageView } from '../analytics'

function IssuePage() {
  const { issueSlug } = useParams()
  const navigate = useNavigate()

  const issue = issues.find(
    (item) => item.slug === issueSlug
  )

  useEffect(() => {
    if (!issue) return

    trackPageView(
      `${issue.number}: ${issue.title} | Art All Day`
    )
  }, [issue])

  if (!issue) {
    return (
      <main className="issuePage">
        <h1>Issue not found</h1>

        <Link to="/">
          Back home
        </Link>
      </main>
    )
  }

  const issueData =
    issueDepartments[issue.slug]

  return (
    <main className="issuePage">

      {/* ISSUE HERO */}
      <section className="issuePageHero">
        <button
          type="button"
          className="backLink dark"
          onClick={() => navigate(-1)}
        >
          ← Back
        </button>

        <p className="sectionLabel">
          {issue.number}
        </p>

        <p className="issuePageDate">
          {issue.date}
        </p>

        <h1>
          {issue.title}
        </h1>

        <h2>
          {issue.headline}
        </h2>

        <div className="issuePageOpening">
          {issue.openingStatement.map(
            (paragraph, index) => (
              <p key={index}>
                {paragraph}
              </p>
            )
          )}
        </div>
      </section>

      {/* ISSUE DEPARTMENTS */}
      {issueData && (
        <section className="issuePageDepartments">

          <div className="sectionHeader">
            <h2>
              Inside {issue.number}
            </h2>
          </div>

          <div className="departmentGrid">

            {departments.map((department) => {
              const feature =
                issueData.departments[
                  department.slug as keyof typeof issueData.departments
                ]

              if (!feature) {
                return null
              }

              return (
                <Link
                  key={department.slug}
                  to={`/issues/${issue.slug}/departments/${department.slug}`}
                  className="departmentCard"
                >

                  {/* ARTWORK */}
                  {feature.image && (
                    <div className="departmentImageWrapper">
                      <img
                        src={feature.image}
                        alt={
                          feature.imageAlt ||
                          feature.artist
                        }
                        className="departmentImage"
                      />
                    </div>
                  )}

                  {/* CARD CONTENT */}
                  <div className="departmentCardContent">

                    <p className="departmentNumber">
                      {department.number}
                    </p>

                    <h3 className="departmentName">
                      {department.name}
                    </h3>

                    <span className="departmentArtist">
                      {feature.artist}
                    </span>

                  </div>

                </Link>
              )
            })}

          </div>
        </section>
      )}

      <Footer />

    </main>
  )
}

export default IssuePage