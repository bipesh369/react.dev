import { StrictMode } from 'react' // Removed 'Children' import (not needed here)
import { createRoot } from 'react-dom/client'
import './index.css'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom' // Consolidated imports
import Layout from './components/Route'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import { githubInfoLoader } from './components/Github/Github'

// const router = createBrowserRouter([
//   {
//     path: '/', 
//     element: <Route />,
//     children: [ // Fixed: must be lowercase 'children', not 'Children'
//       {
//         path: '', // This matches the base '/' path
//         element: <Home />
//       },
//       {
//         path: 'about',
//         element: <About />
//       },
//       {
//         path: 'contact',
//         element: <Contact />
//       },
//     ]
//   }  
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>} >
      <Route path='' element={<Home/>} />
      <Route path='about' element={<About/>} />
      <Route path='contact' element={<Contact/>} />
      <Route path='user/.userid' element={<user/>} />
      <Route 
      loader={githubInfoLoader}
      path='github' element={<github/>} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Fixed: prop name must be 'router', not 'routr' */}
    <RouterProvider router={router} /> 
  </StrictMode>,
)