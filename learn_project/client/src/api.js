import axios from 'axios';
import store from './store';

const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:3005/api/v1';

const fetch = axios.create({
  baseURL: apiUrl
});

fetch.interceptors.request.use(config => {
  store.startLoading();
  return config;
});

fetch.interceptors.response.use(
  resp => {
    store.stopLoading();
    return resp;
  },
  err => {
    store.stopLoading();
    return Promise.reject(err);
  }
);

export async function fetchUsers(query) {
  const resp = await fetch({
    url: '/users',
    params: { q: query }
  });
  return resp.data;
}

export async function fetchUser(userId) {
  const resp = await fetch(`/users/${userId}`);
  return resp.data;
}

export async function fetchCommentsForUser(userId) {
  const resp = await fetch(`/users/${userId}/comments`);
  return resp.data;
}

export async function addComment(body) {
  const resp = await fetch({
    method: 'POST',
    url: '/comments',
    data: body
  });
  return resp.data;
}

export async function deleteComment(commentId) {
  const resp = await fetch({
    method: 'DELETE',
    url: `/comments/${commentId}`
  });
  return resp.data;
}
