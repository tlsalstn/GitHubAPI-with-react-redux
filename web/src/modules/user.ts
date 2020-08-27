import github from "../network/github";

const GET_USER_REQUEST = "user/GET_USER_REQUEST" as const
const GET_USER_SUCCESS = "user/GET_USER_SUCCESS" as const
const GET_USER_FAILURE = "user/GET_USER_FAILURE" as const

export const getUserRequest = () => ({
    type: GET_USER_REQUEST
})
export const getUserSuccess = (user: User) => ({
    type: GET_USER_SUCCESS,
    payload: user
})
export const getUserFailure = (error: string) => ({
    type: GET_USER_FAILURE,
    error
})

export type UserAction =
    | ReturnType<typeof getUserRequest>
    | ReturnType<typeof getUserSuccess>
    | ReturnType<typeof getUserFailure>

export type User = {
    avatar_url: string;
    bio: string | null;
    blog: string;
    company: string;
    created_at: string;
    email: string | null;
    events_url: string;
    followers: number;
    followers_url: string;
    following: number;
    following_url: string;
    gists_url: string;
    gravatar_id: string;
    html_url: string;
    id: number;
    location: string | null;
    login: string;
    name: string;
    node_id: string;
    organizations_url: string;
    public_gists: number;
    public_repos: number;
    received_events_url: string;
    repos_url: string;
    site_admin: boolean;
    starred_url: string;
    subscriptions_url: string;
    twitter_username: string | null;
    type: string;
    updated_at: string;
    url: string;
}

export type UserState = {
    fetchingUpdate: boolean
    user: User
    error: string
}

const initialState: UserState = {
    fetchingUpdate: false,
    user: {} as User,
    error: ""
}

export const userAPI = (name: string) => async (dispatch: any) => {
    dispatch(getUserRequest())
    
    try {
        const response = await github({
            method: "GET",
            url: "/users/" + name,
            headers: {
                "Accept": "application/vnd.github.v3+json"
            }
        });

        if (response.status === 200) dispatch(getUserSuccess(response.data))
        else dispatch(getUserFailure(""))
    } catch (error) {
        console.log(error)
        dispatch(getUserFailure(""))
    }
}

function user(state: UserState = initialState, action: UserAction) {
    switch (action.type) {
        case GET_USER_REQUEST:
            return {
                ...state,
                fetchingUpdate: true,
                error: ""
            }
        case GET_USER_SUCCESS:
            return {
                ...state,
                fetchingUpdate: false,
                user: action.payload
            }
        case GET_USER_FAILURE:
            return {
                ...state,
                fetchingUpdate: false,
                error: action.error
            }
        default:
            return state
    }
}

export default user;