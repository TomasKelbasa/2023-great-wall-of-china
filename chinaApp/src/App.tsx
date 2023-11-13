import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ControlledInput from './components/ControlledInput'
import ControlledInput2 from './components/ControlledInput2'
import EffectDemo from './components/EffectDemo'

enum Mode{
  Hidden = 0,
  Visible = 1
}

function App() {
  const [text, setText] = useState<string>("IVAN");
  const [mode, setMode] = useState<Mode>(Mode.Visible);

  return (
    <>
      <ControlledInput inputAction={setText} value={text}></ControlledInput>
      <p>{text}</p>
      {
      mode == Mode.Visible
      ?
      <EffectDemo value={text.length}></EffectDemo>
      :
      null
      }
      <button onClick={() => setMode(x => x == Mode.Visible ? Mode.Hidden : Mode.Visible)}>SWITCH</button>
    </>
  )
}

export default App
