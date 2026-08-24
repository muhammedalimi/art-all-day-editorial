// import { Link, useParams } from 'react-router-dom'
// import { departments } from '../data/departments'
// import ReadingProgress from '../components/ReadingProgress'
// import Footer from '../components/Footer'
// function DepartmentArticlePage() {
//   const { slug } = useParams()

//   const department = departments.find((item) => item.slug === slug)

//   if (!department) {
//     return (
//       <main className="departmentArticlePage">
//         <h1>Department not found</h1>
//         <Link to="/">Back home</Link>
//       </main>
//     )
//   }

//   return (
//     <main className="departmentArticlePage">
//       <ReadingProgress />

//       <section className="departmentArticleHero">
//         <Link to="/" className="backLink dark">
//           ← Back to Home
//         </Link>

//         <p className="sectionLabel">{department.name}</p>

//         <h1>{department.title}</h1>

//         <div className="articleInfo darkInfo">
//           <span>{department.date}</span>
//           <span>{department.author}</span>
//         </div>
//       </section>

//       <section className="departmentArticleBody">
//         <p className="articleIntro">{department.subtitle}</p>

//         {department.paragraphs.map((paragraph) => (
//           <p key={paragraph}>{paragraph}</p>
//         ))}
//       </section>

//       <section className="moreDepartments">
//         <p className="sectionLabel">More Departments</p>

//         <div className="moreDepartmentGrid">
//           {departments
//             .filter((item) => item.slug !== department.slug)
//             .slice(0, 3)
//             .map((item) => (
//               <Link
//                 key={item.slug}
//                 to={`/departments/${item.slug}`}
//                 className="archiveCard"
//               >
//                 <p>{item.number}</p>
//                 <h3>{item.name}</h3>
//                 <span>{item.subtitle}</span>
//               </Link>
//             ))}
//         </div>
//       </section>
//         <Footer />
//     </main>
//   )
// }

// export default DepartmentArticlePage


/* Version 2 with Listen Button  */

// import { Link, useParams } from 'react-router-dom'
// import { departments } from '../data/departments'
// import ReadingProgress from '../components/ReadingProgress'
// import Footer from '../components/Footer'
// import ListenButton from '../components/ListenButton'

// function DepartmentArticlePage() {
//   const { slug } = useParams()

//   const department = departments.find((item) => item.slug === slug)

//   if (!department) {
//     return (
//       <main className="departmentArticlePage">
//         <h1>Department not found</h1>
//         <Link to="/">Back home</Link>
//       </main>
//     )
//   }

//     const departmentText = [
//       department.title,
//       department.subtitle,
//       ...department.paragraphs,
//     ].join('. ')

//   return (
//     <main className="departmentArticlePage">
//       <ReadingProgress />

//       <section className="departmentArticleHero">
//         <Link to="/" className="backLink dark">
//           ← Back to Home
//         </Link>

//         <p className="sectionLabel">{department.name}</p>

//         <h1>{department.title}</h1>

//         {/* <div className="articleInfo darkInfo">
//           <span>{department.date}</span>
//           <span>{department.author}</span>
//         </div> */}
//         <div className="articleInfo darkInfo">
//         <span>{department.date || 'Issue 01'}</span>
//         <span>{department.author || 'Art All Day'}</span>
//       </div>
//       </section>

//       <section className="departmentArticleBody">
//         <ListenButton text={departmentText} />

//         <p className="articleIntro">{department.subtitle}</p>

//         {department.paragraphs.map((paragraph) => (
//           <p key={paragraph}>{paragraph}</p>
//         ))}
//       </section>

//       <section className="moreDepartments">
//         <p className="sectionLabel">More Departments</p>

//         <div className="moreDepartmentGrid">
//           {departments
//             .filter((item) => item.slug !== department.slug)
//             .slice(0, 7)
//             .map((item) => (
//               <Link
//                 key={item.slug}
//                 to={`/departments/${item.slug}`}
//                 className="archiveCard"
//               >
//                 <p>{item.number}</p>
//                 <h3>{item.name}</h3>
//                 <span>{item.subtitle}</span>
//               </Link>
//             ))}
//         </div>
//       </section>

