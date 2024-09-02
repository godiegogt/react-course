import { useState } from "react"

const Counter = () => {

const [counter, setCounter] = useState(0)
const handleChangeMas=()=>{
    setCounter(counter+1)
}

const handleChangeMenos=()=>{
    setCounter(counter-1)
}

  return (
    <>
    <h1>Counter: {counter}</h1>
    <button onClick={handleChangeMenos}>
        -
    </button>
    <button onClick={handleChangeMas}>
       +
    </button>
    </>

  )
}


export default Counter


