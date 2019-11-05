import React, {useState} from 'react';
import './App.css';

function App() {

   const [count, setCount] = useState(0)

   return (
     <div className="App">
       <input type='number' value={count} onChange={event => setCount(Number(event.target.value))}></input>
      <button onClick={() => setCount(count + 1)}>
        +1
      </button>
     </div>
   );
 }

export default App;
