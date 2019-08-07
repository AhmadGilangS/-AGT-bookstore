import VueResource from 'vue-resource'
import Vue from 'vue'
import {getApiNoAuthSB} from '../utils'

Vue.use(VueResource)

export default {
    getUserByEmailAndPassword(window, email, password){
        return getApiNoAuth()
        .get('/login/'+email+'/'+password)
        .then(function (response){
            console.log(response)
            return response.data
        }).catch(function(err){
            console.log(err)
        })
    }
}