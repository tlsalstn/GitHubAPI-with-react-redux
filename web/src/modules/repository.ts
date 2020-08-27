import github from "../network/github"
import { UserState } from "./user"

const GET_REPOSITORY_REQUEST = "repository/GET_REPOSITORY_REQUEST" as const
const GET_REPOSITORY_SUCCESS = "repository/GET_REPOSITORY_SUCCESS" as const
const GET_REPOSITORY_FAILURE = "repository/GET_REPOSITORY_FAILURE" as const

const GET_REPOSITORY_LIST_REQUEST = "repository/GET_REPOSITORY_DATA_REQUEST" as const
const GET_REPOSITORY_LIST_SUCCESS = "repository/GET_REPOSITORY_DATA_SUCCESS" as const
const GET_REPOSITORY_LISt_FAILURE = "repository/GET_REPOSITORY_DATA_FAILURE" as const

export const getRepositoryRequest = () => ({
    type: GET_REPOSITORY_REQUEST
})

export const getRepositorySuccess = (repository: Repository) => ({
    type: GET_REPOSITORY_SUCCESS,
    payload: repository
})

export const getRepositoryFailure = (error: string) => ({
    type: GET_REPOSITORY_FAILURE,
    error
})

export const getRepositoryListRequest = () => ({
    type: GET_REPOSITORY_LIST_REQUEST
})
export const getRepositoryListSuccess = (repositories: Repository[]) => ({
    type: GET_REPOSITORY_LIST_SUCCESS,
    payload: repositories
})
export const getRepositoryListFailure = (error: string) => ({
    type: GET_REPOSITORY_LISt_FAILURE,
    error
})

export type RepositoryAction =
    | ReturnType<typeof getRepositoryRequest>
    | ReturnType<typeof getRepositorySuccess>
    | ReturnType<typeof getRepositoryFailure>
    | ReturnType<typeof getRepositoryListRequest>
    | ReturnType<typeof getRepositoryListSuccess>
    | ReturnType<typeof getRepositoryListFailure>

export type Repository = {
    id: number;
    node_id: number;
    name: string;
    full_name: string;
    private: boolean;
    owner: UserState;
    html_url: string;
    description: string;
    fork: boolean;
    url: string;
    forks_url: string;
    keys_url: string;
    collaborators_url: string;
    teams_url: string;
    hooks_url: string;
    issue_events_url: string;
    assignees_url: string;
    branches_url: string;
    tags_url: string;
    blobs_url: string;
    git_tags_url: string;
    git_refs_url: string;
    trees_url: string;
    statuses_url: string;
    languages_url: string;
    stargazers_url: string;
    contributors_url: string;
    subscribers_url: string;
    subscription_url: string;
    commits_url: string;
    git_commits_url: string;
    comments_url: string;
    issue_comment_url: string;
    contents_url: string;
    compare_url: string;
    merges_url: string;
    archive_url: string;
    downloads_url: string;
    issues_url: string;
    pulls_url: string;
    milestones_url: string;
    notifications_url: string;
    labels_url: string;
    releases_url: string;
    deployments_url: string;
    created_at: string;
    updated_at: string;
    pushed_at: string;
    git_url: string;
    ssh_url: string;
    clone_url: string;
    svn_url: string;
    homepage: string;
    size: number;
    stargazers_count: number;
    watchers_count: number;
    language: string | null;
    has_issues: boolean;
    has_projects: boolean;
    has_download: boolean;
    has_wiki: boolean;
    has_pages: boolean;
    forks_count: number;
    mirror_url: string | null;
    archived: boolean;
    disabled: boolean;
    open_issues_count: number;
    license: string | null;
    forks: number;
    open_issues: number;
    watchers: number;
    default_branch: string;
}

export type RepositoryState = {
    fetchingUpdate: boolean
    repository: Repository
    repositories: Repository[],
    error: string
}

const initialState: RepositoryState = {
    fetchingUpdate: false,
    repository: {} as Repository,
    repositories: [],
    error: ""
}

export const repositoryAPI = (name: string, repo_name: string) => async (dispatch: Function) => {
    dispatch(getRepositoryRequest())

    try {
        const response = await github({
            method: "GET",
            url: "/users/" + name.toLowerCase() + "/" + repo_name.toLowerCase(),
            headers: {
                Accept: "application/vnd.github.v3+json"
            }
        })

        console.log(response)
        dispatch(getRepositoryFailure(""))
    } catch (error) {
        console.log(error)
        dispatch(getRepositoryFailure(""))
    }
}

export const repositoryListAPI = (name: string) => async (dispatch: any) => {
    dispatch(getRepositoryListRequest())

    try {
        const response = await github({
            method: "GET",
            url: "/users/" + name.toLowerCase() + "/repos",
            params: {
                sort: 'updated'
            }
        });

        console.log(response.data);
        if(response.status === 200) dispatch(getRepositoryListSuccess(response.data))
        else dispatch(getRepositoryListFailure(""))
    } catch (error) {
        console.log(error)
        dispatch(getRepositoryListFailure(error.message))
    }
}

function repository(state: RepositoryState = initialState, action: RepositoryAction) {
    switch (action.type) {
        case GET_REPOSITORY_REQUEST:
        case GET_REPOSITORY_LIST_REQUEST:
            return {
                ...state,
                fetchingUpdate: true,
                error: ""
            }
        case GET_REPOSITORY_SUCCESS:
            return {
                ...state,
                fetchingUpdate: false,
                repository: action.payload
            }
        case GET_REPOSITORY_LIST_SUCCESS:
            return {
                ...state,
                fetchingUpdate: false,
                repositories: action.payload
            }
        case GET_REPOSITORY_FAILURE:
        case GET_REPOSITORY_LISt_FAILURE:
            return {
                ...state,
                fetchingUpdate: false,
                error: action.error
            }
        default:
            return state
    }
}

export default repository;