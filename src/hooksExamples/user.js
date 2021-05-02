import React, { useState, useEffect } from 'react'

const useLogger = value => {
  useEffect(() => {
    console.log('value changed', value)
  }, [value])
}

const useValue = (initState) => {
  const [value, setVal] = useState(initState)
  const onChange = event => setVal(event.target.value)
  const clear = () => setVal('')

  return {
    bind: { value, onChange },
    value,
    clear
  }
}

function App() {
  const name = useValue('')
  useLogger(name.value)

  return (
    <div className={'container pt-3'}>
      {/* <input type='text' value={name.value} onChange={name.onChange} /> */}
      <input type='text' {...name.bind} />
      <button className='btn btn-success' onClick={() => name.clear()}>clear</button>
      <h1> {name.value}</h1>
    </div>
  )
}

export default App
