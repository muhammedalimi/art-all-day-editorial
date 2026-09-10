// const GA_ID = 'G-PFY9RL5BTL'

// declare global {
//   interface Window {
//     dataLayer: unknown[]
//     gtag?: (...args: unknown[]) => void
//   }
// }

// export function initAnalytics() {
//   if (document.getElementById('google-analytics')) {
//     return
//   }

//   const script = document.createElement('script')
//   script.id = 'google-analytics'
//   script.async = true
//   script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`

//   document.head.appendChild(script)

//   window.dataLayer = window.dataLayer || []

//   window.gtag = (...args: unknown[]) => {
//     window.dataLayer.push(args)
//   }

//   window.gtag('js', new Date())
//   window.gtag('config', GA_ID)
// // }


// const GA_ID = 'G-PFY9RL5BTL'

// declare global {
//   interface Window {
//     dataLayer: unknown[]
//     gtag?: (...args: unknown[]) => void
//   }
// }

// export function initAnalytics() {
//   if (document.getElementById('google-analytics')) {
//     return
//   }

//   const script = document.createElement('script')
//   script.id = 'google-analytics'
//   script.async = true
//   script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`

//   document.head.appendChild(script)

//   window.dataLayer = window.dataLayer || []

//   window.gtag = (...args: unknown[]) => {
//     window.dataLayer.push(args)
//   }

//   window.gtag('js', new Date())
//   window.gtag('config', GA_ID)
// }

// export function trackPageView(title: string, path?: string) {
//   document.title = title

//   window.gtag?.('event', 'page_view', {
//     page_title: title,
//     page_path: path ?? window.location.pathname,
//     page_location: window.location.href,
//   })
// }

// const GA_ID = 'G-PFY9RL5BTL'

// declare global {
//   interface Window {
//     dataLayer: unknown[]
//     gtag?: (...args: unknown[]) => void
//   }
// }

// export function initAnalytics() {
//   if (document.getElementById('google-analytics')) {
//     return
//   }

//   window.dataLayer = window.dataLayer || []

//   window.gtag = (...args: unknown[]) => {
//     window.dataLayer.push(args)
//   }

//   window.gtag('js', new Date())

//   window.gtag('config', GA_ID, {
//     send_page_view: false,
//   })

//   const script = document.createElement('script')
//   script.id = 'google-analytics'
//   script.async = true
//   script.src =
//     `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`

//   document.head.appendChild(script)
// }

// export function trackPageView(
//   title: string,
//   path?: string
// ) {
//   document.title = title

//   window.gtag?.('event', 'page_view', {
//     page_title: title,
//     page_path:
//       path ?? window.location.pathname,
//     page_location:
//       window.location.href,
//   })
// }





// const GA_ID = 'G-PFY9RL5BTL'

// declare global {
//   interface Window {
//     dataLayer: unknown[]
//     gtag?: (...args: unknown[]) => void
//   }
// }

// export function initAnalytics() {
//   if (document.getElementById('google-analytics')) {
//     return
//   }

//   window.dataLayer = window.dataLayer || []

//   window.gtag = (...args: unknown[]) => {
//     window.dataLayer.push(args)
//   }

//   window.gtag('js', new Date())
//   window.gtag('config', GA_ID)

//   const script = document.createElement('script')
//   script.id = 'google-analytics'
//   script.async = true
//   script.src =
//     `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`

//   document.head.appendChild(script)
// }

// export function trackPageView(
//   title: string,
//   path?: string
// ) {
//   document.title = title

//   window.gtag?.('event', 'page_view', {
//     page_title: title,
//     page_path:
//       path ?? window.location.pathname,
//     page_location:
//       window.location.href,
//   })
// }




// const GA_ID = 'G-PFY9RL5BTL'

// declare global {
//   interface Window {
//     dataLayer: unknown[]
//     gtag?: (...args: unknown[]) => void
//   }
// }

// export function initAnalytics() {
//   if (document.getElementById('google-analytics')) {
//     return
//   }

//   window.dataLayer = window.dataLayer || []

//   window.gtag = function () {
//     window.dataLayer.push(arguments)
//   }

//   window.gtag('js', new Date())
//   window.gtag('config', GA_ID)

//   const script = document.createElement('script')
//   script.id = 'google-analytics'
//   script.async = true
//   script.src =
//     `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`

//   document.head.appendChild(script)
// }

// export function trackPageView(
//   title: string,
//   path?: string
// ) {
//   document.title = title

//   window.gtag?.('event', 'page_view', {
//     page_title: title,
//     page_path:
//       path ?? window.location.pathname,
//     page_location:
//       window.location.href,
//   })
// }


// /* =========================================================
//    CUSTOM ANALYTICS EVENTS
//    ========================================================= */

// export function trackEvent(
//   eventName: string,
//   parameters: Record<string, unknown> = {}
// ) {
//   window.gtag?.(
//     'event',
//     eventName,
//     parameters
//   )
// }



