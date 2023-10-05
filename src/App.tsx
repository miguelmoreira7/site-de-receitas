
import './App.css'

import {Outlet} from 'react-router-dom'
import Navbar from './components/layout/Navbar'

function App() {

  return (
    <div className="bg-gray-100 min-h-screen h-full">
      <Navbar/>
      <Outlet/>      
    </div>
  )
}

export default App
