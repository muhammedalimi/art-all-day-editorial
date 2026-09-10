// import { Link } from 'react-router-dom'

// function SubmitPage() {
//   return (
//     <main className="submitPage">
//       <Link to="/" className="backLink dark">
//         ← Back to Home
//       </Link>

//       <section className="submitHero">
//         <p className="sectionLabel">Submit Work</p>

//         <h1>Send us what you are building.</h1>

//         <p>
//           We accept artist submissions, studio notes, exhibition reflections,
//           essays, interviews, and visual projects. Send work that has feeling,
//           direction, and something honest behind it.
//         </p>

//         <a
//           href="mailto:artalldayco@gmail.com?subject=Art Submission"
//           className="submitEmailButton"
//         >
//           Submit by Email
//         </a>
//       </section>

//       <section className="submissionGuide">
//         <div>
//           <h3>What to send</h3>
//           <p>Artist name, short bio, 3–6 images, links, and a short statement.</p>
//         </div>

//         <div>
//           <h3>What we look for</h3>
//           <p>Work with a clear voice, emotional weight, and visual intention.</p>
//         </div>

//         <div>
//           <h3>Response time</h3>
//           <p>Submissions are reviewed as the magazine develops each issue.</p>
//         </div>
//       </section>
//     </main>
//   )
// }

// export default SubmitPage



import { Link } from 'react-router-dom'

import SubmitSection
  from '../components/SubmitSection'


function SubmitPage() {
  return (
    <main className="submitPage">

      {/* =====================================
          BACK
          ===================================== */}

      <Link
        to="/"
        className="backLink dark"
      >
        ← Back to Home
      </Link>


      {/* =====================================
          HERO
          ===================================== */}

      <section className="submitHero">

        <p className="sectionLabel">
          Submit Work
        </p>


        <h1>
          Send us what you are building.
        </h1>


        <p>
          We accept artist submissions,
          studio notes, exhibition reflections,
          essays, interviews, and visual projects.
          Send work that has feeling, direction,
          and something honest behind it.
        </p>

      </section>


      {/* =====================================
          SUBMISSION FORM
          ===================================== */}

      <SubmitSection />


      {/* =====================================
          SUBMISSION GUIDE
          ===================================== */}

      <section className="submissionGuide">

        <div>

          <h3>
            What to send
          </h3>

          <p>
            Artist name, a short description
            of the work, a clear image,
            and accurate contact information.
          </p>

        </div>


        <div>

          <h3>
            What we look for
          </h3>

          <p>
            Work with a clear voice,
            emotional weight,
            and visual intention.
          </p>

        </div>


        <div>

          <h3>
            Response time
          </h3>

          <p>
            Submissions are reviewed
            as Art All Day develops
            each issue.
          </p>

        </div>

      </section>

    </main>
  )
}


export default SubmitPage