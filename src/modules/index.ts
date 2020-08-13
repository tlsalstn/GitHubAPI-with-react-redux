import { combineReducers } from "redux";
import user from "./user";
import repository from "./repository";
import project from "./project";
import follow from "./follow";

const rootReducer = combineReducers({user, repository, project, follow});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>