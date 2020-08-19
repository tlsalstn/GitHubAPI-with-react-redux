import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.github.com",
    headers: {
        "Authorization": "token aa5201ea28c25e3b11a272f7fd1cd74b5e07c6e1",
        "Accept": "application/vnd.github.inertia-preview+json"
    }
});

export default instance