import { User, UserAction, userRequest, userSuccess, userFailure, cachedUser } from "./actions"
import { USER_REQUEST, USER_SUCCESS, USER_FAILURE, SET_USER } from "./actions/types"
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
    dispatch(userRequest())

    try {
        const user = await userAPI(name)
        
        dispatch(userSuccess(user.data))
    } catch (error) {
        console.log(error)
        dispatch(userFailure(error.response.data.message))
    }
}

export const setUser = (user: User) => async (dispatch: Function) => {
    dispatch(cachedUser(user))
}

function user(state: UserState = initialState, action: UserAction) {
    switch(action.type) {
        case USER_REQUEST:
            return {
                ...state,
                fetchingUpdate: true,
                message: "",
                error: ""
            }
        case USER_SUCCESS:
            return {
                ...state,
                fetchingUpdate: false,
                user: action.user
            }
        case USER_FAILURE:
            return {
                ...state,
                fetchingUpdate: false,
                error: action.error
            }
        case SET_USER:
            return {
                ...state,
                user: action.user
            }
        default:
            return state
    }
}

export default user