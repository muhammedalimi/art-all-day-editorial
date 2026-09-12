


// import '../styles/ArtistArticlePage1.css'

// import { useEffect } from 'react'

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

// import {
//   trackArtistProfileView,
//   trackArtistStoryClick,
//   trackPageView,
// } from '../analytics'


// function ArtistArticlePage1() {
//   const { slug } = useParams()
//   const navigate = useNavigate()


//   // =========================================
//   // ARTIST
//   // =========================================

//   const artist: Artist | undefined =
//     artists.find(
//       (item) => item.slug === slug
//     )


//   // =========================================
//   // RELATED STORIES
//   // =========================================

//   const artistArticles = artist
//     ? Object.entries(articles).filter(
//         ([, article]) =>
//           article.artistSlug === artist.slug
//       )
//     : []


//   // =========================================
//   // ANALYTICS
//   // =========================================

//   useEffect(() => {
//     if (!artist) return

//     trackPageView(
//       `${artist.name} | Artist Profile | Art All Day`
//     )

//     trackArtistProfileView({
//       artistSlug: artist.slug,
//       artistName: artist.name,
//       issueNumber: artist.issueNumber,
//       status: artist.status,
//     })
//   }, [artist])


//   // =========================================
//   // STORY CLICK ANALYTICS
//   // =========================================

//   function handleStoryClick(
//     articleSlug: string,
//     articleTitle: string
//   ) {
//     if (!artist) return

//     trackArtistStoryClick({
//       artistSlug: artist.slug,
//       artistName: artist.name,
//       articleSlug,
//       articleTitle,
//     })
//   }


//   // =========================================
//   // ARTIST NOT FOUND
//   // =========================================

//   if (!artist) {
//     return (
//       <main className="artistProfilePage">

//         <section className="artistProfileMissing">

//           <h1>
//             Artist not found
//           </h1>

//           <Link to="/">
//             Back home
//           </Link>

//         </section>

//       </main>
//     )
//   }


//   return (
//     <main className="artistProfilePage">

//       {/* =====================================
//           PROFILE HERO
//           ===================================== */}

//       <section className="artistProfileHero">

//         <button
//           type="button"
//           className="artistProfileBack"
//           onClick={() => navigate(-1)}
//         >
//           ← Back
//         </button>


//         <p className="artistProfileLabel">
//           Artist Profile
//         </p>


//         <div className="artistProfileHeroGrid">

//           {/* =================================
//               ARTIST INFO
//               ================================= */}

//           <div className="artistProfileHeroText">

//             <h1>
//               {artist.name}
//             </h1>


//             {artist.location &&
//               artist.location.length > 0 && (
//                 <p className="artistProfileLocation">
//                   {artist.location.join(' ↔ ')}
//                 </p>
//               )}


//             {artist.disciplines &&
//               artist.disciplines.length > 0 && (
//                 <div className="artistProfileDisciplines">
//                   {artist.disciplines.map(
//                     (discipline) => (
//                       <span key={discipline}>
//                         {discipline}
//                       </span>
//                     )
//                   )}
//                 </div>
//               )}


//             {artist.bio && (
//               <p className="artistProfileBio">
//                 {artist.bio}
//               </p>
//             )}

//           </div>


//           {/* =================================
//               HERO IMAGE
//               ================================= */}

//           <div className="artistProfileHeroImage">

//             <img
//               src={artist.heroImage}
//               alt={artist.name}
//             />

//           </div>

//         </div>

//       </section>


//       {/* =====================================
//           PROFILE DETAILS
//           ===================================== */}

//       <section className="artistProfileDetails">

//         <div className="artistProfileDetailsGrid">

//           {/* =================================
//               THEMES
//               ================================= */}

//           <div className="artistProfileSection">

//             <p className="artistProfileSectionLabel">
//               Themes
//             </p>

//             {artist.themes &&
//             artist.themes.length > 0 ? (

//               <div className="artistProfileThemes">

