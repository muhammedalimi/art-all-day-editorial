// function Departments() {
//   return (
//     <section className="departments">
//       <div className="sectionHeader">
//         <p className="sectionLabel">Departments</p>
//         <h2>Ways of looking</h2>
//         <span>
//           Recurring sections that shape the magazine’s voice — from artist
//           discovery to criticism, studio life, and visual essays.
//         </span>
//       </div>

//       <div className="departmentGrid">
//         <article className="departmentCard">
//           <p>01</p>
//           <h3>Artist Pick</h3>
//           <span>Artists building a clear visual language worth watching.</span>
//         </article>

//         <article className="departmentCard">
//           <p>02</p>
//           <h3>Faith & Form</h3>
//           <span>Work that moves through belief, memory, ritual, and image.</span>
//         </article>

//         <article className="departmentCard">
//           <p>03</p>
//           <h3>Studio Notes</h3>
//           <span>Process, doubt, repetition, material, and private practice.</span>
//         </article>

//         <article className="departmentCard">
//           <p>04</p>
//           <h3>Slow Looking</h3>
//           <span>Criticism that asks what happens when we stay with the work.</span>
//         </article>
//       </div>
//     </section>
//   )
// }

// export default Departments

/*  Version 2 */

// function Departments() {
//   return (
//     // <section className="departments">
//     <section id="departments" className="departments">
//       <div className="sectionHeader">
//         <p className="sectionLabel">Departments</p>
//         <h2>Ways of looking</h2>
//         <span>
//           Recurring sections that shape the magazine’s voice — from artist
//           discovery to criticism, studio life, emotion, material, and culture.
//         </span>
//       </div>

//       <div className="departmentGrid">
//         <article className="departmentCard">
//           <p>01</p>
//           <h3>Artist Pick</h3>
//           <span>Artists building a clear visual language worth watching.</span>
//         </article>

//         <article className="departmentCard">
//           <p>02</p>
//           <h3>Faith & Form</h3>
//           <span>Work that moves through belief, memory, ritual, and image.</span>
//         </article>

//         <article className="departmentCard">
//           <p>03</p>
//           <h3>The Inner Image</h3>
//           <span>Art shaped by pressure, anxiety, identity, feeling, and memory.</span>
//         </article>

//         <article className="departmentCard">
//           <p>04</p>
//           <h3>Studio Notes</h3>
//           <span>Process, doubt, repetition, material, and private practice.</span>
//         </article>

//         <article className="departmentCard">
//           <p>05</p>
//           <h3>Slow Looking</h3>
//           <span>Criticism that asks what happens when we stay with the work.</span>
//         </article>

//         <article className="departmentCard">
//           <p>06</p>
//           <h3>Surface Study</h3>
//           <span>Color, texture, composition, scale, and material presence.</span>
//         </article>

//         <article className="departmentCard">
//           <p>07</p>
//           <h3>Street to Studio</h3>
//           <span>Work that carries raw energy from lived space into visual form.</span>
//         </article>

//         <article className="departmentCard">
//           <p>08</p>
//           <h3>Exhibition Notes</h3>
//           <span>Short reflections on shows, rooms, walls, and the act of looking.</span>
//         </article>
//       </div>
//     </section>
//   )
// }

// export default Departments


/*  Version 3 */

// function Departments() {
//   return (
//     <section id="departments" className="departments">
//       <div className="sectionHeader">
//         <p className="sectionLabel">Departments</p>

//         <h2>Ways of looking</h2>

//         <span>
//           Recurring sections that shape the magazine’s voice — from artist
//           discovery to criticism, studio life, emotion, material, and culture.
//         </span>
//       </div>

//       <div className="departmentGrid">
//         <article className="departmentCard">
//           <p>01</p>
//           <h3>Artist Pick</h3>
//           <span>
//             “The Work Feels Loud Because the Feeling Was Loud” — artists
//             building a clear visual language worth watching.
//           </span>
//         </article>

