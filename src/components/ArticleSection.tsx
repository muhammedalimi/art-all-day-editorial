// // import ArticleCard from './ArticleCard'

// // function ArticleSection() {
// //   return (
// //     <section className="articles">
// //       <div className="sectionHeader">
// //         <p className="sectionLabel">Latest Writing</p>
// //         <h2>Notes from the art world</h2>
// //       </div>

// //       <div className="articleGrid">
// //         <ArticleCard
// //           category="Interview"
// //           title="Inside the studio practice"
// //           text="Conversations with artists about process, doubt, materials, and meaning."
// //         />

// //         <ArticleCard
// //           category="Essay"
// //           title="Why surfaces matter"
// //           text="A short reflection on texture, architecture, and the emotional weight of paintings."
// //         />

// //         <ArticleCard
// //           category="Criticism"
// //           title="Looking longer"
// //           text="How slow attention changes the way we experience contemporary art."
// //         />
// //       </div>
// //     </section>
// //   )
// // }

// // export default ArticleSection

// import ArticleCard from './ArticleCard'

// function ArticleSection() {
//   return (
//     <section id="latest" className="articles">
//       <div className="sectionHeader">
//         <p className="sectionLabel">Latest Writing</p>
//         <h2>Notes from the art world</h2>
//         <span>
//           Interviews, essays, criticism, and slow observations from artists,
//           studios, galleries, and the culture around them.
//         </span>
//       </div>

//       <div className="articleGrid">
//         <ArticleCard
//           category="Interview"
//           title="Inside the studio practice"
//           text="A conversation about process, doubt, materials, and the private rhythm behind finished work."
//           author="Studio Hours"
//           readTime="6 min read"
//         />

//         <ArticleCard
//           category="Essay"
//           title="Why surfaces matter"
//           text="A short reflection on texture, architecture, and the emotional weight carried by painted surfaces."
//           author="Editorial"
//           readTime="4 min read"
//         />

//         <ArticleCard
//           category="Criticism"
//           title="Looking longer"
//           text="How slow attention changes the way we experience contemporary art in galleries and everyday spaces."
//           author="Mo Alimi"
//           readTime="5 min read"
//         />
//       </div>
//     </section>
//   )
// }

// export default ArticleSection


// /* Version 1 */
// import ArticleCard from './ArticleCard'

// function ArticleSection() {
//   return (
//     <section id="latest" className="articles">
//       <div className="sectionHeader">
//         <p className="sectionLabel">Latest Writing</p>
//         <h2>Studio Hours</h2>
//         <span>
//           Interviews, essays, criticism, and slow observations from artists,
//           studios, galleries, and the culture around them.
//         </span>
//       </div>

//       <article className="leadStory">
//         <div>
//           <p className="leadLabel">Editor’s Pick</p>
//           <h3>The studio as a place of pressure, silence, and discovery</h3>
//           <p>
//             A closer look at how artists build meaning through repetition,
//             space, material choices, and the quiet discipline of returning to
//             the work every day.
//           </p>
//         </div>

//         <div className="leadMeta">
//           <span>Issue 01</span>
//           <span>Studio Hours Editorial</span>
//           <span>8 min read</span>
//         </div>
//       </article>

//       <div className="articleGrid">
//         <ArticleCard
//           category="Interview"
//           title="Inside the studio practice"
//           text="A conversation about process, doubt, materials, and the private rhythm behind finished work."
//           author="Studio Hours"
//           readTime="6 min read"
//         />

//         <ArticleCard
//           category="Essay"
//           title="Why surfaces matter"
//           text="A short reflection on texture, architecture, and the emotional weight carried by painted surfaces."
//           author="Editorial"
//           readTime="4 min read"
//         />

//         <ArticleCard
//           category="Criticism"
//           title="Faith & Form"
//           text="Ben Cowan piece is about belief, painting, religious imagery, personal history, leaves, frames, and how faith becomes visual form. It is more than an artist profile — it is an essay about how spirituality moves through his work."
//           author="Mo Alimi"
//           readTime="5 min read"
//         />
//       </div>
//     </section>
//   )
// }

// export default ArticleSection

/* Version 2 */

// import { Link } from 'react-router-dom'
// import ArticleCard from './ArticleCard'

