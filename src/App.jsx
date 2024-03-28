import React, {useState} from "react";
import './App.jsx';
import './App.css';

function App() {
    const[contor, setContor]=useState(25);

    
const increment=() => {
  setContor(contor + 5);
};
const decrement= () => {
setContor(contor - 1);

} 
const divideByTwo=()=> {
  setContor(contor/2);
}  
  return (
    <div className="App">
    <h1>Valoarea contorului: {contor}</h1>
    <button onClick={increment} className="adunare">adunare</button>
    <span>{contor}</span>
    <button onClick={decrement} className= "heart">scadere</button>
    <button onClicl={divideByTwo} className="adunare">impartire</button>
  </div>
  ) ;  
}


export default App;
