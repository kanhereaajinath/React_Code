import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Blogs } from './pages/Blogs'
import { Contacts } from './pages/Contacats'
import { Blog } from './pages/Blog'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <nav>
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/contacts'>Contacts</Link></li>
      <li><Link to='/blogs'>Blogs</Link></li>
    </ul>
    </nav>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/blogs' element={<Blogs></Blogs>}> </Route>
      <Route path='/contacts' element={<Contacts></Contacts>}>  </Route>
      <Route path='/blog/:name' element={<Blog></Blog>}></Route>
    </Routes>
    </>
  )
}

export default App
