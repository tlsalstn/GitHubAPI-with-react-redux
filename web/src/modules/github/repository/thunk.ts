import github from '../../../network/github'

export const repositoryAPI = (name: string, repo: string) => github({
    method: "GET",
    url: "/repos/" + name + "/" + repo,
    headers: {
        Accept: "application/vnd.github.v3+json"
    }
})

export const repositoryListAPI = (name: string, type: string) => github({
    method: "GET",
    url: "/" + (type === "User" ? "users" : "orgs") + "/" + name + "/repos",
    headers: {
        Accept: "application/vnd.github.v3+json"
    }
})