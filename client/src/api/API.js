import axios from 'axios'

const serverURL = 'http://localhost:8080'

const API = {
    getFood: function(){
        return axios.get(`${serverURL}/routes/food`);
    }
}

export default API;