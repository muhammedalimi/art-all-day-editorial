



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
//   } = useSubscribe(
//     `article_prompt:${articleSlug}`
//   )


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


//     const timer =
//       window.setTimeout(() => {

//         const trigger =
//           triggerRef.current

//         if (!trigger) return


//         const observer =
//           new IntersectionObserver(
//             ([entry]) => {

//               if (!entry.isIntersecting) {
//                 return
//               }


//               /*
//                * Important:
//                * Don't allow the popup to fire while
//                * ScrollToTop is still settling the route.
//                */

//               if (window.scrollY < 200) {
//                 return
//               }


//               setIsOpen(true)

//               observer.disconnect()
//             },
//             {
//               threshold: 0,
//               rootMargin:
//                 '0px 0px -20% 0px',
//             }
//           )


//         observerRef.current =
//           observer

//         observer.observe(trigger)

//       }, 400)


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
//   } = useSubscribe(
//     `article_popup:${articleSlug}`
//   )


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


//     const timer =
//       window.setTimeout(() => {

//         const trigger =
//           triggerRef.current

//         if (!trigger) return


//         const observer =
//           new IntersectionObserver(
//             ([entry]) => {

//               if (!entry.isIntersecting) {
//                 return
//               }


//               /*
//                * Don't allow the popup to fire
//                * while ScrollToTop is still
//                * settling the route.
//                */

//               if (window.scrollY < 200) {
//                 return
//               }


//               setIsOpen(true)

//               observer.disconnect()
//             },
//             {
//               threshold: 0,
//               rootMargin:
//                 '0px 0px -20% 0px',
//             }
//           )


//         observerRef.current =
//           observer

//         observer.observe(trigger)

//       }, 400)


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
//               Don’t miss the next issue.
//             </h3>


//             <p className="articleSubscribeCopy">
//               Get new artist features, criticism,
//               studio stories, and visual culture
//               from Art All Day.
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
//                   : 'GET THE NEXT ISSUE'}
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
    `article_popup:${articleSlug}`
  )


  const triggerRef =
    useRef<HTMLDivElement | null>(null)

  const observerRef =
    useRef<IntersectionObserver | null>(null)

  const [isOpen, setIsOpen] =
    useState(false)


  useEffect(() => {

    setIsOpen(false)

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
               * Avoid opening too early.
               * Reader should have consumed
               * a meaningful amount first.
               */

              if (window.scrollY < 600) {
                return
              }


              setIsOpen(true)

              observer.disconnect()
            },
            {
              threshold: 0,
              rootMargin:
                '0px 0px -35% 0px',
            }
          )


        observerRef.current =
          observer

        observer.observe(trigger)

      }, 700)


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
              Don’t miss the next issue.
            </h3>


            <p className="articleSubscribeCopy">
              Get new artist features, criticism,
              studio stories, and visual culture
              from Art All Day.
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
                  : 'GET THE NEXT ISSUE'}
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