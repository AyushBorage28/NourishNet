import { useState } from 'react'

import './App.css'
import Home from './screens/Home'
import GetStarted from './screens/GetStarted'
import Login from './screens/Login'
import SignUp from './screens/SignUp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Home/>
     <GetStarted/>
     <Login/>
     <SignUp/>
    </>
  )
}

export default App
