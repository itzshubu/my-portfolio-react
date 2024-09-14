import { useState } from 'react'
import Navbar from './Components/navbar'
import Herosection from './Components/herosection'
import SKILLS from './Components/skills/skills'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='max-w-screen-xl m-auto text-white'>
    <Navbar/>
    <Herosection/>
    <SKILLS/>
    </div>
    </>
  )
}

export default App
