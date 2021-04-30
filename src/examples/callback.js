import { useState, useCallback } from 'react'
import ItemList from './examples/ItemList'

function App() {
  const [colored, setColored] = useState(false)
  const [count, setCount] = useState(1)

  const styles = {
    color: colored ? 'darkred' : 'black'
  }

  const generateItemsFromAPI = useCallback(() => {
    return new Array(count).fill('').map((_, idx) => `elemnt ${idx + 1}`)
  }, [count])

  return (
    <div>
      <h1 style={styles}>col elements: {count}</h1>
      <button className='btn btn-success' onClick={() => setCount(prev => prev + 1)}>add</button>
      <button className='btn btn-warning' onClick={() => setColored(prev => !prev)}>change</button>

      <ItemList
        getItems={generateItemsFromAPI}
      />
    </div>
  );
}

export default App;
