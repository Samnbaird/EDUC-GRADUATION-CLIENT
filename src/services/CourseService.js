import axios from 'axios'

const apiClient = axios.create({
    // for json-server
  baseURL: 'http://localhost:3000',
  // for EDUC-COURSE-API
  // baseURL: 'http://localhost:9999',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
}
)

export default {
  getCourses() {
    return apiClient.get('/courses')
  },
  getCourse(id) {
    return apiClient.get('/courses/' + id)
  }
}