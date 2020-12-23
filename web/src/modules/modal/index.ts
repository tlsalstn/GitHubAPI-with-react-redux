import { ModalActions } from "./actions"
import { MODAL_OPEN, MODAL_CLOSE } from "./actions/types"
import { open, close } from "./actions"

export const modalOpen = (name: string) => (dispatch: Function) => {
    dispatch(open(name))
}

export const modalClose = (name: string) => (dispatch: Function) => {
    dispatch(close(name))
}

type ModalState = {
    userNotFound: boolean
}

const initialState: ModalState = {
    userNotFound: false
}

export default function modal(state: ModalState = initialState, action: ModalActions) {
    switch(action.type) {
        case MODAL_OPEN:
            return {
                ...state,
                [action.name]: true
            }
        case MODAL_CLOSE:
            return {
                ...state,
                [action.name]: false
            }
        default:
            return state
    }
}