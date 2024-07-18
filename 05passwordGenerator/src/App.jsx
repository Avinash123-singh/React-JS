import { useState,useCallback, useEffect,useRef } from 'react'

import './App.css'

function App() {
 const[length, setlength]=useState(8)
 const[numberAllowed,setNumberAllowed]=useState(false)
 const[characterAllowed,setCharacter]=useState(false)
 const[password,setPassword]=useState("")
 const [copiedMessage, setCopiedMessage] = useState('');
 

 //useref hook 
 const passwordRef = useRef(null)

 const passwordGenerator=useCallback(()=>{
  let pass=""
  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

  if(numberAllowed)str +="0123456789"
  if(characterAllowed)str +="!@#$%^&*()"

  for (let i = 1; i <= length; i++) {
  let char= Math.floor(Math.random() * str.length + 1)
  pass+=str.charAt(char)
  setPassword(pass)
    
  }

 },[length,numberAllowed,characterAllowed,setPassword])


const copyPasswordToClipboard=useCallback(()=>{
  passwordRef.current?.select()
  window.navigator.clipboard.writeText(password)
  setCopiedMessage('Copied!');
 
    setTimeout(() => {
      setCopiedMessage('')
    }, 1500);

},[password])

 useEffect(()=>{
  passwordGenerator()
 },[length,numberAllowed,characterAllowed,passwordGenerator])

  return (
    
   <div className='w-auto max-w-md mx-auto shadow-md rounded-lg py-3 px-3 my-10 text-orange-500 bg-gray-800'>
    <h1 className='text-white text text-center my-3'>Password Generator</h1>
    <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      <input
       type="text"
       value={password}
       className='outline-none w-full py-1 px-3'
       placeholder='password'
       readOnly
       ref={passwordRef}
      />
      <button 
      onClick={copyPasswordToClipboard}
       className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">copy</button>
      
    </div>
    
    
    {copiedMessage && <p className='text-white text-center'>copied </p>}
  <div className='flex text-sm gap-x-2'>
    <div className='flex items-center gap-x-1'>
      <input 
      type="range" 
      name=""
       id=""
       min={8}
       max={50}
       value={length}
       className='cursor-pointer'
       onChange={(e)=>{setlength(e.target.value
        
       )}}
        />
        <label>Length:{length}</label>
    </div>
<div className="flex items-center gap-x-1">
  <input 
  type="checkbox"
  defaultChecked={numberAllowed}
  id="numberInput"
  onChange={()=>{
    setNumberAllowed((prev)=>!prev)
  }} />
  <label htmlFor="numberInput">Numbers</label>
</div>
<div className='flex items-center gap-x-1'>
  <input 
  type="checkbox"
  defaultChecked={characterAllowed}
  id="characterinput"
  onChange={()=>{
    setCharacter((prev)=>!prev)
  }} />
  <label htmlFor="characterinput">Character</label>
</div>

  </div>
   </div>
  )
}

export default App
