import ben1 from '../assets/ben1.jpg'

import { Link } from 'react-router-dom'


function BenCowanFeature() {
  return (
    <section className="benFeature">
      <div className="benImage">
        <img src={ben1} alt="Ben Cowan artwork feature" />
        <span>Faith & Form</span>
      </div>

      <div className="benText">
        <p className="sectionLabel">Faith & Form</p>

        <h2>Ben Cowan</h2>

        <p>
          Ben Cowan’s work sits at the intersection of painting, faith,
          architecture, memory, and doubt. His practice uses religious imagery,
          leaves, frames, and symbolic fragments to explore how belief is built,
          questioned, broken, and rebuilt through visual form.
        </p>

        <p>
          What makes the work compelling is that it does not treat spirituality
          as simple decoration. The paintings carry the weight of personal
          history. They suggest that faith can be both beautiful and difficult,
          both inherited and reimagined.
        </p>

        {/* <p>
          Cowan’s use of leaves is especially powerful. A leaf can feel fragile,
          ordinary, almost overlooked. But in his paintings, it becomes a
          spiritual object — something small that carries grief, movement,
          renewal, and mystery.
        </p>

        <p>
          The strongest part of Cowan’s practice is its patience. The work asks
          the viewer to slow down, to look again, and to consider how sacred
          meaning can appear through surface, repetition, image, and silence.
        </p> */}

        {/* <button>Read Feature</button> */}
        <Link to="/artists/ben-cowan" className="benButton">
        Read Feature
        </Link>
      </div>
    </section>
  )
}

export default BenCowanFeature