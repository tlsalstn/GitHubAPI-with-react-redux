import axios from "axios";
import { githubToken } from "../config/github"

const instance = axios.create({
    baseURL: "https://api.github.com",
    headers: {
        "Authorization": "token " + githubToken,
        "Accept": "application/vnd.github.inertia-preview+json"
    }
});

export default instance