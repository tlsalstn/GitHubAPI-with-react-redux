import { combineReducers } from "redux"
import auth from './auth'
import user from "./github/user"
import repository from './github/repository'
import contents from './github/content'
import modal from './modal'

const rootReducer = combineReducers({ auth, user, repository, contents, modal })

export default rootReducer
export type RootState = ReturnType<typeof rootReducer>