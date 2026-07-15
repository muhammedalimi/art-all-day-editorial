import { Link } from 'react-router-dom'
import ben1 from '../assets/ben5.jpg'

function BenCowanPrelude() {
  return (
    <section className="benPrelude">
      <Link to="/artists/ben-cowan" className="benPreludeImage">
        <img src={ben1} alt="Selected artwork by Ben Cowan" />

        <div className="benPreludeOverlay">
          <p>Till Dusk Do Us Part, 2023</p>
          <h2>Ben Cowan</h2>
          {/* <span>Faith, form, memory, and the sacred surface.</span> */}
        </div>
      </Link>
    </section>
  )
}

export default BenCowanPrelude