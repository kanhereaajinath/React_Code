import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
const Home=()=>{
  return(
    <h1>Home Page</h1>
  )
}
const Contacts=()=>{
  return(
    <h1>Contacts</h1>
  )
}
const Blogs=()=>{
  return(
    <h1>Blogs</h1>
  )
}
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <nav>
      <ul>
        <li><Link to="/">Home </Link></li>
        <li><Link to="/contacts"> contacts</Link></li>
        <li><Link to="/blogs">Blogs</Link></li>
      </ul>
    </nav>
    
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/blogs'element={<Blogs></Blogs>}></Route>
      <Route path='/contacts'element={<Contacts></Contacts>}></Route>
    </Routes>
    </>
  )
}

export default App
