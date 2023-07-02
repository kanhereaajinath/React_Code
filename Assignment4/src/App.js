import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';



function App() {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const currentTime = new Date().getHours();

    if (currentTime >= 5 && currentTime < 12) {
      setGreeting('Good Morning, everyone');
    } else if (currentTime >= 12 && currentTime < 18) {
      setGreeting('Good Afternoon, everyone');
    } else {
      setGreeting('Good Evening, everyone');
    }
  }, []);

  return (
    <div>
      <h1>{greeting}</h1>
    </div>
  )
}

export default App;
