// import { useState } from 'react'

// function SubscribeSection() {
//   const [email, setEmail] = useState('')
//   const [message, setMessage] = useState('')

//   function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
//     event.preventDefault()

//     if (!email) {
//       setMessage('Please enter your email.')
//       return
//     }

//     setMessage('You’re on the list. Welcome to Art All Day.')
//     setEmail('')
//   }

//   return (
//     <section className="subscribeSection">
//       <p className="sectionLabel">Subscribe</p>

//       <h2>Art in your inbox.</h2>

//       <p>
//         Get artist picks, visual essays, studio notes, and slow criticism from
//         the Art All Day archive.
//       </p>

//       <form onSubmit={handleSubmit} className="subscribeForm">
//         <input
//           type="email"
//           placeholder="Email address"
//           value={email}
//           onChange={(event) => setEmail(event.target.value)}
//         />

//         <button type="submit">Subscribe</button>
//       </form>

//       {message && <span className="subscribeMessage">{message}</span>}
//     </section>
//   )
// }

// export default SubscribeSection

// import { useState } from 'react'

// function SubscribeSection() {
//   const [email, setEmail] = useState('')
//   const [message, setMessage] = useState('')
//   const [loading, setLoading] = useState(false)

//   async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
//     event.preventDefault()

//     if (!email) {
//       setMessage('Please enter your email.')
//       return
//     }

//   try {
//     setLoading(true)

//     const apiUrl =
//       import.meta.env.VITE_API_URL ||
//       "http://localhost:7071"

//     const response = await fetch(
//       `${apiUrl}/api/subscribe`,
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           email,
//         }),
//       }
//     )
//      if (!response.ok) {
//       const errorText = await response.text()
//       console.error(errorText)
//       throw new Error(errorText)
//     }

//     const data = await response.json()

//     setMessage(data.message)
//     setEmail('')

//   } catch (error) {
//   console.error(error)

//   setMessage(
//     'Something went wrong. Please try again.'
//   )

//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <section className="subscribeSection">
//       <p className="sectionLabel">Subscribe</p>

//       <h2>Art in your inbox.</h2>

//       <p>
//         Get artist picks, visual essays, studio notes, and slow criticism from
//         the Art All Day archive.
//       </p>

//       <form 
//         onSubmit={handleSubmit} 
//         className="subscribeForm"
//       >

//         <input
//           type="email"
//           placeholder="Email address"
//           value={email}
//           onChange={(event) =>
//             setEmail(event.target.value)
//           }
//         />

//         <button 
//           type="submit"
//           disabled={loading}
//         >
//           {loading ? 'Joining...' : 'Subscribe'}
//         </button>

//       </form>

//       {message && (
//         <span className="subscribeMessage">
//           {message}
//         </span>
//       )}

//     </section>
//   )
// }

// export default SubscribeSection

import { useState } from 'react'

function SubscribeSection() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault()

    if (!email.trim()) {
      setMessage('Please enter your email.')
      return
    }

    try {
      setLoading(true)
      setMessage('')

      const apiUrl = import.meta.env.VITE_API_URL

      if (!apiUrl) {
        throw new Error(
          'VITE_API_URL is not configured.'
        )
      }

      const response = await fetch(
        `${apiUrl}/api/subscribe`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email.trim(),
          }),
        }
      )

      const data = await response.json()

      if (!response.ok) {
        throw new Error(
          data.message || 'Subscription failed.'
        )
      }

      setMessage(
        data.message || 'Welcome to Art All Day!'
      )

      setEmail('')

    } catch (error) {
      console.error(
        'Subscribe error:',
        error
      )

      setMessage(
        'Something went wrong. Please try again.'
      )

    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="subscribeSection">
      <p className="sectionLabel">
        Subscribe
      </p>

      <h2>
        Art in your inbox.
      </h2>

      <p>
        Get artist picks, visual essays,
        studio notes, and slow criticism
        from the Art All Day archive.
      </p>

      <form
        onSubmit={handleSubmit}
        className="subscribeForm"
      >
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(event) =>
            setEmail(event.target.value)
          }
          required
        />

        <button
          type="submit"
          disabled={loading}
        >
          {loading
            ? 'Joining...'
            : 'Subscribe'}
        </button>
      </form>

      {message && (
        <span className="subscribeMessage">
          {message}
        </span>
      )}
    </section>
  )
}

export default SubscribeSection