import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
function App() {
  const [count, setCount] = useState(0)
  let myObj={
    username:"Avinash Singh",
    age:21

  }
  return (
    <>
      <h1 className='bg-green-500 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
      
      <Card username="react js code " btnText="click me"/>
      <Card username="Avinash Singh" btnText="visit me"/>
    </>
  )
}

export default App



