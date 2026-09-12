


// import '../styles/StudioHours.css'

// import { Link } from 'react-router-dom'

// import { articles } from '../data/articles1'

// function ArticleSection() {
//   const articleEntries =
//     Object.entries(articles)

//   if (articleEntries.length === 0) {
//     return null
//   }

//   // =========================================
//   // LATEST ISSUE NUMBER
//   // =========================================

//   const latestIssueNumber =
//     Math.max(
//       ...articleEntries.map(
//         ([, article]) =>
//           article.issueNumber
//       )
//     )

//   // =========================================
//   // LATEST ISSUE ARTICLES
//   // =========================================

//   const latestArticles =
//     articleEntries.filter(
//       ([, article]) =>
//         article.issueNumber ===
//         latestIssueNumber
//     )

//   if (latestArticles.length === 0) {
//     return null
//   }

//   // =========================================
//   // LEAD STORY
//   // First article from newest issue
//   // =========================================

//   const [leadSlug, lead] =
//     latestArticles[0]

//   // =========================================
//   // SECONDARY STORIES
//   // =========================================

//   const secondaryArticles =
//     latestArticles
//       .filter(
//         ([slug]) =>
//           slug !== leadSlug
//       )
//       .slice(0, 2)

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
//           <div className="studioLeadTop">
//             <span className="studioKicker">
//               Lead Story
//             </span>

//             <span>
//               {lead.category}
//             </span>
//           </div>

//           {lead.heroImage && (
//             <div className="studioLeadImage">
//               <img
//                 src={lead.heroImage}
//                 alt={lead.title}
//               />
//             </div>
//           )}

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
//                 {lead.issue}
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

import { articles } from '../data/articles1'

function ArticleSection() {
  const articleEntries =
    Object.entries(articles)

  if (articleEntries.length === 0) {
    return null
  }

  // =========================================
  // LATEST ISSUE NUMBER
  // =========================================

  const latestIssueNumber =
    Math.max(
      ...articleEntries.map(
        ([, article]) =>
          article.issueNumber
      )
    )

  // =========================================
  // LATEST ISSUE ARTICLES
  // =========================================

  const latestArticles =
    articleEntries.filter(
      ([, article]) =>
        article.issueNumber ===
        latestIssueNumber
    )

  if (latestArticles.length === 0) {
    return null
  }

  // =========================================
  // LEAD STORY
  // First article from newest issue
  // =========================================

  const [leadSlug, lead] =
    latestArticles[0]

  // =========================================
  // SECONDARY STORIES
  //
  // Prefer other stories from the latest issue.
  // If there are none, fall back to the
  // previous issue.
  // =========================================

  let secondaryArticles =
    latestArticles.filter(
      ([slug]) =>
        slug !== leadSlug
    )

  if (secondaryArticles.length === 0) {
    const previousIssueNumber =
      latestIssueNumber - 1

    secondaryArticles =
      articleEntries.filter(
        ([, article]) =>
          article.issueNumber ===
          previousIssueNumber
      )
  }

  secondaryArticles =
    secondaryArticles.slice(0, 2)

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
                {lead.issue}
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
                    {article.issue}
                  </span>

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