//       <Footer />
//     </main>
//   )
// }

// export default DepartmentArticlePage



// import { Link, useParams } from 'react-router-dom'
// import { departments } from '../data/departments'
// import ReadingProgress from '../components/ReadingProgress'
// import Footer from '../components/Footer'
// import ListenButton from '../components/ListenButton'


// function DepartmentArticlePage() {
//   const { slug } = useParams()

//   const department = departments.find(
//   (item) => item.slug === slug
// )

//   if (!department) {
//     return (
//       <main className="departmentArticlePage">
//         <h1>Article not found</h1>
//         <Link to="/">Back home</Link>
//       </main>
//     )
//   }

//   const articleText = [
//     department.title,
//     department.subtitle,
//     ...department.paragraphs,
//   ].join('. ')

//   return (
//     <main className="departmentArticlePage">
//       <ReadingProgress />

//       <section className="departmentArticleHero">
//         <Link to="/" className="backLink dark">
//           ← Back to Home
//         </Link>

//         <p className="sectionLabel">
//           {department.name}
//         </p>

//         <h1>{department.title}</h1>

//         <div className="articleInfo darkInfo">
//           <span>{department.date  || 'Issue 01'}</span>
//           <span>{department.author || 'Art All Day'}</span>
//           {/* <span>{department.readTime}</span> */}
//         </div>
//       </section>

//       <section className="departmentArticleBody">
//         <ListenButton text={articleText} />

//         <p className="articleIntro">{department.subtitle}</p>
        


//         {department.paragraphs.map((paragraph, index) => (
//           <p key={index}>
//             {paragraph}
//           </p>
//         ))}
//       </section>
//       <section className="moreDepartments">
//         <p className="sectionLabel">
//           More Departments
//         </p>

//         <div className="moreDepartmentGrid">
//           {departments
//             .filter((item) => item.slug !== department.slug)
//             .slice(0, 7)
//             .map((item) => (
//               <Link
//                 key={item.slug}
//                 to={`/departments/${item.slug}`}
//                 className="archiveCard"
//               >
//                 <p>{item.number}</p>

//                 <h3>{item.name}</h3>

//                 <span>{item.subtitle}</span>
//               </Link>
//             ))}
//         </div>
//       </section>

//       <Footer />
//     </main>
//   )
// }

// export default DepartmentArticlePage

// import { Link, useParams } from 'react-router-dom'
// import { departments } from '../data/departments'
// import { issueDepartments } from '../data/issueDepartments'
// import ReadingProgress from '../components/ReadingProgress'
// import Footer from '../components/Footer'
// import ListenButton from '../components/ListenButton'

// function DepartmentArticlePage() {
//   const { slug } = useParams()

//   const department = departments.find(
//     (item) => item.slug === slug
//   )

//   if (!department) {
//     return (
//       <main className="departmentArticlePage">
//         <h1>Department not found</h1>
//         <Link to="/">Back home</Link>
//       </main>
//     )
//   }

//   const currentIssue =
//     issueDepartments['issue-01']

//   const feature =
//     currentIssue[
//       department.slug as keyof typeof currentIssue
//     ]

//   const title = feature?.title || department.title

//   const subtitle =
//     feature?.description?.[0] || department.subtitle

//   const paragraphs =
//     feature?.description || department.paragraphs

//   const articleText = [
//     title,
//     subtitle,
//     ...paragraphs,
//   ].join('. ')

//   return (
//     <main className="departmentArticlePage">
//       <ReadingProgress />

//       <section className="departmentArticleHero">
//         <Link to="/" className="backLink dark">
//           ← Back to Home
//         </Link>

//         <p className="sectionLabel">
//           {department.name}
//         </p>

//         <h1>{title}</h1>

//         <div className="articleInfo darkInfo">
//           <span>
//             {department.date || 'Issue 01'}
//           </span>

