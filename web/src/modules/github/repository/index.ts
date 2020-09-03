import { Repository, RepositoryAction, repositoryRequest, repositorySuccess, repositoryFailure, repositoryListRequest, repositoryListSuccess, repositoryListFailure } from "./actions";
import { REPOSITORY_REQUEST, REPOSITORY_LIST_REQUEST, REPOSITORY_SUCCESS, REPOSITORY_LIST_SUCCESS, REPOSITORY_FAILURE, REPOSITORY_LIST_FAILURE } from "./actions/types";
import { repositoryAPI, repositoryListAPI } from "./thunk";

type RepositoryState = {
    fetchingUpdate: boolean
    repository: Repository
    repositories: Repository[]
    error: string
}

const initialState: RepositoryState = {
    fetchingUpdate: false,
    repository: {} as Repository,
    repositories: [],
    error: ""
}

export const getRepository = (name: string, repo: string) => async (dispatch: Function) => {
    dispatch(repositoryRequest())

    try {
        const repository = await repositoryAPI(name, repo)

        dispatch(repositorySuccess(repository.data))
    } catch (error) {
        console.log(error.response)
        dispatch(repositoryFailure(error.response.data.message))
    }
}

export const getRepositoryList = (name: string, type: string) => async (dispatch: Function) => {
    dispatch(repositoryListRequest())

    try {
        const repositories = await repositoryListAPI(name, type)

        dispatch(repositoryListSuccess(repositories.data))
    } catch (error) {
        console.log(error.response)
        dispatch(repositoryListFailure(error.response.data.message))
    }
}

function repository(state: RepositoryState = initialState, action: RepositoryAction) {
    switch(action.type) {
        case REPOSITORY_REQUEST:
        case REPOSITORY_LIST_REQUEST:
            return {
                ...state,
                fetchingUpdate: true,
                error: ""
            }
        case REPOSITORY_SUCCESS:
            return {
                ...state,
                fetchingUpdate: false,
                repository: action.repository
            }
        case REPOSITORY_LIST_SUCCESS:
            return {
                ...state,
                fetchingUpdate: false,
                repositories: action.repositories
            }
        case REPOSITORY_FAILURE:
        case REPOSITORY_LIST_FAILURE:
            return {
                ...state,
                fetchingUpdate: false,
                error: action.error
            }
        default:
            return state
    }
}

export default repository