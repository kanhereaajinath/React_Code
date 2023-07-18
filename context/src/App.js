import logo from './logo.svg';
import './App.css';
import { createContext, useContext, useEffect, useRef, useState } from 'react';

function App() {
 
  const fn=useRef(null) 
  const [fname,setFname]=useState(' ')
  const context=createContext("default value")
  const buttonCliks=(event)=>{
    setFname(fn.current.value)
  }
  const Header=()=>{

    const firstname=useContext(context)
    return(
      <header>
        <h1>hello {firstname}</h1>
      </header>
    )
  }
  const Footer=()=>{
    const firstname=useContext(context)
    return(
      <footer>
        <h3>bye{firstname}</h3>
      </footer>
    )
  }
  const Main=()=>{
    return(
      <div>
        <input ref={fn} placeholder='enter usename'></input>
        <br></br>
        <button onClick={buttonCliks}>OK</button>
      </div>
    )

  }
  return(
    <div>
      <context.Provider value={fname}>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </context.Provider>
    </div>
  )
}

export default App;