//         <article className="departmentCard">
//           <p>02</p>
//           <h3>Faith & Form</h3>
//           <span>
//             “What Remains Sacred After Doubt?” — work that moves through belief,
//             memory, ritual, and image.
//           </span>
//         </article>

//         <article className="departmentCard">
//           <p>03</p>
//           <h3>The Inner Image</h3>
//           <span>
//             “Anxiety Has a Color” — art shaped by pressure, identity, insecurity,
//             feeling, and memory.
//           </span>
//         </article>

//         <article className="departmentCard">
//           <p>04</p>
//           <h3>Studio Notes</h3>
//           <span>
//             “Before the Work Looks Finished” — process, doubt, repetition,
//             material, sketches, and private practice.
//           </span>
//         </article>

//         <article className="departmentCard">
//           <p>05</p>
//           <h3>Slow Looking</h3>
//           <span>
//             “The First Feeling Is Not the Whole Painting” — criticism that asks
//             what happens when we stay with the work.
//           </span>
//         </article>

//         <article className="departmentCard">
//           <p>06</p>
//           <h3>Surface Study</h3>
//           <span>
//             “Color Is Never Neutral” — color, texture, composition, scale, and
//             material presence.
//           </span>
//         </article>

//         <article className="departmentCard">
//           <p>07</p>
//           <h3>Street to Studio</h3>
//           <span>
//             “Art That Still Has Dust on Its Shoes” — work that carries raw
//             energy from lived space into visual form.
//           </span>
//         </article>

//         <article className="departmentCard">
//           <p>08</p>
//           <h3>Exhibition Notes</h3>
//           <span>
//             “The Room Changed the Work” — short reflections on shows, rooms,
//             walls, and the act of looking.
//           </span>
//         </article>
//       </div>
//     </section>
//   )
// }

// export default Departments

/*  Version 4 */

// import { Link } from 'react-router-dom'
// import { departments } from '../data/departments'

// function Departments() {
//   return (
//     <section id="departments" className="departments">
//       <div className="sectionHeader">
//         <p className="sectionLabel">Issue 01</p>

//         <h2>Inside Art All Day</h2>

//         <span>
//           Recurring sections that shape the magazine’s voice — from artist
//           discovery to criticism, studio life, emotion, material, and culture.
//         </span>
//       </div>

//       <div className="departmentGrid">
//         {departments.map((department) => (
//           <Link
//             key={department.slug}
//             to={`/departments/${department.slug}`}
//             className="departmentCard"
//           >
//           <img
//             src={department.heroImage}
//             alt={department.imageAlt}
//             className="departmentImage"
//             />

//             <p>{department.number}</p>
//             <h3>{department.name}</h3>
//             <span>{department.subtitle}</span>
//           </Link>
//         ))}
//       </div>
//     </section>
//   )
// }

// export default Departments


/*  Version 5 */

// import { Link } from 'react-router-dom'
// import { departments } from '../data/departments'
// import { issues } from '../data/issues'

// function Departments() {
//   const currentIssue = issues['issue-01']

//   return (
//     <section id="departments" className="departments">
//       <div className="sectionHeader">
//         <p className="sectionLabel">{currentIssue.number}</p>

//         <h2>Inside Art All Day</h2>

//         <span>
//           Recurring sections that shape the magazine’s voice — from artist
//           discovery to criticism, studio life, emotion, material, and culture.
//         </span>
//       </div>

//       <div className="departmentGrid">
//         {departments.map((department) => {
//           const currentFeature =
//             currentIssue.departments[
//               department.slug as keyof typeof currentIssue.departments
//             ]

//           return (
//             <Link
//               key={department.slug}
//               to={`/departments/${department.slug}`}
//               className="departmentCard"
//             >
//               <img
//                 src={department.heroImage}
//                 alt={department.imageAlt}
//                 className="departmentImage"
//               />

//               <p>{department.number}</p>

//               <h3>{department.name}</h3>

//               <span>
//                 {currentFeature?.title || department.subtitle}
//               </span>
//             </Link>
//           )
//         })}
//       </div>
//     </section>
//   )
// }

