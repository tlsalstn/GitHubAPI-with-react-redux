import { getGithubTokenRequest, getGithubTokenSuccess, getGithubTokenFailure, AuthAction } from "./actions"
import { tokenAPI } from "./thunk"
import { GET_GITHUB_TOKEN_REQUEST, GET_GITHUB_TOKEN_SUCCESS, GET_GITHUB_TOKEN_FAILURE, LOGOUT } from "./actions/types"

export const getToken = (code: string, state: string) => async (dispatch: Function) => {
    dispatch(getGithubTokenRequest())

    try {
        const response = await tokenAPI(code, state)

        dispatch(getGithubTokenSuccess(response.data.access_token))
    } catch (error) {
        dispatch(getGithubTokenFailure(error.response.data.error_description))
    }
}

type AuthState = {
    fetchingUpdate: boolean
    token: string
    client_id: string
    client_secret: string
    redirect_uri: string
}

const initialState: AuthState = {
    fetchingUpdate: false,
    token: localStorage.getItem("github_token") || "",
    client_id: process.env.CLIENT_ID || "",
    client_secret: process.env.CLIENT_SECRET || "",
    redirect_uri: process.env.REDIRECT_URI || ""
}

export default function auth(state: AuthState = initialState, action: AuthAction) {
    switch(action.type) {
        case GET_GITHUB_TOKEN_REQUEST:
            return {
                ...state,
                fetchingUpdate: true,
                token: "",
                error: ""
            }
        case GET_GITHUB_TOKEN_SUCCESS:
            localStorage.setItem('github_token', action.token)
            return {
                ...state,
                fetchingUpdate: false,
                token: action.token
            }
        case GET_GITHUB_TOKEN_FAILURE:
            return {
                ...state,
                fetchingUpdate: false,
                error: action.error
            }
        case LOGOUT:
            localStorage.clear()
            return {
                ...state,
                
            }
        default:
            return state
    }
}