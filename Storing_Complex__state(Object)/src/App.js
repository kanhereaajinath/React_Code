import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
const Dispaly=(props)=>{
  return(
    <div>
      <p>counter is{props.counter}</p>
    </div>
  )

}
const Buttton =(props)=>{
  return(
    <button onClick={props.handleEvent} >{props.text}</button>
  )
}
function App() {
  const [clicks,setClicks]=useState({left:0,right:0})
  const inrlef=()=>{
    const newClicks={left:clicks.left+1,right:clicks.right}
    setClicks(newClicks)
  }
  const inrRig=()=>{
    const newClicks={left:clicks.left,right:clicks.right+1}
    setClicks(newClicks)
  }
  return (
    <div>
      <p>event Handling Demo</p>
      <p><Buttton handleEvent={inrlef} text="Left"></Buttton></p>
      <p><Buttton handleEvent={inrRig} text="Right"></Buttton></p>
      <p>
        Left: <Dispaly counter={clicks.left}> </Dispaly>
        <br>
        </br>
        Right:<Dispaly counter={clicks.right}></Dispaly>
      </p>
    </div>
    
  );
}

export default App;
