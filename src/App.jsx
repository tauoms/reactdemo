import './App.css'
import Box from './Box'
import { useState } from 'react'

function App() {
const [counter, setCounter] = useState('string');

return (
    <>
    <p>Counter: {counter}</p>
      <Box name="Jeeves" title="CEO" location="Tampere" />
      <Box name="Hannah" title="CTO" location="Joensuu" />
      <Box name="Jake" title="UFO" location="Rauma" />
    </>
  )
}

export default App
