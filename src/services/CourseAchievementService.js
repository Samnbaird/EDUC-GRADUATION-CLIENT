import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'localhost:9998',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
}
)

export default {
  getCourseAchievements() {
    return apiClient.get('/api/v1/course-achievements')
  },
  getCourseAchievement(id) {
    return apiClient.get('/api/v1/course-achievements/' + id)
  },
  getStudentCourseAchievement(pen) {
    return apiClient.get('/api/v1/course-achievements/pen/' + pen)
  }
}
