import logo from './logo.svg';
import './App.css';

//in App.js import the module by using following line 


function App() {
  const handleEvent=(event)=>{
    event.preventDefault()
    console.log("request submit to server ")

  }
  return (
    <div>
     <form onSubmit={handleEvent}>
      <button type='submit'>click here</button>
      <button>ok</button>
     </form>
    </div>
  
  );
}


export default App;

//in this example we added handleEvent function as a eventHandler function that will be called when form is submited 
// clinkng submit button 
 