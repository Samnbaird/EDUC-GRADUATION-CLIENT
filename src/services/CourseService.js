import axios from 'axios'

const apiClient = axios.create({
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
    return apiClient.get('/api/v1/courses')
  },
  getCourse(id) {
    return apiClient.get('/api/v1/courses/' + id)
  },
  editCourse(id, data){
    return apiClient.put("/api/v1/courses/" + id ,data,{ useCredentails: false })
    
  },
}