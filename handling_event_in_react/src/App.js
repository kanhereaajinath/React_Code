import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
const  App=()=> {
  const [counter, setconuter]=useState(0)
  //event handler are register to called when specfic event accure . user intreaction in diffrent element 
  //of the web page can cause a collection of diffrent kinds of event to trigred 
  const eventHandler=()=>{
    setconuter(counter+1)

  }

  return (
    <div>
      Event handling demo
      <button onClick={eventHandler}>click here</button> 
<p>the value of conter is{counter} </p>
    </div>
  );
}
//in above exmple when user click on button eventHandler function get executed 

export default App;
