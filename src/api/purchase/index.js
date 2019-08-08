import VueResource from 'vue-resource'
import Vue from 'vue'
import { getApiNoAuthLB } from '../utils'

Vue.use(VueResource)

export default {
    postPurchase(window, param) {
        return getApiNoAuthLB().post('Purchases', param)
            .then(function (response) {
                console.log(response)
                return response.data
            }).catch(function (err) {
                console.log(err)
            })
    },

}