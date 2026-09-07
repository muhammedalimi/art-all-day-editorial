

// /* Version*/

// import '../styles/StudioHours.css'

// import { Link } from 'react-router-dom'

// import { articles } from '../data/articles'
// import { currentIssue } from '../data/issues'

// function ArticleSection() {
//   // No current issue = nothing to display
//   if (!currentIssue) {
//     return null
//   }

//   // Lock current issue values so TypeScript
//   // does not lose the narrowing later
//   const currentIssueNumber =
//     currentIssue.issueNumber

//   const currentIssueLabel =
//     currentIssue.number

//   // Only show Studio Hours writing
//   // belonging to the current issue
//   const currentIssueArticles =
//     Object.entries(articles).filter(
//       ([, article]) =>
//         article.issueNumber ===
//         currentIssueNumber
//     )

//   // First article becomes the lead story
//   const leadArticle =
//     currentIssueArticles[0]

//   // Next two become supporting stories
//   const secondaryArticles =
//     currentIssueArticles.slice(1, 3)

//   // Don't render the section if the current
//   // issue doesn't have any writing yet
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
//       {/* =========================
//           HEADER
//           ========================= */}

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

//       {/* =========================
//           EDITORIAL LAYOUT
//           ========================= */}

//       <div className="studioHoursLayout">

//         {/* =========================
//             LEAD STORY
//             ========================= */}

//         <Link
//           to={`/studio-hours/${leadSlug}`}
//           className="studioLeadStory"
//         >
//           {/* TOP META */}

//           <div className="studioLeadTop">
//             <span className="studioKicker">
//               Lead Story
//             </span>

//             <span>
//               {lead.category}
//             </span>
//           </div>

//           {/* LEAD ARTWORK */}

//           {lead.heroImage && (
//             <div className="studioLeadImage">
//               <img
//                 src={lead.heroImage}
//                 alt={lead.title}
//               />
//             </div>
//           )}

//           {/* STORY CONTENT */}

//           <div className="studioLeadContent">
//             <h3>
//               {lead.title}
//             </h3>

//             <p>
//               {lead.intro}
//             </p>
//           </div>

//           {/* STORY META */}

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

//         {/* =========================
//             SECONDARY STORIES
//             ========================= */}

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
//                 {/* STORY NUMBER + TYPE */}

//                 <div className="studioSecondaryTop">
//                   <span>
//                     0{index + 2}
//                   </span>

//                   <span>
//                     {article.category}
//                   </span>
//                 </div>

//                 {/* STORY TITLE */}

//                 <h3>
//                   {article.title}
//                 </h3>

//                 {/* STORY INTRO */}

//                 <p>
//                   {article.intro}
//                 </p>

//                 {/* STORY META */}

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
  if (!currentIssue) {
    return null
  }

  const currentIssueNumber =
    currentIssue.issueNumber

  const currentIssueLabel =
    currentIssue.number

  // =========================================
  // CURRENT ISSUE ARTICLES
  // =========================================

  const currentIssueArticles =
    Object.entries(articles).filter(
      ([, article]) =>
        article.issueNumber ===
        currentIssueNumber
    )

  if (currentIssueArticles.length === 0) {
    return null
  }

  // =========================================
  // LEAD STORY
  //
  // Prefer Living Dangerously.
  // If it cannot be found, fall back to
  // the first article instead of hiding
  // the entire Studio Hours section.
  // =========================================

  const preferredLead =
    currentIssueArticles.find(
      ([slug]) =>
        slug === 'living-dangerously'
    )

  const leadArticle =
    preferredLead ??
    currentIssueArticles[0]

  const [leadSlug, lead] =
    leadArticle

  // =========================================
  // SECONDARY STORIES
  // =========================================

  const secondaryArticles =
    currentIssueArticles
      .filter(
        ([slug]) =>
          slug !== leadSlug
      )
      .slice(0, 2)

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
          <div className="studioLeadTop">
            <span className="studioKicker">
              Lead Story
            </span>

            <span>
              {lead.category}
            </span>
          </div>

          {/* LEAD IMAGE */}

          {lead.heroImage && (
            <div className="studioLeadImage">
              <img
                src={lead.heroImage}
                alt={lead.title}
              />
            </div>
          )}

          {/* LEAD CONTENT */}

          <div className="studioLeadContent">
            <h3>
              {lead.title}
            </h3>

            <p>
              {lead.intro}
            </p>
          </div>

          {/* LEAD META */}

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
                <div className="studioSecondaryTop">
                  <span>
                    0{index + 2}
                  </span>

                  <span>
                    {article.category}
                  </span>
                </div>

                <h3>
                  {article.title}
                </h3>

                <p>
                  {article.intro}
                </p>

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