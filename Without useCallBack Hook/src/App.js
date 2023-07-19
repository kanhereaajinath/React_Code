import logo from './logo.svg';
import './App.css';
import { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react';

function Mylist ({getlist}){
  const [itmes,setItmes]=useState([])
  useEffect(()=>{
    setItmes(getlist())
    console.log("child componet render")

  },[getlist])
  return(
    <>
    {itmes.map((item,index)=>{
      return(
        <div key={index}> {item}</div>
       
      )
    })}
    </>
  )
}
function App() {
 const [state,setState]=useState(false)
 const [isred,setcolor]=useState(true)
 console.log("parent component redner")

 const getlist=()=>{
  return([1,2,3,4,5,6,7,8,9])
 }
 const statehandler=()=>{
  setState(!setState)
 }
 const chageColor=()=>{
  const bgcolor=isred?"red":"green"
  document.body.style.backgroundColor=bgcolor
 }
 const toggle=()=>{
  setcolor(!isred)
 }
 return(
  <div style={chageColor()}>
    <button onClick={statehandler}> changeState</button>
    <button onClick={toggle}>toggle color</button>
    <Mylist getlist={getlist}></Mylist>
  </div>
  

 )
  
}

export default App;