//                 {artist.themes.map(
//                   (theme) => (
//                     <span key={theme}>
//                       {theme}
//                     </span>
//                   )
//                 )}

//               </div>

//             ) : (

//               <p>
//                 Profile themes coming soon.
//               </p>

//             )}

//           </div>


//           {/* =================================
//               PROFILE STATUS
//               ================================= */}

//           <div className="artistProfileSection">

//             <p className="artistProfileSectionLabel">
//               Art All Day
//             </p>

//             <p className="artistProfileStatus">
//               {artist.status === 'featured'
//                 ? 'Featured Artist'
//                 : artist.status === 'watching'
//                   ? 'On Our Radar'
//                   : 'Artist Archive'}
//             </p>

//           </div>

//         </div>

//       </section>


//       {/* =====================================
//           STORIES
//           ===================================== */}

//       <section className="artistProfileStories">

//         <div className="artistProfileSectionHeader">

//           <p className="artistProfileSectionLabel">
//             Stories
//           </p>

//           <h2>
//             Coverage
//           </h2>

//         </div>


//         {artistArticles.length > 0 ? (

//           <div className="artistProfileStoryGrid">

//             {artistArticles.map(
//               ([articleSlug, article]) => {

//                 const issue = issues.find(
//                   (item) =>
//                     item.issueNumber ===
//                     article.issueNumber
//                 )

//                 const storyPath =
//                   `/studio-hours/${articleSlug}`

//                 return (
//                   <article
//                     key={articleSlug}
//                     className="artistProfileStoryCard"
//                   >

//                     <Link
//                       to={storyPath}
//                       className="artistProfileStoryImage"
//                       onClick={() =>
//                         handleStoryClick(
//                           articleSlug,
//                           article.title
//                         )
//                       }
//                     >
//                       <img
//                         src={article.heroImage}
//                         alt={article.title}
//                       />
//                     </Link>


//                     <div className="artistProfileStoryMeta">

//                       <span>
//                         {article.category}
//                       </span>

//                       {issue && (
//                         <span>
//                           {issue.number}
//                         </span>
//                       )}

//                     </div>


//                     <h3>

//                       <Link
//                         to={storyPath}
//                         onClick={() =>
//                           handleStoryClick(
//                             articleSlug,
//                             article.title
//                           )
//                         }
//                       >
//                         {article.title}
//                       </Link>

//                     </h3>


//                     <p className="artistProfileStoryIntro">
//                       {article.intro}
//                     </p>


//                     <Link
//                       to={storyPath}
//                       className="artistProfileStoryLink"
//                       onClick={() =>
//                         handleStoryClick(
//                           articleSlug,
//                           article.title
//                         )
//                       }
//                     >
//                       Read Story →
//                     </Link>

//                   </article>
//                 )
//               }
//             )}

//           </div>

//         ) : (

//           <p className="artistProfileEmpty">
//             No published stories yet.
//           </p>

//         )}

//       </section>


//       {/* =====================================
//           VISUAL INDEX
//           ===================================== */}

//       {artist.images &&
//         artist.images.length > 0 && (

//           <section className="artistProfileVisuals">

//             <div className="artistProfileSectionHeader">

//               <p className="artistProfileSectionLabel">
//                 Visual Index
//               </p>

//               <h2>
//                 Images
//               </h2>

//             </div>


//             <div className="artistProfileVisualGrid">

//               {artist.images.map(
//                 (image, index) => (

//                   <figure
//                     key={`${artist.slug}-${index}`}
//                     className="artistProfileVisual"
//                   >

//                     <img
//                       src={image}
//                       alt={
//                         `${artist.name} ${index + 1}`
//                       }
//                     />

//                   </figure>

//                 )
//               )}

//             </div>

//           </section>

//         )}


//       {/* =====================================
//           FUTURE
//           ===================================== */}

//       <section className="artistProfileFuture">

//         <div>

//           <p className="artistProfileSectionLabel">
//             Living Profile
//           </p>

