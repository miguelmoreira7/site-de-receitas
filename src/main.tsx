import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './routes/ErrorPage.tsx'
import Componentes from './components/Componentes.tsx'
import SearchByIngredient from './components/pages/SearchByIngredient.tsx'
import SearchByLetter from './components/pages/SearchByLetter.tsx'
import SearchByName from './components/pages/SearchByName.tsx'
import Home from './components/pages/Home.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    //errorElement: <ErrorPage/>,
    children: [
      {
        path: '/',
        element: <Home/>,
      },
      {
        path: 'by-name',
        element: <SearchByName/>
      },
      {
        path: 'by-letter',
        element: <SearchByLetter/>
      },
      {
        path: 'by-letter/:letter',
        element: <SearchByLetter/>
      },
      {
        path: 'by-ingredient',
        element: <SearchByIngredient/>,
      },
      {
        path: 'by-ingredient/:ingredient',
        element: <Home/>,
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
