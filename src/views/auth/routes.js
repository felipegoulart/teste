import Auth from '@/layouts/Auth'
import Login from './Login'

export default [
  {
    path: '/',
    name: 'Auth',
    component: Auth,
    redirect: '/login',
    children: [
      {
        path: '/login',
        name: 'Login',
        component: Login,
      }
    ]
  }
]