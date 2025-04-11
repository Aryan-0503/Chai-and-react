import { useState } from 'react'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
function App() {


  return (
    <>
      <AddTodo></AddTodo>
      <Todos></Todos>
    </>
  )
}

export default App
