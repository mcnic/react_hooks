import { useState } from 'react'
// import logo from './logo.svg';
// import './App.css';
function computeItetialCounter() {
  console.log('compute');
  return Math.trunc(Math.random() * 20)
}

function App() {
  // const [count, setCount] = useState(0)
  const [count, setCount] = useState(() => computeItetialCounter())

  const [state, setState] = useState({
    title: 'counter',
    date: Date.now()
  })

  function inc() {
    // setCount(count + 1)
    setCount(prev => prev + 1)
    setCount(prev => prev + 1)
  }

  function updateTitle() {
    setState(prev => {
      return {
        ...prev,
        title: 'counter ' + count
      }
    })
  }

  return (
    <div>
      <h1>Счетчик {count} {state.counter}</h1>
      <button className='btn btn-success' onClick={inc}>Прибавить</button>
      <button className='btn btn-danger' onClick={() => setCount(count - 1)}>Отнять</button>

      <button className='btn btn-default' onClick={updateTitle}>Изменить название</button>

      <pre>{JSON.stringify(state)}</pre>
    </div >
  );
}

export default App;
