import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
const Display=(props)=>{
  return(
    <div>
       {props.counter}
    </div>
  )
}
const Button=(props)=>{
  return(
    <button onClick={props.handleEvent}>{props.text}</button>
  )
}

function App() {
  const [feedback,SetFeedback]=useState({good:0,natural:0,bad:0})
  const inrGood=()=>{

    const feedback1={...feedback,good:feedback.good+1}
    SetFeedback(feedback1)
  }
  const inrBad=()=>{
    const feedback2={...feedback,bad:feedback.bad+1}
    SetFeedback(feedback2)
  }
  const inrNatural=()=>{
    const feedback3={...feedback,natural:feedback.natural+1}
    SetFeedback(feedback3)
  }
  return (
    <div><h1>Give Feedback</h1>
    <p>
      <Button handleEvent={inrGood} text="Good"></Button>
      <Button handleEvent={inrBad} text="Bad"></Button>
      <Button handleEvent={inrNatural} text="Natural"></Button>
   
  
      <p><h1>Stacstic</h1></p>
      Good: <Display counter={feedback.good}></Display>
      <br></br>
      Bad: <Display counter={feedback.bad}></Display>
      <br></br>
      Natural: <Display counter={feedback.natural}></Display>
    </p>
    </div>

   
  );
}

export default App;
