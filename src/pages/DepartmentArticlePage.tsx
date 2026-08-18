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



import { Link, useParams } from 'react-router-dom'
import { departments } from '../data/departments'
import ReadingProgress from '../components/ReadingProgress'
import Footer from '../components/Footer'
import ListenButton from '../components/ListenButton'

function DepartmentArticlePage() {
  const { slug } = useParams()

  const department = departments.find(
  (item) => item.slug === slug
)

  if (!department) {
    return (
      <main className="departmentArticlePage">
        <h1>Article not found</h1>
        <Link to="/">Back home</Link>
      </main>
    )
  }

  const articleText = [
    department.title,
    department.subtitle,
    ...department.paragraphs,
  ].join('. ')

  return (
    <main className="departmentArticlePage">
      <ReadingProgress />

      <section className="departmentArticleHero">
        <Link to="/" className="backLink dark">
          ← Back to Home
        </Link>

        <p className="sectionLabel">
          {department.name}
        </p>

        <h1>{department.title}</h1>

        <div className="articleInfo darkInfo">
          <span>{department.date  || 'Issue 01'}</span>
          <span>{department.author || 'Art All Day'}</span>
          {/* <span>{department.readTime}</span> */}
        </div>
      </section>

      <section className="departmentArticleBody">
        <ListenButton text={articleText} />

        <p className="articleIntro">{department.subtitle}</p>
        


        {department.paragraphs.map((paragraph, index) => (
          <p key={index}>
            {paragraph}
          </p>
        ))}
      </section>
      <section className="moreDepartments">
        <p className="sectionLabel">
          More Departments
        </p>

        <div className="moreDepartmentGrid">
          {departments
            .filter((item) => item.slug !== department.slug)
            .slice(0, 7)
            .map((item) => (
              <Link
                key={item.slug}
                to={`/departments/${item.slug}`}
                className="archiveCard"
              >
                <p>{item.number}</p>

                <h3>{item.name}</h3>

                <span>{item.subtitle}</span>
              </Link>
            ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default DepartmentArticlePage