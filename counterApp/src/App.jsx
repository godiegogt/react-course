import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'
import Main from './components/layouts/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
   <Main>
    <Counter/>
    <Counter/>
    <Counter/>
    <Counter/>
    <Counter/>
   </Main>
  )
}

export default App
