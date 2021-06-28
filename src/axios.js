import axios from "axios";

const instance = axios.create({
    baseURL: "https://whatsapp-backend-varan.herokuapp.com" 
});

export default instance;