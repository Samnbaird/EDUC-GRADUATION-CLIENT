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
  getGraduationReport() {
    //let url =  'http://weasyprint-wbmfsf-tools.pathfinder.gov.bc.ca/pdf?filename=myfile.pdf';
    let data = `<!DOCTYPE html>
    <html>
       <body>
          <! Header Information>
          <h1 style="text-align: center;"><strong>Ministry of Education</strong></h1>
          <h2 style="text-align: center;"><strong>Student Achievement Report</strong></h2>
          <p style="text-align: center;"><strong>(Transcript Verification)</strong></p>
          <p style="text-align: center;">Date: 2020-02-20</p>
          <! Student Information>
          <h2>Student</h2>
          <p><strong>Matthews, John Middle</strong></p>
          <p>PEN: 123456789</p>
          <p>Graduation Program : 2018</p>
          <p>School: Oak Bay High School</p>
          <p>Date of Birth: 2009-06-12</p>
          <p>Grade: 12</p>
          <p>Gender: M</p>
          <p>Citizenship: C</p>
          <p>Address: 1234 Sunshine Way, Victoria BC V8V 4Y9</p>
          <! Student Grad Status>
          <h2 style="color: blue">Student Graduation Status </h2>
          <h3 style="color: blue">This student has not yet graduated in the 2018 graduation program.</h3>
          <! Student List of Courses and Assessments>
          <head>
             <style>
                table {
                border-collapse: collapse;
                width: 100%;
                }
                td, th {
                border: 1px solid #dddddd;
                text-align: left;
                padding: 8px;
                }
                tr:nth-child(even) {
                background-color: #dddddd;
                }
             </style>
          </head>
          <body>
             <h2>Student Course / Assessment </h2>
             <table>
                <tr>
                <tr style="height: 39px;">
                   <th>Course / Assessment Name</th>
                   <th> Course / Assessment Code</th>
                   <th> Graduation Requirement Met</strong</th>
                   <th> Course Type</th>
                   <th> Session Date</th>
                   <th> Interim %</th>
                   <th> Final %</th>
                   <th> Final Letter Grade</th>
                   <th> Credits</td>
                   <th> Comments</th>
                </tr>
                <tr>
                   <td>English 10</td>
                   <td>EN 10</td>
                   <td>101</td>
                   <td>&nbsp;</td>
                   <td>2016-06</td>
                   <td>&nbsp;</td>
                   <td>100</td>
                   <td>A</td>
                   <td>4</td>
                   <td>&nbsp;</td>
                </tr>
                <tr>
                   <td>English 10</td>
                   <td>EN 10</td>
                   <td>&nbsp;</td>
                   <td>&nbsp;</td>
                   <td>2017-06</td>
                   <td>&nbsp;</td>
                   <td>88</td>
                   <td>A</td>
                   <td>4</td>
                   <td>duplicate</td>
                </tr>
                <tr>
                   <td>Physical Education 10</td>
                   <td>PE 10</td>
                   <td>110</td>
                   <td>&nbsp;</td>
                   <td>2018-11</td>
                   <td>&nbsp;</td>
                   <td>100</td>
                   <td>A</td>
                   <td>4</td>
                   <td>&nbsp;</td>
                </tr>
                <tr>
                   <td>Science 10</td>
                   <td>SC 10</td>
                   <td>&nbsp;</td>
                   <td>&nbsp;</td>
                   <td>2016-01</td>
                   <td>&nbsp;</td>
                   <td>44</td>
                   <td>F</td>
                   <td>4</td>
                   <td>fail</td>
                </tr>
                <tr>
                   <td>Social Studies 11</td>
                   <td>SS 11</td>
                   <td>105</td>
                   <td>&nbsp;</td>
                   <td>2018-01</td>
                   <td>&nbsp;</td>
                   <td>100</td>
                   <td>A</td>
                   <td>4</td>
                   <td>&nbsp;</td>
                </tr>
             </table>
             <! Student List of sub-programs>
             <h2>Ancillary Programs</h2>
             <ul>
                <li>Advanced Placement</li>
                <li>Career Program: Agriculture</li>
             </ul>
             <! Student List of Requirements Met>
             <h2>Graduation Program 2018 Requirements Met</h2>
             <ul>
                <li>Language Arts 10</li>
                <li>Physical and Health Education 10</li>
                <li>Social Studies 11 or 12 </li>
             </ul>
             <! Student List of Requirements Not Met>
             <h2>Graduation Program 2018 Requirements Not Met</h2>
             <ul>
                <li>No Language Arts 12</li>
                <li>No Literacy 10 Assessment</li>
                <li>Fewer than 16 Grade 12 credits</li>
             </ul>
       </body>
    </html>`
    //var inputPen = pen;
    //console.log("GraduationStatusService:" + url + inputPen);
    return testapiClient.post('/pdf?filename=myfile.pdf',data, {responseType: 'arraybuffer'})
  }
}