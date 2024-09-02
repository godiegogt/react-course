import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Interval from './components/Interval';
import Counter from './components/Counter';

function App() {
 

const [seconds, setSeconds] = useState(0);


  return (
    <>
    {
      seconds<10&&<Interval seconds={seconds} setSeconds={setSeconds}/>
    }  
    <Counter/>
    </>
  )
}

export default App