//           <h2>
//             This profile can grow.
//           </h2>

//           <p>
//             Future updates can include new stories,
//             artworks, interviews, studio notes,
//             voice notes, and other material connected
//             to {artist.name}.
//           </p>

//         </div>

//       </section>

//     </main>
//   )
// }


// export default ArtistArticlePage1



// import '../styles/ArtistArticlePage1.css'

// import { useEffect } from 'react'

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

// import {
//   trackArtistProfileView,
//   trackArtistStoryClick,
//   trackPageView,
// } from '../analytics'


// function ArtistArticlePage1() {
//   const { slug } = useParams()
//   const navigate = useNavigate()


//   // =========================================
//   // ARTIST
//   // =========================================

//   const artist: Artist | undefined =
//     artists.find(
//       (item) => item.slug === slug
//     )


//   // =========================================
//   // RELATED STORIES
//   // =========================================

//   const artistArticles = artist
//     ? Object.entries(articles).filter(
//         ([, article]) =>
//           article.artistSlug === artist.slug
//       )
//     : []


//   // =========================================
//   // ANALYTICS
//   // =========================================

//   useEffect(() => {
//     if (!artist) return

//     trackPageView(
//       `${artist.name} | Artist Profile | Art All Day`
//     )

//     trackArtistProfileView({
//       artistSlug: artist.slug,
//       artistName: artist.name,
//       issueNumber: artist.issueNumber,
//       status: artist.status,
//     })
//   }, [artist])


//   // =========================================
//   // STORY CLICK ANALYTICS
//   // =========================================

//   function handleStoryClick(
//     articleSlug: string,
//     articleTitle: string
//   ) {
//     if (!artist) return

//     trackArtistStoryClick({
//       artistSlug: artist.slug,
//       artistName: artist.name,
//       articleSlug,
//       articleTitle,
//     })
//   }


//   // =========================================
//   // ARTIST NOT FOUND
//   // =========================================

//   if (!artist) {
//     return (
//       <main className="artistProfilePage">

//         <section className="artistProfileMissing">

//           <h1>
//             Artist not found
//           </h1>

//           <Link to="/">
//             Back home
//           </Link>

//         </section>

//       </main>
//     )
//   }


//   return (
//     <main className="artistProfilePage">

//       {/* =====================================
//           PROFILE HERO
//           ===================================== */}

//       <section className="artistProfileHero">

//         <button
//           type="button"
//           className="artistProfileBack"
//           onClick={() => navigate(-1)}
//         >
//           ← Back
//         </button>


//         <p className="artistProfileLabel">
//           Artist Profile
//         </p>


//         <div className="artistProfileHeroGrid">

//           {/* =================================
//               ARTIST INFO
//               ================================= */}

//           <div className="artistProfileHeroText">

//             <h1>
//               {artist.name}
//             </h1>


//             {artist.location &&
//               artist.location.length > 0 && (
//                 <p className="artistProfileLocation">
//                   {artist.location.join(' ↔ ')}
//                 </p>
//               )}


//             {artist.disciplines &&
//               artist.disciplines.length > 0 && (
//                 <div className="artistProfileDisciplines">
//                   {artist.disciplines.map(
//                     (discipline) => (
//                       <span key={discipline}>
//                         {discipline}
//                       </span>
//                     )
//                   )}
//                 </div>
//               )}


//             {artist.bio && (
//               <p className="artistProfileBio">
//                 {artist.bio}
//               </p>
//             )}

//           </div>


//           {/* =================================
//               HERO IMAGE
//               ================================= */}

//           <figure className="artistProfileHeroImage">

//             <img
//               src={artist.heroImage}
//               alt={artist.name}
//             />

//             {artist.heroImageCaption && (
//               <figcaption className="artistProfileHeroCaption">
//                 {artist.heroImageCaption}
//               </figcaption>
//             )}

//           </figure>

//         </div>

//       </section>


