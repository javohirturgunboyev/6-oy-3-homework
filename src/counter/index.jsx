import { useState } from "react"


function App(){
  const [counterState, setCounterState] = useState (0);

  let counter = 0;


  function handleIncrement (){
  setCounterState(counterState + 1)
  }
  
function handleDecrement (){
setCounterState(counterState - 1)
}

console.log("UI qayta chizildi");

  return(
      <>
      <h1>{counterState}</h1>
      <button onClick={handleIncrement}>increment</button>
      <button onClick={handleDecrement}>decrement</button>
    
      </>
      )
  
  }
  
  export default App