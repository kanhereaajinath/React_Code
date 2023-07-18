import logo from './logo.svg';
import './App.css';
import { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react';

function App() {
 
  const expensiveCalulation =(num)=>{
    console.log("calulating ")
    for(let i=0;i<1000000000;i++)
    {
      num+=i
    }
    return num
  }
  const fname =useRef(null)
  const [name,setnames]=useState(' ')
  const [count,setcount]=useState(0)
  const calculation=useMemo(()=>
    expensiveCalulation(count),[count]
  )
  const  inr=()=>{
    setcount(count+1)

  }
  const addName=()=>{
    setnames(fname.current.value)
  }
  return(
    <div>
      <h1>react Demo</h1>
      <br></br>
      <input ref={fname}></input>
      <button onClick={addName}> addName</button>
      <br></br>
      <button onClick={inr}>+</button>
      count is {count}
      <br></br>
      expensiveCalulation calculation is {calculation}
      <br></br>
      name is {name}
    </div>
  )
}

export default App;
