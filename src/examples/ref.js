import { useState, useEffect, useRef } from 'react'

function App() {
  // const [renderCount, setRenderCount] = useState(1)
  // useEffect(() => { setRenderCount(prev => prev + 1) })
  const [val, setVal] = useState('initial')
  const renderCount = useRef(1)
  const inputRef = useRef()
  const prevVal = useRef()

  useEffect(() => {
    renderCount.current++
    console.log(inputRef.current.value)
  })

  useEffect(() => {
    prevVal.current = val
  }, [val])

  const focus = () => inputRef.current.focus()

  return (
    <div>
      {renderCount.current}, {prevVal.current}
      <hr />
      <input ref={inputRef} type='text' value={val} onChange={e => setVal(e.target.value)}></input>
      <button className='btn btn-success' onClick={focus} >focus</button>
    </div>
  );
}

export default App;
