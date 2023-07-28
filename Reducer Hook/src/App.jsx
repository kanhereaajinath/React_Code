
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState,useReducer } from 'react'

const reducerMethod=(curntCounter,action)=>{
  switch(action.type)
  {
    case "inr":
      return curntCounter+action.newValue
    case "dcr":
      return curntCounter+action.newValue
    case "zero":
      return curntCounter+action.newValue
    
  }
}



function App() {
  const [counter ,dispatch]=useReducer(reducerMethod,0)
  const handleInr=()=>{
    dispatch(
      {
        type:"inr",
        newValue:1
      }

    )

  }
  const handleDcr=()=>{
    dispatch(
      {
        type:"dcr",
        newValue:1
      }
    )
  }
  const handlezero=()=>{
dispatch(
  {
    type:"zero",
    newValue:0
  }
)
  }
return(
  <>
<div>
  <button onClick={handleInr}>Increment</button>
  <button onClick={handleDcr}>Decrement</button>
  <button onClick={handlezero}>Zero</button>
  counter is {counter}
</div>
  </>
)
  
}


export default App