const GA_ID = 'G-PFY9RL5BTL'


declare global {
  interface Window {
    dataLayer: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}


// =========================================================
// INITIALIZE GOOGLE ANALYTICS
// =========================================================

export function initAnalytics() {
  if (document.getElementById('google-analytics')) {
    return
  }

  window.dataLayer = window.dataLayer || []

  window.gtag = function () {
    window.dataLayer.push(arguments)
  }

  window.gtag('js', new Date())

  window.gtag('config', GA_ID)

  const script = document.createElement('script')

  script.id = 'google-analytics'
  script.async = true

  script.src =
    `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`

  document.head.appendChild(script)
}


// =========================================================
// PAGE VIEW
// =========================================================

export function trackPageView(
  title: string,
  path?: string
) {
  document.title = title

  window.gtag?.('event', 'page_view', {
    page_title: title,

    page_path:
      path ?? window.location.pathname,

    page_location:
      window.location.href,
  })
}


// =========================================================
// GENERIC CUSTOM EVENT
// =========================================================

export function trackEvent(
  eventName: string,
  parameters: Record<string, unknown> = {}
) {
  window.gtag?.(
    'event',
    eventName,
    parameters
  )
}


// =========================================================
// ARTICLE EVENTS
// =========================================================

type ArticleAnalyticsData = {
  articleSlug: string
  articleTitle: string
  category?: string
  issueNumber?: number
  artistSlug?: string
}


export function trackArticleView({
  articleSlug,
  articleTitle,
  category,
  issueNumber,
  artistSlug,
}: ArticleAnalyticsData) {
  trackEvent(
    'article_view',
    {
      article_slug: articleSlug,
      article_title: articleTitle,
      category,
      issue_number: issueNumber,
      artist_slug: artistSlug,
    }
  )
}


export function trackArticleRead50({
  articleSlug,
  articleTitle,
  category,
  issueNumber,
  artistSlug,
}: ArticleAnalyticsData) {
  trackEvent(
    'article_read_50',
    {
      article_slug: articleSlug,
      article_title: articleTitle,
      category,
      issue_number: issueNumber,
      artist_slug: artistSlug,
      scroll_depth: 50,
    }
  )
}


export function trackArticleRead90({
  articleSlug,
  articleTitle,
  category,
  issueNumber,
  artistSlug,
}: ArticleAnalyticsData) {
  trackEvent(
    'article_read_90',
    {
      article_slug: articleSlug,
      article_title: articleTitle,
      category,
      issue_number: issueNumber,
      artist_slug: artistSlug,
      scroll_depth: 90,
    }
  )
}


// =========================================================
// ARTIST PROFILE EVENTS
// =========================================================

type ArtistAnalyticsData = {
  artistSlug: string
  artistName: string
  issueNumber?: number
  status?: string
}


export function trackArtistProfileView({
  artistSlug,
  artistName,
  issueNumber,
  status,
}: ArtistAnalyticsData) {
  trackEvent(
    'artist_profile_view',
    {
      artist_slug: artistSlug,
      artist_name: artistName,
      issue_number: issueNumber,
      artist_status: status,
    }
  )
}


// =========================================================
// ARTIST STORY CLICK
// =========================================================

type ArtistStoryClickData = {
  artistSlug: string
  artistName: string
  articleSlug: string
  articleTitle: string
}


export function trackArtistStoryClick({
  artistSlug,
  artistName,
  articleSlug,
  articleTitle,
}: ArtistStoryClickData) {
  trackEvent(
    'artist_story_click',
    {
      artist_slug: artistSlug,
      artist_name: artistName,
      article_slug: articleSlug,
      article_title: articleTitle,
    }
  )
}


// =========================================================
// LISTEN EVENT
// =========================================================

type ListenAnalyticsData = {
  title?: string
  articleSlug?: string
  artistSlug?: string
}


export function trackListenStarted({
  title,
  articleSlug,
  artistSlug,
}: ListenAnalyticsData = {}) {
  trackEvent(
    'listen_started',
    {
      title,
      article_slug: articleSlug,
      artist_slug: artistSlug,
    }
  )
}


// =========================================================
// NEWSLETTER EVENTS
// =========================================================

export function trackNewsletterSignup(
  source: string = 'unknown'
) {
  trackEvent(
    'newsletter_signup',
    {
      signup_source: source,
    }
  )
}


// =========================================================
// SUBMISSION EVENTS
// =========================================================

export function trackSubmissionStarted(
  source: string = 'submit_page'
) {
  trackEvent(
    'submission_started',
    {
      submission_source: source,
    }
  )
}


export function trackSubmissionCompleted(
  source: string = 'submit_page'
) {
  trackEvent(
    'submission_completed',
    {
      submission_source: source,
    }
  )
}