import logo from './logo.svg';
import './App.css';

//in App.js import the module by using following line 
import Dispaly  from './Display';

//*******************Refactoring moudle********************** */

//the whole react aplication can be return in the single file but this is not practical solution 
//common practice is declare each component in the saprate file 


//create saprate component folder within the source dirctory and create saperate .js gile for each component

//ex :our component name is Disply then create Display.js and imort that file into app.js



function App() {
  const student=[{id:100,name:"Aajinath",address:"Vilhadi"},{id:101, name:"Ram",address:"Badnapur"},
{id:102,name:"Sham",address:"Mhasala"}]
  return (
    <div>
      <ul>
        {student.map(stud=><Dispaly id={stud.id} name={stud.name} address={stud.address}></Dispaly>)}
      </ul>
    </div>
  
  );
}

export default App;
