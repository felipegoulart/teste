import services from '@/api'
import * as types from './mutation-type'

export const ActionDoLogin = (context, payload) => {
  // localStorage.removeItem('Token')
  return services.auth.login(payload).then(res => {
    localStorage.setItem('Token', res.headers.get('Access-Token'))
    services.auth.getUser().then(res => console.log(res))
  })
}

export const ActionSetUser = ({ commit }, payload) => {
  commit(types.SET_USER, payload)
}
export const ActionSetToken = ({ commit }, payload) => {
  commit(types.SET_TOKEN, payload)
}