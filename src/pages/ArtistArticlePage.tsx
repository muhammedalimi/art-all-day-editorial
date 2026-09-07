


import { useEffect, useState } from 'react'
import {
  Link,
  useNavigate,
  useParams,
} from 'react-router-dom'

import { artists } from '../data/artists'
import { issues } from '../data/issues'
import { departments } from '../data/departments'
import { issueDepartments } from '../data/issueDepartments'

import ReadingProgress from '../components/ReadingProgress'
import ListenButton from '../components/ListenButton'

import { trackPageView } from '../analytics'

function ArtistArticlePage() {
  const { slug } = useParams()
  const navigate = useNavigate()

  const [isExpanded, setIsExpanded] =
    useState(false)

  const artist = artists.find(
    (item) => item.slug === slug
  )

  useEffect(() => {
    if (!artist) return

    trackPageView(
      `${artist.title} — ${artist.name} | Art All Day`
    )
  }, [artist])

  if (!artist) {
    return (
      <main className="articlePage">
        <h1>Artist not found</h1>

        <Link to="/">
          Back home
        </Link>
      </main>
    )
  }

  // =========================================
  // ISSUE
  // =========================================

  const issue = issues.find(
    (item) =>
      item.issueNumber === artist.issueNumber
  )

  // =========================================
  // DEPARTMENT
  // =========================================

  const issueData = issue
    ? issueDepartments[issue.slug]
    : undefined

  const departmentEntry = issueData
    ? Object.entries(
        issueData.departments
      ).find(
        ([, feature]) =>
          feature.link ===
          `/artists/${artist.slug}`
      )
    : undefined

  const departmentSlug =
    departmentEntry?.[0]

  const department = departments.find(
    (item) =>
      item.slug === departmentSlug
  )

  const departmentName =
    department?.name || 'Artist Feature'

  // =========================================
  // CONTENT
  // Supports:
  // paragraph
  // heading
  // quote
  // image
  //
  // Old artist entries using paragraphs[]
  // still work automatically.
  // =========================================

  const contentBlocks =
    artist.content ??
    (artist.paragraphs ?? []).map(
      (paragraph) => ({
        type: 'paragraph' as const,
        text: paragraph,
      })
    )

  // =========================================
  // LISTEN BUTTON TEXT
  //
  // Image blocks do not contain text,
  // so only readable blocks are included.
  // =========================================

  const articleText = [
    artist.name,
    artist.title,
    artist.intro,

    ...contentBlocks.map((block) =>
      'text' in block
        ? block.text
        : ''
    ),
  ]
    .filter(Boolean)
    .join('. ')

  // =========================================
  // ARTICLE PREVIEW
  // =========================================

  const visibleContent =
    isExpanded
      ? contentBlocks
      : contentBlocks.slice(0, 4)

  const hasMoreContent =
    contentBlocks.length > 4

  return (
    <main className="articlePage">
      <ReadingProgress />

      {/* =====================================
          HERO
          ===================================== */}

      <section
        className="articleHero"
        style={{
          backgroundImage:
            `url(${artist.heroImage})`,
        }}
      >
        <div className="articleOverlay">
          <button
            type="button"
            className="backLink"
            onClick={() => navigate(-1)}
          >
            ← Back
          </button>

          <p className="articleCategory">
            {departmentName}
          </p>

          <h1>
            {artist.title}
          </h1>

          <div className="articleInfo">
            <span>
              {artist.date}
            </span>

            <span>
              {artist.author}
            </span>

            {issue && (
              <span>
                {issue.number}
              </span>
            )}
          </div>
        </div>
      </section>

      {/* =====================================
          ARTICLE
          ===================================== */}

      <section className="articleBodyLayout">
        <article
          className={`articleBody ${
            !isExpanded
              ? 'articlePreview'
              : ''
          }`}
        >
          <ListenButton
            text={articleText}
          />

          <p className="articleIntro">
            {artist.intro}
          </p>

          {visibleContent.map(
            (block, index) => {
              // =============================
              // HEADING
              // =============================

              if (
                block.type === 'heading'
              ) {
                return (
                  <h2
                    key={index}
                    className="artistArticleHeading"
                  >
                    {block.text}
                  </h2>
                )
              }

              // =============================
              // QUOTE
              // =============================

              if (
                block.type === 'quote'
              ) {
                return (
                  <blockquote
                    key={index}
                    className="artistArticleQuote"
                  >
                    {block.text}
                  </blockquote>
                )
              }

              // =============================
              // IMAGE
              // =============================

              // if (
              //   block.type === 'image'
              // ) {
              //   return (
              //     <figure
              //       key={index}
              //       className="artistArticleImage"
              //     >
              //       <img
              //         src={block.src}
              //         alt={block.alt}
              //       />

              //       {block.caption && (
              //         <figcaption>
              //           {block.caption}
              //         </figcaption>
              //       )}
              //     </figure>
              //   )
              // }


              if (block.type === 'image') {
              return (
                <figure
                  key={index}
                  className="artistArticleImage"
                >
                  <img
                    src={block.src}
                    alt={block.alt}
                  />

                  {(block.title || block.details) && (
                    <figcaption>
                      {block.title && (
                        <div className="artworkTitle">
                          {block.title}
                        </div>
                      )}

                      {block.details && (
                        <div className="artworkDetails">
                          {block.details}
                        </div>
                      )}
                    </figcaption>
                  )}
                </figure>
              )
            }

              // =============================
              // PARAGRAPH
              // =============================

              return (
                <p key={index}>
                  {block.text}
                </p>
              )
            }
          )}

          {/* =================================
              CONTINUE READING
              ================================= */}

          {hasMoreContent && (
            <button
              type="button"
              className="continueButton"
              onClick={() =>
                setIsExpanded(
                  (previous) => !previous
                )
              }
            >
              {isExpanded
                ? 'Show Less'
                : 'Continue Reading'}
            </button>
          )}
        </article>

        {/* =====================================
            SIDEBAR
            ===================================== */}

        <aside className="articleSidebar">
          <img
            src={artist.heroImage}
            alt={artist.name}
          />

          <h3>
            {artist.name}
          </h3>

          <p>
            {departmentName}
          </p>

          {issue && (
            <span>
              {issue.number}
            </span>
          )}
        </aside>
      </section>
    </main>
  )
}

export default ArtistArticlePage