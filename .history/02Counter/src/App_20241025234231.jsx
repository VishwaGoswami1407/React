import { useState } from 'react';
import './App.css';

function App() {

  const [counter, setCounter] = useState(0);


  // let counter;
  const addValue = () => {
    
    // counter += 1;
    setCounter(counter + 1);
    console.log('Counter value after adding:', counter);
  }
  const removeValue = () => {
    counter -= 1;
    console.log('Counter value after removing:', counter);
    
  }
  return (
   <>
      <h1>chai aur react</h1>
      <h2>Counter Values: {counter}</h2>

      <button onClick={addValue}>Add value{counter}</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove value{counter}</button>
      <p>Footer: {counter}</p>
   </>
  )
}

export default App
