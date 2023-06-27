import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
const Display=(props)=>{
  return(
    <div>
      <p>counter is{props.counter} </p>
    </div>
  )
  }
  const Button=(props)=>{
    return(
      <button onClick={props.handleEvent}>{props.text}</button>
    )
  }
function App() {
  const [counter, setcouter]=useState(0)
  const handleEvent=()=>{
    setcouter(counter+1)
  }
  const handleEvent1=()=>{
    setcouter(counter-1)
  }
  const handleEvent2=()=>{
    setcouter(0)
  }
    
  return (

    <div>
      <p>Event handling </p>
      <p><Button handleEvent={handleEvent} text="Increment"></Button></p>
      <p><Button handleEvent={handleEvent1} text="Decremnt"></Button></p>
      <p><Button handleEvent={handleEvent2} text="Zero"></Button></p>
      <p><Display counter={counter}/></p>
    </div>
    
  );
}

export default App;