// function ArticleSection() {
//   return (
//     <section id="latest" className="articles">
//       <div className="sectionHeader">
//         <p className="sectionLabel">Latest Writing</p>
//         <h2>Studio Hours</h2>
//         <span>
//           Interviews, essays, criticism, and slow observations from artists,
//           studios, galleries, and the culture around them.
//         </span>
//       </div>

//       <Link to="/studio-hours/issue-01" className="leadStory">
//         <div>
//           <p className="leadLabel">Editor’s Pick</p>
//           <h3>The studio as a place of pressure, silence, and discovery</h3>
//           <p>
//             A closer look at how artists build meaning through repetition,
//             space, material choices, and the quiet discipline of returning to
//             the work every day.
//           </p>
//         </div>

//         <div className="leadMeta">
//           <span>Issue 01</span>
//           <span>Studio Hours Editorial</span>
//           <span>8 min read</span>
//         </div>
//       </Link>

//       <div className="articleGrid">
//         <ArticleCard
//           category="Interview"
//           title="Inside the studio practice"
//           text="A conversation about process, doubt, materials, and the private rhythm behind finished work."
//           author="Studio Hours"
//           readTime="6 min read"
//           link="/studio-hours/inside-the-studio-practice"
//         />

//         <ArticleCard
//           category="Essay"
//           title="Why surfaces matter"
//           text="A short reflection on texture, architecture, and the emotional weight carried by painted surfaces."
//           author="Editorial"
//           readTime="4 min read"
//           link="/studio-hours/why-surfaces-matter"
//         />

//         <ArticleCard
//           category="Criticism"
//           title="Faith & Form"
//           text="Ben Cowan piece is about belief, painting, religious imagery, personal history, leaves, frames, and how faith becomes visual form. It is more than an artist profile — it is an essay about how spirituality moves through his work."
//           author="Mo Alimi"
//           readTime="5 min read"
//           link="/studio-hours/faith-and-form"
//         />
//       </div>
//     </section>
//   )
// }

// export default ArticleSection

// import { Link } from 'react-router-dom'

// import ArticleCard from './ArticleCard'

// import { articles } from '../data/articles'
// import { currentIssue } from '../data/issues'

// function ArticleSection() {
//   if (!currentIssue) {
//     return null
//   }

//   const currentIssueArticles = Object.entries(articles).filter(
//     ([, article]) =>
//       article.issueNumber === currentIssue.issueNumber
//   )

//   const leadArticle = currentIssueArticles[0]

//   const remainingArticles = currentIssueArticles.slice(1)

//   return (
//     <section id="latest" className="articles">
//       <div className="sectionHeader">
//         <p className="sectionLabel">Latest Writing</p>

//         <h2>Studio Hours</h2>

//         <span>
//           Interviews, essays, criticism, and slow observations from artists,
//           studios, galleries, and the culture around them.
//         </span>
//       </div>

//       {leadArticle && (
//         <Link
//           to={`/studio-hours/${leadArticle[0]}`}
//           className="leadStory"
//         >
//           <div>
//             <p className="leadLabel">
//               Editor’s Pick
//             </p>

//             <h3>
//               {leadArticle[1].title}
//             </h3>

//             <p>
//               {leadArticle[1].intro}
//             </p>
//           </div>

//           <div className="leadMeta">
//             <span>
//               {currentIssue.number}
//             </span>

//             <span>
//               {leadArticle[1].author}
//             </span>

//             <span>
//               {leadArticle[1].readTime}
//             </span>
//           </div>
//         </Link>
//       )}

//       <div className="articleGrid">
//         {remainingArticles.map(
//           ([articleSlug, article]) => (
//             <ArticleCard
//               key={articleSlug}
//               category={article.category}
//               title={article.title}
//               text={article.intro}
//               author={article.author}
//               readTime={article.readTime}
//               link={`/studio-hours/${articleSlug}`}
//             />
//           )
//         )}
//       </div>
//     </section>
//   )
// }

// export default ArticleSection

// import '../styles/StudioHours.css'

// import { Link } from 'react-router-dom'

// import { articles } from '../data/articles'
// import { currentIssue } from '../data/issues'

// function ArticleSection() {
//   if (!currentIssue) {
//     return null
//   }