// export default Departments

/*  Version 6 */

// import { Link } from 'react-router-dom'
// import { departments } from '../data/departments'

// function Departments() {
//   return (
//     <section id="departments" className="departments">
//       <div className="sectionHeader">
//         <p className="sectionLabel">Issue 01</p>

//         <h2>Inside Art All Day</h2>

//         <span>
//           Recurring sections that shape the magazine’s voice — from artist
//           discovery to criticism, studio life, emotion, material, and culture.
//         </span>
//       </div>

//       <div className="departmentGrid">
//         {departments.map((department) => (
//           <Link
//             key={department.slug}
//             to={`/departments/${department.slug}`}
//             className="departmentCard"
//           >
//             <img
//               src={department.heroImage}
//               alt={department.imageAlt}
//               className="departmentImage"
//             />

//             <p>{department.number}</p>

//             <h3>{department.name}</h3>

//             <span>{department.subtitle}</span>
//           </Link>
//         ))}
//       </div>
//     </section>
//   )
// }

// export default Departments

/*  Version 7 */

// import { Link } from 'react-router-dom'
// import { departments } from '../data/departments'
// import { issueDepartments } from '../data/issueDepartments'

// function Departments() {
//   const currentIssue = issueDepartments['issue-01']

//   return (
//     <section id="departments" className="departments">
//       <div className="sectionHeader">
//         <p className="sectionLabel">Issue 01</p>

//         <h2>Inside Art All Day</h2>

//         <span>
//           Recurring sections that shape the magazine’s voice — from artist
//           discovery to criticism, studio life, emotion, material, and culture.
//         </span>
//       </div>

//       <div className="departmentGrid">
//         {departments.map((department) => {
//           const feature =
//             currentIssue[
//               department.slug as keyof typeof currentIssue
//             ]

//           return (
//             <Link
//               key={department.slug}
//               to={`/departments/${department.slug}`}
//               className="departmentCard"
//             >
//               <img
//                 src={department.heroImage}
//                 alt={department.imageAlt}
//                 className="departmentImage"
//               />

//               <p>{department.number}</p>

//               <h3>{department.name}</h3>

//               <span>
//                 {feature?.title || department.subtitle}
//               </span>
//             </Link>
//           )
//         })}
//       </div>
//     </section>
//   )
// }

// export default Departments

/*  Version 8 */

// import { Link } from 'react-router-dom'
// import { departments } from '../data/departments'
// import { issueDepartments } from '../data/issueDepartments'

// function Departments() {
//   const issue = issueDepartments['issue-01']

//   return (
//     <section id="departments" className="departments">
//       <div className="sectionHeader">
//         <p className="sectionLabel">Issue 01</p>

//         <h2>Inside Art All Day</h2>

//         <span>
//           Recurring sections that shape the magazine’s voice — from artist
//           discovery to criticism, studio life, emotion, material, and culture.
//         </span>
//       </div>

//       <div className="departmentGrid">
//         {departments.map((department) => {
//           const feature =
//             issue[
//               department.slug as keyof typeof issue
//             ]

//           return (
//             <Link
//               key={department.slug}
//               to={`/departments/${department.slug}`}
//               className="departmentCard"
//             >
//               <p>{department.number}</p>

//               <h3>{department.name}</h3>

//               <span>
//                 {feature?.artist || department.subtitle}
//               </span>
//             </Link>
//           )
//         })}
//       </div>
//     </section>
//   )
// }

// export default Departments

/*  Version 9 */


// import { Link } from 'react-router-dom'
// import { departments } from '../data/departments'
// import { issueDepartments } from '../data/issueDepartments'

// function Departments() {
//   const issue = issueDepartments['issue-01']

//   return (
//     <section id="departments" className="departments">
//       <div className="sectionHeader">
//         <p className="sectionLabel">Issue 01</p>

//         <h2>Inside Art All Day</h2>

