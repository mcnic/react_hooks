import React from 'react'
import { useAlert } from './AlertContext'

export default function Main() {
  const { show } = useAlert()

  return (
    <>
      <h1> hello in context sample</h1>
      <button
        className='btn btn-success'
        onClick={() => show('error')}
      >
        show alert
      </button>
    </>
  )
}