//       {/* =====================================
//           PROFILE DETAILS
//           ===================================== */}

//       <section className="artistProfileDetails">

//         <div className="artistProfileDetailsGrid">

//           {/* =================================
//               THEMES
//               ================================= */}

//           <div className="artistProfileSection">

//             <p className="artistProfileSectionLabel">
//               Themes
//             </p>

//             {artist.themes &&
//             artist.themes.length > 0 ? (

//               <div className="artistProfileThemes">

//                 {artist.themes.map(
//                   (theme) => (
//                     <span key={theme}>
//                       {theme}
//                     </span>
//                   )
//                 )}

//               </div>

//             ) : (

//               <p>
//                 Profile themes coming soon.
//               </p>

//             )}

//           </div>


//           {/* =================================
//               PROFILE STATUS
//               ================================= */}

//           <div className="artistProfileSection">

//             <p className="artistProfileSectionLabel">
//               Art All Day
//             </p>

//             <p className="artistProfileStatus">
//               {artist.status === 'featured'
//                 ? 'Featured Artist'
//                 : artist.status === 'watching'
//                   ? 'On Our Radar'
//                   : 'Artist Archive'}
//             </p>

//           </div>

//         </div>

//       </section>


//       {/* =====================================
//           STORIES
//           ===================================== */}

//       <section className="artistProfileStories">

//         <div className="artistProfileSectionHeader">

//           <p className="artistProfileSectionLabel">
//             Stories
//           </p>

//           <h2>
//             Coverage
//           </h2>

//         </div>


//         {artistArticles.length > 0 ? (

//           <div className="artistProfileStoryGrid">

//             {artistArticles.map(
//               ([articleSlug, article]) => {

//                 const issue = issues.find(
//                   (item) =>
//                     item.issueNumber ===
//                     article.issueNumber
//                 )

//                 const storyPath =
//                   `/studio-hours/${articleSlug}`

//                 return (
//                   <article
//                     key={articleSlug}
//                     className="artistProfileStoryCard"
//                   >

//                     <Link
//                       to={storyPath}
//                       className="artistProfileStoryImage"
//                       onClick={() =>
//                         handleStoryClick(
//                           articleSlug,
//                           article.title
//                         )
//                       }
//                     >
//                       <img
//                         src={article.heroImage}
//                         alt={article.title}
//                       />
//                     </Link>


//                     <div className="artistProfileStoryMeta">

//                       <span>
//                         {article.category}
//                       </span>

//                       {issue && (
//                         <span>
//                           {issue.number}
//                         </span>
//                       )}

//                     </div>


//                     <h3>

//                       <Link
//                         to={storyPath}
//                         onClick={() =>
//                           handleStoryClick(
//                             articleSlug,
//                             article.title
//                           )
//                         }
//                       >
//                         {article.title}
//                       </Link>

//                     </h3>


//                     <p className="artistProfileStoryIntro">
//                       {article.intro}
//                     </p>


//                     <Link
//                       to={storyPath}
//                       className="artistProfileStoryLink"
//                       onClick={() =>
//                         handleStoryClick(
//                           articleSlug,
//                           article.title
//                         )
//                       }
//                     >
//                       Read Story →
//                     </Link>

//                   </article>
//                 )
//               }
//             )}

//           </div>

//         ) : (

//           <p className="artistProfileEmpty">
//             No published stories yet.
//           </p>

//         )}

//       </section>


//       {/* =====================================
//           VISUAL INDEX
//           ===================================== */}

//       {artist.images &&
//         artist.images.length > 0 && (

//           <section className="artistProfileVisuals">

//             <div className="artistProfileSectionHeader">

//               <p className="artistProfileSectionLabel">
//                 Visual Index
//               </p>

//               <h2>
//                 Images
//               </h2>

//             </div>


//             <div className="artistProfileVisualGrid">

//               {artist.images.map(
//                 (image, index) => (

//                   <figure
//                     key={`${artist.slug}-${index}`}
//                     className="artistProfileVisual"
//                   >

