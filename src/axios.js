import axios from "axios";

const server = import.meta.env.VITE_SERVER
const port = import.meta.env.VITE_SERVER_PORT

const instance = axios.create({
    baseURL: `http://${server}:${port}`
})

export default instance;