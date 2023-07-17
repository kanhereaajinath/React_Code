import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';

function App() {
  
const [value ,setvalues]=useState([])
const fname=useRef(null)
const lname=useRef(null)
const address=useRef(null)
const handlEvent=(event)=>{
    event.preventDefault()
    const a=fname.current.value
    const b=lname.current.value
    const c=address.current.value
    const newrow={fname:a,lname:b,address:c}
    setvalues([...value,newrow])
}
return(
    <div>
        <form onSubmit={handlEvent}>
            <input type='text' name='fname' ref={fname} ></input>
            <br></br>
            <input type='text' name='lname' ref={lname} ></input>
            <br></br>
            <input type="text" name='addrress' ref={address}></input>
            <br></br>
           <button type='submit'>click Here</button>
        </form>
        <table border={1}>
            <tr>
                <td>Fname</td>
                <td>Lname</td>
                <td>Address</td>
            </tr>
        {value.map(row=>{
            return(
                <tr>
                    <td>{row.fname}</td>
                    <td>{row.lname}</td>
                    <td>{row.address}</td>
                  
                </tr>
            )
        })}
        </table>
    </div>
)
}

export default App;
