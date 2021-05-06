// import axios from 'axios'

// export default {
//   namespaced: true,
//   state: {
//     token: null,
//     usuario: null
//   },

//   getters: {
//     autenticado (state) {
//       return state.token && state.usuario
//     },

//     usuario (state) {
//       return state.usuario
//     }
//   },

//   mutations: {
//     SET_TOKEN (state, accessToken) {
//       state.token = accessToken
//     },

//     SET_USUARIO (state, data) {
//       state.usuario = data
//     }
//   },

//   actions: {
//     async submit ({ dispatch }, credentials) {
//       const response = await axios.post('auth/login', {
//         email: credentials.email,
//         password: credentials.password
//       })

//       dispatch('attempt', response.data.access_token)
//     },

//     async attempt ({ commit, state }, accessToken) {
//       if (accessToken) {
//         commit('SET_TOKEN', accessToken)
//       }

//       if (!state.token) {
//         return
//       }

//       try {
//         const response = await axios.get('auth/me')

//         commit('SET_USUARIO', response.data)
//       } catch (error) {
//         commit('SET_TOKEN', null)
//         commit('SET_USUARIO', null)
//       }
//     },

//     logout ({ commit }) {
//       return axios.post('auth/logout').then(() => {
//         commit('SET_TOKEN', null)
//         commit('SET_USUARIO', null)
//       })
//     }
//   },

//   modules: {
//     //
//   }
// }