//                     <img
//                       src={image}
//                       alt={
//                         `${artist.name} ${index + 1}`
//                       }
//                     />

//                   </figure>

//                 )
//               )}

//             </div>

//           </section>

//         )}


//       {/* =====================================
//           FUTURE
//           ===================================== */}

//       <section className="artistProfileFuture">

//         <div>

//           <p className="artistProfileSectionLabel">
//             Living Profile
//           </p>

//           <h2>
//             This profile can grow.
//           </h2>

//           <p>
//             Future updates can include new stories,
//             artworks, interviews, studio notes,
//             voice notes, and other material connected
//             to {artist.name}.
//           </p>

//         </div>

//       </section>

//     </main>
//   )
// }


// export default ArtistArticlePage1


// import '../styles/ArtistArticlePage1.css'

// import { useEffect } from 'react'

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

// import {
//   trackArtistProfileView,
//   trackArtistStoryClick,
//   trackPageView,
// } from '../analytics'


// function ArtistArticlePage1() {
//   const { slug } = useParams()
//   const navigate = useNavigate()


//   // =========================================
//   // ARTIST
//   // =========================================

//   const artist: Artist | undefined =
//     artists.find(
//       (item) => item.slug === slug
//     )


//   // =========================================
//   // RELATED STORIES
//   // =========================================

//   const artistArticles = artist
//     ? Object.entries(articles).filter(
//         ([, article]) =>
//           article.artistSlug === artist.slug
//       )
//     : []


//   // =========================================
//   // ANALYTICS
//   // =========================================

//   useEffect(() => {
//     if (!artist) return

//     trackPageView(
//       `${artist.name} | Artist Profile | Art All Day`
//     )

//     trackArtistProfileView({
//       artistSlug: artist.slug,
//       artistName: artist.name,
//       issueNumber: artist.issueNumber,
//       status: artist.status,
//     })
//   }, [artist])


//   // =========================================
//   // STORY CLICK ANALYTICS
//   // =========================================

//   function handleStoryClick(
//     articleSlug: string,
//     articleTitle: string
//   ) {
//     if (!artist) return

//     trackArtistStoryClick({
//       artistSlug: artist.slug,
//       artistName: artist.name,
//       articleSlug,
//       articleTitle,
//     })
//   }


//   // =========================================
//   // ARTIST NOT FOUND
//   // =========================================

//   if (!artist) {
//     return (
//       <main className="artistProfilePage">

//         <section className="artistProfileMissing">

//           <h1>
//             Artist not found
//           </h1>

//           <Link to="/">
//             Back home
//           </Link>

//         </section>

//       </main>
//     )
//   }


//   return (
//     <main className="artistProfilePage">

//       {/* =====================================
//           PROFILE HERO
//           ===================================== */}

//       <section className="artistProfileHero">

//         <button
//           type="button"
//           className="artistProfileBack"
//           onClick={() => navigate(-1)}
//         >
//           ← Back
//         </button>


//         <p className="artistProfileLabel">
//           Artist Profile
//         </p>


//         <div className="artistProfileHeroGrid">

//           {/* =================================
//               ARTIST INFO
//               ================================= */}

//           <div className="artistProfileHeroText">

//             <h1>
//               {artist.name}
//             </h1>


//             {artist.location &&
//               artist.location.length > 0 && (
//                 <p className="artistProfileLocation">
//                   {artist.location.join(' ↔ ')}
//                 </p>
//               )}


//             {artist.disciplines &&
//               artist.disciplines.length > 0 && (
//                 <div className="artistProfileDisciplines">
//                   {artist.disciplines.map(
//                     (discipline) => (
//                       <span key={discipline}>
//                         {discipline}
//                       </span>
//                     )
//                   )}
//                 </div>
//               )}


//             {artist.bio && (
//               <p className="artistProfileBio">
//                 {artist.bio}
//               </p>
//             )}

//           </div>


