// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './app.css'
// import App from './App.tsx'

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
 /*  Version 2 */

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
// import "./styles/reset.css";
// import "./styles/variables.css";
// import "./styles/layout.css";
// import "./styles/typography.css";
// import "./styles/navbar.css";
// import "./styles/hero.css";
// import "./styles/featured.css";
// import "./styles/articles.css";
// import "./styles/artist.css";
// import "./styles/issue.css";
// import "./styles/submit.css";
// import "./styles/footer.css";
// import "./styles/animations.css";
// import "./styles/responsive.css";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)

/*  Version 3 */

// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import { BrowserRouter } from 'react-router-dom'
// import App from './App'
// import { AccessibilityProvider } from './context/AccessibilityContext'

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <AccessibilityProvider>
//         <App />
//       </AccessibilityProvider>
//     </BrowserRouter>
//   </React.StrictMode>,
// )