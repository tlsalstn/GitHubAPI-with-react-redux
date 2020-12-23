import { getContentsRequest, getContentsSuccess, getContentsFailure, Content, ContentsAction } from "./actions"
import { contentsAPI } from "./thunk"
import { GET_CONTENTS_REQUEST, GET_CONTENTS_SUCCESS, GET_CONTENTS_FAILURE } from "./actions/types"

export const getContents = (name: string, repo: string, roots?: string, branch?: string) => async (dispatch: Function) => {
    dispatch(getContentsRequest())

    try {
        const contents = await contentsAPI(name, repo, roots, branch)

        dispatch(getContentsSuccess(contents.data))
    } catch (error) {
        console.log(error.response)
        dispatch(getContentsFailure(error.response.data.error))
    }
}

type ContentsState = {
    fetchingUpdate: boolean
    contents: Content | Content[]
    error: string
}

const initialState: ContentsState = {
    fetchingUpdate: false,
    contents: [],
    error: ""
}

export default function contents(state: ContentsState = initialState, action: ContentsAction) {
    switch(action.type) {
        case GET_CONTENTS_REQUEST:
            return {
                ...state,
                fetchingUpdate: true,
                isFile: false,
                error: ""
            }
        case GET_CONTENTS_SUCCESS:
            return {
                ...state,
                fetchingUpdate: false,
                contents: action.contents
            }
        case GET_CONTENTS_FAILURE:
            return {
                ...state,
                fetchingUpdate: false,
                error: action.error
            }
        default:
            return state
    }
}