import { User, UserAction, getUserRequest, getUserSuccess, getUserFailure } from "./actions"
import { GET_USER_REQUEST, GET_USER_SUCCESS, GET_USER_FAILURE } from "./actions/types"
import { userAPI } from "./thunk"

type UserState = {
    fetchingUpdate: boolean
    user: User
    error: string
}

const initialState: UserState = {
    fetchingUpdate: false,
    user: {} as User,
    error: ""
}

export const getUser = (name: string) => async (dispatch: Function) => {
    dispatch(getUserRequest())

    try {
        const user = await userAPI(name)
        
        dispatch(getUserSuccess(user.data))
    } catch (error) {
        console.log(error)
        dispatch(getUserFailure(error.response.data.message))
    }
}

export default function user(state: UserState = initialState, action: UserAction) {
    switch(action.type) {
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
                user: action.user
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