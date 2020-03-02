import axios from 'axios'

const apiClient = axios.create({
  
  baseURL: process.env.VUE_APP_GRADUATION_STATUS_API_HOST + ":" + process.env.VUE_APP_GRADUATION_STATUS_API_PORT,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
}
)

export default {
  getGraduationStatus(pen) {
    var url =  'http://localhost:9996/api/v1/graduation-status/';
    var inputPen = pen;
    console.log("GraduationStatusService:" + url + inputPen);
    return apiClient.get(url + inputPen);
  }
}