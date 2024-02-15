import React, {useState} from "react";
import './App.jsx';

function App() {
    const[contor, setContor]=useState(25);

    
const increment=() => {
  setContor(contor + 5);
};
const decrement= () => {
setContor(contor - 1);

} 
  
  return (
    <div className="App">
    <h1>Valoarea contorului: {contor}</h1>
    <button onClick={increment}>adunare</button>
    <span>{contor}</span>
    <button onClick={decrement}>scadere</button>
  </div>
  ) ;  
}


export default App;
