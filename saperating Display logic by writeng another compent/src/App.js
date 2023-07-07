import logo from './logo.svg';
import './App.css';

//seperating Display logic by writing another component 



//we can create component base aplication creating saperate component 
//call samall task 

//in this example we are creating Display component to display student object 
const Display = (props) => {
  return(
   
<div>
<li id={props.id}>{props.id}</li>


</div>
  )

}
const Display1=(props)=>{
  return(
    <div>
      <li id={props.id}>{props.name}</li>
    </div>
  )
}
const Display2=(props)=>{
  return(
    <div>
      <li id={props.id}>{props.address}</li>
    </div>
  )
}
function App() {
  const student = [{ id: 100, name: "Aajinath", address: "Vilhadi" },
  { id: 101, name: "Ram", address: "Dabhadi" },
  { id: 103, name: "Sham", address: "Hasnabad" }]
  return (
    <div>
      <ul>
        {student.map(stud=><Display id={stud.id} name={stud.name } address={stud.address}>  </Display>)}
        <br></br>
        {student.map(stud=><Display1 id={stud.id} name={stud.name} address={stud.address}></Display1>)}
        <br></br>
        {student.map(stud=><Display2 id={stud.id} name={stud.name} address={stud.address}></Display2>)}
      </ul>
    </div>

  
  );
}

export default App;
