

// function Hero() {
//   return (
//     <section className="hero">
//       <p className="eyebrow">
//         Art Journalism / Daily Studio Culture
//       </p>

//       <h1>We talk art all day.</h1>

//       <p className="heroText">
//        Art All Day looks closely at artists and their work — telling stories, making connections, and finding new ways of seeing art.
//       </p>

//       {/* <a href="#latest" className="heroButton">
//         Read Issue 01
//       </a> */}
//     </section>
//   )
// }

// export default Hero



function Hero() {
  return (
    <section className="hero">
      <div className="heroContent">
        <p className="eyebrow">
          Art Journalism / Daily Studio Culture
        </p>

        <h1>We talk art all day.</h1>

        <p className="heroText">
          Art All Day looks closely at artists and their work
          — telling stories, making connections, and finding
          new ways of seeing art.
        </p>

        {/* <a href="#latest" className="heroLink">
          Explore the latest stories <span aria-hidden="true">↗</span>
        </a> */}
      </div>
    </section>
  )
}

export default Hero
