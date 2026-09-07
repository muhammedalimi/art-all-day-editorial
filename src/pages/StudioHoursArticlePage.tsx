

import { useEffect } from 'react'

import {
  Link,
  useNavigate,
  useParams,
} from 'react-router-dom'

import { articles } from '../data/articles'
import { issues } from '../data/issues'

import ReadingProgress from '../components/ReadingProgress'
import Footer from '../components/Footer'
import ListenButton from '../components/ListenButton'

import { trackPageView } from '../analytics'

import '../styles/StudioHoursArticlePage.css'

function StudioHoursArticlePage() {
  const { slug } = useParams()
  const navigate = useNavigate()

  const article =
    articles[slug as keyof typeof articles]

  useEffect(() => {
    if (!article) return

    trackPageView(
      `${article.title} | Art All Day`
    )
  }, [article])

  if (!article) {
    return (
      <main className="studioArticlePage">
        <Link
          to="/"
          className="studioBackLink"
        >
          ← Back to Home
        </Link>

        <h1>Article not found</h1>
      </main>
    )
  }

  // =========================================
  // CURRENT ARTICLE ISSUE
  // =========================================

  const issue = issues.find(
    (item) =>
      item.issueNumber === article.issueNumber
  )

  // =========================================
  // LISTEN BUTTON TEXT
  //
  // Images are ignored.
  // =========================================

  const bodyText = article.body
    .map((block) => {
      if (typeof block === 'string') {
        return block
      }

      if (block.type === 'heading') {
        return block.text
      }

      return ''
    })
    .filter(Boolean)

  const articleText = [
    article.title,
    article.intro,
    ...bodyText,
  ].join('. ')

  // =========================================
  // MORE STUDIO HOURS
  //
  // Current / newest issue comes first.
  // Older issues follow underneath.
  //
  // Current article is excluded.
  // =========================================

  const moreArticles =
    Object.entries(articles)
      .filter(
        ([articleSlug]) =>
          articleSlug !== slug
      )
      .sort(
        ([, articleA], [, articleB]) =>
          articleB.issueNumber -
          articleA.issueNumber
      )
      .slice(0, 7)

  return (
    <main className="studioArticle">
      <ReadingProgress />

      {/* =====================================
          ARTICLE HEADER
          ===================================== */}

      <section className="studioArticleNav">
        <button
          type="button"
          className="studioBackLink"
          onClick={() => navigate(-1)}
        >
          ← Back
        </button>

        <p className="studioSectionLabel">
          {article.category}
        </p>

        <h1 className="studioArticleTitle">
          {article.title}
        </h1>

        <div className="studioArticleInfo">
          <span>
            {issue?.number ||
              article.issue ||
              'Issue'}
          </span>

          <span>
            {article.author ||
              'Art All Day'}
          </span>

          <span>
            {article.readTime}
          </span>
        </div>
      </section>

      {/* =====================================
          HERO IMAGE
          ===================================== */}

      {article.heroImage && (
        <section className="studioArticleHero">
          <img
            src={article.heroImage}
            alt={article.title}
          />
        </section>
      )}

      {/* =====================================
          MUSIC PLAYER
          ===================================== */}

      {article.audio && (
        <section className="studioAudioFeature">
          <div className="studioAudioHeader">
            <p className="studioAudioLabel">
              Art All Day / Studio Notes
            </p>

            <h2>
              {article.title}
            </h2>

            <p className="studioAudioMeta">
              {article.author} · Unreleased · 2026
            </p>
          </div>

          <audio
            className="studioAudioPlayer"
            controls
            preload="metadata"
            src={article.audio}
          >
            Your browser does not support
            the audio element.
          </audio>
        </section>
      )}

      {/* =====================================
          ARTICLE CONTENT
          ===================================== */}

      <section className="studioArticleBody">
        <ListenButton
          text={articleText}
        />

        <p className="studioArticleIntro">
          {article.intro}
        </p>

        {/* ONLY SHOW THIS FOR MUSIC FEATURES */}

        {article.audio && (
          <div className="studioLyricsHeading">
            <p className="studioSectionLabel">
              Words
            </p>

            <h2>
              Lyrics
            </h2>
          </div>
        )}

        <div
          className={
            article.audio
              ? 'studioArticleText studioLyrics'
              : 'studioArticleText'
          }
        >
          {article.body.map(
            (block, index) => {

              // =============================
              // NORMAL PARAGRAPH / LYRICS
              // =============================

              if (
                typeof block === 'string'
              ) {
                return (
                  <p
                    key={index}
                    className={
                      article.audio
                        ? 'studioLyricsBlock'
                        : undefined
                    }
                  >
                    {block}
                  </p>
                )
              }

              // =============================
              // SECTION HEADING
              // =============================

              if (
                block.type === 'heading'
              ) {
                return (
                  <h2
                    key={index}
                    className="studioArticleSectionTitle"
                  >
                    {block.text}
                  </h2>
                )
              }

              // =============================
              // INLINE ARTWORK
              // =============================

              if (
                block.type === 'image'
              ) {
                return (
                  <figure
                    key={index}
                    className="studioArticleArtwork"
                  >
                    <img
                      src={block.src}
                      alt={block.alt}
                    />

                    {(block.title ||
                      block.details ||
                      block.caption) && (
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

                        {block.caption && (
                          <div className="artworkCaption">
                            {block.caption}
                          </div>
                        )}
                      </figcaption>
                    )}
                  </figure>
                )
              }

              return null
            }
          )}
        </div>
      </section>

      {/* =====================================
          MORE STUDIO HOURS
          NEWEST ISSUE FIRST
          ===================================== */}

      <section className="studioMore">
        <p className="studioSectionLabel">
          More Studio Hours
        </p>

        <div className="studioArticleGrid">
          {moreArticles.map(
            ([articleSlug, item]) => {
              const itemIssue =
                issues.find(
                  (issueItem) =>
                    issueItem.issueNumber ===
                    item.issueNumber
                )

              return (
                <Link
                  key={articleSlug}
                  to={`/studio-hours/${articleSlug}`}
                  className="studioArchiveCard"
                >
                  <p>
                    {itemIssue?.number ||
                      item.issue ||
                      'Issue'}
                  </p>

                  <h3>
                    {item.title}
                  </h3>

                  <span>
                    {item.category}
                  </span>
                </Link>
              )
            }
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default StudioHoursArticlePage

