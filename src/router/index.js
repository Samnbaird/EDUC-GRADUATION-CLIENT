import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AssessmentAchievementList from '../views/AssessmentAchievementList.vue'
import AssessmentAchievementShow from '../views/AssessmentAchievementShow.vue'
import AssessmentList from '../views/AssessmentList.vue'
import AssessmentShow from '../views/AssessmentShow.vue'
import CourseAchievementList from '../views/CourseAchievementList.vue'
import CourseAchievementShow from '../views/CourseAchievementShow.vue'
import CourseAchievementCreate from '../views/CourseAchievementCreate.vue'
import CourseList from '../views/CourseList.vue'
import CourseShow from '../views/CourseShow.vue'
import ProgramRuleList from '../views/ProgramRuleList.vue'
import ProgramRuleShow from '../views/ProgramRuleShow.vue'
import GraduationStatusFind from '../views/GraduationStatusFind.vue'
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
    path: '/course-achievements/create',
    name: 'course-achievement-create',
    component: CourseAchievementCreate,
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
    path: '/program-rules',
    name: 'program-rule-list',
    component: ProgramRuleList
  },
  {
    path: '/program-rules/:id',
    name: 'program-rule-show',
    component: ProgramRuleShow,
    props: true
  },
  {
    path: '/graduation-status',
    name: 'graduation-status-find',
    component: GraduationStatusFind,
    props: true
  },
  {
    path: '/graduation-status/:id',
    name: 'graduation-status-show',
    component: GraduationStatusShow,
    props: true
  },
  {
    path: '/graduation-status/create',
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
    path: '/graduation-statuses/sachreport/:id',
    name: 'student-achievement-report-show',
    component: StudentAchievementReportShow,
    props: true
  },
  {
    path: '/graduation-statuses/transcript/:id',
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
