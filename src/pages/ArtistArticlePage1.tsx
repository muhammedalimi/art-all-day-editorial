// import { useEffect, useState } from 'react'
// import {
//   Link,
//   useNavigate,
//   useParams,
// } from 'react-router-dom'

// import {
//   artists,
//   type Artist,
// } from '../data/artists1'

// import { articles } from '../data/articles1'
// import { issues } from '../data/issues'

// import ReadingProgress from '../components/ReadingProgress'
// import ListenButton from '../components/ListenButton'

// import { trackPageView } from '../analytics'


// function ArtistArticlePage() {
//   const { slug } = useParams()
//   const navigate = useNavigate()

//   const [isExpanded, setIsExpanded] =
//     useState(false)


//   // =========================================
//   // ARTIST
//   // =========================================

//   const artist: Artist | undefined =
//     artists.find(
//       (item) => item.slug === slug
//     )


//   // =========================================
//   // ARTICLE
//   // =========================================

//   const articleEntry = Object.entries(
//     articles
//   ).find(
//     ([, article]) =>
//       article.artistSlug === artist?.slug
//   )

//   const articleSlug = articleEntry?.[0]
//   const article = articleEntry?.[1]


//   // =========================================
//   // ANALYTICS
//   // =========================================

//   useEffect(() => {
//     if (!artist || !article) return

//     trackPageView(
//       `${article.title} — ${artist.name} | Art All Day`
//     )
//   }, [artist, article])


//   // =========================================
//   // ARTIST NOT FOUND
//   // =========================================

//   if (!artist) {
//     return (
//       <main className="articlePage">
//         <h1>Artist not found</h1>

//         <Link to="/">
//           Back home
//         </Link>
//       </main>
//     )
//   }


//   // =========================================
//   // NO ARTICLE YET
//   // =========================================

//   if (!article) {
//     return (
//       <main className="articlePage">

//         <section className="articleBodyLayout">

//           <article className="articleBody">

//             <button
//               type="button"
//               className="backLink"
//               onClick={() => navigate(-1)}
//             >
//               ← Back
//             </button>


//             <img
//               src={artist.heroImage}
//               alt={artist.name}
//               style={{
//                 width: '100%',
//                 display: 'block',
//                 marginBottom: '32px',
//               }}
//             />


//             <p className="articleCategory">
//               Artist Archive
//             </p>


//             <h1>
//               {artist.name}
//             </h1>


//             {artist.location &&
//               artist.location.length > 0 && (
//                 <p>
//                   {artist.location.join(' ↔ ')}
//                 </p>
//               )}


//             {artist.disciplines &&
//               artist.disciplines.length > 0 && (
//                 <p>
//                   {artist.disciplines.join(' · ')}
//                 </p>
//               )}


//             {artist.themes &&
//               artist.themes.length > 0 && (
//                 <p>
//                   {artist.themes.join(' / ')}
//                 </p>
//               )}


//             <p>
//               This artist profile is currently
//               being developed by Art All Day.
//             </p>

//           </article>

//         </section>

//       </main>
//     )
//   }


//   // =========================================
//   // ISSUE
//   // =========================================

//   const issue = issues.find(
//     (item) =>
//       item.issueNumber ===
//       article.issueNumber
//   )


//   // =========================================
//   // ARTICLE BODY
//   // =========================================

//   const contentBlocks = article.body


//   // =========================================
//   // LISTEN BUTTON TEXT
//   // =========================================

//   const articleText = [
//     article.title,
//     artist.name,
//     article.intro,

//     ...contentBlocks.map((block) => {
//       if (typeof block === 'string') {
//         return block
//       }

//       if (block.type === 'heading') {
//         return block.text
//       }

//       return ''
//     }),
//   ]
//     .filter(Boolean)
//     .join('. ')


//   // =========================================
//   // ARTICLE PREVIEW
//   // =========================================

//   const visibleContent =
//     isExpanded
//       ? contentBlocks
//       : contentBlocks.slice(0, 4)

//   const hasMoreContent =
//     contentBlocks.length > 4


//   return (
//     <main className="articlePage">

//       <ReadingProgress />


//       {/* =====================================
//           HERO
//           ===================================== */}

//       <section
//         className="articleHero"
//         style={{
//           backgroundImage:
//             `url(${article.heroImage})`,
//         }}
//       >

//         <div className="articleOverlay">

//           <button
//             type="button"
//             className="backLink"
//             onClick={() => navigate(-1)}
//           >
//             ← Back
//           </button>


//           <p className="articleCategory">
//             {article.category}
//           </p>


//           <h1>
//             {article.title}
//           </h1>


//           <div className="articleInfo">

//             <span>
//               {article.author}
//             </span>


//             <span>
//               {article.readTime}
//             </span>


//             {issue && (
//               <span>
//                 {issue.number}
//               </span>
//             )}

//           </div>

//         </div>

//       </section>


//       {/* =====================================
//           ARTICLE
//           ===================================== */}

