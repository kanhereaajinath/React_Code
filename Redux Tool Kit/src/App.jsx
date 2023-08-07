import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Dcr } from './componets/Dcr'
import { Inr } from './componets/Inr'
import { Zero } from './componets/Zero'
import { Home } from './componets/Home'
import {Routes,Route,Link} from "react-router-dom"
function App() {
 

  return (
    <>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/increment'>Incremt</Link></li>
          <li><Link to='/decrement'>Decrement</Link></li>
          <li><Link to='zero'>Zero</Link></li>
        </ul>
      </nav>
      <Routes>
<Route path='/' element={<Home></Home>}></Route>
<Route path='increment' element={<Inr></Inr>}></Route>
<Route path='/decrement' element={<Dcr></Dcr>}></Route>
<Route path='/zero' element={<Zero></Zero>}></Route>
      </Routes>
    </>
  )
}

export default App
