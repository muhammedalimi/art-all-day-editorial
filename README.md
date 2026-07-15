# Art All Day

Art All Day is an independent React editorial platform for artist features, visual essays, departments, accessibility tools, and contemporary art criticism.

The project is designed as a digital magazine for artists, images, ideas, and visual culture beyond decoration. It features artist profiles, issue-based editorial sections, long-form department articles, image-led storytelling, and accessibility features such as listen-to-article controls, large text mode, and high contrast mode.

## Overview

Art All Day is built around the idea that art is more than something to look at. The platform creates space for artists whose work carries feeling, memory, pressure, faith, and visual truth.

The site includes:

- Artist feature pages
- Department-based editorial articles
- Issue structure
- Image-led feature sections
- Dropdown navigation
- Reading progress bar
- Listen-to-article controls
- Accessibility settings
- Subscribe and submit sections
- Large editorial footer with brand identity

## Features

### Editorial Homepage

The homepage introduces the magazine through a strong visual and editorial structure, including:

- Hero section
- Issue ticker
- Featured artist sections
- Departments
- Works in View
- Editor’s Note
- Artist Archive
- Subscribe section
- Submit section
- Brand identity footer

### Artist Pages

Each artist has a dedicated feature page with:

- Hero image
- Artist title and category
- Author and date
- Long-form editorial writing
- Continue Reading / Show Less interaction
- Reading progress bar
- Listen to Article feature
- Supporting images

### Department Pages

Departments function like recurring magazine columns. Each department has its own article page.

Current departments include:

- Artist Pick
- Faith & Form
- The Inner Image
- Studio Notes
- Slow Looking
- Surface Study
- Street to Studio
- Exhibition Notes

### Accessibility Features

The site includes early accessibility-focused features:

- Listen to Article
- Stop audio
- Large Text mode
- High Contrast mode
- Descriptive alt text structure
- Keyboard-friendly links and buttons

The goal is to make Art All Day useful not only for looking, but also for listening and accessible reading.

## Tech Stack

- React
- TypeScript
- Vite
- React Router
- CSS
- Web Speech API

## Project Structure

```txt
src
├── assets
│   ├── ben1.jpg
│   ├── blu1.png
│   └── other image assets
├── components
│   ├── ArtistArchive.tsx
│   ├── ArtistPick.tsx
│   ├── BenCowanFeature.tsx
│   ├── BenCowanPrelude.tsx
│   ├── Departments.tsx
│   ├── EditorsNote.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── IssueIntro.tsx
│   ├── IssueTicker.tsx
│   ├── ListenButton.tsx
│   ├── Navbar.tsx
│   ├── NextIssue.tsx
│   ├── ReadingProgress.tsx
│   ├── ScrollToTop.tsx
│   ├── SubmitSection.tsx
│   ├── SubscribeSection.tsx
│   └── WorksInView.tsx
├── data
│   ├── artists.ts
│   ├── departments.ts
│   └── issues.ts
├── pages
│   ├── ArtistArticlePage.tsx
│   ├── DepartmentArticlePage.tsx
│   └── SubmitPage.tsx
├── utils
│   └── date.ts
├── App.css
├── App.tsx
└── main.tsx
```