//   const currentIssueArticles = Object.entries(articles).filter(
//     ([, article]) =>
//       article.issueNumber === currentIssue.issueNumber
//   )

//   const leadArticle = currentIssueArticles[0]

//   const secondaryArticles =
//     currentIssueArticles.slice(1, 3)

//   if (!leadArticle) {
//     return null
//   }

//   const [leadSlug, lead] = leadArticle

//   return (
//     <section
//       id="latest"
//       className="studioHoursSection"
//     >
//       {/* HEADER */}
//       <div className="studioHoursHeader">
//         <div>
//           <p className="sectionLabel">
//             Latest Writing
//           </p>

//           <h2>Studio Hours</h2>
//         </div>

//         <p className="studioHoursDescription">
//           Interviews, essays, criticism, and slow
//           observations from artists, studios,
//           galleries, and the culture around them.
//         </p>
//       </div>

//       {/* EDITORIAL LAYOUT */}
//       <div className="studioHoursLayout">

//         {/* LEAD STORY */}
//         <Link
//           to={`/studio-hours/${leadSlug}`}
//           className="studioLeadStory"
//         >
//           <div className="studioLeadTop">
//             <span className="studioKicker">
//               Lead Story
//             </span>

//             <span>
//               {lead.category}
//             </span>
//           </div>

//           <div className="studioLeadContent">
//             <h3>
//               {lead.title}
//             </h3>

//             <p>
//               {lead.intro}
//             </p>
//           </div>

//           <div className="studioLeadFooter">
//             <div>
//               <span>
//                 {currentIssue.number}
//               </span>

//               <span>
//                 {lead.author}
//               </span>

//               <span>
//                 {lead.readTime}
//               </span>
//             </div>

//             <span className="studioReadLink">
//               Read Story →
//             </span>
//           </div>
//         </Link>

//         {/* SECONDARY STORIES */}
//         <div className="studioSecondary">
//           {secondaryArticles.map(
//             ([articleSlug, article], index) => (
//               <Link
//                 key={articleSlug}
//                 to={`/studio-hours/${articleSlug}`}
//                 className="studioSecondaryStory"
//               >
//                 <div className="studioSecondaryTop">
//                   <span>
//                     0{index + 2}
//                   </span>

//                   <span>
//                     {article.category}
//                   </span>
//                 </div>

//                 <h3>
//                   {article.title}
//                 </h3>

//                 <p>
//                   {article.intro}
//                 </p>

//                 <div className="studioSecondaryMeta">
//                   <span>
//                     {article.author}
//                   </span>

//                   <span>
//                     {article.readTime}
//                   </span>
//                 </div>
//               </Link>
//             )
//           )}
//         </div>

//       </div>
//     </section>
//   )
// }

// export default ArticleSection


// import '../styles/StudioHours.css'

// import { Link } from 'react-router-dom'

// import { articles } from '../data/articles'
// import { currentIssue } from '../data/issues'

// function ArticleSection() {
//   if (!currentIssue) {
//     return null
//   }

//   const currentIssueNumber =
//     currentIssue.issueNumber

//   const currentIssueLabel =
//     currentIssue.number

//   const currentIssueArticles =
//     Object.entries(articles).filter(
//       ([, article]) =>
//         article.issueNumber ===
//         currentIssueNumber
//     )

//   const leadArticle =
//     currentIssueArticles[0]

//   const secondaryArticles =
//     currentIssueArticles.slice(1, 3)

//   if (!leadArticle) {
//     return null
//   }

//   const [leadSlug, lead] =
//     leadArticle

//   return (
//     <section
//       id="latest"
//       className="studioHoursSection"
//     >
//       {/* HEADER */}
//       <div className="studioHoursHeader">
//         <div>
//           <p className="sectionLabel">
//             Latest Writing
//           </p>

//           <h2>
//             Studio Hours
//           </h2>
//         </div>

//         <p className="studioHoursDescription">
//           Interviews, essays, criticism,
//           and slow observations from
//           artists, studios, galleries,
//           and the culture around them.
//         </p>
//       </div>

//       {/* EDITORIAL LAYOUT */}
//       <div className="studioHoursLayout">
//         {/* LEAD STORY */}
//         <Link
//           to={`/studio-hours/${leadSlug}`}
//           className="studioLeadStory"
//         >
//           <div className="studioLeadTop">
//             <span className="studioKicker">
//               Lead Story
//             </span>

