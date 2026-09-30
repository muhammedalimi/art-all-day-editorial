import { Link } from 'react-router-dom'
import { issues } from '../data/issues'
import '../styles/IssuesArchivePage.css'

function IssuesArchivePage() {
  const allIssues = [...issues].sort(
    (a, b) => b.issueNumber - a.issueNumber
  )

  return (
    <main className="issuesArchive">

      <Link
        to="/"
        className="issuesArchiveBack"
      >
        ← Back
      </Link>

      <header className="issuesArchiveHeader">
        <p>ART ALL DAY ARCHIVE</p>

        <h1>All Issues</h1>

        <p className="issuesArchiveIntro">
          Every issue of Art All Day, from the latest release
          back to the beginning.
        </p>
      </header>

      <div className="issuesArchiveGrid">

        {allIssues.map((issue) => (
          <Link
            key={issue.slug}
            to={`/issues/${issue.slug}`}
            className="issuesArchiveCard"
          >

            <div className="issuesArchiveCover">
              <img
                src={issue.coverImage}
                alt={`${issue.number} — ${issue.title}`}
              />
            </div>

            <div className="issuesArchiveMeta">

              <span>
                {issue.number}
              </span>

              <h2>
                {issue.title}
              </h2>

              <p>
                {issue.date}
              </p>

              <strong>
                View Issue →
              </strong>

            </div>

          </Link>
        ))}

      </div>

    </main>
  )
}

export default IssuesArchivePage