import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
const Display=(props)=>{
  return(
    <div>
    feedback:  {props.counter}
    </div>
  )
}
const Button =(props)=>{
  return(
    <div>
      <button onClick={props.handleEvent}>{props.text}</button>
    </div>
  )

}
function App() {
  const [feedback,setFeedback]=useState({good:0,bad:0,natural:0})
  const[allFeedback,setAllFeedback]=useState([])
  const inrGood=()=>{
    const feedbak1={...feedback,good:feedback.good+1}
    setFeedback(feedbak1)
    setAllFeedback(allFeedback.concat(setFeedback))
   
  }

   const inrBad=()=>{
    const feedbak2={...feedback,bad:feedback.bad+1}
    setFeedback(feedbak2)
    setAllFeedback(allFeedback.concat(setFeedback))
    
  }
   const inrNatural=()=>{
    const feedbak3={...feedback,natural:feedback.natural+1}
    setFeedback(feedbak3)
    setAllFeedback(allFeedback.concat(setFeedback))
  
  }

  return (
    <div>
      <Button handleEvent={inrGood} text="Good"></Button>
      <Button handleEvent={inrBad} text="Bad"></Button>
      <Button handleEvent={inrNatural} text="Natural"></Button>
      
        Good: <Display counter={feedback.good}></Display>
        <br></br>
        Bad: <Display counter={feedback.bad}></Display>
        <br></br>
        Natural: <Display counter={feedback.natural}></Display>
      <br></br>
      
     AllClicks: <Display counter={feedback.good+feedback.bad+feedback.natural}></Display>
     <br></br>
     Avagrage:<Display counter={(feedback.good-feedback.bad)/(feedback.good+feedback.bad+feedback.natural)}></Display>
     <br></br>
     Positive: <Display counter={(((feedback.good)/(feedback.good+feedback.bad+feedback.natural))*100)}></Display>
   
    </div>
   
  );
}

export default App;
