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

import { Link } from 'react-router-dom'
import { departments } from '../data/departments'

function Departments() {
  return (
    <section id="departments" className="departments">
      <div className="sectionHeader">
        <p className="sectionLabel">Departments</p>

        <h2>Ways of looking</h2>

        <span>
          Recurring sections that shape the magazine’s voice — from artist
          discovery to criticism, studio life, emotion, material, and culture.
        </span>
      </div>

      <div className="departmentGrid">
        {departments.map((department) => (
          <Link
            key={department.slug}
            to={`/departments/${department.slug}`}
            className="departmentCard"
          >
            <p>{department.number}</p>
            <h3>{department.name}</h3>
            <span>{department.subtitle}</span>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Departments