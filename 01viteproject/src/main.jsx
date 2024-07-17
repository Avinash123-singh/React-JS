import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function MyApp(){
  return(
    <div>
      <h1> Custom App</h1>
    </div>
  )
}
// const reactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "Click Here To Visit Google",
// };

const reactElement=React.createElement(
  'a',
  {href:"https://google.com",target: "_blank"},
  'click here to visit google '
)

const anotherElement=(
  <a href='https://google.com' target='_blank'>Visit Google</a>
)
ReactDOM.createRoot(document.getElementById('root')).render(
 
    <App />
 
)
