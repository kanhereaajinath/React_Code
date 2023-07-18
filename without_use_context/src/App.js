import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';

function App() {
  const fn=useRef(null)
  const [fname,setfname]=useState(" ")
  const buttonClick=(event)=>{
    setfname(fn.current.value)
  }
  const Header=({fname})=>{
    return(
        <header>
            <h1>hello{fname}</h1>
        </header>
    )
  }
  const Main=()=>{
    return(
        <div>
            <input type='text' ref={fn} placeholder='Enter your name'></input>
            <button onClick={buttonClick}>OK</button>
            <br></br>
        </div>
    )
  }
  const Footer=({fname})=>{
    return(
        <footer>
            <h3>bye {fname}</h3>
        </footer>
    )

  }
  return(
    <div>
        <Header fname={fname}></Header>
        <Main ></Main>
        <Footer fname={fname}></Footer>
    </div>
  )
}

export default App;
