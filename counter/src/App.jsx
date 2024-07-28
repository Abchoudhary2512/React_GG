import "./App.css";
import { useState } from "react";
function App() {
  const [counter, setCounter] = useState(15);

  // let counter = 12;

  const addValue = () => {
    if(counter==20){
      return;
    }
    console.log("clicked", Date.now());
    setCounter(counter + 1);
  };

  const removeValue = () => {
    if(counter==0){
      return;
    }
    setCounter(counter - 1 );
  };
  return (
    <>
      <h1>Hii</h1>
      <h2>counter app : {counter}</h2>
      <button onClick={addValue}>+Add {counter}</button>
      <br />
      <button onClick={removeValue}>-Decrease {counter}</button>
      
    </>
  );
}

export default App;
