import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//to render App component multiple time s redirected refresh funtion and in refresh funtion we added lode 
//and in refresh funtion  we added lode to render App component 
let  countetr=1
const root = ReactDOM.createRoot(document.getElementById('root'));
const refresh=()=>{
root.render(
  <React.StrictMode>
    <App countetr={countetr}/>
  </React.StrictMode>
);
}
refresh()
countetr=countetr+1
refresh()
countetr=countetr+1
refresh()

countetr=countetr+1
refresh()
countetr=countetr+1
refresh()

//to render component after fix interval of time we use setintrval Funtion 
setInterval(() => {
  refresh()
  countetr=countetr+1
}, 2000);



reportWebVitals();
