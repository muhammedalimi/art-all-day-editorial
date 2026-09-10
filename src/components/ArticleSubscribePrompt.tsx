// import { useState } from 'react'
// import '../styles/ArticleSubscribePrompt.css'

// function ArticleSubscribePrompt() {
//   const [email, setEmail] = useState('')
//   const [message, setMessage] = useState('')
//   const [loading, setLoading] = useState(false)

//   async function handleSubmit(
//     event: React.FormEvent<HTMLFormElement>
//   ) {
//     event.preventDefault()

//     if (!email.trim()) {
//       setMessage('Enter your email to join.')
//       return
//     }

//     try {
//       setLoading(true)
//       setMessage('')

//       const apiUrl = import.meta.env.VITE_API_URL

//       if (!apiUrl) {
//         throw new Error('VITE_API_URL is not configured.')
//       }

//       const response = await fetch(
//         `${apiUrl}/api/subscribe`,
//         {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             email: email.trim(),
//           }),
//         }
//       )

//       const data = await response.json()

//       if (!response.ok) {
//         throw new Error(
//           data?.message || 'Something went wrong.'
//         )
//       }

//       setMessage('You’re in. Welcome to Art All Day.')
//       setEmail('')
//     } catch (error) {
//       setMessage(
//         error instanceof Error
//           ? error.message
//           : 'Something went wrong.'
//       )
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <aside className="articleSubscribePrompt">
//       <p className="articleSubscribeEyebrow">
//         ART ALL DAY
//       </p>

//       <h3>
//         Art should stay with you.
//       </h3>

//       <p className="articleSubscribeCopy">
//         Get new stories, studio visits, and
//         artist discoveries from Art All Day.
//       </p>

//       <form
//         className="articleSubscribeForm"
//         onSubmit={handleSubmit}
//       >
//         <input
//           type="email"
//           value={email}
//           onChange={(event) =>
//             setEmail(event.target.value)
//           }
//           placeholder="your@email.com"
//           aria-label="Email address"
//         />

//         <button type="submit" disabled={loading}>
//           {loading ? 'JOINING...' : 'JOIN ART ALL DAY'}
//         </button>
//       </form>

//       {message && (
//         <p className="articleSubscribeMessage">
//           {message}
//         </p>
//       )}

//       <p className="articleContinue">
//         CONTINUE READING ↓
//       </p>
//     </aside>
//   )
// }

// export default ArticleSubscribePrompt



// import useSubscribe from '../hooks/useSubscribe'
// import '../styles/ArticleSubscribePrompt.css'

// function ArticleSubscribePrompt() {
//   const {
//     email,
//     setEmail,
//     message,
//     loading,
//     handleSubmit,
//   } = useSubscribe()

//   return (
//     <aside className="articleSubscribePrompt">
//       <p className="articleSubscribeEyebrow">
//         ART ALL DAY
//       </p>

//       <h3>
//         Art should stay with you.
//       </h3>

//       <p className="articleSubscribeCopy">
//         Get new stories, studio visits,
//         and artist discoveries from Art All Day.
//       </p>

//       <form
//         className="articleSubscribeForm"
//         onSubmit={handleSubmit}
//       >
//         <input
//           type="email"
//           placeholder="Email address"
//           value={email}
//           onChange={(event) =>
//             setEmail(event.target.value)
//           }
//           required
//         />

//         <button
//           type="submit"
//           disabled={loading}
//         >
//           {loading
//             ? 'JOINING...'
//             : 'JOIN ART ALL DAY'}
//         </button>
//       </form>

//       {message && (
//         <p className="articleSubscribeMessage">
//           {message}
//         </p>
//       )}

//       <p className="articleContinue">
//         CONTINUE READING ↓
//       </p>
//     </aside>
//   )
// }

// export default ArticleSubscribePrompt


// import { useState } from 'react'
// import useSubscribe from '../hooks/useSubscribe'
// import '../styles/ArticleSubscribePrompt.css'

// function ArticleSubscribePrompt() {
//   const {
//     email,
//     setEmail,
//     message,
//     loading,
//     handleSubmit,
//   } = useSubscribe()

//   const [isOpen, setIsOpen] = useState(true)

//   if (!isOpen) {
//     return null
//   }

//   return (
//     <div className="articleSubscribeOverlay">
//       <aside className="articleSubscribePrompt">
//         <button
//           type="button"
//           className="articleSubscribeClose"
//           aria-label="Close subscribe prompt"
//           onClick={() => setIsOpen(false)}
//         >
//           ×
//         </button>

