import { combineReducers } from "redux"
import token from "./token"
import user from "./user"
import repository from "./repository"

const rootReducer = combineReducers({token, user, repository})

export default rootReducer
export type RootState = ReturnType<typeof rootReducer>