



import { useState } from 'react'

import {
  trackNewsletterSignup,
} from '../analytics'


function useSubscribe(
  source: string = 'website_form'
) {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)


  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault()

    if (!email.trim()) {
      setMessage(
        'Please enter your email.'
      )
      return
    }

    try {
      setLoading(true)
      setMessage('')

      const apiUrl =
        import.meta.env.VITE_API_URL

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
            'Content-Type':
              'application/json',
          },

          body: JSON.stringify({
            email: email.trim(),
          }),
        }
      )


      const data =
        await response.json()


      if (!response.ok) {
        throw new Error(
          data.message ||
            'Subscription failed.'
        )
      }


      // =========================================
      // SUCCESS MESSAGE
      // =========================================

      setMessage(
        data.message ||
          'Welcome to Art All Day!'
      )


      // =========================================
      // ANALYTICS
      //
      // Fires only after successful subscription.
      // =========================================

      trackNewsletterSignup(
        source
      )


      // =========================================
      // CLEAR EMAIL
      // =========================================

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


  return {
    email,
    setEmail,
    message,
    loading,
    handleSubmit,
  }
}


export default useSubscribe