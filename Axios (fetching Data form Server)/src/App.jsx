
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState,useReducer } from 'react'
import axios from 'axios'





function App() {
 const [userinfo,setUserinfo]=useState({})
 const [post ,setpost]=useState([])
 const ClickButton=()=>{
  console.log("button Clicked ")
  let p1=axios.get("https://jsonplaceholder.typicode.com/todos/1")
  p1.then((obj)=>{
    console.log("got data")
    console.log(obj.data.title)
    setUserinfo(obj.data)
  })
 }
 const ClickButton2=()=>{
    console.log("Button Clicicked")
    let p1=axios.get("https://jsonplaceholder.typicode.com/posts")
    p1.then((obj)=>{
        console.log("got data")
        console.log(obj.data)
        setpost(obj.data)
    })
    p1.catch((err)=>{
        console.log("error is accoured")
    })
 }
 return(
    <>
    <button onClick={ClickButton}>Get Data</button>
    <br></br>
    <button onClick={ClickButton2}>Get Data</button>
<br></br>

{userinfo.id}
<br></br>
{userinfo.userId}
<br></br>

    </>

 )


  
}


export default App
