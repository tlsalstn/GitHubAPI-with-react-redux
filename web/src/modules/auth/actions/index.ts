import { GET_GITHUB_TOKEN_REQUEST, GET_GITHUB_TOKEN_SUCCESS, GET_GITHUB_TOKEN_FAILURE, LOGOUT } from "./types";

export const getGithubTokenRequest = () => ({
    type: GET_GITHUB_TOKEN_REQUEST
})
export const getGithubTokenSuccess = (token: string) => ({
    type: GET_GITHUB_TOKEN_SUCCESS,
    token
})
export const getGithubTokenFailure = (error: string) => ({
    type: GET_GITHUB_TOKEN_FAILURE,
    error
})
export const logout = () => ({
    type: LOGOUT
})

export type AuthAction =
    | ReturnType<typeof getGithubTokenRequest>
    | ReturnType<typeof getGithubTokenSuccess>
    | ReturnType<typeof getGithubTokenFailure>
    | ReturnType<typeof logout>