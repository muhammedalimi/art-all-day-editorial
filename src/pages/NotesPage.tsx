const checkoutUrl = 'PASTE_YOUR_STRIPE_PAYMENT_LINK_HERE'

export default function NotesPage() {
  return (
    <main className="notesPage">
      <p>ART ALL DAY NOTES · FIRST EDITION</p>
      <h1>Little Notes on Art</h1>
      <p>
        A collection of six art-inspired note cards with envelopes,
        made for the thoughts worth sending.
      </p>

      {/* Add photos of the finished cards and packaging here */}

      <p>Six cards and six envelopes · $XX · Ships [date]</p>

      <a className="notesBuyButton" href={checkoutUrl}>
        Preorder the First Edition
      </a>
    </main>
  )
}