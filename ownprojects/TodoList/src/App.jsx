import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [input, setInput] = useState('')
  const [tasks, setTasks] = useState([])

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const handleAdd = () => {
    if (input.trim() != '') {
      setTasks([...tasks, input])
      setInput('')

    }
  }

  const handleDelete = (indexToDelete) => {
    const updatedTasks = tasks.filter((a, index) => index !== indexToDelete) //jo index !== indexToDelete is function ko satisfy krega wahi bdega
    setTasks(updatedTasks)
  }

  return (
    <>
      <div className='flex justify-center mt-50'>
        <div className=' relative p-1 w-108 border-2 border-solid border-orange-500 rounded-sm'>
          <input className='border-none outline-none w-full pr-24' type="text" placeholder='Add new task' onChange={handleChange}></input>
          <button className="absolute right-0.5 bg-green-700 text-white px-4 rounded-sm " onClick={() => handleAdd()}>
            Add
          </button>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center mt-5'>
        <div>
          {tasks.map((task, index) => (
            <div className='flex justify-between w-108 '>
              <div>{task}</div>
              <button className='bg-red-500 rounded-sm m-1 text-white w-24' onClick={() => handleDelete(index)}>delete</button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
