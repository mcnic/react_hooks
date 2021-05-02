import React from 'react'

const Repos = ({ repos }) => (
  <>
    {repos.map(repo => (
      <div className='card mb-3' key={repo.id}>
        <h5>
          <a
            href={repo.html_url}
            target='_blank'
            rel='noreferrer'
          >{repo.name}</a>
        </h5>
      </div>
    ))}
  </>
)

export default Repos