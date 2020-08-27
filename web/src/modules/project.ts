import github from '../network/github'

const GET_PROJECT_LIST_REQUEST = "project/GET_PROJECT_LIST_REQUEST" as const
const GET_PROJECT_LIST_SUCCESS = "project/GET_PROJECT_LIST_SUCCESS" as const
const GET_PROJECT_LIST_FAILURE = "project/GET_PROJECT_LIST_FAILURE" as const

export const getProjectListRequest = () => ({
    type: GET_PROJECT_LIST_REQUEST
})
export const getProjectListSuccess = (projects: Project[]) => ({
    type: GET_PROJECT_LIST_SUCCESS,
    payload: projects
})
export const getProjectListFailure = (error: string) => ({
    type: GET_PROJECT_LIST_FAILURE,
    error
})

export type ProjectAction =
    | ReturnType<typeof getProjectListRequest>
    | ReturnType<typeof getProjectListSuccess>
    | ReturnType<typeof getProjectListFailure>

export type Project = {
    owner_url: string
    url: string
    html_url: string
    columns_url: string
    id: number
    node_id: string
    name: string
    body: string
    number: number
    state: string
    creator: Creator,
    created_at: string
    updated_at: string
    organization_permission: string
    private: boolean
}

type Creator = {
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
}

export type ProjectState = {
    fetchingUpdate: boolean
    projects: Project[],
    error: string
}

const initialState: ProjectState = {
    fetchingUpdate: false,
    projects: [],
    error: ""
}

export const projectListAPI = (name: string, type: string) => async (dispatch: any) => {
    console.log(name)
    console.log(type === "User" ? "users" : "orgs")
    try {
        const response = await github({
            method: 'GET',
            url: '/' + (type === 'User' ? 'users' : 'orgs') + '/' + name.toLowerCase() + '/projects',
            headers: {
                Accept: 'application/vnd.github.inertia-preview+json'
            }
        })

        console.log(response.data)
        if(response.status === 200) dispatch(getProjectListSuccess(response.data))
        else dispatch(getProjectListFailure(""))
    } catch (error) {
        console.log(error)
        dispatch(getProjectListFailure(error.message))
    }
}

function project(state: ProjectState = initialState, action: ProjectAction) {
    switch (action.type) {
        case GET_PROJECT_LIST_REQUEST:
            return {
                ...state,
                fetchingUpdate: true,
                error: ""
            }
        case GET_PROJECT_LIST_SUCCESS:
            return {
                ...state,
                fetchingUpdate: false,
                projects: action.payload
            }
        case GET_PROJECT_LIST_FAILURE:
            return {
                ...state,
                fetchingUpdate: false,
                error: action.error
            }
        default:
            return state
    }
}

export default project