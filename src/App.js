import React, {useState} from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <p> Le compteur est à {count}</p>
      <button onClick={() => setCount(count + 1)}> +1 </button>
    </div>
  );
}

export default App;
