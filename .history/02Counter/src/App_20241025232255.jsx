import './App.css';

function App() {

  let counter = 5;
  const addValue = () => {
    
    counter += 1;
    co
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