//           <span>
//             {department.author || 'Art All Day'}
//           </span>
//         </div>
//       </section>

//       <section className="departmentArticleBody">
//         <ListenButton text={articleText} />

//         <p className="articleIntro">
//           {subtitle}
//         </p>

//         {paragraphs.map((paragraph, index) => (
//           <p key={index}>
//             {paragraph}
//           </p>
//         ))}
//       </section>

//       <section className="moreDepartments">
//         <p className="sectionLabel">
//           More Departments
//         </p>

//         <div className="moreDepartmentGrid">
//           {departments
//             .filter(
//               (item) => item.slug !== department.slug
//             )
//             .slice(0, 7)
//             .map((item) => (
//               <Link
//                 key={item.slug}
//                 to={`/departments/${item.slug}`}
//                 className="archiveCard"
//               >
//                 <p>{item.number}</p>

//                 <h3>{item.name}</h3>

//                 <span>{item.subtitle}</span>
//               </Link>
//             ))}
//         </div>
//       </section>

//       <Footer />
//     </main>
//   )
// }

// export default DepartmentArticlePage

/* Version 5 with Listen Button and Department Feature Data */

// import { Link, useParams } from 'react-router-dom'
// import { departments } from '../data/departments'
// import { issueDepartments } from '../data/issueDepartments'
// import ReadingProgress from '../components/ReadingProgress'
// import Footer from '../components/Footer'
// import ListenButton from '../components/ListenButton'

// function DepartmentArticlePage() {
//   const { slug } = useParams()

//   const department = departments.find(
//     (item) => item.slug === slug
//   )

//   if (!department) {
//     return (
//       <main className="departmentArticlePage">
//         <h1>Department not found</h1>

//         <Link to="/">
//           Back home
//         </Link>
//       </main>
//     )
//   }

//   const currentIssue =
//     issueDepartments['issue-01']

//   const feature =
//     currentIssue[
//       department.slug as keyof typeof currentIssue
//     ]

//   const title =
//     feature?.title || department.title

//   const subtitle =
//     // feature?.description?.[0] ||
//     department.subtitle

//   const paragraphs =
//     feature?.description ||
//     department.paragraphs

//   const articleText = [
//     title,
//     subtitle,
//     ...paragraphs,
//   ].join('. ')

//   return (
//     <main className="departmentArticlePage">
//       <ReadingProgress />

//       {/* HERO IMAGE */}
//       {feature?.image && (
//         <section className="departmentHeroImage">
//           <img
//             src={feature.image}
//             alt={feature.imageAlt || department.name}
//           />

//           {feature.caption && (
//             <span>
//               {feature.caption}
//             </span>
//           )}
//         </section>
//       )}

//       {/* ARTICLE HEADER */}
//       <section className="departmentArticleHero">
//         <Link
//           to="/"
//           className="backLink dark"
//         >
//           ← Back to Home
//         </Link>

//         <p className="sectionLabel">
//           {department.name}
//         </p>

//         <h1>
//           {title}
//         </h1>

//         <div className="articleInfo darkInfo">
//           <span>
//             {department.date || 'Issue 01'}
//           </span>

//           <span>
//             {department.author || 'Art All Day'}
//           </span>
//         </div>
//       </section>

//       {/* ARTICLE */}
//       <section className="departmentArticleBody">
//         <ListenButton text={articleText} />

//         <p className="articleIntro">
//           {subtitle}
//         </p>

//         {paragraphs.map(
//           (paragraph, index) => (
//             <p key={index}>
//               {paragraph}
//             </p>
//           )
//         )}

//         {feature?.link && (
//           <Link
//             to={feature.link}
//             className="departmentFeatureButton"
//           >
//             View Artist →
//           </Link>
//         )}
//       </section>

//       {/* MORE DEPARTMENTS */}
//       <section className="moreDepartments">
//         <p className="sectionLabel">
//           More Departments
//         </p>