//         <p className="articleSubscribeEyebrow">
//           ART ALL DAY
//         </p>

//         <h3>
//           Art should stay with you.
//         </h3>

//         <p className="articleSubscribeCopy">
//           Get new stories, studio visits,
//           and artist discoveries from Art All Day.
//         </p>

//         <form
//           className="articleSubscribeForm"
//           onSubmit={handleSubmit}
//         >
//           <input
//             type="email"
//             placeholder="Email address"
//             value={email}
//             onChange={(event) =>
//               setEmail(event.target.value)
//             }
//             required
//           />

//           <button
//             type="submit"
//             disabled={loading}
//           >
//             {loading
//               ? 'JOINING...'
//               : 'JOIN ART ALL DAY'}
//           </button>
//         </form>

//         {message && (
//           <p className="articleSubscribeMessage">
//             {message}
//           </p>
//         )}

//         <button
//           type="button"
//           className="articleContinueButton"
//           onClick={() => setIsOpen(false)}
//         >
//           CONTINUE READING
//         </button>
//       </aside>
//     </div>
//   )
// }

// export default ArticleSubscribePrompt



// import {
//   useEffect,
//   useRef,
//   useState,
// } from 'react'

// import useSubscribe from '../hooks/useSubscribe'
// import '../styles/ArticleSubscribePrompt.css'

// function ArticleSubscribePrompt() {
//   const {
//     email,
//     setEmail,
//     message,
//     loading,
//     handleSubmit,
//   } = useSubscribe()

//   const triggerRef =
//     useRef<HTMLDivElement | null>(null)

//   const [isOpen, setIsOpen] =
//     useState(false)

//   const [hasTriggered, setHasTriggered] =
//     useState(false)

//   useEffect(() => {
//     const triggerElement =
//       triggerRef.current

//     if (!triggerElement) return

//     const observer =
//       new IntersectionObserver(
//         (entries) => {
//           const [entry] = entries

//           if (
//             entry.isIntersecting &&
//             !hasTriggered
//           ) {
//             setIsOpen(true)
//             setHasTriggered(true)

//             observer.disconnect()
//           }
//         },
//         {
//           threshold: 0.2,
//         }
//       )

//     observer.observe(triggerElement)

//     return () => {
//       observer.disconnect()
//     }
//   }, [hasTriggered])

//   return (
//     <>
//       <div
//         ref={triggerRef}
//         className="articleSubscribeTrigger"
//         aria-hidden="true"
//       />

//       {isOpen && (
//         <div className="articleSubscribeOverlay">
//           <aside className="articleSubscribePrompt">
//             <button
//               type="button"
//               className="articleSubscribeClose"
//               aria-label="Close subscribe prompt"
//               onClick={() =>
//                 setIsOpen(false)
//               }
//             >
//               ×
//             </button>

//             <p className="articleSubscribeEyebrow">
//               ART ALL DAY
//             </p>

//             <h3>
//               Art should stay with you.
//             </h3>

//             <p className="articleSubscribeCopy">
//               Get new stories, studio visits,
//               and artist discoveries from Art All Day.
//             </p>

//             <form
//               className="articleSubscribeForm"
//               onSubmit={handleSubmit}
//             >
//               <input
//                 type="email"
//                 placeholder="Email address"
//                 value={email}
//                 onChange={(event) =>
//                   setEmail(
//                     event.target.value
//                   )
//                 }
//                 required
//               />

//               <button
//                 type="submit"
//                 disabled={loading}
//               >
//                 {loading
//                   ? 'JOINING...'
//                   : 'JOIN ART ALL DAY'}
//               </button>
//             </form>

//             {message && (
//               <p className="articleSubscribeMessage">
//                 {message}
//               </p>
//             )}

//             <button
//               type="button"
//               className="articleContinueButton"
//               onClick={() =>
//                 setIsOpen(false)
//               }
//             >
//               CONTINUE READING
//             </button>
//           </aside>
//         </div>
//       )}
//     </>
//   )
// }

// export default ArticleSubscribePrompt



// import {
//   useEffect,
//   useRef,
//   useState,
// } from 'react'

// import useSubscribe from '../hooks/useSubscribe'
// import '../styles/ArticleSubscribePrompt.css'

// function ArticleSubscribePrompt() {
//   const {
//     email,
//     setEmail,
//     message,
//     loading,
//     handleSubmit,
//   } = useSubscribe()

//   const triggerRef =
//     useRef<HTMLDivElement | null>(null)

