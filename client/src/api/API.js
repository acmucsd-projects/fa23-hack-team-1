import axios from 'axios'

const serverURL = 'http://localhost:8080'

const API = {
    getFood: function(){
        return axios.get(`${serverURL}/foodRoute`);
    },

    postFood: function(payload){
        return axios.post(`${serverURL}/foodRoute`, payload);
    },

    createUser: function(payload) {
        return axios.post(`${serverURL}/api/register`, payload);
    },
    
    loginUser: function(payload) {
        return axios.post(`${serverURL}/api/login`, payload);
    }
}

export default API;