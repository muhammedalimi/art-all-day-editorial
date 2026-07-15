import ben1 from '../assets/ben1.jpg'
import ben2 from '../assets/ben2.jpg'
import ben3 from '../assets/ben3.jpg'
import ben4 from '../assets/ben4.gif'
import ben6 from '../assets/ben6.gif'

function ArtistGallery() {
  return (
    <section className="artistGallery">
      <div className="sectionHeader">
        <p className="sectionLabel">Artist’s Pick</p>
        <em>More from the feature</em>
        {/* <span>
          A small visual archive of works, studio details, and surfaces connected
          to the featured artist.
        </span> */}
      </div>

      <div className="galleryGrid">
        <img src={ben1} alt="Ben Cowan feature image 1" />
        <img src={ben2} alt="Ben Cowan feature image 2" />
        <img src={ben3} alt="Ben Cowan feature image 3" />
        <img src={ben4} alt="Ben Cowan feature image 4" />
        <img src={ben6} alt="Ben Cowan feature image 5" />
       
      </div>
    </section>
  )
}

export default ArtistGallery