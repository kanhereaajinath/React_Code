import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
//modifyed example using speart operator 
const Display=(props)=>{
  return(
    <div>
      counter is {props.counter}
    </div>
  )
}
const Button=(props)=>{
  return(
    <button onClick={props.handleEvent}>{props.text}</button>
  )
}
function App() {
  const [clicks, setClicks]=useState({left:0,right:0})
  const[allClicks,setAllclicks]=useState([])
  const inrLeft=()=>{
    const newClicks={...clicks,left:clicks.left+1}
    setClicks(newClicks)
    setAllclicks(allClicks.concat('L'))
  }
  const inrRight=()=>{
    const newClicks={...clicks,right:clicks.right+1}
    setClicks(newClicks)
    setAllclicks(allClicks.concat('R'))
  }

    
  return (
    <div>
      <p>Event handling demo </p>
     <p><Button handleEvent={inrLeft} text={"Left"}></Button></p> 
    <p> <Button handleEvent={inrRight} text={"Right"}></Button></p> 
    <p>
      Left: <Display counter={clicks.left}></Display>
      <br></br>
      Right: <Display counter={clicks.right}/>
    </p>
    All Clicks: <Display counter={allClicks.join(',')}/>
      
    </div>
   
  );
}

export default App;
