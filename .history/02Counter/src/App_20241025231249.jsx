import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
      <h1>chai aur react</h1>
      <h2>Counter Values: 5</h2>

      <button>Add valu</button>
   </>
  )
}

export default App
