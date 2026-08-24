// function StudioHoursArticlePage() {
//   return (
//     <main>
//       <h1>Faith & Form</h1>
//       <p>Ben Cowan</p>

//       <p>
//         A reflection on belief, painting, religious imagery, personal history,
//         leaves, frames, and how faith becomes visual form.
//       </p>
//     </main>
//   )
// }

// export default StudioHoursArticlePage



/* Version 2 */

// import './StudioHoursArticlePage.css'

// function StudioHoursArticlePage() {
//   return (
//     <main className="studioArticle">
//       <header className="studioArticleHeader">
//         <p className="studioArticleCategory">Criticism</p>

//         <h1>Faith &amp; Form</h1>

//         <p className="studioArticleIntro">
//           Ben Cowan’s work explores belief, painting, religious imagery,
//           personal history, leaves, frames, and how faith becomes visual form.
//         </p>

//         <div className="studioArticleMeta">
//           <span>Mo Alimi</span>
//           <span>5 min read</span>
//           <span>Studio Hours — Issue 01</span>
//         </div>
//       </header>

//       <div className="studioArticleHero">
//         <img
//           src="/images/ben-cowan-hero.jpg"
//           alt="Ben Cowan artwork"
//         />
//       </div>

//       <article className="studioArticleBody">
//         <p>
//           Faith &amp; Form is an exploration of how belief can move through
//           material. In Ben Cowan’s paintings, religious imagery, memory, and
//           natural forms come together in a visual language that feels both
//           personal and familiar.
//         </p>

//         <p>
//           Leaves, frames, painted surfaces, and sacred references become more
//           than individual objects. They create a space where memory and
//           spirituality can exist together.
//         </p>

//         <h2>Faith as material</h2>

//         <p>
//           Cowan’s work asks us to slow down and look closely. The paintings
//           carry a sense of history while remaining grounded in the physical
//           qualities of paint, surface, and composition.
//         </p>
//       </article>
//     </main>
//   )
// }

// export default StudioHoursArticlePage

/* Version 3 */


// import { articles } from '../data/articles'

// function StudioHoursArticlePage() {
//   const article = articles['faith-and-form']

//   return (
//     <main className="studioArticle">
//       <header className="studioArticleHeader">
//         <p className="studioArticleCategory">{article.category}</p>

//         <h1>{article.title}</h1>

//         <p className="studioArticleIntro">
//           {article.intro}
//         </p>

//         <div className="studioArticleMeta">
//           <span>{article.author}</span>
//           <span>{article.readTime}</span>
//           <span>{article.issue}</span>
//         </div>
//       </header>

//       <div className="studioArticleHero">
//         <img
//           src={article.heroImage}
//           alt={article.title}
//         />
//       </div>

//       <article className="studioArticleBody">
//         {article.body.map((paragraph, index) => (
//           <p key={index}>{paragraph}</p>
//         ))}
//       </article>
//     </main>
//   )
// }

// export default StudioHoursArticlePage

/* Version 4 */


// import { Link, useParams } from 'react-router-dom'

// import { articles } from '../data/articles'
// import './StudioHoursArticlePage.css'

// // function StudioHoursArticlePage() {
// //   const article = articles['faith-and-form']

// function StudioHoursArticlePage() {
//   const { slug } = useParams()

//   const article = articles[slug as keyof typeof articles]

//   if (!article) {
//     return (
//       <main className="studioArticle">
//         <h1>Article not found</h1>

//         <Link to="/" className="backHome">
//           ← Back to Home
//         </Link>
//       </main>
//     )
//   }

//   return (
//     <main className="studioArticle">

//       <nav className="studioArticleNav">
//         <Link to="/" className="backHome">
//           ← Back to Home
//         </Link>

//         <span>Art All Day / Studio Hours</span>
//       </nav>

//       <header className="studioArticleHeader">
//         <p className="studioArticleCategory">{article.category}</p>

//         <h1>{article.title}</h1>

//         <p className="studioArticleIntro">
//           {article.intro}
//         </p>

//         <div className="studioArticleMeta">
//           <span>{article.author}</span>
//           <span>{article.readTime}</span>
//           <span>{article.issue}</span>
//         </div>
//       </header>

//       <div className="studioArticleHero">
//         <img
//           src={article.heroImage}
//           alt={article.title}
//         />
//       </div>

//       <section className="articleListen">
//         <span>Studio Hours</span>

//         <button type="button">
//           ▶ Listen to Article
//         </button>
//       </section>

