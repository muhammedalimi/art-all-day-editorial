import { useState } from 'react'
import './StudioPackages.css'

const packages = [
  {
    id: 'presence',
    name: 'Artist Presence',
    price: 599,
    description: 'Your professional home online.',
    delivery: '5–7 business days',
    features: [
      'One-page portfolio website',
      'Up to 10 artworks',
      'Artist biography and statement',
      'Mobile-friendly design',
      'Contact form and social links',
      'Basic SEO and domain setup',
      'One revision round',
    ],
  },
  {
    id: 'professional',
    name: 'Artist Professional',
    price: 1199,
    description: 'A complete digital portfolio.',
    delivery: '10–15 business days',
    features: [
      'Up to five website pages',
      'Up to 25 artworks',
      'Collections and exhibitions',
      'Artist CV and biography',
      'Commission inquiry form',
      'Newsletter signup and analytics',
      'Editable artwork catalog',
      'Two revision rounds',
    ],
  },
  {
    id: 'commerce',
    name: 'Artist Commerce',
    price: 1999,
    description: 'Your own online art store.',
    delivery: '15–25 business days',
    features: [
      'Everything in Artist Professional',
      'Store for up to 20 artworks',
      'Secure checkout integration',
      'Originals and print listings',
      'Available and sold indicators',
      'Shipping setup',
      'Order notifications',
      'Store management walkthrough',
    ],
  },
] as const

type PackageId = (typeof packages)[number]['id']

export default function StudioPackages() {
  const [cart, setCart] = useState<PackageId | null>(null)

  const selected = packages.find(pkg => pkg.id === cart)

  return (
    <section className="studio-shop" id="studio-packages">
      <div className="studio-shop-heading">
        <span>02 / OUR SERVICES</span>
        <h2>Find your fit.</h2>
        <p>
          Thoughtfully designed websites for every stage
          of your artistic journey.
        </p>
      </div>

      <div className="studio-package-grid">
        {packages.map(pkg => (
          <article className="studio-package" key={pkg.id}>
            <div>
              <h3>{pkg.name}</h3>
              <p className="studio-package-price">
                ${pkg.price.toLocaleString()}
              </p>
              <p className="studio-package-description">
                {pkg.description}
              </p>
              <p className="studio-delivery">
                Estimated delivery: {pkg.delivery}
              </p>
            </div>

            <ul>
              {pkg.features.map(feature => (
                <li key={feature}>
                  <span aria-hidden="true">✓</span>
                  {feature}
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={() => setCart(pkg.id)}
              className="studio-add-cart"
            >
              {cart === pkg.id ? '✓ Added to Cart' : 'Add to Cart'}
            </button>
          </article>
        ))}
      </div>

      <p className="studio-package-note">
        One-time project pricing. Domain registration,
        hosting, payment processing and optional ongoing
        maintenance are charged separately.
        Delivery estimates begin after receiving
        the required content and project deposit.
      </p>

      <div className="studio-cart">
        <div>
          <span>YOUR SELECTION</span>
          <h3>{selected?.name ?? 'Your cart is empty'}</h3>
          <p>
            {selected
              ? 'One website project selected.'
              : 'Choose a package above to get started.'}
          </p>
        </div>

        {selected && (
          <div className="studio-cart-actions">
            <strong>
              ${selected.price.toLocaleString()}
            </strong>
            <button
              type="button"
              className="studio-remove-cart"
              onClick={() => setCart(null)}
            >
              Remove
            </button>
          </div>
        )}
      </div>

      <p className="studio-checkout-note">
        Project inquiry and payment checkout will be
        connected next. No payment is collected here.
      </p>
    </section>
  )
}