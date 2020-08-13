import axios from "axios";

const GET_FOLLOWER = "follow/GET_FOLLOWER" as const;

export const getFollowerData = (data: FollowerState[]) => ({
    type: GET_FOLLOWER,
    data
});

export type FollowAction = | ReturnType<typeof getFollowerData>;

export type FollowerState = {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
}

export const initialFollowerState: FollowerState = {
    avatar_url: "",
    events_url: "",
    followers_url: "",
    following_url: "",
    gists_url: "",
    gravatar_id: "",
    html_url: "",
    id: 0,
    login: "",
    node_id: "",
    organizations_url: "",
    received_events_url: "",
    repos_url: "",
    site_admin: false,
    starred_url: "",
    subscriptions_url: "",
    type: "User",
    url: "",
}

export const followerAPI = (name: string) => {
    return async (dispatch: any) => {
        try {
            const response = await axios({
                method: "GET",
                url: "https://api.github.com/users/" + name + "/followers"
            });

            dispatch(getFollowerData(response.data));
        } catch (error) {
            console.log(error);
        }
    }
}

function follow(state: FollowerState[] = [initialFollowerState], action: FollowAction) {
    switch(action.type) {
        case GET_FOLLOWER:
            return action.data;
        default:
            return state;
    }
}

export default follow;