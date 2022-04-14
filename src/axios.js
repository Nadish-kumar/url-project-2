import axios from 'axios';


const instance = axios.create({
    baseURL : "https://url-project-backend.herokuapp.com"
})


export default instance;