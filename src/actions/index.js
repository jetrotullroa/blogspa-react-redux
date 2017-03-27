import axios from 'axios'

export const FETCH_POSTS = 'FETCH_POSTS'
export const CREATE_POST = 'CREATE_POST'
export const FETCH_POST = 'FETCH_POST'


const ROOT_URL = 'http://reduxblog.herokuapp.com/api'
const API_KEY = 'p0st3rzkeyz'

export const fetchPosts = () => {

  const request = axios.get(`${ROOT_URL}/posts?key=${API_KEY}`)
  return {
    type: FETCH_POSTS,
    payload: request
  }
}

export const createPost = (props) => {
  const request = axios.post(`${ROOT_URL}/posts?key=${API_KEY}`, props)
  return {
    type: CREATE_POST,
    payload: request
  }
}

export const fetchPost = (id) => {
  const request = axios.get(`${ROOT_URL}/posts/${id}?key=${API_KEY}`)

  return {
    type: FETCH_POST,
    payload: request
  }
}
