import { getCurrentIssueDate } from '../utils/date'

export const issues = [
  {
    slug: 'issue-01',
    number: 'Issue 01',
    title: 'Feeling in Color',
    date: 'July 2026',
    status: 'Current Issue',
    description:
      'This issue follows artists who turn pressure into pigment, faith into structure, memory into surface, and emotion into something the eye can hold.',
  },
  {
    slug: 'issue-02',
    number: 'Issue 02',
    title: 'The Shape of Memory',
    date: getCurrentIssueDate(),
    status: 'Coming Next',
    description:
      'The next issue looks at artists working through memory, family, migration, grief, home, and the personal histories that stay inside an image.',
  },
]