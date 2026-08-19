// function IssueIntro() {
//   return (
//     // <section className="issueIntro">
//     <section id="issue" className="issueIntro">
//       <p className="sectionLabel">Issue 01</p>

//       <h2>Eight Artists Who Are Teaching Us How to Feel Again</h2>

//       <p>
//         Every generation of artists has a moment when certain voices 
//         begin to separate themselves from the crowd. Not because they 
//         follow trends, but because they develop a language that feels impossible to confuse with anyone else.
//         The artists selected for 2026 share a common quality:
//         They are not simply making images. They are building worlds.
//         Through painting, sculpture, archives, photography, installation, and material experimentation,
//         these artists explore memory, identity, dreams, history, and the fragile relationship between
//         humans and the spaces they inhabit.
//       </p>

//       <div className="issueMeta">
//         <span>Artist Picks</span>
//         <span>Faith & Form</span>
//         <span>Visual Essays</span>
//       </div>
//     </section>
//   )
// }

// export default IssueIntro



/*version*/


import { Link } from 'react-router-dom'

function IssueIntro() {
  return (
    <section id="issue" className="issueIntro">
      <p className="sectionLabel">Issue 01</p>

      <h2>Eight Artists Who Are Teaching Us How to Feel Again</h2>

      <p>
        Every generation of artists has a moment when certain voices
        begin to separate themselves from the crowd. Not because they
        follow trends, but because they develop a language that feels
        impossible to confuse with anyone else. The artists selected for
        2026 share a common quality: They are not simply making images.
        They are building worlds. Through painting, sculpture, archives,
        photography, installation, and material experimentation, these
        artists explore memory, identity, dreams, history, and the fragile
        relationship between humans and the spaces they inhabit.
      </p>

      <div className="issueMeta">
        <Link to="/departments/artist-pick">
          Artist Pick
        </Link>

        <Link to="/departments/faith-and-form">
          Faith &amp; Form
        </Link>

        
        <Link to="/departments/exhibition-notes">
          Visual Essays
        </Link>
      </div>
    </section>
  )
}

export default IssueIntro