import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

//in control component we are going to use dropdown list in this list there are three option onchange event 
//executed

function App() {
  const [selectedValue, setSelectedValue] = useState("Java")
  const handleEvent = (event) => {
    setSelectedValue(event.target.value)
  }

  return (
    <div>
      <form>
        <select value={selectedValue} onChange={handleEvent}>
          <option value="C">C</option>
          <option value="CPP">CPP</option>
          <option value="Java">Java</option>
        </select>
       </form>
       <br></br>
       you are selected:-{selectedValue}
    </div>



  );
}


export default App;


