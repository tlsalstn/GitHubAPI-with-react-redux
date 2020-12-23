import github from '../../../network/github'

export const contentsAPI = (name: string, repo: string, roots: string = "", branch: string = "master") => github({
    method: "GET",
    url: '/repos/' + name + '/' + repo + '/contents/' + roots,
    data: {
        ref: branch
    }
})