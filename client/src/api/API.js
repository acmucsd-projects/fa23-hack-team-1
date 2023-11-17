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
        return axios.post(serverURL + "/api/register", payload);
    },
    
    getUser: function() {
        return axios.get(serverURL + "/api/register");
    },
}

export default API;