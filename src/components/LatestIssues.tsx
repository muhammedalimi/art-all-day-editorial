// import { Link } from 'react-router-dom'
// import { issues } from '../data/issues'

// function LatestIssues() {
//   const latestIssues = [...issues]
//     .sort((a, b) => b.issueNumber - a.issueNumber)
//     .slice(0, 7)

//   return (
//     <section className="latestIssues">
//       <div className="latestIssuesHeader">
//         <p>ART ALL DAY</p>
//         <h2>Latest Issues</h2>
//       </div>

//       <div className="latestIssuesGrid">
//         {latestIssues.map((issue) => (
//           <Link
//             key={issue.slug}
//             to={`/issues/${issue.slug}`}
//             className="issueCard"
//           >
//             <div className="issueCoverWrap">
//               <img
//                 src={issue.coverImage}
//                 alt={`${issue.number} — ${issue.title}`}
//                 className="issueCover"
//               />
//             </div>

//             <div className="issueCardMeta">
//               <span className="issueNumber">
//                 {issue.number}
//               </span>

//               <h3>{issue.title}</h3>
//             </div>

//             <div className="issueCardFooter">
//               <span>SHOP ISSUE</span>
//               <span>→</span>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </section>
//   )
// }

// export default LatestIssues


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