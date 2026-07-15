import { useEffect, useState } from 'react'

function ReadingProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    function updateProgress() {
      const scrollTop = window.scrollY
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight

      const progressValue = documentHeight > 0 ? (scrollTop / documentHeight) * 100 : 0

      setProgress(progressValue)
    }

    window.addEventListener('scroll', updateProgress)
    updateProgress()

    return () => window.removeEventListener('scroll', updateProgress)
  }, [])

  return (
    <div className="readingProgress">
      <div style={{ width: `${progress}%` }} />
    </div>
  )
}

export default ReadingProgress