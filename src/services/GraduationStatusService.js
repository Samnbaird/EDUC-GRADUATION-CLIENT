import axios from 'axios'

const apiClient = axios.create({
  
  baseURL: process.env.VUE_APP_GRADUATION_STATUS_API_HOST,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
}
)
const testapiClient = axios.create({
  
  baseURL: 'http://weasyprint-wbmfsf-tools.pathfinder.gov.bc.ca',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})
export default {
  getGraduationStatus(pen) {
    var inputPen = pen;
    return apiClient.get('/api/v1/graduation-status/' + inputPen);
  },
  getGraduationReport(data) {
    //let url =  'http://weasyprint-wbmfsf-tools.pathfinder.gov.bc.ca/pdf?filename=myfile.pdf';
    
    //var inputPen = pen;
    //console.log("GraduationStatusService:" + url + inputPen);
    return testapiClient.post('/pdf?filename=myfile.pdf',data, {responseType: 'arraybuffer'})
  },
  refreshGraduationStatus(pen){
   var inputPen = pen;
   return apiClient.post('/api/v1/graduation-status/' + inputPen);
  }
}