//             <span>
//               {lead.category}
//             </span>
//           </div>

//           <div className="studioLeadContent">
//             <h3>
//               {lead.title}
//             </h3>

//             <p>
//               {lead.intro}
//             </p>
//           </div>

//           <div className="studioLeadFooter">
//             <div>
//               <span>
//                 {currentIssueLabel}
//               </span>

//               <span>
//                 {lead.author}
//               </span>

//               <span>
//                 {lead.readTime}
//               </span>
//             </div>

//             <span className="studioReadLink">
//               Read Story →
//             </span>
//           </div>
//         </Link>

//         {/* SECONDARY STORIES */}
//         <div className="studioSecondary">
//           {secondaryArticles.map(
//             (
//               [articleSlug, article],
//               index
//             ) => (
//               <Link
//                 key={articleSlug}
//                 to={`/studio-hours/${articleSlug}`}
//                 className="studioSecondaryStory"
//               >
//                 <div className="studioSecondaryTop">
//                   <span>
//                     0{index + 2}
//                   </span>

//                   <span>
//                     {article.category}
//                   </span>
//                 </div>

//                 <h3>
//                   {article.title}
//                 </h3>

//                 <p>
//                   {article.intro}
//                 </p>

//                 <div className="studioSecondaryMeta">
//                   <span>
//                     {article.author}
//                   </span>

//                   <span>
//                     {article.readTime}
//                   </span>
//                 </div>
//               </Link>
//             )
//           )}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default ArticleSectionimport '../styles/StudioHours.css'
// import '../styles/StudioHours.css'



// import { Link } from 'react-router-dom'



// import { articles } from '../data/articles'

// import { currentIssue } from '../data/issues'

// function ArticleSection() {
//   if (!currentIssue) {
//     return null
//   }

//   const currentIssueNumber =
//     currentIssue.issueNumber

//   const currentIssueLabel =
//     currentIssue.number

//   const currentIssueArticles =
//     Object.entries(articles).filter(
//       ([, article]) =>
//         article.issueNumber ===
//         currentIssueNumber
//     )

//   const leadArticle =
//     currentIssueArticles[0]

//   const secondaryArticles =
//     currentIssueArticles.slice(1, 3)

//   if (!leadArticle) {
//     return null
//   }

//   const [leadSlug, lead] =
//     leadArticle

//   return (
//     <section
//       id="latest"
//       className="studioHoursSection"
//     >
//       {/* HEADER */}
//       <div className="studioHoursHeader">
//         <div>
//           <p className="sectionLabel">
//             Latest Writing
//           </p>

//           <h2>
//             Studio Hours
//           </h2>
//         </div>

//         <p className="studioHoursDescription">
//           Interviews, essays, criticism,
//           and slow observations from
//           artists, studios, galleries,
//           and the culture around them.
//         </p>
//       </div>

//       {/* EDITORIAL LAYOUT */}
//       <div className="studioHoursLayout">
//         {/* LEAD STORY */}
//         <Link
//           to={`/studio-hours/${leadSlug}`}
//           className="studioLeadStory"
//         >
//           <div className="studioLeadTop">
//             <span className="studioKicker">
//               Lead Story
//             </span>

//             <span>
//               {lead.category}
//             </span>
//           </div>

//           <div className="studioLeadContent">
//             <h3>
//               {lead.title}
//             </h3>

//             <p>
//               {lead.intro}
//             </p>
//           </div>

//           <div className="studioLeadFooter">
//             <div>
//               <span>
//                 {currentIssueLabel}
//               </span>

//               <span>
//                 {lead.author}
//               </span>

//               <span>
//                 {lead.readTime}
//               </span>
//             </div>

//             <span className="studioReadLink">
//               Read Story →
//             </span>
//           </div>
//         </Link>

//         {/* SECONDARY STORIES */}
//         <div className="studioSecondary">
//           {secondaryArticles.map(
//             (
//               [articleSlug, article],
//               index
//             ) => (
//               <Link
//                 key={articleSlug}
//                 to={`/studio-hours/${articleSlug}`}
//                 className="studioSecondaryStory"
//               >
//                 <div className="studioSecondaryTop">
//                   <span>
//                     0{index + 2}
//                   </span>

