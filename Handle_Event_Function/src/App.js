import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const  App=()=> {
  const [counter, setCounter]=useState(0)
  const eventHandler=()=>{
    setCounter(counter+1)
  }
  const eventHandler1=()=>{
    setCounter(counter-1)
  }
  const eventHandler2=()=>{
    setCounter(0)
  }
  return (
    
    <div>
      <p>eventHandler Demo </p>
      <p>
        <button onClick={eventHandler}>increment</button>
      </p>
      <p><button onClick={eventHandler1}>Decrement</button></p>
      <p><button onClick={eventHandler2}>zero</button></p>
      <p>counter is counter{counter} </p>
    </div>
  );
}
//note: on onclick handleevent function is called 
//onclick can have refrence of function or arrow function 

export default App;
