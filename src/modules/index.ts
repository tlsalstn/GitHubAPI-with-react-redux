import { combineReducers } from "redux";
import user from "./user";
import repository from "./repository";

const rootReducer = combineReducers({user, repository});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>