import React, { useContext } from 'react'
import Card from '../components/Card'
import Search from '../components/Search'
import { GithubContext } from '../context/github/githubContext'

export default function Home() {
  const { loading, users } = useContext(GithubContext)

  return (
    <>
      <Search />
      <div className='row'>
        {loading
          ? <p className='text-center'>loading...</p>
          : users.map((e, i) => (
            <div className='col-sm-4 mb-4' key={i}>
              <Card
                user={e}
              />
            </div>
          ))
        }

      </div>
    </>
  )
}
