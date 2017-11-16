import axios from 'axios'

const fetch = axios.create({
  baseURL: 'http://localhost:3000/api/v1'
})

export async function fetchUsers (query) {
  const resp = await fetch({
    url: '/users',
    params: { q: query }
  })
  return resp.data
}

export async function fetchUser (userId) {
  const resp = await fetch(`/users/${userId}`)
  return resp.data
}

export async function fetchCommentsForUser (userId) {
  const resp = await fetch(`/users/${userId}/comments`)
  return resp.data
}

export async function addComment () {
  const resp = await fetch({
    method: 'POST',
    url: '/comments'
  })
  return resp.data
}

export async function deleteCommentsForUser (commentId) {
  const resp = await fetch({
    method: 'DELETE',
    url: `/comments/${commentId}`
  })
  return resp.data
}
