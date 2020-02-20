import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:9997',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
}
)

export default {
  getProgramRules() {
    return apiClient.get('/api/v1/program-rules')
  },
  getProgramRule(id) {
    return apiClient.get('/api/v1/program-rules/' + id)
  }
}
