import Simulador from '@/layouts/Simulador'
import Dashboard from './pages/Dashboard'
import Adicionar from './pages/Adicionar'
import Leads from './pages/Leads'
import Contratos from './pages/Contratos'


export default [
  {
    path: '/',
    redirect: '/dashboard',
    name: 'Simulador',
    component: Simulador,
    meta: {
      auth: true
    },
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
      },
      {
        path: '/adicionar',
        name: 'Adicionar',
        component: Adicionar,
      },
      {
        path: '/leads',
        name: 'Leads',
        component: Leads,
      },
      {
        path: '/contratos',
        name: 'Contratos',
        component: Contratos,
      },
    ],
  },
  {
    path: '/',
    redirect: '/login'
  }
]