

import { Link } from 'react-router-dom'
import { issues } from '../data/issues'

function LatestIssues() {
  const latestIssues = [...issues]
    .sort((a, b) => b.issueNumber - a.issueNumber)
    .slice(0, 6)

  return (
    <section className="latestIssues">

      <div className="latestIssuesHeader">
        <p>ART ALL DAY</p>
        <h2>Latest Issues</h2>
      </div>

      <div className="latestIssuesGrid">

        {latestIssues.map((issue) => (
          <Link
            key={issue.slug}
            to={`/issues/${issue.slug}`}
            className="issueCard"
          >

            <div className="issueCoverWrap">
              <img
                src={issue.coverImage}
                alt={`${issue.number} — ${issue.title}`}
                className="issueCover"
              />
            </div>

            <div className="issueCardMeta">

              <span className="issueNumber">
                {issue.number}
              </span>

              <h3>{issue.title}</h3>

            </div>

            <div className="issueCardFooter">
              <span>VIEW ISSUE</span>
              <span>→</span>
            </div>

          </Link>
        ))}

      </div>

    <div className="latestIssuesFooter">
        <Link to="/issues">
          View All Issues →
        </Link>
      </div>

    </section>
  )
}

export default LatestIssues



// import { Link } from 'react-router-dom'
// import { issues } from '../data/issues'

// function LatestIssues() {
//   const latestIssues = [...issues]
//     .sort((a, b) => b.issueNumber - a.issueNumber)
//     .slice(0, 6)

//   const [featuredIssue, ...otherIssues] = latestIssues
//   const supportingIssues = otherIssues.slice(0, 2)
//   const remainingIssues = otherIssues.slice(2)

//   const renderIssue = (
//     issue: (typeof issues)[number],
//     featured = false
//   ) => (
//     <Link
//       key={issue.slug}
//       to={`/issues/${issue.slug}`}
//       className={`issueCard ${featured ? 'issueCardFeatured' : ''}`}
//     >
//       <div className="issueCoverWrap">
//         <img
//           src={issue.coverImage}
//           alt={`${issue.number} — ${issue.title}`}
//           className="issueCover"
//         />
//       </div>

//       <div className="issueCardMeta">
//         <span className="issueNumber">
//           {featured ? 'LATEST ISSUE' : issue.number}
//         </span>
//         <h3>{issue.title}</h3>
//       </div>

//       <div className="issueCardFooter">
//         <span>VIEW ISSUE</span>
//         <span aria-hidden="true">→</span>
//       </div>
//     </Link>
//   )

//   return (
//     <section className="latestIssues" id="latest">
//       <div className="latestIssuesHeader">
//         <p>ART ALL DAY</p>
//         <h2>Latest Issues</h2>
//       </div>

//       {featuredIssue && (
//         <div className="latestIssuesEditorial">
//           <div className="latestIssuesLead">
//             {renderIssue(featuredIssue, true)}
//           </div>

//           <div className="latestIssuesSide">
//             {supportingIssues.map(issue =>
//               renderIssue(issue)
//             )}
//           </div>
//         </div>
//       )}

//       {/* {remainingIssues.length > 0 && (
//         <div className="latestIssuesGrid">
//           {remainingIssues.map(issue =>
//             renderIssue(issue)
//           )}
//         </div>
//       )} */}

      
// {remainingIssues.length > 0 && (
//   <div className="moreIssuesSection">

//     <div className="moreIssuesHeader">
//       <p>EXPLORE THE JOURNAL</p>
//       <h2>More From Art All Day</h2>
//     </div>

//     <div className="latestIssuesGrid">
//       {remainingIssues.map(issue =>
//         renderIssue(issue)
//       )}
//     </div>

//   </div>
// )}


//       <div className="latestIssuesFooter">
//         <Link to="/issues">
//           View All Issues →
//         </Link>
//       </div>
//     </section>
//   )
// }

// export default LatestIssues
