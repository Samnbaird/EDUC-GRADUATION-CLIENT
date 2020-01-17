import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AssessmentAchievementList from '../views/AssessmentAchievementList.vue'
import AssessmentAchievementShow from '../views/AssessmentAchievementShow.vue'
import AssessmentRegistrationList from '../views/AssessmentRegistrationList.vue'
import AssessmentRegistrationShow from '../views/AssessmentRegistrationShow.vue'
import AssessmentList from '../views/AssessmentList.vue'
import AssessmentShow from '../views/AssessmentShow.vue'
import CourseAchievementList from '../views/CourseAchievementList.vue'
import CourseAchievementShow from '../views/CourseAchievementShow.vue'
import CourseRegistrationList from '../views/CourseRegistrationList.vue'
import CourseRegistrationShow from '../views/CourseRegistrationShow.vue'
import CourseList from '../views/CourseList.vue'
import CourseShow from '../views/CourseShow.vue'
import GraduationRuleList from '../views/GraduationRuleList.vue'
import GraduationRuleShow from '../views/GraduationRuleShow.vue'
import GraduationStatusList from '../views/GraduationStatusList.vue'
import GraduationStatusShow from '../views/GraduationStatusShow.vue'
import GraduationStatusCreate from '../views/GraduationStatusCreate.vue'
import StudentList from '../views/StudentList.vue'
import StudentShow from '../views/StudentShow.vue'
import StudentAchievementReportShow from '../views/StudentAchievementReportShow.vue'
import StudentTranscriptReportShow from '../views/StudentTranscriptReportShow.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/courses',
    name: 'course-list',
    component: CourseList
  },
  {
    path: '/courses/:id',
    name: 'course-show',
    component: CourseShow,
    props: true
  },
  {
    path: '/course-registrations',
    name: 'course-registration-list',
    component: CourseRegistrationList
  },
  {
    path: '/course-registrations/:id',
    name: 'course-registration-show',
    component: CourseRegistrationShow,
    props: true
  },
  {
    path: '/course-achievements',
    name: 'course-achievement-list',
    component: CourseAchievementList
  },
  {
    path: '/course-achievements/:id',
    name: 'course-achievement-show',
    component: CourseAchievementShow,
    props: true
  },
  {
    path: '/assessments',
    name: 'assessment-list',
    component: AssessmentList
  },
  {
    path: '/assessments/:id',
    name: 'assessment-show',
    component: AssessmentShow,
    props: true
  },
  {
    path: '/assessment-registrations',
    name: 'assessment-registration-list',
    component: AssessmentRegistrationList
  },
  {
    path: '/assessment-registrations/:id',
    name: 'assessment-registration-show',
    component: AssessmentRegistrationShow,
    props: true
  },
  {
    path: '/assessment-achievements',
    name: 'assessment-achievement-list',
    component: AssessmentAchievementList
  },
  {
    path: '/assessment-achievements/:id',
    name: 'assessment-achievement-show',
    component: AssessmentAchievementShow,
    props: true
  },
  {
    path: '/graduation-rules',
    name: 'graduation-rule-list',
    component: GraduationRuleList
  },
  {
    path: '/graduation-rules/:id',
    name: 'graduation-rule-show',
    component: GraduationRuleShow,
    props: true
  },
  {
    path: '/graduation-statuses',
    name: 'graduation-status-list',
    component: GraduationStatusList
  },
  {
    path: '/graduation-statuses/:id',
    name: 'graduation-status-show',
    component: GraduationStatusShow,
    props: true
  },
  {
    path: '/graduation-statuses/create',
    name: 'graduation-status-create',
    component: GraduationStatusCreate
  },
  {
    path: '/students',
    name: 'student-list',
    component: StudentList
  },
  {
    path: '/students/:id',
    name: 'student-show',
    component: StudentShow,
    props: true
  },
  {
    path: '/graduation-statuses/sachreport/:pen',
    name: 'student-achievement-report-show',
    component: StudentAchievementReportShow,
    props: true
  },
  {
    path: '/graduation-statuses/transcript/:pen',
    name: 'student-transcript-report-show',
    component: StudentTranscriptReportShow,
    props: true
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
