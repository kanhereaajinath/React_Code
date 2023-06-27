import logo from './logo.svg';
import './App.css';

//passing parameter to component 
const Hello=(props)=>
{
  return(
    <div>
      hello{props.name} your age is {props.age}
     </div>
  )
}
//Passing values of variable to the component 
const Hello1=(props)=>{
  return(
    <div>
      <p>
        Hello {props.name} your age is{props.age}

      </p>
    </div>
  )
}

function App() {
  let fname="abc" 
  let age="30"
  return (
   <div>
    hello world
<Hello name="abc" age="90"/>
<Hello name="xyz" age="80" />
<Hello1 name={fname} age={age}/>
   </div>
  );
}

export default App;
