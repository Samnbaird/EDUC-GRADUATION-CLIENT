import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
}
)

export default {
  getGraduationRules() {
    return apiClient.get('/graduation-rules')
  },
  getGradationRule(id) {
    return apiClient.get('/graduation-rules/' + id)
  }
}
