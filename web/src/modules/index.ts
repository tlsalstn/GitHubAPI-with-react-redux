import { combineReducers } from "redux"
import user from "./github/user"
import repository from './github/repository'

const rootReducer = combineReducers({ user, repository })

export default rootReducer
export type RootState = ReturnType<typeof rootReducer>