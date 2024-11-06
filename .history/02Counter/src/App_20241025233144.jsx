import './App.css';

function App() {

  let counter;
  const addValue = () => {
    
    counter += 1;
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

      <button onClick={addValue}>Add value{c}</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove value</button>
   </>
  )
}

export default App
