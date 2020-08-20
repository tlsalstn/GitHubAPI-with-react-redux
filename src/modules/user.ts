import github from "../network/github";

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

export const userAPI = (name: string) => {
    return async (dispatch: any) => {
        try {
            const response = await github({
                method: "GET",
                url: "/users/" + name,
                headers: {
                    "Accept": "application/vnd.github.v3+json"
                }
            });

            try {
                console.log(response.data)
                dispatch(getUserData(response.data))
            } catch (error) {
                console.log(error)
            }
        } catch (error) {
            console.log(error)
            alert(error.response.data.message)
        }
    }
}

function user(state: UserState = {} as UserState, action: UserAction) {
    switch (action.type) {
        case GET_USER_DATA:
            return action.data
        default:
            return state
    }
}

export default user;