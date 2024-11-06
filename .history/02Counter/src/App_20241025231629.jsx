import './App.css'

function App() {

  let counter = 5;

  return (
   <>
      <h1>chai aur react</h1>
      <h2>Counter Values: {counter}</h2>

      <button
      onClick={addV}
      >Add value</button>
      <br />
      <br />
      <button>Remove value</button>
   </>
  )
}

export default App
