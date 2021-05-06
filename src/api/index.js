import Vue from 'vue'
import VueResource from 'vue-resource'

import services from './services'

Vue.use(VueResource)

const http = Vue.http

http.options.root = 'http://localhost:8000/api/';
http.options.credentials = true

Vue.http.interceptors.push(request => {
        // modify method
        request.method = 'POST';

        // modify headers
        request.headers.set('Access-Token', `Bearer ${localStorage.getItem('Token')}`);

        return (response) => {
          console.log(response)
        }
})

Object.keys(services).map(service => {
  services[service] = Vue.resource('', {}, services[service])
})

export { http }
export default services