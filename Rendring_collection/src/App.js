import logo from './logo.svg';
import './App.css';

function App() {
  const studete=[{id:100,name:"abc",address:"xyz"},
  {id:101,name:"aaa",address:"ddd"},{id:102,name:"bbb",address:"ere"}
  
]
  return (
    <div>
      <p>
        <ul>
          <li>{studete[0].id}</li>
          <li>{studete[1].id}</li>
          <li>{studete[2].id}</li>
        </ul>
        <ul>
          {
            //now use map function to display each and every element present inside collection 
            studete.map(stud=><li>{stud.name}</li>)
          }
        </ul>
        <ul>
          {

            //each child in a list should have a unique key propties 
            studete.map(stud=><li key={stud.id}> {stud.name}</li>)
          }
        </ul>
      </p>
    </div>
  
  );
}

export default App;