//       <section className="articleBodyLayout">

//         <article
//           className={`articleBody ${
//             !isExpanded
//               ? 'articlePreview'
//               : ''
//           }`}
//         >

//           <ListenButton
//             text={articleText}
//           />


//           <p className="articleIntro">
//             {article.intro}
//           </p>


//           {visibleContent.map(
//             (block, index) => {

//               // =============================
//               // PARAGRAPH
//               // =============================

//               if (
//                 typeof block === 'string'
//               ) {
//                 return (
//                   <p key={index}>
//                     {block}
//                   </p>
//                 )
//               }


//               // =============================
//               // HEADING
//               // =============================

//               if (
//                 block.type === 'heading'
//               ) {
//                 return (
//                   <h2
//                     key={index}
//                     className="artistArticleHeading"
//                   >
//                     {block.text}
//                   </h2>
//                 )
//               }


//               // =============================
//               // IMAGE
//               // =============================

//               if (
//                 block.type === 'image'
//               ) {
//                 return (
//                   <figure
//                     key={index}
//                     className="artistArticleImage"
//                   >

//                     <img
//                       src={block.src}
//                       alt={block.alt}
//                     />


//                     {(
//                       block.caption ||
//                       block.title ||
//                       block.details
//                     ) && (
//                       <figcaption>

//                         {block.title && (
//                           <div className="artworkTitle">
//                             {block.title}
//                           </div>
//                         )}


//                         {block.details && (
//                           <div className="artworkDetails">
//                             {block.details}
//                           </div>
//                         )}


//                         {block.caption && (
//                           <div className="artworkCaption">
//                             {block.caption}
//                           </div>
//                         )}

//                       </figcaption>
//                     )}

//                   </figure>
//                 )
//               }


//               return null
//             }
//           )}


//           {/* =================================
//               CONTINUE READING
//               ================================= */}

//           {hasMoreContent && (
//             <button
//               type="button"
//               className="continueButton"
//               onClick={() =>
//                 setIsExpanded(
//                   (previous) => !previous
//                 )
//               }
//             >
//               {isExpanded
//                 ? 'Show Less'
//                 : 'Continue Reading'}
//             </button>
//           )}

//         </article>


//         {/* =====================================
//             ARTIST SIDEBAR
//             ===================================== */}

//         <aside className="articleSidebar">

//           <img
//             src={artist.heroImage}
//             alt={artist.name}
//           />


//           <h3>
//             {artist.name}
//           </h3>


//           {artist.location &&
//             artist.location.length > 0 && (
//               <p>
//                 {artist.location.join(' ↔ ')}
//               </p>
//             )}


//           {artist.disciplines &&
//             artist.disciplines.length > 0 && (
//               <p>
//                 {artist.disciplines.join(' · ')}
//               </p>
//             )}


//           {artist.themes &&
//             artist.themes.length > 0 && (
//               <p>
//                 {artist.themes.join(' / ')}
//               </p>
//             )}


//           <p>
//             {article.category}
//           </p>


//           {issue && (
//             <span>
//               {issue.number}
//             </span>
//           )}


//           {articleSlug && (
//             <Link
//               to={`/studio-hours/${articleSlug}`}
//             >
//               Read Story →
//             </Link>
//           )}

//         </aside>

//       </section>

//     </main>
//   )
// }


// export default ArtistArticlePage

import '../styles/ArtistArticlePage1.css'

import { useEffect } from 'react'
import {
  Link,
  useNavigate,
  useParams,
} from 'react-router-dom'

import {
  artists,
  type Artist,
} from '../data/artists1'

import { articles } from '../data/articles1'
import { issues } from '../data/issues'

import { trackPageView } from '../analytics'


