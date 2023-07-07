import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


//controlled component 

//in this approch data is handle by react hook useState controlled component is a componet where form ereents 
//uses react state when there is change in state when there is change in value ok the elemnt then immediatly react state chages


function App() {
  const [fname, setFname] = useState(" ")
  const handleEvent = (event) => {
    setFname(event.target.value)
  }

  return (
    <div>
      <form>
        Enter your Name
        <input type='text' name='t1' value={fname} onChange={handleEvent}></input>
      </form>
      Name is :{fname}
    </div>



  );
}


export default App;