//         <span>
//           Recurring sections that shape the magazine’s voice — from artist
//           discovery to criticism, studio life, emotion, material, and culture.
//         </span>
//       </div>

//       <div className="departmentGrid">
//         {departments.map((department) => {
//           const feature =
//             issue[
//               department.slug as keyof typeof issue
//             ]

//           return (
//             <Link
//               key={department.slug}
//               to={`/departments/${department.slug}`}
//               className="departmentCard"
//             >
//               {feature?.image && (
//                 <img
//                   src={feature.image}
//                   alt={
//                     feature.imageAlt ||
//                     feature.artist
//                   }
//                   className="departmentImage"
//                 />
//               )}

//               <p>{department.number}</p>

//               <h3>{department.name}</h3>

//               <span>
//                 {feature?.artist ||
//                   department.subtitle}
//               </span>
//             </Link>
//           )
//         })}
//       </div>
//     </section>
//   )
// }

// export default Departments

// import { Link } from 'react-router-dom'

// import { departments } from '../data/departments'
// import { issueDepartments } from '../data/issueDepartments'
// import { currentIssue } from '../data/issues'

// function Departments() {
//   if (!currentIssue) {
//     return null
//   }

//   const issue = issueDepartments[currentIssue.slug]

//   if (!issue) {
//     return null
//   }

//   return (
//     <section id="departments" className="departments">
//       <div className="sectionHeader">
//         <p className="sectionLabel">
//           {currentIssue.number}
//         </p>

//         <h2>Inside Art All Day</h2>

//         <span>
//           Recurring sections that shape the magazine’s voice — from artist
//           discovery to criticism, studio life, emotion, material, and culture.
//         </span>
//       </div>

//       <div className="departmentGrid">
//         {departments.map((department) => {
//           const feature =
//             issue.departments[
//               department.slug as keyof typeof issue.departments
//             ]

//           return (
//             <Link
//               key={department.slug}
//               to={`/departments/${department.slug}`}
//               className="departmentCard"
//             >
//               {feature?.image && (
//                 <img
//                   src={feature.image}
//                   alt={
//                     feature.imageAlt ||
//                     feature.artist
//                   }
//                   className="departmentImage"
//                 />
//               )}

//               <p>{department.number}</p>

//               <h3>{department.name}</h3>

//               <span>
//                 {feature?.artist ||
//                   department.subtitle}
//               </span>
//             </Link>
//           )
//         })}
//       </div>
//     </section>
//   )
// }

// export default Departments




// import { Link } from 'react-router-dom'

// import { departments } from '../data/departments'
// import { issueDepartments } from '../data/issueDepartments'
// import { currentIssue } from '../data/issues'

// function Departments() {
//   // No current issue = nothing to display
//   if (!currentIssue) {
//     return null
//   }

//   // Get the department features belonging
//   // specifically to the current issue
//   const issue = issueDepartments[currentIssue.slug]

//   if (!issue) {
//     return null
//   }

//   return (
//     <section
//       id="departments"
//       className="departments"
//     >
//       <div className="sectionHeader">
//         <p className="sectionLabel">
//           {currentIssue.number}
//         </p>

//         <h2>Inside Art All Day</h2>

//         <span>
//           Recurring sections that shape the magazine’s voice — from artist
//           discovery to criticism, studio life, emotion, material, and culture.
//         </span>
//       </div>

//       <div className="departmentGrid">
//         {departments.map((department) => {
//           const feature =
//             issue.departments[
//               department.slug as keyof typeof issue.departments
//             ]

//           return (
//             <Link
//               key={department.slug}
//               to={`/issues/${currentIssue.Slug}/departments/${department.slug}`}
//               className="departmentCard"
//             >
//               {/* FEATURE IMAGE */}
//               {feature?.image && (
//                 <img
//                   src={feature.image}
//                   alt={
//                     feature.imageAlt ||
//                     feature.artist ||
//                     department.name
//                   }
//                   className="departmentImage"
//                 />
//               )}

//               {/* DEPARTMENT NUMBER */}
//               <p>{department.number}</p>