//   const hasTriggered =
//     useRef(false)

//   const [isOpen, setIsOpen] =
//     useState(false)

//   useEffect(() => {
//     const trigger =
//       triggerRef.current

//     if (!trigger) return

//     const observer =
//       new IntersectionObserver(
//         ([entry]) => {
//           if (
//             entry.isIntersecting &&
//             !hasTriggered.current
//           ) {
//             hasTriggered.current = true
//             setIsOpen(true)

//             observer.disconnect()
//           }
//         },
//         {
//           threshold: 0,
//           rootMargin: '0px 0px -20% 0px',
//         }
//       )

//     observer.observe(trigger)

//     return () => {
//       observer.disconnect()
//     }
//   }, [])

//   function closePrompt() {
//     setIsOpen(false)
//   }

//   return (
//     <>
//       <div
//         ref={triggerRef}
//         className="articleSubscribeTrigger"
//         aria-hidden="true"
//       />

//       {isOpen && (
//         <div className="articleSubscribeOverlay">
//           <aside className="articleSubscribePrompt">
//             <button
//               type="button"
//               className="articleSubscribeClose"
//               aria-label="Close subscribe prompt"
//               onClick={closePrompt}
//             >
//               ×
//             </button>

//             <p className="articleSubscribeEyebrow">
//               ART ALL DAY
//             </p>

//             <h3>
//               Art should stay with you.
//             </h3>

//             <p className="articleSubscribeCopy">
//               Get new stories, studio visits,
//               and artist discoveries from Art All Day.
//             </p>

//             <form
//               className="articleSubscribeForm"
//               onSubmit={handleSubmit}
//             >
//               <input
//                 type="email"
//                 placeholder="Email address"
//                 value={email}
//                 onChange={(event) =>
//                   setEmail(
//                     event.target.value
//                   )
//                 }
//                 required
//               />

//               <button
//                 type="submit"
//                 disabled={loading}
//               >
//                 {loading
//                   ? 'JOINING...'
//                   : 'JOIN ART ALL DAY'}
//               </button>
//             </form>

//             {message && (
//               <p className="articleSubscribeMessage">
//                 {message}
//               </p>
//             )}

//             <button
//               type="button"
//               className="articleContinueButton"
//               onClick={closePrompt}
//             >
//               CONTINUE READING
//             </button>
//           </aside>
//         </div>
//       )}
//     </>
//   )
// }

// export default ArticleSubscribePrompt



// import {
//   useEffect,
//   useRef,
//   useState,
// } from 'react'

// import useSubscribe from '../hooks/useSubscribe'
// import '../styles/ArticleSubscribePrompt.css'

// type ArticleSubscribePromptProps = {
//   articleSlug: string
// }

// function ArticleSubscribePrompt({
//   articleSlug,
// }: ArticleSubscribePromptProps) {
//   const {
//     email,
//     setEmail,
//     message,
//     loading,
//     handleSubmit,
//   } = useSubscribe()

//   const triggerRef =
//     useRef<HTMLDivElement | null>(null)

//   const observerRef =
//     useRef<IntersectionObserver | null>(null)

//   const [isOpen, setIsOpen] =
//     useState(false)

//   useEffect(() => {
//     // New article = always start closed
//     setIsOpen(false)

//     // Disconnect observer from previous article
//     observerRef.current?.disconnect()

//     const timer = window.setTimeout(() => {
//       const trigger =
//         triggerRef.current

//       if (!trigger) return

//       const observer =
//         new IntersectionObserver(
//           ([entry]) => {
//             if (!entry.isIntersecting) {
//               return
//             }

//             /*
//              * Important:
//              * Don't allow the popup to fire while
//              * ScrollToTop is still settling the route.
//              */
//             if (window.scrollY < 200) {
//               return
//             }

//             setIsOpen(true)

//             observer.disconnect()
//           },
//           {
//             threshold: 0,
//             rootMargin:
//               '0px 0px -20% 0px',
//           }
//         )

//       observerRef.current = observer

//       observer.observe(trigger)
//     }, 400)

//     return () => {
//       window.clearTimeout(timer)

//       observerRef.current?.disconnect()
//     }
//   }, [articleSlug])

//   function closePrompt() {
//     setIsOpen(false)

//     observerRef.current?.disconnect()
//   }

//   return (
//     <>
//       <div
//         ref={triggerRef}
//         className="articleSubscribeTrigger"
//         aria-hidden="true"
//       />

