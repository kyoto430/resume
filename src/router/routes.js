import About from '../pages/about'
import Contact from '../pages/contact'
import Main from '../pages/main'
import Projects from '../pages/projects'

export const routes = [
  { path: '/main', component: Main, exact: true },
  { path: '/projects', component: Projects, exact: true },
  { path: '/about', component: About, exact: true },
  { path: '/contact', component: Contact, exact: true },
]
