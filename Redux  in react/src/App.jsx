import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Inr } from './components/Inr'
import { Dcr } from './components/Dcr'
import { Zero } from './components/zero'
import { store } from './components/Store'

function App() {
 //gateState() :-this function present inside store object it is use to get the current value present inside the store 
  const show=()=>{
    console.log("updated Value",store.getState().counter)
  }

  store.subscribe(show)
  //this function is use to register user defind function wchich is executed when user updated data from store 
  return (
  
    <>
    <Inr></Inr>
    <br></br>
    <Dcr></Dcr>
    <br></br>
    <Zero></Zero>
    <br></br>
    counter is {store.getState().counter}
    </>
  
  )
}



export default App
