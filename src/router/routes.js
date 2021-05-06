import { routes as auth } from '@/views/auth'
import { routes as admin } from '@/views/simulador'
import { routes as error } from '@/views/error'

export default [
  ...auth,
  ...admin,
  
  ...error
]