//                   <span>
//                     {article.category}
//                   </span>
//                 </div>

//                 <h3>
//                   {article.title}
//                 </h3>

//                 <p>
//                   {article.intro}
//                 </p>

//                 <div className="studioSecondaryMeta">
//                   <span>
//                     {article.author}
//                   </span>

//                   <span>
//                     {article.readTime}
//                   </span>
//                 </div>
//               </Link>
//             )
//           )}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default ArticleSection




import '../styles/StudioHours.css'

import { Link } from 'react-router-dom'

import { articles } from '../data/articles'
import { currentIssue } from '../data/issues'

function ArticleSection() {
  // No current issue = nothing to display
  if (!currentIssue) {
    return null
  }

  // Lock current issue values so TypeScript
  // does not lose the narrowing later
  const currentIssueNumber =
    currentIssue.issueNumber

  const currentIssueLabel =
    currentIssue.number

  // Only show Studio Hours writing
  // belonging to the current issue
  const currentIssueArticles =
    Object.entries(articles).filter(
      ([, article]) =>
        article.issueNumber ===
        currentIssueNumber
    )

  // First article becomes the lead story
  const leadArticle =
    currentIssueArticles[0]

  // Next two become supporting stories
  const secondaryArticles =
    currentIssueArticles.slice(1, 3)

  // Don't render the section if the current
  // issue doesn't have any writing yet
  if (!leadArticle) {
    return null
  }

  const [leadSlug, lead] =
    leadArticle

  return (
    <section
      id="latest"
      className="studioHoursSection"
    >
      {/* =========================
          HEADER
          ========================= */}

      <div className="studioHoursHeader">
        <div>
          <p className="sectionLabel">
            Latest Writing
          </p>

          <h2>
            Studio Hours
          </h2>
        </div>

        <p className="studioHoursDescription">
          Interviews, essays, criticism,
          and slow observations from
          artists, studios, galleries,
          and the culture around them.
        </p>
      </div>

      {/* =========================
          EDITORIAL LAYOUT
          ========================= */}

      <div className="studioHoursLayout">

        {/* =========================
            LEAD STORY
            ========================= */}

        <Link
          to={`/studio-hours/${leadSlug}`}
          className="studioLeadStory"
        >
          {/* TOP META */}

          <div className="studioLeadTop">
            <span className="studioKicker">
              Lead Story
            </span>

            <span>
              {lead.category}
            </span>
          </div>

          {/* LEAD ARTWORK */}

          {lead.heroImage && (
            <div className="studioLeadImage">
              <img
                src={lead.heroImage}
                alt={lead.title}
              />
            </div>
          )}

          {/* STORY CONTENT */}

          <div className="studioLeadContent">
            <h3>
              {lead.title}
            </h3>

            <p>
              {lead.intro}
            </p>
          </div>

          {/* STORY META */}

          <div className="studioLeadFooter">
            <div>
              <span>
                {currentIssueLabel}
              </span>

              <span>
                {lead.author}
              </span>

              <span>
                {lead.readTime}
              </span>
            </div>

            <span className="studioReadLink">
              Read Story →
            </span>
          </div>
        </Link>

        {/* =========================
            SECONDARY STORIES
            ========================= */}

        <div className="studioSecondary">
          {secondaryArticles.map(
            (
              [articleSlug, article],
              index
            ) => (
              <Link
                key={articleSlug}
                to={`/studio-hours/${articleSlug}`}
                className="studioSecondaryStory"
              >
                {/* STORY NUMBER + TYPE */}

                <div className="studioSecondaryTop">
                  <span>
                    0{index + 2}
                  </span>

                  <span>
                    {article.category}
                  </span>
                </div>

                {/* STORY TITLE */}

                <h3>
                  {article.title}
                </h3>

                {/* STORY INTRO */}

                <p>
                  {article.intro}
                </p>

                {/* STORY META */}

                <div className="studioSecondaryMeta">
                  <span>
                    {article.author}
                  </span>

                  <span>
                    {article.readTime}
                  </span>
                </div>
              </Link>
            )
          )}
        </div>
      </div>
    </section>
  )
}

export default ArticleSection