//         <div className="moreDepartmentGrid">
//           {departments
//             .filter(
//               (item) =>
//                 item.slug !== department.slug
//             )
//             .slice(0, 7)
//             .map((item) => (
//               <Link
//                 key={item.slug}
//                 to={`/departments/${item.slug}`}
//                 className="archiveCard"
//               >
//                 <p>
//                   {item.number}
//                 </p>

//                 <h3>
//                   {item.name}
//                 </h3>

//                 <span>
//                   {item.subtitle}
//                 </span>
//               </Link>
//             ))}
//         </div>
//       </section>

//       <Footer />
//     </main>
//   )
// }

// export default DepartmentArticlePage

/* Version 6 with Listen Button, Department Feature Data, and Hero Image from Department Data */


// import { Link, useParams } from 'react-router-dom'
// import { departments } from '../data/departments'
// import { issueDepartments } from '../data/issueDepartments'
// import ReadingProgress from '../components/ReadingProgress'
// import Footer from '../components/Footer'
// import ListenButton from '../components/ListenButton'

// function DepartmentArticlePage() {
//   const { slug } = useParams()

//   const department = departments.find(
//     (item) => item.slug === slug
//   )

//   if (!department) {
//     return (
//       <main className="departmentArticlePage">
//         <h1>Department not found</h1>

//         <Link to="/">
//           Back home
//         </Link>
//       </main>
//     )
//   }

//   const issue = issueDepartments['issue-01']

//   const feature =
//     issue[
//       department.slug as keyof typeof issue
//     ]

//   const title =
//     feature?.title || department.title

//   const artist =
//     feature?.artist || department.name

//   const paragraphs =
//     feature?.description || department.paragraphs

//   const articleText = [
//     title,
//     artist,
//     ...paragraphs,
//   ].join('. ')

//   return (
//     <main className="departmentArticlePage">
//       <ReadingProgress />

//       {/* MAIN IMAGE */}
//       {feature?.heroImage && (
//         <figure className="departmentHeroImage">
//           <img
//             src={feature.heroImage}
//             alt={department.imageAlt ||
//               feature.imageAlt ||
//               department.name
//             }
//           />

//           {feature.caption && (
//             <figcaption>
//               {feature.caption}
//             </figcaption>
//           )}
//         </figure>
//       )}

//       {/* HEADER */}
//       <section className="departmentArticleHero">
//         <Link
//           to="/"
//           className="backLink dark"
//         >
//           ← Back to Home
//         </Link>

//         <p className="sectionLabel">
//           {department.name}
//         </p>

//         <h1>
//           {artist}
//         </h1>

//         <p className="departmentArticleTitle">
//           {title}
//         </p>

//         <div className="articleInfo darkInfo">
//           <span>
//             {department.date || 'Issue 01'}
//           </span>

//           <span>
//             {department.author || 'Art All Day'}
//           </span>
//         </div>
//       </section>

//       {/* ARTICLE */}
//       <section className="departmentArticleBody">
//         <ListenButton text={articleText} />

//         <p className="articleIntro">
//           {department.subtitle}
//         </p>

//         {paragraphs.map(
//           (paragraph, index) => (
//             <p key={index}>
//               {paragraph}
//             </p>
//           )
//         )}

//         {feature?.link && (
//           <Link
//             to={feature.link}
//             className="departmentFeatureButton"
//           >
//             View Artist →
//           </Link>
//         )}
//       </section>

//       {/* MORE DEPARTMENTS */}
//       <section className="moreDepartments">
//         <p className="sectionLabel">
//           More Departments
//         </p>

//         <div className="moreDepartmentGrid">
//           {departments
//             .filter(
//               (item) =>
//                 item.slug !== department.slug
//             )
//             .slice(0, 7)
//             .map((item) => {
//               const itemFeature =
//                 issue[
//                   item.slug as keyof typeof issue
//                 ]

//               return (
//                 <Link
//                   key={item.slug}
//                   to={`/departments/${item.slug}`}
//                   className="archiveCard"
//                 >
//                   <p>{item.number}</p>

//                   <h3>{item.name}</h3>

