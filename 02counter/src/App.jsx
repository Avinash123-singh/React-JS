import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//UI updation are controlled by react 
function App() {
 let [counter,setCounter]= useState(5)
  
//let counter= 5

const addValue=()=>{
  console.log("clicked",counter);
 if(counter<20)
 setCounter(counter+1)
}
const removeValue=()=>{
  console.log("remove",counter);
  if(counter>0)
  setCounter(counter- 1)

  
}



  return (
    <>
     <h1>React js in Hindi</h1>
     <h2>Counter  value:{counter}</h2>

     <button
     onClick={addValue}>Add Value{counter}</button>
     <br />
     <button 
     onClick={removeValue}>Remove Value{counter}</button>
     <p>footer:{counter}</p>
    </>
  )
}
export default App
