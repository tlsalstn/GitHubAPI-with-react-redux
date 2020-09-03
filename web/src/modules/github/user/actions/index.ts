import { USER_REQUEST, USER_SUCCESS, USER_FAILURE, SET_USER } from "./types";

export const userRequest = () => ({
    type: USER_REQUEST
})
export const userSuccess = (user: User) => ({
    type: USER_SUCCESS,
    user
})
export const userFailure = (error: string) => ({
    type: USER_FAILURE,
    error
})

export const cachedUser = (user: User) => ({
    type: SET_USER,
    user
})

export type UserAction =
    | ReturnType<typeof userRequest>
    | ReturnType<typeof userSuccess>
    | ReturnType<typeof userFailure>
    | ReturnType<typeof cachedUser>

export type User = {
    login: string
    id: number
    node_id: string
    avatar_url: string
    gravatar_id: string
    url: string
    html_url: string
    followers_url: string
    following_url: string
    gists_url: string
    starred_url: string
    subscriptions_url: string
    organizations_url: string
    repos_url: string
    events_url: string
    received_events_url: string
    type: string
    site_admin: boolean
    name: string
    company: string
    blog: string
    location: string
    email: string
    hireable: boolean
    bio: string
    twitter_username: string
    public_repos: number
    public_gists: number
    followers: number
    following: number
    created_at: Date
    updated_at: Date
}