//                   <span>
//                     {itemFeature?.artist ||
//                       item.subtitle}
//                   </span>
//                 </Link>
//               )
//             })}
//         </div>
//       </section>

//       <Footer />
//     </main>
//   )
// }

// export default DepartmentArticlePage

/* Version 7 with Listen Button, Department Feature Data, and Hero Image from Department Data */

// import { Link, useParams } from 'react-router-dom'
// import { departments } from '../data/departments'
// import { issueDepartments } from '../data/issueDepartments'
// import ReadingProgress from '../components/ReadingProgress'
// import Footer from '../components/Footer'
// import ListenButton from '../components/ListenButton'

// function DepartmentArticlePage() {
//   const { slug } = useParams()

//   const department = departments.find(
//     (item) => item.slug === slug
//   )

//   if (!department) {
//     return (
//       <main className="departmentArticlePage">
//         <h1>Department not found</h1>

//         <Link to="/">
//           Back home
//         </Link>
//       </main>
//     )
//   }

//   const issue = issueDepartments['issue-01']

//   const feature =
//     issue[
//       department.slug as keyof typeof issue
//     ]

//   const title =
//     feature?.title || department.title

//   const artist =
//     feature?.artist || department.name

//   const paragraphs =
//     feature?.description || department.paragraphs

//   const articleText = [
//     title,
//     artist,
//     ...paragraphs,
//   ].join('. ')

//   return (
//     <main className="departmentArticlePage">
//       <ReadingProgress />

//       {/* HERO IMAGE */}
//       {feature?.image && (
//         <figure className="departmentHeroImage">
//           <img
//             src={feature.image}
//             alt={
//               feature.imageAlt ||
//               department.imageAlt ||
//               department.name
//             }
//           />

//           {feature.caption && (
//             <figcaption>
//               {feature.caption}
//             </figcaption>
//           )}
//         </figure>
//       )}

//       {/* HEADER */}
//       <section className="departmentArticleHero">
//         <Link
//           to="/"
//           className="backLink dark"
//         >
//           ← Back to Home
//         </Link>

//         <p className="sectionLabel">
//           {department.name}
//         </p>

//         <h1>
//           {artist}
//         </h1>

//         <p className="departmentArticleTitle">
//           {title}
//         </p>

//         <div className="articleInfo darkInfo">
//           <span>
//             {department.date || 'Issue 01'}
//           </span>

//           <span>
//             {department.author || 'Art All Day'}
//           </span>
//         </div>
//       </section>

//       {/* ARTICLE */}
//       <section className="departmentArticleBody">
//         <ListenButton text={articleText} />

//         <p className="articleIntro">
//           {department.subtitle}
//         </p>

//         {paragraphs.map((paragraph, index) => (
//           <p key={index}>
//             {paragraph}
//           </p>
//         ))}

//         {feature?.link && (
//           <Link
//             to={feature.link}
//             className="departmentFeatureButton"
//           >
//             View Artist →
//           </Link>
//         )}
//       </section>

//       {/* MORE DEPARTMENTS */}
//       <section className="moreDepartments">
//         <p className="sectionLabel">
//           More Departments
//         </p>

//         <div className="moreDepartmentGrid">
//           {departments
//             .filter(
//               (item) =>
//                 item.slug !== department.slug
//             )
//             .slice(0, 7)
//             .map((item) => {
//               const itemFeature =
//                 issue[
//                   item.slug as keyof typeof issue
//                 ]

//               return (
//                 <Link
//                   key={item.slug}
//                   to={`/departments/${item.slug}`}
//                   className="archiveCard"
//                 >
//                   <p>{item.number}</p>

//                   <h3>{item.name}</h3>

//                   <span>
//                     {itemFeature?.artist ||
//                       item.subtitle}
//                   </span>
//                 </Link>
//               )
//             })}
//         </div>
//       </section>

//       <Footer />
//     </main>
//   )
// }

// export default DepartmentArticlePage


// import { Link, useParams } from 'react-router-dom'

