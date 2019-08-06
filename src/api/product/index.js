import VueResource from 'vue-resource'
import Vue from 'vue'
import { getApiNoAuthLB } from '../utils'

Vue.use(VueResource)

export default {
    getAllProduct(window) {
        return getApiNoAuthLB().get('Products') //lihat di request url loopback
            .then(function (response) {
                console.log(response)
                return response.data
            }).catch(function (err) {
                console.log(err)
            })
    },

}