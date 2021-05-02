import React, { useReducer } from 'react'
import axios from 'axios'
import { CLEAR_USERS, GET_REPOS, GET_USER, SEARCH_USERS, SET_LOADING } from '../types'
import { GithubContext } from './githubContext'
import { githubReducer } from './githubReducer'

// const clientId = process.env.REACT_APP_CLIENT_ID
// const clientSecret = process.env.REACT_APP_CLIENT_SECRET
const token = process.env.REACT_APP_GITHUB_TOKEN
const withCreds = {
  headers: { Authorization: `token ${token}` }
}

export const GithubState = ({ children }) => {
  const initialState = {
    user: {},
    users: [],
    loading: false,
    repos: []
  }
  const [state, dispatch] = useReducer(githubReducer, initialState)

  const search = async value => {
    setLoading()

    try {
      const response = await axios.get(
        `https://api.github.com/search/users?q=${value}`, withCreds
      )

      dispatch({
        type: SEARCH_USERS,
        payload: response.data.items
      })
    } catch (error) {
      console.log(error)
    }
  }

  const getUser = async name => {
    setLoading()
    let payload = {}
    try {
      const response = await axios.get(
        `https://api.github.com/users/${name}`, withCreds
      )
      payload = response.data
    } catch (error) {
      console.log(error)
    }
    dispatch({
      type: GET_USER,
      payload
    })
  }

  const getRepos = async name => {
    setLoading()
    let payload = []

    try {
      const response = await axios.get(
        `https://api.github.com/users/${name}/repos?per_page=5`, withCreds
      )
      payload = response.data

    } catch (error) {
      console.log(error)
    }
    dispatch({
      type: GET_REPOS,
      payload
    })
  }

  const setLoading = () => dispatch({ type: SET_LOADING })
  const clearUsers = () => dispatch({ type: CLEAR_USERS })

  const { user, users, loading, repos } = state

  return (
    <GithubContext.Provider value={{
      user, users, loading, repos,
      search, getUser, getRepos, setLoading, clearUsers
    }}>
      {children}
    </GithubContext.Provider>
  )
}
