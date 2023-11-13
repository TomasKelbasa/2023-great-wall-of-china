import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ControlledInput from './components/ControlledInput'
import ControlledInput2 from './components/ControlledInput2'

function App() {
  const [text, setText] = useState<string>("IVAN");

  return (
    <>
      <ControlledInput inputAction={setText} value={text}></ControlledInput>
      <ControlledInput2 inputAction={setText} value={text}></ControlledInput2>
      <p>{text}</p>
    </>
  )
}

export default App