//       <article className="studioArticleBody">
//         <p className="articleOpening">
//           {article.body[0]}
//         </p>

//         <div className="continueReading">
//           <span>Continue Reading</span>
//           <span>↓</span>
//         </div>

//         {article.body.slice(1).map((paragraph, index) => (
//           <p key={index}>{paragraph}</p>
//         ))}
//       </article>

//       <section className="articleEnd">
//         <p>Artist Pick</p>
//         <h2>{article.title}</h2>

     
//       </section>

//     </main>
//   )
// }

// export default StudioHoursArticlePage

/* Version 5 */

// import { Link, useParams } from 'react-router-dom'

// import { articles } from '../data/articles'
// import './StudioHoursArticlePage.css'


// function StudioHoursArticlePage() {
//   const { slug } = useParams()

//   const article = articles[slug as keyof typeof articles]

  
//   if (!article) {
//     return (
//       <main className="studioArticle">
//         <h1>Department not found</h1>
//         <Link to="/">Back home</Link>

//       </main>
//     )
//   }


// export default StudioHoursArticlePage

/* */


// import { Link, useParams } from 'react-router-dom'
// import { articles } from '../data/articles'
// import ReadingProgress from '../components/ReadingProgress'
// import Footer from '../components/Footer'
// import ListenButton from '../components/ListenButton'

// function StudioHoursArticlePage() {
//   const { slug } = useParams()

//   const article = articles[slug as keyof typeof articles]

//   if (!article) {
//     return (
//       <main className="departmentArticlePage">
//         <h1>Article not found</h1>
//         <Link to="/">Back home</Link>
//       </main>
//     )
//   }

//   const articleText = [
//     article.title,
//     article.intro,
//     ...article.body,
//   ].join('. ')

//   return (
//     <main className="departmentArticlePage">
//       <ReadingProgress />

//       <section className="departmentArticleHero">
//         <Link to="/" className="backLink dark">
//           ← Back to Home
//         </Link>

//         <p className="sectionLabel">
//           {article.category}
//         </p>

//         <h1>{article.title}</h1>

//         <div className="articleInfo darkInfo">
//           <span>{article.issue || 'Issue 01'}</span>
//           <span>{article.author || 'Art All Day'}</span>
//           <span>{article.readTime}</span>
//         </div>
//       </section>

//       <section className="departmentArticleBody">

//         <ListenButton text={articleText} />

//         <p className="articleIntro">
//           {article.intro}
//         </p>
 
//         {article.body.map((paragraph, index) => (
//           <p key={index}>
//             {paragraph}
//           </p>
//         ))}

//       </section>

//       <section className="moreDepartments">

//         <p className="sectionLabel">
//           More Studio Hours
//         </p>

//         <div className="moreArticleGrid">

//           {/* {Object.entries(articles)
//             .filter(([slug]) => slug !== article.slug)
//             .slice(0, 7)
//             .map(([slug, item]) => (
//               <Link
//                 key={slug}
//                 to={`/studio-hours/${slug}`}
//                 className="archiveCard"
//               >
//                 <p>{item.issue || 'Issue 01'}</p>

//                 <h3>{item.title}</h3>

//                 <span>
//                   {item.category}
//                 </span>
//               </Link>
//             ))} */}

//             {Object.entries(articles)
//             .filter(([articleSlug]) => articleSlug !== slug)
//             .slice(0, 2)
//             .map(([articleSlug, item]) => (
//                 <Link
//                 key={articleSlug}
//                 to={`/studio-hours/${articleSlug}`}
//                 className="archiveCard"
//                 >
//                 <p>{item.issue || 'Issue 01'}</p>
//                 <h3>{item.title}</h3>
//                 <span>{item.category}</span>
//                 </Link>
//             ))}

//         </div>

//       </section>

//       <Footer />
//     </main>
//   )
// }




// import { Link, useParams } from 'react-router-dom'
// import { articles } from '../data/articles'
// import ReadingProgress from '../components/ReadingProgress'
// import Footer from '../components/Footer'
// import ListenButton from '../components/ListenButton'
// import '../styles/StudioHoursArticlePage.css'


// function StudioHoursArticlePage() {
//   const { slug } = useParams()

//   const article = articles[slug as keyof typeof articles]

//   if (!article) {
//     return (
//       <main className="studioArticlePage">
//         <Link to="/" className="studioBackLink">
//           ← Back to Home
//         </Link>

