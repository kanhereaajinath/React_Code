import logo from './logo.svg';
import './App.css';
import { useState } from 'react';



function App() {
 const [gender,setGender]=useState("male")
 const handleEvent=(event)=>{
  setGender("male")
 }
 const handleEvent1=(event)=>{
  setGender("female")
 }
  return (
    <div>
     <form>
      Male:<input type='radio' onChange={handleEvent} name='g'checked={gender=="male"}></input>
      <br></br>
      female:<input type='radio' onChange={handleEvent1} name='g' checked={gender=="female"}></input>
     </form>
     you are selected: {gender}
    </div>



  );
}


export default App;


