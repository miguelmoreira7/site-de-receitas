import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import Home from './components/pages/Home.tsx'
import SearchByIngredient from './components/pages/SearchByIngredient.tsx'
import SearchByLetter from './components/pages/SearchByLetter.tsx'
import SearchByName from './components/pages/SearchByName.tsx'
import { routes } from './constants/routes.tsx'
import './index.css'
import ErrorPage from './routes/ErrorPage.tsx'
import MealsByIngredient from './components/pages/MealsByIngredient.tsx'
import MealDetails from './components/pages/MealDetails.tsx'

const router = createBrowserRouter([
  {
    path: routes.HOME,
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: routes.HOME,
        element: <Home/>,
      },
      {
        path: routes.BY_NAME,
        element: <SearchByName/>
      },
      {
        path: routes.BY_LETTER,
        element: <SearchByLetter/>
      },
      {
        path: routes.BY_LETTER_PARAM,
        element: <SearchByLetter/>
      },
      {
        path: routes.BY_INGREDIENT,
        element: <SearchByIngredient/>,
      },
      {
        path: routes.BY_INGREDIENT_PARAM,
        element: <MealsByIngredient/>,
      },
      {
        path: routes.MEAL_DETAILS,
        element: <MealDetails/>,
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)