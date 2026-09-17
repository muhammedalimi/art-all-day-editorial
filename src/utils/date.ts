export function getCurrentIssueDate() {
  const currentDate = new Date()

  return currentDate.toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  })
}

export function getFullCurrentDate() {
  const currentDate = new Date()

  return currentDate.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

export function formatArticleDate(
  publishedAt: string
) {
  const publishedDate = new Date(publishedAt)

  return publishedDate.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}