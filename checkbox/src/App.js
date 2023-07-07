import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

//in control component we are going to use dropdown list in this list there are three option onchange event 
//executed

function App() {
  const [ischeckd, setIschecked] = useState(false)
  const handleEvent = (event) => {
    setIschecked(event.target.checked)
  }

  return (
    <div>
      <form>
       <input type='checkbox' checked={ischeckd} onChange={handleEvent}></input>
       {ischeckd &&<div>Blue is selected</div>}
       {!ischeckd &&<div>Blue is deselected</div>}
       </form>
       <br></br>
     
    </div>



  );
}


export default App;


