import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  //**********************************without useState function*********************************88 */
  // let counter2=0
  // const setCounter2=()=>{
  //   counter2+1
  // }
  // setInterval(()=>{
  //   setCounter2()
  // },2000
  // )
  //in above exmple we daclere counter variable whoes intial value is 0 in the next line we delare setCouter 
  //function which 
  //***************************************useState******************************************************************8
  //the decalaration syntax of usestate is 
  //const [variable-name, funcion_name]=useState(intial value )
  const [counter, setCounter]=useState(0);
  //use state funtion return arry which contain two value 
  //1)the name of variable which hold the data 
  //2) Name of the functio which os use to modify the data 
  setInterval(()=>{
    setCounter(counter+1)
  },2000)
  const [counter1, setCounter1]=useState(0)
  setInterval(()=>{
    setCounter1(counter1+1)

  },2000)
  
  return (
   <div>
    <p>this is demo of useState </p>
    <p>counter is {counter} </p>
    <p>
      counter value of second counter is {counter1}
    </p>
    
   </div>
   
  );
}
//in this exmple first line we are calling use state function which will set intil value is 0 of counter variable
//and a function set counter use to modify value of counter varable 

//in the setintravl we are calling setConter to modify the value of counter varialble 

//this will modify previous value by 1
//in this manner that is advantage of useState 

export default App;
