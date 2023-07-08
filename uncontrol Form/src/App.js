import logo from './logo.svg';
import './App.css';
import { useRef } from 'react';




function App() {
  const fname = useRef(null)
  const lname = useRef(null)
  const lang = useRef(null)
  const g1 = useRef(null)
  const g2 = useRef(null)
  const submitForm = (event) => {
    event.preventDefault()
    const fn = fname.current.value
    const ln = lname.current.value
    const lng = lang.current.value
    let gender = ""
    if (g1.current.checked == true) {
      gender = "Male"
    }
    if (g2.current.checked == true)
     {
      gender = "Female"
    }
    console.log("First Name :" + fn)
    console.log("Last Name :" + ln)
    console.log("selected language:" + lng)
    console.log("Selcted Gender is : " + gender)
    console.log("request submited to server ")



  }

  return (
    <form onSubmit={submitForm}>
      FirstName:<input type='text' name="t1" ref={fname}></input>
      <br></br>
      Last Name:<input type='text' name='t2' ref={lname}></input>
      <br></br>
      select language:
      <select ref={lang}>
        <option value="C">C</option>
        <option value="CPP">CPP</option>
        <option value="Java">Java</option>
      </select>
      <br></br>
      Male: <input type='radio' ref={g1} name='g'></input>
      female: <input type='radio' ref={g2} name='g'></input>
      <button type='submit'>submit</button>
    </form>





  );
}


export default App;


