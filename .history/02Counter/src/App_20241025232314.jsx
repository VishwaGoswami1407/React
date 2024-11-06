import './App.css';

function App() {

  let counter = 5;
  const addValue = () => {
    
    counter += 1;
    console.log('Counter value after adding:', counter);
  }
  const removeValue = () => {
    counter -= 1;
  }
  return (
   <>
      <h1>chai aur react</h1>
      <h2>Counter Values: {counter}</h2>

      <button onClick={addValue()}>Add value</button>
      <br />
      <br />
      <button onClick={removeValue()}>Remove value</button>
   </>
  )
}

export default App
