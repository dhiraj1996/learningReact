import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'




function App() {
  let [counter, setCounter] = useState(12);

  const add = () => {
    // console.log(counter)
    // setCounter(counter + 1)
    if(counter >= 20){
      return
    }
    setCounter(counter + 1)
  }

  const sub = ()=> {
    // if(setCounter > 0){
    //   setCounter(counter - 1);
    // }
    // setCounter > 0 ? counter -1 : counter ;
    // count === 0 ? return : count - 1 ;
    if (counter === 0){
      return
    }
    setCounter(counter - 1);
  }
  return (
    <>
    <h1>Counter App not greater than 20 and not below 0</h1>
    <h3>Counter Value {counter}</h3>
    <button onClick={add}>Increment {counter}</button>
    <button onClick={sub}>Decrement {counter}</button>
    <p>Footer: {counter}</p>
    </>
  )
}

export default App
