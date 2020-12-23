import github from '../../../network/github'

export const repositoryAPI = (name: string, repo: string) => github({
    method: "GET",
    url: "/repos/" + name + "/" + repo
})

export const repositoryListAPI = (name: string, type: string, sort: string) => github({
    method: "GET",
    url: "/" + (type === "User" ? "users" : "orgs") + "/" + name + "/repos",
    params: {
        sort
    }
})

export const branchListAPI = (name: string, repo: string) => github({
    method: "GET",
    url: "/repos/" + name + "/" + repo + "/branches"
})