//               {/* DEPARTMENT NAME */}
//               <h3>{department.name}</h3>

//               {/* ISSUE-SPECIFIC ARTIST */}
//               <span>
//                 {feature?.artist ||
//                   department.subtitle}
//               </span>
//             </Link>
//           )
//         })}
//       </div>
//     </section>
//   )
// }

// export default Departments

// import { Link } from 'react-router-dom'

// import { departments } from '../data/departments'
// import { issueDepartments } from '../data/issueDepartments'
// import { currentIssue } from '../data/issues'

// function Departments() {
//   if (!currentIssue) {
//     return null
//   }

//   // Lock these values after the undefined check.
//   // This also prevents TypeScript from losing the narrowing
//   // inside the departments.map() callback.
//   const currentIssueSlug = currentIssue.slug
//   const currentIssueNumber = currentIssue.number

//   const issue =
//     issueDepartments[currentIssueSlug]

//   if (!issue) {
//     return null
//   }

//   return (
//     <section
//       id="departments"
//       className="departments"
//     >
//       <div className="sectionHeader">
//         <p className="sectionLabel">
//           {currentIssueNumber}
//         </p>

//         <h2>Inside Art All Day</h2>

//         <span>
//           Recurring sections that shape the magazine’s voice — from artist
//           discovery to criticism, studio life, emotion, material, and culture.
//         </span>
//       </div>

//       <div className="departmentGrid">
//         {departments.map((department) => {
//           const feature =
//             issue.departments[
//               department.slug as keyof typeof issue.departments
//             ]

//           return (
//             <Link
//               key={department.slug}
//               to={`/issues/${currentIssueSlug}/departments/${department.slug}`}
//               className="departmentCard"
//             >
//               {feature?.image && (
//                 <img
//                   src={feature.image}
//                   alt={
//                     feature.imageAlt ||
//                     feature.artist ||
//                     department.name
//                   }
//                   className="departmentImage"
//                 />
//               )}

//               <p>
//                 {department.number}
//               </p>

//               <h3>
//                 {department.name}
//               </h3>

//               <span>
//                 {feature?.artist ||
//                   department.subtitle}
//               </span>
//             </Link>
//           )
//         })}
//       </div>
//     </section>
//   )
// }

// export default Departments


import { Link } from 'react-router-dom'

import { departments } from '../data/departments'
import { issueDepartments } from '../data/issueDepartments'
import { currentIssue } from '../data/issues'

function Departments() {
  if (!currentIssue) {
    return null
  }

  // Lock these values after the undefined check.
  // This also prevents TypeScript from losing the narrowing
  // inside the departments.map() callback.
  const currentIssueSlug = currentIssue.slug
  const currentIssueNumber = currentIssue.number

  const issue =
    issueDepartments[currentIssueSlug]

  if (!issue) {
    return null
  }

  return (
    <section
      id="departments"
      className="departments"
    >
      <div className="sectionHeader">
        <p className="sectionLabel">
          {currentIssueNumber}
        </p>

        <h2>Inside Art All Day</h2>

        <span>
          Recurring sections that shape the magazine’s voice — from artist
          discovery to criticism, studio life, emotion, material, and culture.
        </span>
      </div>

      <div className="departmentGrid">
        {departments.map((department) => {
          const feature =
            issue.departments[
              department.slug as keyof typeof issue.departments
            ]

          return (
            <Link
              key={department.slug}
              to={`/issues/${currentIssueSlug}/departments/${department.slug}`}
              className="departmentCard"
            >
              {feature?.image && (
                <img
                  src={feature.image}
                  alt={
                    feature.imageAlt ||
                    feature.artist ||
                    department.name
                  }
                  className="departmentImage"
                />
              )}

              <p>
                {department.number}
              </p>

              <h3>
                {department.name}
              </h3>

              <span>
                {feature?.artist ||
                  department.subtitle}
              </span>
            </Link>
          )
        })}
      </div>
    </section>
  )
}

export default Departments