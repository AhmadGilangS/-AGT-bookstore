import VueResource from 'vue-resource'
import Vue from 'vue'
import { getApiNoAuthSB } from '../utils'

Vue.use(VueResource)

export default {

    getUser(window) {
        return getApiNoAuthSB().get('/login')
            .then(function (response) {
                console.log(response)
                return response.data
            }).catch(function (err) {
                console.log(err)
            })
    },

    getUserByEmailAndPass(window, email, pass) {
        return getApiNoAuthSB()
            .get('/login/' + email + '/' + pass)
            .then(function (response) {
                console.log(response)
                return response.data
            }).catch(function (err) {
                console.log(err)
            })
    },

}