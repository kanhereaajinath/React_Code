import logo from './logo.svg';
import './App.css';


function App() {
  const hello=(msg)=>{
    const handleEvent=()=>{
console.log(msg)
    }
return handleEvent
  }
  return (
   <div>
<button onClick={hello("Hello")}>Hello</button>
<button onClick={hello("React")}>React </button>
<button onClick={hello("world")}>World</button>
   </div>
  );
}

export default App;
