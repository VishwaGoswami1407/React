import { createRoot } from 'react-dom/client';

function MyApp(){
 
  return(
    <div>
      <h1>Custom App !</h1>
    </div>
  )
}


//no proper syntax
// const ReactElement = {
//   type: 'a',
//   props: {
//       href: 'http://google.comt',
//       target: '_blank',

//   },
//   children: 'Click me to visit google'
// }

// const anotherElement = (
//   <a href='https://github.com/' target='_blank'>GitHub</a>
// )



const anotherUser = 'chai or react';

// Dynamic React element creation using React.createElement
const reactElement = React.createElement(
  'a',
  {
    href: 'https://google.com',
    target: '_blank',
  },
  'Click me to visit google', // Displayed as the link text
  anotherUser

);


createRoot(document.getElementById('root')).render(
  

  //MyApp() we can run like this
  <StrictMode>
    reactElement
   
    // reactElement
        // anotherElement
  </StrictMode>,
  // ReactElement
  // <ReactElement />
)
 // <MyApp />
    // <App />