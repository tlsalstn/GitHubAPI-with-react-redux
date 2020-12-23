import github from '../../../network/github'

export const userAPI = (name: string) => github({
    method: "GET",
    url: "/users/" + name
})