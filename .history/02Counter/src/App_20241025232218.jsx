import './App.css';

function App() {

  let counter = 5;
  const addValue = () => {
    console.log("addValue called", Math.random());
    // counter += 1;
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
