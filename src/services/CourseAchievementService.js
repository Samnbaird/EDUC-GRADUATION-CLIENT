import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:3001',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
}
)

export default {
  getCourseAchievements() {
    return apiClient.get('/course-achievements')
  },
  getCourseAchievement(id) {
    return apiClient.get('/course-achievements/' + id)
  }
}
