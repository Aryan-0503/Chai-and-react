import React, { useState, useContext } from 'react'
import UserContext from '../context/UserContext'
function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { setUser } = useContext(UserContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    setUser({ username, password })
  }
  return (
    <div>
      <h2>Login</h2>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='username' className='px-2 border-gray-400' />
      <input type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
      <button className='bg-gray-400 rounded-sm px-2' onClick={handleSubmit}>submit</button>
    </div>
  )
}

export default Login
