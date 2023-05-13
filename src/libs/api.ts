import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.github.com',
  headers: { 'X-GitHub-Api-Version': '2022-11-28' },
})

export { api }