//       {isOpen && (
//         <div className="articleSubscribeOverlay">
//           <aside className="articleSubscribePrompt">
//             <button
//               type="button"
//               className="articleSubscribeClose"
//               aria-label="Close subscribe prompt"
//               onClick={closePrompt}
//             >
//               ×
//             </button>

//             <p className="articleSubscribeEyebrow">
//               ART ALL DAY
//             </p>

//             <h3>
//               Art should stay with you.
//             </h3>

//             <p className="articleSubscribeCopy">
//               Get new stories, studio visits,
//               and artist discoveries from Art All Day.
//             </p>

//             <form
//               className="articleSubscribeForm"
//               onSubmit={handleSubmit}
//             >
//               <input
//                 type="email"
//                 placeholder="Email address"
//                 value={email}
//                 onChange={(event) =>
//                   setEmail(
//                     event.target.value
//                   )
//                 }
//                 required
//               />

//               <button
//                 type="submit"
//                 disabled={loading}
//               >
//                 {loading
//                   ? 'JOINING...'
//                   : 'JOIN ART ALL DAY'}
//               </button>
//             </form>

//             {message && (
//               <p className="articleSubscribeMessage">
//                 {message}
//               </p>
//             )}

//             <button
//               type="button"
//               className="articleContinueButton"
//               onClick={closePrompt}
//             >
//               CONTINUE READING
//             </button>
//           </aside>
//         </div>
//       )}
//     </>
//   )
// }

// export default ArticleSubscribePrompt



import {
  useEffect,
  useRef,
  useState,
} from 'react'

import useSubscribe from '../hooks/useSubscribe'
import '../styles/ArticleSubscribePrompt.css'


type ArticleSubscribePromptProps = {
  articleSlug: string
}


function ArticleSubscribePrompt({
  articleSlug,
}: ArticleSubscribePromptProps) {

  const {
    email,
    setEmail,
    message,
    loading,
    handleSubmit,
  } = useSubscribe(
    `article_prompt:${articleSlug}`
  )


  const triggerRef =
    useRef<HTMLDivElement | null>(null)

  const observerRef =
    useRef<IntersectionObserver | null>(null)

  const [isOpen, setIsOpen] =
    useState(false)


  useEffect(() => {

    // New article = always start closed
    setIsOpen(false)

    // Disconnect observer from previous article
    observerRef.current?.disconnect()


    const timer =
      window.setTimeout(() => {

        const trigger =
          triggerRef.current

        if (!trigger) return


        const observer =
          new IntersectionObserver(
            ([entry]) => {

              if (!entry.isIntersecting) {
                return
              }


              /*
               * Important:
               * Don't allow the popup to fire while
               * ScrollToTop is still settling the route.
               */

              if (window.scrollY < 200) {
                return
              }


              setIsOpen(true)

              observer.disconnect()
            },
            {
              threshold: 0,
              rootMargin:
                '0px 0px -20% 0px',
            }
          )


        observerRef.current =
          observer

        observer.observe(trigger)

      }, 400)


    return () => {

      window.clearTimeout(timer)

      observerRef.current?.disconnect()
    }

  }, [articleSlug])


  function closePrompt() {

    setIsOpen(false)

    observerRef.current?.disconnect()
  }


  return (
    <>

      <div
        ref={triggerRef}
        className="articleSubscribeTrigger"
        aria-hidden="true"
      />


      {isOpen && (

        <div className="articleSubscribeOverlay">

          <aside className="articleSubscribePrompt">

            <button
              type="button"
              className="articleSubscribeClose"
              aria-label="Close subscribe prompt"
              onClick={closePrompt}
            >
              ×
            </button>


            <p className="articleSubscribeEyebrow">
              ART ALL DAY
            </p>


            <h3>
              Art should stay with you.
            </h3>


            <p className="articleSubscribeCopy">
              Get new stories, studio visits,
              and artist discoveries from Art All Day.
            </p>


            <form
              className="articleSubscribeForm"
              onSubmit={handleSubmit}
            >

              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(event) =>
                  setEmail(
                    event.target.value
                  )
                }
                required
              />


              <button
                type="submit"
                disabled={loading}
              >
                {loading
                  ? 'JOINING...'
                  : 'JOIN ART ALL DAY'}
              </button>

            </form>


            {message && (

              <p className="articleSubscribeMessage">
                {message}
              </p>

            )}


            <button
              type="button"
              className="articleContinueButton"
              onClick={closePrompt}
            >
              CONTINUE READING
            </button>

          </aside>

        </div>

      )}

    </>
  )
}


export default ArticleSubscribePrompt