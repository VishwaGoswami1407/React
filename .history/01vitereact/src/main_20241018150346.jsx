import React from 'react';
import { createRoot } from 'react-dom/client';

function MyApp() {
  
  return (
    <div>
      <h1>Custom App!</h1>
    </div>
  );
}
const anotherUser = 'chai aur react'
// Dynamic React element creation using React.createElement
const reactElement = React.createElement(
  'a',
  {
    href: 'https://google.com',
    target: '_blank',
  },
  'Click me to visit google',
  anotherUser // The displayed link text
);

// Rendering the component
createRoot(document.getElementById('root')).render(
  // To render either MyApp or the dynamic reactElement
  // Uncomment the desired component below:

  // <MyApp />  // To render the custom app
  reactElement  // To render the dynamic element (a link)
);
