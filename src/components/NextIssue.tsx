// function NextIssue() {
//   return (
//     <section className="nextIssue">
//       <div>
//         <p className="sectionLabel">Coming Next</p>

//         <h2>Issue 02: The Shape of Memory</h2>

//         <p>
//           The next issue looks at artists working through memory, family,
//           migration, grief, home, and the personal histories that stay inside an
//           image. If Issue 01 asks how feeling becomes color, Issue 02 asks how
//           the past becomes form.
//         </p>
//       </div>

//       <div className="nextIssueList">
//         <span>Family Archives</span>
//         <span>Home & Distance</span>
//         <span>Memory Work</span>
//         <span>Objects That Remember</span>
//       </div>
//     </section>
//   )
// }

// export default NextIssue

/* Version 1.0 */

// import { Link } from 'react-router-dom'

// function NextIssue() {
//   return (
//     <section className="nextIssue">
//       <div>
//         <p className="sectionLabel">Coming Next</p>

//         <h2>Issue 02: The Shape of Memory</h2>

//         <p>
//           The next issue looks at artists working through memory, family,
//           migration, grief, home, and the personal histories that stay inside an
//           image.
//         </p>

//         <Link to="/submit" className="nextIssueButton">
//           Submit for Issue 02
//         </Link>
//       </div>

//       <div className="nextIssueList">
//         <Link to="/submit">Family Archives</Link>
//         <Link to="/submit">Home & Distance</Link>
//         <Link to="/submit">Memory Work</Link>
//         <Link to="/submit">Objects That Remember</Link>
//       </div>
//     </section>
//   )
// }

// export default NextIssue

/* Version 2.0 date updated  */

// import { issues } from '../data/issues'
// import { Link } from 'react-router-dom'

// function NextIssue() {
//   const nextIssue = issues.find((issue) => issue.slug === 'issue-02')

//   if (!nextIssue) {
//     return null
//   }

//   return (
//     <section className="nextIssue">
//       <div>
//         <p className="sectionLabel">{nextIssue.status}</p>

//         <h2>
//           {nextIssue.number}: {nextIssue.title}
//         </h2>

//         <p>{nextIssue.description}</p>

//         <p className="issueDate">{nextIssue.date}</p>

//         <Link to="/submit" className="nextIssueButton">
//           Submit for {nextIssue.number}
//         </Link>
//       </div>

//       <div className="nextIssueList">
//         <Link to="/submit">Family Archives</Link>
//         <Link to="/submit">Home & Distance</Link>
//         <Link to="/submit">Memory Work</Link>
//         <Link to="/submit">Objects That Remember</Link>
//       </div>
//     </section>
//   )
// }

// export default NextIssue



import { Link } from 'react-router-dom'
import { nextIssue } from '../data/issues'

function NextIssue() {
  if (!nextIssue) {
    return null
  }

  return (
    <section className="nextIssue">
      <div>
        <p className="sectionLabel">
          {nextIssue.status}
        </p>

        <h2>
          {nextIssue.number}: {nextIssue.title}
        </h2>

        <p>
          {nextIssue.description}
        </p>

        <p className="issueDate">
          {nextIssue.date}
        </p>

        <Link
          to="/submit"
          className="nextIssueButton"
        >
          Submit for {nextIssue.number}
        </Link>
      </div>

      <div className="nextIssueList">
        <Link to="/submit">
          Family Archives
        </Link>

        <Link to="/submit">
          Home & Distance
        </Link>

        <Link to="/submit">
          Memory Work
        </Link>

        <Link to="/submit">
          Objects That Remember
        </Link>
      </div>
    </section>
  )
}

export default NextIssue