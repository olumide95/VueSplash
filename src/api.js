import Vue from 'vue'
import axios from 'axios'
import router from './router'

let config = {
    baseURL: 'https://api.unsplash.com/',
    timeout: 30000,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
}

const GET = (url, params) => REQUEST({ method: 'get', url, params })
const POST = (url, data) => REQUEST({ method: 'post', url, data })
const PUT = (url, data) => REQUEST({ method: 'put', url, data })
const PATCH = (url, data) => REQUEST({ method: 'patch', url, data })
const DELETE = url => REQUEST({ method: 'delete', url })

const REQUEST = conf => {
    conf = {...conf, ...config }
    conf = setAccessTokenHeader(conf)

    return new Promise((resolve, reject) => {
        axios
            .request(conf)
            .then(response => {
                resolve(response.data)
            })
            .catch(error => {
                outputError(error)
                reject(error)
            })
    })
}

function setAccessTokenHeader(config) {
    const access_token = 'bb4b552fa6df0336cce8a2bcb5b4abdbcc4ca92b80082f1ac0e807e998e185c4';
    if (access_token) {
        config.headers.Authorization = 'Client-ID ' + access_token
    }

    return config
}


function outputError(error) {
    if (error.response) {
        /**
         * The request was made and the server responded with a
         * status code that falls out of the range of 2xx
         */
        if (error.response.status === 401) {
            console.log(error.response.data);
            return
        } else {
            /* other response status such as 403, 404, 422, etc */
            console.log(error.response.data);
            let e_error = error.response.data.error;
            if (typeof e_error != 'object') {
                //this.$toastr.error(e_error, {});
            }

        }
    } else if (error.request) {
        /**
         * The request was made but no response was received
         * `error.request` is an instance of XMLHttpRequest in the browser
         * and an instance of http.ClientRequest in node.js
         */
    } else {
        /* Something happened in setting up the request that triggered an Error */
    }
}

export default {
    GET,
    POST,
    DELETE,
    PUT,
    PATCH,
    REQUEST,
}