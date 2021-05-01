import React, { useContext } from 'react'
import { AlertContext } from '../context/alert/alertContext'

export default function Search() {
  const { show } = useContext(AlertContext)

  const onSubmit = event => {
    if (event.key === 'Enter') {
      show(event.target.value)
    }
  }

  return (
    <div className='form-group'>
      <input
        type='text'
        className='form-control'
        placeholder='введите ник пользователя...'
        onKeyPress={onSubmit}
      />
    </div>
  )
}
