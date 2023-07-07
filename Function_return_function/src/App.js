import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  
  const hello=()=>{
    const handleEvent=()=>{
      console.log("this is the function that return function ")
    }
    return handleEvent
  }

  return (
    <div>
     <button onClick={hello()}>click Here </button>
    </div>
   
  );
}

export default App;
