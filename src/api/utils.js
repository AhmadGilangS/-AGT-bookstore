import axios from 'axios'

const API_URL_SB = 'http://localhost:8080/api/v1';
const API_URL_LB = 'http://localhost:3000/api/'

export function getApiNoAuthLB(){
    return axios.create({
        baseURL: API_URL_LB,
        timeout: 10000,
        withCredentials: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        }
    })
}

export function getApiLB(token, params){
    if(params){ params.access_token = token } else {
        params = {
            access_token: token
        }
    }
    return axios.create({
        baseURL: API_URL_LB,
        timeout: 100000,
        withCredentials: true,
        params: params,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json; charset=utf-8'
        }
    })
}

export function getApiNoAuthSB(){
    return axios.create({
        baseURL: API_URL_SB,
        timeout: 10000,
        withCredentials: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        }
    })
}

export function getApiSB(token, params){
    if(params){ params.access_token = token } else {
        params = {
            access_token: token
        }
    }
    return axios.create({
        baseURL: API_URL_SB,
        timeout: 100000,
        withCredentials: true,
        params: params,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json; charset=utf-8'
        }
    })
}