//         <h1>Article not found</h1>
//       </main>
//     )
//   }

//   const articleText = [
//     article.title,
//     article.intro,
//     ...article.body,
//   ].join('. ')

//   return (
//     <main className="studioArticle">
//       <ReadingProgress />

//       <section className="studioArticleNav">
//         <Link to="/" className="studioBackLink">
//            Back to Home
//         </Link>
      

//         <p className="studioSectionLabel">
//           {article.category}
//         </p>

//         <h1 className="studioArticleTitle">
//           {article.title}
//         </h1>

//         <div className="studioArticleInfo">
//           <span>{article.issue || 'Issue 01'}</span>
//           <span>{article.author || 'Art All Day'}</span>
//           <span>{article.readTime}</span>
//         </div>

//       </section>

//       <section className="studioArticleBody">

//         <ListenButton text={articleText} />

//         <p className="studioArticleIntro">
//           {article.intro}
//         </p>

//         <div className="studioArticleText">
//           {article.body.map((paragraph, index) => (
//             <p key={index}>
//               {paragraph}
//             </p>
//           ))}
//         </div>

//       </section>

//       <section className="studioMore">

//         <p className="studioSectionLabel">
//           More Studio Hours
//         </p>

//         <div className="studioArticleGrid">

//           {Object.entries(articles)
//             .filter(([articleSlug]) => articleSlug !== slug)
//             .slice(0, 7)
//             .map(([articleSlug, item]) => (
//               <Link
//                 key={articleSlug}
//                 to={`/studio-hours/${articleSlug}`}
//                 className="studioArchiveCard"
//               >
//                 <p>{item.issue || 'Issue 01'}</p>

//                 <h3>{item.title}</h3>

//                 <span>{item.category}</span>
//               </Link>
//             ))}

//         </div>

//       </section>

//       <Footer />

//     </main>
//   )
// }

// export default StudioHoursArticlePage


import { Link, useParams } from 'react-router-dom'

import { articles } from '../data/articles'
import { issues } from '../data/issues'

import ReadingProgress from '../components/ReadingProgress'
import Footer from '../components/Footer'
import ListenButton from '../components/ListenButton'

import '../styles/StudioHoursArticlePage.css'

function StudioHoursArticlePage() {
  const { slug } = useParams()

  const article =
    articles[slug as keyof typeof articles]

  if (!article) {
    return (
      <main className="studioArticlePage">
        <Link to="/" className="studioBackLink">
          ← Back to Home
        </Link>

        <h1>Article not found</h1>
      </main>
    )
  }

  const issue = issues.find(
    (item) =>
      item.issueNumber === article.issueNumber
  )

  const articleText = [
    article.title,
    article.intro,
    ...article.body,
  ].join('. ')

  return (
    <main className="studioArticle">
      <ReadingProgress />

      <section className="studioArticleNav">
        <Link
          to="/"
          className="studioBackLink"
        >
          Back to Home
        </Link>

        <p className="studioSectionLabel">
          {article.category}
        </p>

        <h1 className="studioArticleTitle">
          {article.title}
        </h1>

        <div className="studioArticleInfo">
          <span>
            {issue?.number || 'Issue'}
          </span>

          <span>
            {article.author || 'Art All Day'}
          </span>

          <span>
            {article.readTime}
          </span>
        </div>
      </section>

      <section className="studioArticleBody">
        <ListenButton text={articleText} />

        <p className="studioArticleIntro">
          {article.intro}
        </p>

        <div className="studioArticleText">
          {article.body.map(
            (paragraph, index) => (
              <p key={index}>
                {paragraph}
              </p>
            )
          )}
        </div>
      </section>

      <section className="studioMore">
        <p className="studioSectionLabel">
          More Studio Hours
        </p>

        <div className="studioArticleGrid">
          {Object.entries(articles)
            .filter(
              ([articleSlug]) =>
                articleSlug !== slug
            )
            .slice(0, 7)
            .map(([articleSlug, item]) => {
              const itemIssue = issues.find(
                (issueItem) =>
                  issueItem.issueNumber ===
                  item.issueNumber
              )

              return (
                <Link
                  key={articleSlug}
                  to={`/studio-hours/${articleSlug}`}
                  className="studioArchiveCard"
                >
                  <p>
                    {itemIssue?.number ||
                      'Issue'}
                  </p>

                  <h3>{item.title}</h3>

                  <span>
                    {item.category}
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

export default StudioHoursArticlePage