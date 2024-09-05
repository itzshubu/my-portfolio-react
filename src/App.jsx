import { useState } from 'react'
import Navbar from './Components/navbar'
import Herosection from './Components/herosection'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='bg-[#061840]'>
    <Navbar/>
    <Herosection/>
    </div>
    </>
  )
}

export default App
