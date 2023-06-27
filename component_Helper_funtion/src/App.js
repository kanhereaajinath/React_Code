import logo from './logo.svg';
import './App.css';

//component Helper function 
const Hello=(props)=>{
  const getAge= (year)=>{
    const currentyear=new Date().getFullYear()
    const age=currentyear-year
    return age
  }
  return(
    <div>
      <p>
        Hello {props.name} your age is {getAge(props.year)}
      </p>
    </div>
  )
}
//destructuring :- destracturing allows to exarct the property  values from the object 
const Hello1=(props)=>{
  const {name,year}=props
  const getAge=(year)=>{
    const currentyear=new Date().getFullYear()
    const age=currentyear-year
    return age

  }
  return (
    <div>
      <p>
        Hello {name} your age is {getAge(props.year)}
      </p>
    </div>
  )
}

const App=()=>{
  let fname="abc"
  let y=1995


  return (
   <div>
    hello world
    <Hello1 name={fname} year={y} />
<Hello name={fname} year={y} />



   </div>
    );
  }


export default App;
