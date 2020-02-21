import axios from 'axios'

const apiClient = axios.create({
  
  baseURL: process.env.VUE_APP_COURSE_ACHIEVEMENT_API_HOST + ":" + process.env.VUE_APP_COURSE_ACHIEVEMENT_API_PORT,
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
  },
  editStudentCourseAchievement(id, data){
    console.log(data);
    return apiClient.put("/api/v1/course-achievements/" + id ,data,{ useCredentials: false })
  },
  addStudentCourseAchievement(data){
    console.log(data);
    return apiClient.post("/api/v1/course-achievements/",data,{ useCredentials: false })
  }
}
