import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { GithubContext } from '../context/github/githubContext'
import Repos from '../components/Repos'

export default function Profile({ match }) {
  const { getUser, getRepos, user, repos, loading } = useContext(GithubContext)
  const urlName = match.params.name

  useEffect(() => {
    getUser(urlName)
    getRepos(urlName)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (loading) return <p className='text-center'>loading....</p>
  if (Object.keys(user).length === 0 || !repos.length) return <p>no data</p>

  const {
    name, company, avatar_url,
    location, bio, blog,
    login, html_url, followers,
    following,
    public_repos, public_gists
  } = user

  return (
    <>
      <Link to='/' className='btn btn-link'>На главную</Link>

      <div className='card mb-4'>
        <div className='card-body'>
          <div className='row'>

            <div className='col-sm-3 text-center'>
              <img
                src={avatar_url}
                alt={name}
                style={{ width: '150px' }}
              />
              <h2>{name}</h2>
              {location && <p>location: {location}</p>}
            </div>

            <div className='col'>
              {bio && <>
                <h3>Биография</h3>
                <p>{bio}</p>
              </>}
              <a
                href={html_url}
                className='btn btn-danger'
                target='_blank'
                rel='noreferrer'
              >open profile</a>

              <ul>
                {login && <li>
                  <strong>username:</strong> {login}
                </li>}

                {company && <li>
                  <strong>Компания:</strong> {company}
                </li>}

                {blog && <li>
                  <strong>Сайт:</strong> <a
                    href={blog}
                    // className='btn btn-danger'
                    target='_blank'
                    rel='noreferrer'
                  >{blog}</a>
                </li>}
              </ul>

              <div className='badge badge-primary'>Подписчики: {followers}</div>
              <div className='badge badge-success'>Подписан: {following}</div>
              <div className='badge badge-info'>Репозитории: {public_repos}</div>
              <div className='badge badge-dark'>Gists: {public_gists}</div>
            </div>

          </div>
        </div>
      </div>

      <Repos repos={repos} />
    </>
  )
}
