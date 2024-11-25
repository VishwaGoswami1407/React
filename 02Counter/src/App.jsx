import { useState } from 'react';
import './App.css';

function App() {

  let [counter, setCounter] = useState(0);


  // let counter;
  const addValue = () => {
    if(counter>=20){
      console.log('Counter cannot exceed 20');
      return;
    }
    // counter += 1;
    // counter += 1;
    // counter += 1;
    // counter += 1;
    // counter += 1;
    setCounter(counter + 1);
   setCounter((counter) => counter + 1)
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);if we passed more than one statement like this useset send data in beach its is cont and add only 1 
    //  second way to update the state
    // setCounter(counter);
    
    
    console.log('Counter value after adding:', counter);
  }
  const removeValue = () => {
    if(counter<=0){
      console.log('counter cannot be 0');
      return;
    }
    
    counter -= 1;
    setCounter(counter); 
   
    console.log('Counter value after removing:', counter);
    
  }
  return (
   <>
      <h1 className='bg-green-500'>chai aur react</h1>
      <h2>Counter Values: {counter}</h2>

      <button onClick={addValue}>Add value: {counter}</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove value: {counter}</button>
      <p>Footer: {counter}</p>
   </>
  )
}

export default App
