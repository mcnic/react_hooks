import { useState, useEffect, useMemo } from 'react'

function complexComputed(num) {
  console.log('complexComputed');
  let i = 0
  while (i < 1000000000) i++
  return num * 2
}

function App() {
  const [num, setNum] = useState(42)
  const [colored, setColored] = useState(false)

  const style = useMemo(() => (
    { color: colored ? 'red' : '#000' }
  ), [colored])

  const computed = useMemo(() => (complexComputed(num)), [num])

  useEffect(() => {
    console.log('style changed');
  }, [style])

  return (
    <div>
      <h1 style={style}>{computed}</h1>
      <button className='btn btn-success' onClick={() => setNum(prev => prev + 1)}>+1</button>
      <button className='btn btn-danger' onClick={() => setNum(prev => prev - 1)}>-1</button>
      <button className='btn btn-warning' onClick={() => setColored(prev => !prev)}>change</button>
    </div>
  );
}

export default App;
