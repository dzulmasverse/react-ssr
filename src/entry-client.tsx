import './index.css'
import { StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Router from './Router'

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />
//   },
//   {
//     path: "/blog",
//     children: [
//       {
//         path: ':id',
//         index: true,
//         element: <Blog />
//       }
//     ]
//   },
// ])

hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <StrictMode>
    {/* <RouterProvider router={router} /> */}
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </StrictMode>,
)
