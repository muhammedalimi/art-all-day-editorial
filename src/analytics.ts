const GA_ID = 'G-PFY9RL5BTL'

declare global {
  interface Window {
    dataLayer: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

export function initAnalytics() {
  if (document.getElementById('google-analytics')) {
    return
  }

  const script = document.createElement('script')
  script.id = 'google-analytics'
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`

  document.head.appendChild(script)

  window.dataLayer = window.dataLayer || []

  window.gtag = (...args: unknown[]) => {
    window.dataLayer.push(args)
  }

  window.gtag('js', new Date())
  window.gtag('config', GA_ID)
}