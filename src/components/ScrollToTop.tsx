// import { useEffect } from 'react'
// import { useLocation } from 'react-router-dom'

// function ScrollToTop() {
//   const { pathname } = useLocation()

//   useEffect(() => {
//     window.scrollTo(0, 0)
//   }, [pathname])

//   return null
// }

// export default ScrollToTop
// import { useEffect } from 'react'
// import {
//   useLocation,
//   useNavigationType,
// } from 'react-router-dom'

// function ScrollToTop() {
//   const location = useLocation()
//   const navigationType = useNavigationType()

//   const storageKey = `scroll:${location.key}`

//   // We manage restoration ourselves
//   useEffect(() => {
//     if ('scrollRestoration' in window.history) {
//       window.history.scrollRestoration = 'manual'
//     }
//   }, [])

//   // Save current position while scrolling
//   useEffect(() => {
//     const savePosition = () => {
//       sessionStorage.setItem(
//         storageKey,
//         String(window.scrollY)
//       )
//     }

//     window.addEventListener(
//       'scroll',
//       savePosition,
//       { passive: true }
//     )

//     return () => {
//       savePosition()

//       window.removeEventListener(
//         'scroll',
//         savePosition
//       )
//     }
//   }, [storageKey])

//   // Restore on Back / Forward,
//   // otherwise start new routes at top
//   useEffect(() => {
//     if (navigationType === 'POP') {
//       const savedPosition = Number(
//         sessionStorage.getItem(storageKey) || 0
//       )

//       requestAnimationFrame(() => {
//         requestAnimationFrame(() => {
//           window.scrollTo({
//             top: savedPosition,
//             left: 0,
//             behavior: 'auto',
//           })
//         })
//       })

//       return
//     }

//     window.scrollTo({
//       top: 0,
//       left: 0,
//       behavior: 'auto',
//     })
//   }, [
//     location.key,
//     navigationType,
//     storageKey,
//   ])

//   return null
// }

// export default ScrollToTop


import { useEffect } from 'react'
import {
  useLocation,
  useNavigationType,
} from 'react-router-dom'

function ScrollToTop() {
  const location = useLocation()
  const navigationType = useNavigationType()

  const storageKey = `scroll:${location.key}`

  // We control scroll restoration ourselves
  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, [])

  // Save this page's scroll position while the user scrolls
  useEffect(() => {
    const saveScrollPosition = () => {
      sessionStorage.setItem(
        storageKey,
        String(window.scrollY)
      )
    }

    window.addEventListener(
      'scroll',
      saveScrollPosition,
      { passive: true }
    )

    return () => {
      window.removeEventListener(
        'scroll',
        saveScrollPosition
      )
    }
  }, [storageKey])

  // Handle route changes
  useEffect(() => {
    // Back / Forward navigation
    if (navigationType === 'POP') {
      const savedPosition = Number(
        sessionStorage.getItem(storageKey) ?? 0
      )

      // First restore
      const firstTimer = window.setTimeout(() => {
        window.scrollTo({
          top: savedPosition,
          left: 0,
          behavior: 'auto',
        })
      }, 50)

      // Restore again after the layout settles
      const secondTimer = window.setTimeout(() => {
        window.scrollTo({
          top: savedPosition,
          left: 0,
          behavior: 'auto',
        })
      }, 250)

      return () => {
        window.clearTimeout(firstTimer)
        window.clearTimeout(secondTimer)
      }
    }

    // Normal navigation starts at the top
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto',
    })
  }, [
    location.key,
    navigationType,
    storageKey,
  ])

  return null
}

export default ScrollToTop