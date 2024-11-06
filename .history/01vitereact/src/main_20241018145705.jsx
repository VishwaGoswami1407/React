import { createRoot } from 'react-dom/client';

function MyApp(){
  return(
    <div>
      <h1>Custom App !</h1>
    </div>
  )
}


const anotherUser = 'chai or react'

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



 const reactElement = React.createElement(
   'a',
  {
     href: 'https://google.com',
    target: '_blank',
  },
  'Click me to visit google',
  anotherUser
);


createRoot(document.getElementById('root')).render(
  //MyApp() we can run like this
  // <StrictMode>
    // <MyApp />
    // <App />
    reactElement
    // reactElement
        // anotherElement
  // </StrictMode>,
  // ReactElement
  // <ReactElement />
)