// import { departments } from '../data/departments'
// import { issueDepartments } from '../data/issueDepartments'
// import {issues, currentIssue } from '../data/issues'

// import ReadingProgress from '../components/ReadingProgress'
// import Footer from '../components/Footer'
// import ListenButton from '../components/ListenButton'

// function DepartmentArticlePage() {
//   const { issueSlug, slug } = useParams()

//   const department = departments.find(
//     (item) => item.slug === slug
//   )

//   if (!department || !currentIssue) {
//     return (
//       <main className="departmentArticlePage">
//         <h1>Department not found</h1>

//         <Link to="/">
//           Back home
//         </Link>
//       </main>
//     )
//   }

//   // const issue = issueDepartments[currentIssue.slug]
//   const resolvedIssueSlug =
//   issueSlug || currentIssue.slug

// const issue = issueDepartments[resolvedIssueSlug]

//   if (!issue) {
//     return (
//       <main className="departmentArticlePage">
//         <h1>Issue not found</h1>

//         <Link to="/">
//           Back home
//         </Link>
//       </main>
//     )
//   }

//   const feature =
//     issue.departments[
//       department.slug as keyof typeof issue.departments
//     ]

//   const title =
//     feature?.title || department.name

//   const artist =
//     feature?.artist || department.name

//   const paragraphs =
//     feature?.description || department.paragraphs

//   const articleText = [
//     department.name,
//     artist,
//     title,
//     ...paragraphs,
//   ].join('. ')

//   return (
//     <main className="departmentArticlePage">
//       <ReadingProgress />

//       {/* HERO IMAGE */}
//       {feature?.image && (
//         <figure className="departmentHeroImage">
//           <img
//             src={feature.image}
//             alt={
//               feature.imageAlt ||
//               feature.artist ||
//               department.name
//             }
//           />

//           {feature.caption && (
//             <figcaption>
//               {feature.caption}
//             </figcaption>
//           )}
//         </figure>
//       )}

//       {/* HEADER */}
//       <section className="departmentArticleHero">
//         <Link
//           to="/"
//           className="backLink dark"
//         >
//           ← Back to Home
//         </Link>

//         <p className="sectionLabel">
//           {department.name}
//         </p>

//         <h1>
//           {artist}
//         </h1>

//         <p className="departmentArticleTitle">
//           {title}
//         </p>

//         <div className="articleInfo darkInfo">
//           <span>
//             {currentIssue.number}
//           </span>

//           <span>
//             Art All Day
//           </span>
//         </div>
//       </section>

//       {/* ARTICLE */}
//       <section className="departmentArticleBody">
//         <ListenButton text={articleText} />

//         <p className="articleIntro">
//           {department.subtitle}
//         </p>

//         {paragraphs.map((paragraph, index) => (
//           <p key={index}>
//             {paragraph}
//           </p>
//         ))}

//         {feature?.link && (
//           <Link
//             to={feature.link}
//             className="departmentFeatureButton"
//           >
//             View Artist →
//           </Link>
//         )}
//       </section>

//       {/* MORE DEPARTMENTS */}
//       <section className="moreDepartments">
//         <p className="sectionLabel">
//           More Departments
//         </p>

//         <div className="moreDepartmentGrid">
//           {departments
//             .filter(
//               (item) =>
//                 item.slug !== department.slug
//             )
//             .slice(0, 7)
//             .map((item) => {
//               const itemFeature =
//                 issue.departments[
//                   item.slug as keyof typeof issue.departments
//                 ]

//               return (
//                 <Link
//                   key={item.slug}
//                   to={`/departments/${item.slug}`}
//                   className="archiveCard"
//                 >
//                   <p>{item.number}</p>

//                   <h3>{item.name}</h3>

//                   <span>
//                     {itemFeature?.artist ||
//                       item.subtitle}
//                   </span>
//                 </Link>
//               )
//             })}
//         </div>
//       </section>

//       <Footer />
//     </main>
//   )
// }

// export default DepartmentArticlePage


import { Link, useParams } from 'react-router-dom'

