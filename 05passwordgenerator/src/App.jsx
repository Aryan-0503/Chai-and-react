import { useState, useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [password, setPassword] = useState('')
  const [length, setLength] = useState(8);
  const [AlllowedNumber, setAllowedNumber] = useState(false);
  const [AllowedCharacter, setAllowedCharacter] = useState(false);
  //useRef hook
  const passwordRef = useRef(null)
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (AlllowedNumber) str += "0123456789";
    if (AllowedCharacter) str += "!@#$%^&*()_+";
    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass)
  }, [length, AlllowedNumber, AllowedCharacter, setPassword])
  useEffect(() => { passwordGenerator() }, [AlllowedNumber, AllowedCharacter, length, passwordGenerator])
  const copytoclipboard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])
  return (
    <>
      <div className='bg-gray-800 rounded-xl py-12 w-150 flex flex-col
      items-center justify-center mx-auto '>
        <h1 className='text-xl text-white'>Password Generator</h1>
        <div>
          <input type='text' placeholder='Password' value={password} className='bg-white outline-none rounded-l-sm my-2 py-2 pr-8' ref={passwordRef} ></input>
          <button className='bg-blue-800 rounded-r-sm text-white my-2 py-2 pr-4 pl-4' onClick={copytoclipboard}>Copy</button>
        </div>
        <div>
          <input type='range' min='8' max='20' value={length} onChange={(e) => setLength(e.target.value)} className='accent-blue-800 cursor-pointer' ></input>
          <span className='ml-1 mb-0.5 text-sm text-orange-700'> length:{length}</span>
          <input type='checkbox' defaultChecked={AlllowedNumber} className='ml-4 accent-blue-800' id='numberInput'
            onChange={() => {
              setAllowedNumber((prev) => !prev)
            }}></input>
          <label htmlFor='numberInput' className='text-white'>Numbers</label>
          <input type='checkbox' className='ml-4 accent-blue-800' defaultChecked={AllowedCharacter} id='characterInput' onChange={() => {
            setAllowedCharacter((prev) => !prev)
          }}></input>
          <label htmlFor='characterinput' className='text-white'>Character</label>
        </div>

      </div>
    </>
  )
}

export default App