//           {/* =================================
//               HERO IMAGE
//               ================================= */}

//           <figure className="artistProfileHeroFigure">

//             <div className="artistProfileHeroImage">
//               <img
//                 src={artist.heroImage}
//                 alt={artist.name}
//               />
//             </div>

//             {artist.heroImageCaption && (
//               <figcaption className="artistProfileHeroCaption">
//                 {artist.heroImageCaption}
//               </figcaption>
//             )}

//           </figure>

//         </div>

//       </section>


//       {/* =====================================
//           PROFILE DETAILS
//           ===================================== */}

//       <section className="artistProfileDetails">

//         <div className="artistProfileDetailsGrid">

//           {/* =================================
//               THEMES
//               ================================= */}

//           <div className="artistProfileSection">

//             <p className="artistProfileSectionLabel">
//               Themes
//             </p>

//             {artist.themes &&
//             artist.themes.length > 0 ? (

//               <div className="artistProfileThemes">

//                 {artist.themes.map(
//                   (theme) => (
//                     <span key={theme}>
//                       {theme}
//                     </span>
//                   )
//                 )}

//               </div>

//             ) : (

//               <p>
//                 Profile themes coming soon.
//               </p>

//             )}

//           </div>


//           {/* =================================
//               PROFILE STATUS
//               ================================= */}

//           <div className="artistProfileSection">

//             <p className="artistProfileSectionLabel">
//               Art All Day
//             </p>

//             <p className="artistProfileStatus">
//               {artist.status === 'featured'
//                 ? 'Featured Artist'
//                 : artist.status === 'watching'
//                   ? 'On Our Radar'
//                   : 'Artist Archive'}
//             </p>

//           </div>

//         </div>

//       </section>


//       {/* =====================================
//           STORIES
//           ===================================== */}

//       <section className="artistProfileStories">

//         <div className="artistProfileSectionHeader">

//           <p className="artistProfileSectionLabel">
//             Stories
//           </p>

//           <h2>
//             Coverage
//           </h2>

//         </div>


//         {artistArticles.length > 0 ? (

//           <div className="artistProfileStoryGrid">

//             {artistArticles.map(
//               ([articleSlug, article]) => {

//                 const issue = issues.find(
//                   (item) =>
//                     item.issueNumber ===
//                     article.issueNumber
//                 )

//                 const storyPath =
//                   `/studio-hours/${articleSlug}`

//                 return (
//                   <article
//                     key={articleSlug}
//                     className="artistProfileStoryCard"
//                   >

//                     <Link
//                       to={storyPath}
//                       className="artistProfileStoryImage"
//                       onClick={() =>
//                         handleStoryClick(
//                           articleSlug,
//                           article.title
//                         )
//                       }
//                     >
//                       <img
//                         src={article.heroImage}
//                         alt={article.title}
//                       />
//                     </Link>


//                     <div className="artistProfileStoryMeta">

//                       <span>
//                         {article.category}
//                       </span>

//                       {issue && (
//                         <span>
//                           {issue.number}
//                         </span>
//                       )}

//                     </div>


//                     <h3>

//                       <Link
//                         to={storyPath}
//                         onClick={() =>
//                           handleStoryClick(
//                             articleSlug,
//                             article.title
//                           )
//                         }
//                       >
//                         {article.title}
//                       </Link>

//                     </h3>


//                     <p className="artistProfileStoryIntro">
//                       {article.intro}
//                     </p>


//                     <Link
//                       to={storyPath}
//                       className="artistProfileStoryLink"
//                       onClick={() =>
//                         handleStoryClick(
//                           articleSlug,
//                           article.title
//                         )
//                       }
//                     >
//                       Read Story →
//                     </Link>

//                   </article>
//                 )
//               }
//             )}

//           </div>

//         ) : (

//           <p className="artistProfileEmpty">
//             No published stories yet.
//           </p>

//         )}

//       </section>


//       {/* =====================================
//           VISUAL INDEX
//           ===================================== */}

