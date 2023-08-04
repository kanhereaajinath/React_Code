import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Home } from './components/Home'
import { Inr } from './components/Inr'
import { store } from './components/store'
import {Zero} from  './components/Zero'
import {Dcr} from './components/Dcr'
import {Route,Routes,Link} from 'react-router-dom'

function App() {
const show =()=>{
  console.log("updated value", store.getState().counter)
}

store.subscribe(show)
  return (
    <>
     <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/inr'>Incremnt</Link></li>
        <li><Link to='/dcr'>Decremt</Link></li>
        <li><Link to='/zero'>Zero</Link></li>
      </ul>
     </nav>
 <Routes>
  <Route path='/'element={<Home></Home>}>   </Route>
  <Route path='/inr' element={<Inr></Inr>}></Route>
  <Route path='/dcr' element={<Dcr></Dcr>}></Route>
  <Route path='/zero' element={<Zero></Zero>}></Route>
 </Routes>
    </>
  )
}

export default App
