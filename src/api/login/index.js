import VueResource from 'vue-resource'
import Vue from 'vue'
import {getApiNoAuthSB} from '../utils'

Vue.use(VueResource)

export default {

    getUser(window){
        return getApiNoAuth().get('/login')
        .then(function(response){
            console.log(response)
            return  response.data
        }).catch(function(err){
        console.log(err)
    })
    },

    getUserByEmailAndPassword(window, email, password){
        return getApiNoAuthSB()
        .get('/login/'+email+'/'+password)
        .then(function (response){
            console.log(response)
            return response.data
        }).catch(function(err){
            console.log(err)
        })
    },
    
}