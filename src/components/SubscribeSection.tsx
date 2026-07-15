import { useState } from 'react'

function SubscribeSection() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!email) {
      setMessage('Please enter your email.')
      return
    }

    setMessage('You’re on the list. Welcome to Art All Day.')
    setEmail('')
  }

  return (
    <section className="subscribeSection">
      <p className="sectionLabel">Subscribe</p>

      <h2>Art in your inbox.</h2>

      <p>
        Get artist picks, visual essays, studio notes, and slow criticism from
        the Art All Day archive.
      </p>

      <form onSubmit={handleSubmit} className="subscribeForm">
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <button type="submit">Subscribe</button>
      </form>

      {message && <span className="subscribeMessage">{message}</span>}
    </section>
  )
}

export default SubscribeSection