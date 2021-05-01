import React from 'react'
import Card from '../components/Card'
import Search from '../components/Search'

export default function Home() {
  const cards = Array(15)
    .fill(' ')
    .map((_, i) => i)

  return (
    <>
      <Search />
      <div className='row'>
        {cards.map((e, i) => (
          <div className='col-sm-4 mb-4' key={i}>
            <Card />
          </div>
        ))}
      </div>
    </>
  )
}
