import { useState, useEffect } from 'react'

function App() {
  const [type, setStype] = useState('users')
  const [data, setData] = useState([])
  const [pos, setPos] = useState({ x: 0, y: 0 })

  // useEffect(() => {
  //   console.log('render');
  // })

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(response => response.json())
      .then(json => setData(json))

    return () => setData([])
  }, [type])

  const mouseMoveHandler = e => {
    setPos({
      x: e.clientX,
      y: e.clientY
    })
  }

  useEffect(() => {
    window.addEventListener('mousemove', mouseMoveHandler)
    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler)
    }
  }, [])

  return (
    <div>
      <h1>Ресурс {type}</h1>

      <button onClick={() => setStype('users')}>Пользователи</button>
      <button onClick={() => setStype('todos')}>todos</button>
      <button onClick={() => setStype('posts')}>Посты</button>

      <pre>
        {JSON.stringify(pos, null, 2)}
      </pre>

      <pre>
        {JSON.stringify(data, null, 2)}
      </pre>
    </div >
  );
}

export default App;