//       {artist.images &&
//         artist.images.length > 0 && (

//           <section className="artistProfileVisuals">

//             <div className="artistProfileSectionHeader">

//               <p className="artistProfileSectionLabel">
//                 Visual Index
//               </p>

//               <h2>
//                 Images
//               </h2>

//             </div>


//             <div className="artistProfileVisualGrid">

//               {artist.images.map(
//                 (image, index) => (

//                   <figure
//                     key={`${artist.slug}-${index}`}
//                     className="artistProfileVisual"
//                   >

//                     <img
//                       src={image}
//                       alt={
//                         `${artist.name} ${index + 1}`
//                       }
//                     />

//                   </figure>

//                 )
//               )}

//             </div>

//           </section>

//         )}


//       {/* =====================================
//           FUTURE
//           ===================================== */}

//       <section className="artistProfileFuture">

//         <div>

//           <p className="artistProfileSectionLabel">
//             Living Profile
//           </p>

//           <h2>
//             This profile can grow.
//           </h2>

//           <p>
//             Future updates can include new stories,
//             artworks, interviews, studio notes,
//             voice notes, and other material connected
//             to {artist.name}.
//           </p>

//         </div>

//       </section>

//     </main>
//   )
// }


// export default ArtistArticlePage1



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

import {
  trackArtistProfileView,
  trackArtistStoryClick,
  trackPageView,
} from '../analytics'


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

    trackArtistProfileView({
      artistSlug: artist.slug,
      artistName: artist.name,
      issueNumber: artist.issueNumber,
      status: artist.status,
    })
  }, [artist])


  // =========================================
  // STORY CLICK ANALYTICS
  // =========================================

  function handleStoryClick(
    articleSlug: string,
    articleTitle: string
  ) {
    if (!artist) return

    trackArtistStoryClick({
      artistSlug: artist.slug,
      artistName: artist.name,
      articleSlug,
      articleTitle,
    })
  }


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

          <figure className="artistProfileHeroFigure">

            <div className="artistProfileHeroImage">
              <img
                src={artist.heroImage}
                alt={artist.name}
              />
            </div>

            {artist.heroImageCaption && (
              <figcaption className="artistProfileHeroCaption">
                {artist.heroImageCaption}
              </figcaption>
            )}

          </figure>

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

                const storyPath =
                  `/studio-hours/${articleSlug}`

                return (
                  <article
                    key={articleSlug}
                    className="artistProfileStoryCard"
                  >

                    <Link
                      to={storyPath}
                      className="artistProfileStoryImage"
                      onClick={() =>
                        handleStoryClick(
                          articleSlug,
                          article.title
                        )
                      }
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
                        to={storyPath}
                        onClick={() =>
                          handleStoryClick(
                            articleSlug,
                            article.title
                          )
                        }
                      >
                        {article.title}
                      </Link>

                    </h3>


                    <p className="artistProfileStoryIntro">
                      {article.intro}
                    </p>


                    <Link
                      to={storyPath}
                      className="artistProfileStoryLink"
                      onClick={() =>
                        handleStoryClick(
                          articleSlug,
                          article.title
                        )
                      }
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
                (image, index) => {

                  const imageSrc =
                    typeof image === 'string'
                      ? image
                      : image.src

                  const imageAlt =
                    typeof image === 'string'
                      ? `${artist.name} ${index + 1}`
                      : image.alt ||
                        `${artist.name} ${index + 1}`

                  const imageCaption =
                    typeof image === 'string'
                      ? undefined
                      : image.caption

                  return (
                    <figure
                      key={`${artist.slug}-${index}`}
                      className="artistProfileVisual"
                    >

                      <img
                        src={imageSrc}
                        alt={imageAlt}
                      />

                      {imageCaption && (
                        <figcaption className="artistProfileVisualCaption">
                          {imageCaption}
                        </figcaption>
                      )}

                    </figure>
                  )
                }
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