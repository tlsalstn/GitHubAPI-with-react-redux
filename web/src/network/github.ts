import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.github.com",
    headers: {
        Accept: "application/vnd.github.v3+json",
        // Authorization: "token " + window.localStorage.getItem('github_token')
    },
    timeout: 2000
})

export default instance