function ArtistArticlePage1() {
  const { slug } = useParams()
  const navigate = useNavigate()


  // =========================================
  // ARTIST
  // =========================================

  const artist: Artist | undefined =
    artists.find(
      (item) => item.slug === slug
    )


  // =========================================
  // RELATED STORIES
  //
  // articles1.ts owns the relationship
  // through artistSlug
  // =========================================

  const artistArticles = artist
    ? Object.entries(articles).filter(
        ([, article]) =>
          article.artistSlug === artist.slug
      )
    : []


  // =========================================
  // ANALYTICS
  // =========================================

  useEffect(() => {
    if (!artist) return

    trackPageView(
      `${artist.name} | Artist Profile | Art All Day`
    )
  }, [artist])


  // =========================================
  // ARTIST NOT FOUND
  // =========================================

  if (!artist) {
    return (
      <main className="artistProfilePage">

        <section className="artistProfileMissing">

          <h1>
            Artist not found
          </h1>

          <Link to="/">
            Back home
          </Link>

        </section>

      </main>
    )
  }


  return (
    <main className="artistProfilePage">

      {/* =====================================
          PROFILE HERO
          ===================================== */}

      <section className="artistProfileHero">

        <button
          type="button"
          className="artistProfileBack"
          onClick={() => navigate(-1)}
        >
          ← Back
        </button>


        <p className="artistProfileLabel">
          Artist Profile
        </p>


        <div className="artistProfileHeroGrid">

          {/* =================================
              ARTIST INFO
              ================================= */}

          <div className="artistProfileHeroText">

            <h1>
              {artist.name}
            </h1>


            {artist.location &&
              artist.location.length > 0 && (
                <p className="artistProfileLocation">
                  {artist.location.join(' ↔ ')}
                </p>
              )}


            {artist.disciplines &&
              artist.disciplines.length > 0 && (
                <div className="artistProfileDisciplines">
                  {artist.disciplines.map(
                    (discipline) => (
                      <span key={discipline}>
                        {discipline}
                      </span>
                    )
                  )}
                </div>
              )}


            {artist.bio && (
              <p className="artistProfileBio">
                {artist.bio}
              </p>
            )}

          </div>


          {/* =================================
              HERO IMAGE
              ================================= */}

          <div className="artistProfileHeroImage">

            <img
              src={artist.heroImage}
              alt={artist.name}
            />

          </div>

        </div>

      </section>


      {/* =====================================
          PROFILE DETAILS
          ===================================== */}

      <section className="artistProfileDetails">

        <div className="artistProfileDetailsGrid">

          {/* =================================
              THEMES
              ================================= */}

          <div className="artistProfileSection">

            <p className="artistProfileSectionLabel">
              Themes
            </p>

            {artist.themes &&
            artist.themes.length > 0 ? (
              <div className="artistProfileThemes">

                {artist.themes.map(
                  (theme) => (
                    <span key={theme}>
                      {theme}
                    </span>
                  )
                )}

              </div>
            ) : (
              <p>
                Profile themes coming soon.
              </p>
            )}

          </div>


          {/* =================================
              PROFILE STATUS
              ================================= */}

          <div className="artistProfileSection">

            <p className="artistProfileSectionLabel">
              Art All Day
            </p>

            <p className="artistProfileStatus">
              {artist.status === 'featured'
                ? 'Featured Artist'
                : artist.status === 'watching'
                  ? 'On Our Radar'
                  : 'Artist Archive'}
            </p>

          </div>

        </div>

      </section>


      {/* =====================================
          STORIES
          ===================================== */}

      <section className="artistProfileStories">

        <div className="artistProfileSectionHeader">

          <p className="artistProfileSectionLabel">
            Stories
          </p>

          <h2>
            Coverage
          </h2>

        </div>


        {artistArticles.length > 0 ? (

          <div className="artistProfileStoryGrid">

            {artistArticles.map(
              ([articleSlug, article]) => {

                const issue = issues.find(
                  (item) =>
                    item.issueNumber ===
                    article.issueNumber
                )

                return (
                  <article
                    key={articleSlug}
                    className="artistProfileStoryCard"
                  >

                    <Link
                      to={`/studio-hours/${articleSlug}`}
                      className="artistProfileStoryImage"
                    >
                      <img
                        src={article.heroImage}
                        alt={article.title}
                      />
                    </Link>


                    <div className="artistProfileStoryMeta">

                      <span>
                        {article.category}
                      </span>

                      {issue && (
                        <span>
                          {issue.number}
                        </span>
                      )}

                    </div>


                    <h3>
                      <Link
                        to={`/studio-hours/${articleSlug}`}
                      >
                        {article.title}
                      </Link>
                    </h3>


                    <p className="artistProfileStoryIntro">
                      {article.intro}
                    </p>


                    <Link
                      to={`/studio-hours/${articleSlug}`}
                      className="artistProfileStoryLink"
                    >
                      Read Story →
                    </Link>

                  </article>
                )
              }
            )}

          </div>

        ) : (

          <p className="artistProfileEmpty">
            No published stories yet.
          </p>

        )}

      </section>


      {/* =====================================
          VISUAL INDEX
          ===================================== */}

      {artist.images &&
        artist.images.length > 0 && (

          <section className="artistProfileVisuals">

            <div className="artistProfileSectionHeader">

              <p className="artistProfileSectionLabel">
                Visual Index
              </p>

              <h2>
                Images
              </h2>

            </div>


            <div className="artistProfileVisualGrid">

              {artist.images.map(
                (image, index) => (
                  <figure
                    key={`${artist.slug}-${index}`}
                    className="artistProfileVisual"
                  >
                    <img
                      src={image}
                      alt={`${artist.name} ${index + 1}`}
                    />
                  </figure>
                )
              )}

            </div>

          </section>

        )}


      {/* =====================================
          FUTURE
          ===================================== */}

      <section className="artistProfileFuture">

        <div>

          <p className="artistProfileSectionLabel">
            Living Profile
          </p>

          <h2>
            This profile can grow.
          </h2>

          <p>
            Future updates can include new stories,
            artworks, interviews, studio notes,
            voice notes, and other material connected
            to {artist.name}.
          </p>

        </div>

      </section>

    </main>
  )
}


export default ArtistArticlePage1