import { departments } from '../data/departments'
import { issueDepartments } from '../data/issueDepartments'
import { issues, currentIssue } from '../data/issues'

import ReadingProgress from '../components/ReadingProgress'
import Footer from '../components/Footer'
import ListenButton from '../components/ListenButton'

function DepartmentArticlePage() {
  const { issueSlug, slug } = useParams()

  const department = departments.find(
    (item) => item.slug === slug
  )

  if (!department || !currentIssue) {
    return (
      <main className="departmentArticlePage">
        <h1>Department not found</h1>

        <Link to="/">
          Back home
        </Link>
      </main>
    )
  }

  const resolvedIssueSlug =
    issueSlug || currentIssue.slug

  const issue =
    issueDepartments[resolvedIssueSlug]

  const resolvedIssue = issues.find(
    (item) => item.slug === resolvedIssueSlug
  )
 ///Testing 
  // console.log('issueSlug:', issueSlug)
  // console.log('resolvedIssueSlug:', resolvedIssueSlug)
  // console.log('issue:', issue)
  // console.log('resolvedIssue:', resolvedIssue)
  // console.log('issueDepartment keys:', Object.keys(issueDepartments))

  if (!issue || !resolvedIssue) {
    return (
      <main className="departmentArticlePage">
        <h1>Issue not found</h1>

        <Link to="/">
          Back home
        </Link>
      </main>
    )
  }

  const feature =
    issue.departments[
      department.slug as keyof typeof issue.departments
    ]

  const title =
    feature?.title || department.name

  const artist =
    feature?.artist || department.name

  const paragraphs =
    feature?.description || department.paragraphs

  const articleText = [
    department.name,
    artist,
    title,
    ...paragraphs,
  ].join('. ')

  return (
    <main className="departmentArticlePage">
      <ReadingProgress />

      {/* HERO IMAGE */}
      {feature?.image && (
        <figure className="departmentHeroImage">
          <img
            src={feature.image}
            alt={
              feature.imageAlt ||
              feature.artist ||
              department.name
            }
          />

          {feature.caption && (
            <figcaption>
              {feature.caption}
            </figcaption>
          )}
        </figure>
      )}

      {/* HEADER */}
      <section className="departmentArticleHero">
        <Link
          to="/"
          className="backLink dark"
        >
          ← Back to Home
        </Link>

        <p className="sectionLabel">
          {department.name}
        </p>

        <h1>
          {artist}
        </h1>

        <p className="departmentArticleTitle">
          {title}
        </p>

        <div className="articleInfo darkInfo">
          <span>
            {resolvedIssue.number}
          </span>

          <span>
            Art All Day
          </span>
        </div>
      </section>

      {/* ARTICLE */}
      <section className="departmentArticleBody">
        <ListenButton text={articleText} />

        <p className="articleIntro">
          {department.subtitle}
        </p>

        {paragraphs.map((paragraph, index) => (
          <p key={index}>
            {paragraph}
          </p>
        ))}

        {feature?.link && (
          <Link
            to={feature.link}
            className="departmentFeatureButton"
          >
            View Artist →
          </Link>
        )}
      </section>

      {/* MORE DEPARTMENTS */}
      <section className="moreDepartments">
        <p className="sectionLabel">
          More Departments
        </p>

        <div className="moreDepartmentGrid">
          {departments
            .filter(
              (item) =>
                item.slug !== department.slug
            )
            .slice(0, 7)
            .map((item) => {
              const itemFeature =
                issue.departments[
                  item.slug as keyof typeof issue.departments
                ]

              return (
                <Link
                  key={item.slug}
                  to={
                    issueSlug
                      ? `/issues/${resolvedIssueSlug}/departments/${item.slug}`
                      : `/departments/${item.slug}`
                  }
                  className="archiveCard"
                >
                  <p>{item.number}</p>

                  <h3>{item.name}</h3>

                  <span>
                    {itemFeature?.artist ||
                      item.subtitle}
                  </span>
                </Link>
              )
            })}
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default DepartmentArticlePage