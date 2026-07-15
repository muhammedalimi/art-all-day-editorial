// // import ArticleCard from './ArticleCard'

// // function ArticleSection() {
// //   return (
// //     <section className="articles">
// //       <div className="sectionHeader">
// //         <p className="sectionLabel">Latest Writing</p>
// //         <h2>Notes from the art world</h2>
// //       </div>

// //       <div className="articleGrid">
// //         <ArticleCard
// //           category="Interview"
// //           title="Inside the studio practice"
// //           text="Conversations with artists about process, doubt, materials, and meaning."
// //         />

// //         <ArticleCard
// //           category="Essay"
// //           title="Why surfaces matter"
// //           text="A short reflection on texture, architecture, and the emotional weight of paintings."
// //         />

// //         <ArticleCard
// //           category="Criticism"
// //           title="Looking longer"
// //           text="How slow attention changes the way we experience contemporary art."
// //         />
// //       </div>
// //     </section>
// //   )
// // }

// // export default ArticleSection

// import ArticleCard from './ArticleCard'

// function ArticleSection() {
//   return (
//     <section id="latest" className="articles">
//       <div className="sectionHeader">
//         <p className="sectionLabel">Latest Writing</p>
//         <h2>Notes from the art world</h2>
//         <span>
//           Interviews, essays, criticism, and slow observations from artists,
//           studios, galleries, and the culture around them.
//         </span>
//       </div>

//       <div className="articleGrid">
//         <ArticleCard
//           category="Interview"
//           title="Inside the studio practice"
//           text="A conversation about process, doubt, materials, and the private rhythm behind finished work."
//           author="Studio Hours"
//           readTime="6 min read"
//         />

//         <ArticleCard
//           category="Essay"
//           title="Why surfaces matter"
//           text="A short reflection on texture, architecture, and the emotional weight carried by painted surfaces."
//           author="Editorial"
//           readTime="4 min read"
//         />

//         <ArticleCard
//           category="Criticism"
//           title="Looking longer"
//           text="How slow attention changes the way we experience contemporary art in galleries and everyday spaces."
//           author="Mo Alimi"
//           readTime="5 min read"
//         />
//       </div>
//     </section>
//   )
// }

// export default ArticleSection

import ArticleCard from './ArticleCard'

function ArticleSection() {
  return (
    <section id="latest" className="articles">
      <div className="sectionHeader">
        <p className="sectionLabel">Latest Writing</p>
        <h2>Studio Hours</h2>
        <span>
          Interviews, essays, criticism, and slow observations from artists,
          studios, galleries, and the culture around them.
        </span>
      </div>

      <article className="leadStory">
        <div>
          <p className="leadLabel">Editor’s Pick</p>
          <h3>The studio as a place of pressure, silence, and discovery</h3>
          <p>
            A closer look at how artists build meaning through repetition,
            space, material choices, and the quiet discipline of returning to
            the work every day.
          </p>
        </div>

        <div className="leadMeta">
          <span>Issue 01</span>
          <span>Studio Hours Editorial</span>
          <span>8 min read</span>
        </div>
      </article>

      <div className="articleGrid">
        <ArticleCard
          category="Interview"
          title="Inside the studio practice"
          text="A conversation about process, doubt, materials, and the private rhythm behind finished work."
          author="Studio Hours"
          readTime="6 min read"
        />

        <ArticleCard
          category="Essay"
          title="Why surfaces matter"
          text="A short reflection on texture, architecture, and the emotional weight carried by painted surfaces."
          author="Editorial"
          readTime="4 min read"
        />

        <ArticleCard
          category="Criticism"
          title="Faith & Form"
          text="Ben Cowan piece is about belief, painting, religious imagery, personal history, leaves, frames, and how faith becomes visual form. It is more than an artist profile — it is an essay about how spirituality moves through his work."
          author="Mo Alimi"
          readTime="5 min read"
        />
      </div>
    </section>
  )
}

export default ArticleSection