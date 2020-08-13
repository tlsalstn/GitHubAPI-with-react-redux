import axios from "axios";
import { UserState, initialUserState } from "./user";

const GET_PROJECT_DATA = "project/GET_PROJECT_DATA" as const;

export const getProjectData = (data: ProjectState[]) => ({
    type: GET_PROJECT_DATA,
    data
});

export type ProjectAction = | ReturnType<typeof getProjectData>;

export type ProjectState = {
    owner_url: string;
    url: string;
    html_url: string;
    columns_url: string;
    id: number;
    node_id: string;
    name: string;
    body: string;
    number: number;
    state: string;
    creator: UserState;
    created_at: string;
    update_at: string;
    organization_permission: string;
    private: boolean;
}

export const initialProjectState: ProjectState = {
    body: "",
    columns_url: "",
    created_at: "2020-01-01T00:00:00Z",
    creator: initialUserState,
    html_url: "",
    id: 0,
    name: "",
    node_id: "",
    number: 0,
    organization_permission: "",
    owner_url: "",
    private: false,
    state: "open",
    update_at: "2020-01-01T00:00:00Z",
    url: ""
}

export const projectAPI = (name: string, type: string) => {
    return async (dispatch: any) => {
        try {
            const response = await axios({
                method: "GET",
                url: "https://api.github.com/" + type + "/" + name + "/projects",
                headers: {
                    Accept: "application/vnd.github.inertia-preview+json"
                },
                params: {
                    state: "all"
                }
            });

            console.log(response.data);
            dispatch(getProjectData(response.data));
        } catch (error) {
            console.log(error);
        }
    }
}

function project(state: ProjectState[] = [initialProjectState], action: ProjectAction) {
    switch(action.type) {
        case GET_PROJECT_DATA:
            return action.data;
        default:
            return state;
    }
}

export default project;