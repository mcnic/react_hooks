import React, { useContext } from 'react'
import { AlertContext } from '../context/alert/alertContext'
import { GithubContext } from '../context/github/githubContext'

export default function Search() {
  const alert = useContext(AlertContext)
  const github = useContext(GithubContext)

  const onSubmit = event => {
    if (event.key === 'Enter') {
      const value = event.target.value.trim()

      if (value) {
        github.setLoading()
        alert.hide()
        github.search(value)
      } else {
        github.clearUsers()
        alert.show('Введите данные для поиска')
      }
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
