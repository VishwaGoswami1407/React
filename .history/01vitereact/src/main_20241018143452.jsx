import { createRoot } from 'react-dom/client'

function MyApp(){
  return(
    <div>
      <h1>Custom App !</h1>
    </div>
  )
}


const ReactElement = {
  type: 'a',
  props: {
      href: 'http://google.comt',
      target: '_blank',

  },
  children: 'Click me to visit google'
}



createRoot(document.getElementById('root')).render(
  //MyApp() we can run like this
  // <StrictMode>
  //   <MyApp />
  // </StrictMode>,
  ReactElement()
  // <ReactElement />
)
