import './App.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

function App() {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch()

  const increase = () => {
    dispatch({type:"INCREMENT"})
    setCount(count + 1)
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increase}>증가</button>
    </div>
  );
}

export default App;
