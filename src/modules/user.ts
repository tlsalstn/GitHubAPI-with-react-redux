import axios from "axios";

const GET_USER_DATA = "user/GET_USER_DATA" as const;

export const getUserData = (data: UserState) => ({
    type: GET_USER_DATA,
    data
});

export type UserAction = | ReturnType<typeof getUserData>;

export type UserState = {
    avatar_url: string;
    bio: string | null;
    blog: string;
    company: string;
    created_at: string;
    email: string | null;
    events_url: string;
    followers: number;
    followers_url: string;
    following: number;
    following_url: string;
    gists_url: string;
    gravatar_id: string;
    html_url: string;
    id: number;
    location: string | null;
    login: string;
    name: string;
    node_id: string;
    organizations_url: string;
    public_gists: number;
    public_repos: number;
    received_events_url: string;
    repos_url: string;
    site_admin: boolean;
    starred_url: string;
    subscriptions_url: string;
    twitter_username: string | null;
    type: string;
    updated_at: string;
    url: string;
}

export const initialUserState: UserState = {
    avatar_url: "",
    bio: "",
    blog: "",
    company: "",
    created_at: "2020-01-01T00:00:00Z",
    email: null,
    events_url: "",
    followers: 0,
    followers_url: "",
    following: 0,
    following_url: "",
    gists_url: "",
    gravatar_id: "",
    html_url: "",
    id: 0,
    location: null,
    login: "",
    name: "",
    node_id: "",
    organizations_url: "",
    public_gists: 0,
    public_repos: 0,
    received_events_url: "",
    repos_url: "",
    site_admin: false,
    starred_url: "",
    subscriptions_url: "",
    twitter_username: "",
    type: "User",
    updated_at: "2020-01-01T00:00:00Z",
    url: ""
}

export const userAPI = (name: string) => {
    return async (dispatch: any) => {
        try {
            const response = await axios({
                method: "GET",
                url: "https://api.github.com/users/" + name
            });

            console.log(response.data);
            dispatch(getUserData(response.data));
        } catch (error) {
            alert(error.response.data.message);
        }
    }
}

function user(state: UserState = initialUserState, action: UserAction) {
    switch (action.type) {
        case GET_USER_DATA:
            return action.data
        default:
            return state;
    }
}

export default user;