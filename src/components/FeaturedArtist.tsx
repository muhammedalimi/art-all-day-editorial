import ben4 from '../assets/ben4.gif'


function FeaturedArtist() {
  return (
    <section className="featuredArtist">
      <div>
        <p className="sectionLabel">Featured Artist</p>

        <h2>Ben Cowan</h2>

        <p>
          A look into painting, architecture, surfaces, and the visual rhythm
          of Brooklyn spaces.
        </p>

        <button>Read Profile</button>
      </div>

      <div className="artistImage">
        <img src={ben4} alt="Ben Cowan artwork feature" />
        <span>Artist Feature</span>
      </div>
    </section>
  )
}

export default FeaturedArtist