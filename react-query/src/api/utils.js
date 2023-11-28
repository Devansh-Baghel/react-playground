import axios from "axios";

export async function getPosts() {
  await new Promise(r => setTimeout(r, 2000));
  return axios.get("https://jsonplaceholder.typicode.com/posts").then(
    res => res.data
  )
}

export async function getUser(userId) {
  return axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`).then(
    res => res.data
  )
}

export async function getPost(id) {
  return axios.get(`https://jsonplaceholder.typicode.com/posts?id=${id}`).then(
    res => res.data
  )
}
