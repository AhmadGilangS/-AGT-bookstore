import VueResource from 'vue-resource'
import Vue from 'vue'
import {getApiNoAuthSB} from '../utils'

Vue.use(VueResource)

export default {  
    submitNewUser(window, param){
        return getApiNoAuthSB().post('/register', param)
        .then(function(response){
            console.log(response)
            return  response.data
        }).catch(function(err){
        console.log(err)
    })
    },
}