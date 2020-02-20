import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:9998',
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
    console.log('/api/v1/course-achievements/' + id);
    return apiClient.get('/api/v1/course-achievements/' + id)
  },
  getStudentCourseAchievement(pen) {
    return apiClient.get('/api/v1/course-achievements/pen/' + pen)
  },
  editStudentCourseAchievement(id, data){
   
    return apiClient.put("/api/v1/course-achievements/" + id ,data,{ useCredentails: false })
    
  },

  getApiClient() {
    return apiClient
  }
}
