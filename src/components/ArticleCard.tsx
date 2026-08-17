// type ArticleCardProps = {
//   category: string
//   title: string
//   text: string
// }

// function ArticleCard({ category, title, text }: ArticleCardProps) {
//   return (
//     <article className="articleCard">
//       <p>{category}</p>
//       <h3>{title}</h3>
//       <span>{text}</span>
//     </article>
//   )
// }

// export default ArticleCard

/* Version 2 */

// type ArticleCardProps = {
//   category: string
//   title: string
//   text: string
//   author: string
//   readTime: string
// }

// function ArticleCard({
//   category,
//   title,
//   text,
//   author,
//   readTime,
// }: ArticleCardProps) {
//   return (
//     <article className="articleCard">
//       <div>
//         <p className="articleCategory">{category}</p>
//         <h3>{title}</h3>
//         <span>{text}</span>
//       </div>

//       <div className="articleMeta">
//         <p>{author}</p>
//         <p>{readTime}</p>
//       </div>
//     </article>
//   )
// }

// export default ArticleCard

/* Version 3 */
import { Link } from 'react-router-dom'

interface ArticleCardProps {
  category: string
  title: string
  text: string
  author: string
  readTime: string
  link: string
}

function ArticleCard({
  category,
  title,
  text,
  author,
  readTime,
  link,
}: ArticleCardProps) {
  return (
    <Link to={link} className="articleCard">
      <article>
        <p className="articleCategory">{category}</p>

        <h3>{title}</h3>

        <p>{text}</p>

        <div className="articleMeta">
          <span>{author}</span>
          <span>{readTime}</span>
        </div>
      </article>
    </Link>
  )
}

export default ArticleCard