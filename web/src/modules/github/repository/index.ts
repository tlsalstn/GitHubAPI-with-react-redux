import { Repository, Branch, RepositoryAction, getRepositoryRequest, getRepositorySuccess, getRepositoryFailure, getRepositoryListRequest, getRepositoryListSuccess, getRepositoryListFailure, getBranchListRequest, getBranchListSuccess, getBranchListFailure } from "./actions";
import { GET_REPOSITORY_REQUEST, GET_REPOSITORY_LIST_REQUEST, GET_REPOSITORY_SUCCESS, GET_REPOSITORY_LIST_SUCCESS, GET_REPOSITORY_FAILURE, GET_REPOSITORY_LIST_FAILURE, GET_BRANCH_LIST_SUCCESS, GET_BRANCH_LIST_REQUEST, GET_BRANCH_LIST_FAILURE } from "./actions/types";
import { branchListAPI, repositoryAPI, repositoryListAPI } from "./thunk";

type RepositoryState = {
    fetchingUpdate: boolean
    repository: Repository
    repositories: Repository[]
    branches: Branch[]
    error: string
}

const initialState: RepositoryState = {
    fetchingUpdate: false,
    repository: {} as Repository,
    repositories: [],
    branches: [],
    error: ""
}

export const getRepository = (name: string, repo: string) => async (dispatch: Function) => {
    dispatch(getRepositoryRequest())

    try {
        const repository = await repositoryAPI(name, repo)

        dispatch(getRepositorySuccess(repository.data))
    } catch (error) {
        console.log(error.response)
        dispatch(getRepositoryFailure(error.response.data.message))
    }
}

export const getRepositoryList = (name: string, type: string, sort: string) => async (dispatch: Function) => {
    dispatch(getRepositoryListRequest())

    try {
        const repositories = await repositoryListAPI(name, type, sort)

        dispatch(getRepositoryListSuccess(repositories.data))
    } catch (error) {
        console.log(error.response)
        dispatch(getRepositoryListFailure(error.response.data.message))
    }
}

export const getBranchList = (name: string, repo: string) => async (dispatch: Function) => {
    dispatch(getBranchListRequest())

    try {
        const branches = await branchListAPI(name, repo)
        
        dispatch(getBranchListSuccess(branches.data))
    } catch (error) {
        console.log(error.response)
        dispatch(getBranchListFailure(error.response.data.message))
    }
}

export default function repository(state: RepositoryState = initialState, action: RepositoryAction) {
    switch (action.type) {
        case GET_REPOSITORY_REQUEST:
        case GET_REPOSITORY_LIST_REQUEST:
        case GET_BRANCH_LIST_REQUEST:
            return {
                ...state,
                fetchingUpdate: true,
                error: ""
            }
        case GET_REPOSITORY_SUCCESS:
            return {
                ...state,
                fetchingUpdate: false,
                repository: action.repository
            }
        case GET_REPOSITORY_LIST_SUCCESS:
            return {
                ...state,
                fetchingUpdate: false,
                repositories: action.repositories
            }
        case GET_BRANCH_LIST_SUCCESS:
            return {
                ...state,
                fetchingUpdate: false,
                branches: action.branches
            }
        case GET_REPOSITORY_FAILURE:
        case GET_REPOSITORY_LIST_FAILURE:
        case GET_BRANCH_LIST_FAILURE:
            return {
                ...state,
                fetchingUpdate: false,
                error: action.error
            }
        default:
            return state
    }
}