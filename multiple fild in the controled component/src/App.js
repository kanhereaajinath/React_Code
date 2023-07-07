import logo from './logo.svg';
import './App.css';
import { useState } from 'react';



function App() {
 const [values,setvalues]=useState({fname:"Aajinath",address:"Vilhadi"})
 const handleEvent=(event)=>{
  const name=event.target.name
  const value=event.target.value
  const newValues={...values,[name]:value}
  setvalues(newValues)

 }

  return (
    <div>
      <form>
     userName  <input type='text' name='fname' value={values.fname} onChange={handleEvent}></input>
     <br></br>
     address:<input type="text" name='address' value={values.address} onChange={handleEvent}></input>
       </form>
       <br></br>
       userName:{values.fname}
       <br></br>
       address:{values.address}
     
    </div>



  );
}


export default App;


