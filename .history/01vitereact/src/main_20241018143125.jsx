import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

function MyApp(){
  return(
    <div>
      <h1>Custom App !</h1>
    </div>
  )
}
createRoot(document.getElementById('root')).render(
  // <StrictMode>
    MyApp()
  {/* </StrictMode>, */}
)
