import axios from 'axios'

const apiClient = axios.create({
  // for json-server
  //baseURL: 'http://localhost:3000',
  // for EDUC-COURSE-API
  baseURL: 'http://localhost:9999',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
}
)

export default {
  getCourses() {
    //'/api/v1/courses'
    return apiClient.get('/api/v1/courses')
  },
  getCourse(id) {
    return apiClient.get('api/v1/courses/' + id)
  },
  getApiClient() {
    return apiClient
  }
}