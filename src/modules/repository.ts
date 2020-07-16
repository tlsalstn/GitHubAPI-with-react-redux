import axios from "axios";
import { UserState, initialUserState } from "./user";

const GET_REPOSITORY_DATA = "repository/GET_REPOSITORY_DATA" as const;

export const getRepositoryData = (data: RepositoryState[]) => ({
    type: GET_REPOSITORY_DATA,
    data
});

export type RepositoryAction = | ReturnType<typeof getRepositoryData>;

export type RepositoryState = {
    id: number;
    node_id: number;
    name: string;
    full_name: string;
    private: boolean;
    owner: UserState;
    html_url: string;
    description: string;
    fork: boolean;
    url: string;
    forks_url: string;
    keys_url: string;
    collaborators_url: string;
    teams_url: string;
    hooks_url: string;
    issue_events_url: string;
    assignees_url: string;
    branches_url: string;
    tags_url: string;
    blobs_url: string;
    git_tags_url: string;
    git_refs_url: string;
    trees_url: string;
    statuses_url: string;
    languages_url: string;
    stargazers_url: string;
    contributors_url: string;
    subscribers_url: string;
    subscription_url: string;
    commits_url: string;
    git_commits_url: string;
    comments_url: string;
    issue_comment_url: string;
    contents_url: string;
    compare_url: string;
    merges_url: string;
    archive_url: string;
    downloads_url: string;
    issues_url: string;
    pulls_url: string;
    milestones_url: string;
    notifications_url: string;
    labels_url: string;
    releases_url: string;
    deployments_url: string;
    created_at: string;
    updated_at: string;
    pushed_at: string;
    git_url: string;
    ssh_url: string;
    clone_url: string;
    svn_url: string;
    homepage: string;
    size: number;
    stargazers_count: number;
    watchers_count: number;
    language: string | null;
    has_issues: boolean;
    has_projects: boolean;
    has_download: boolean;
    has_wiki: boolean;
    has_pages: boolean;
    forks_count: number;
    mirror_url: string | null;
    archived: boolean;
    disabled: boolean;
    open_issues_count: number;
    license: string | null;
    forks: number;
    open_issues: number;
    watchers: number;
    default_branch: string;
}

export const initialRepositoryState: RepositoryState = {
    archive_url: "",
    archived: false,
    assignees_url: "",
    blobs_url: "",
    branches_url: "",
    clone_url: "",
    collaborators_url: "",
    comments_url: "",
    commits_url: "",
    compare_url: "",
    contents_url: "",
    contributors_url: "",
    created_at: "2020-01-01T00:00:00Z",
    default_branch: "",
    deployments_url: "",
    description: "",
    disabled: false,
    downloads_url: "",
    fork: false,
    forks: 0,
    forks_count: 0,
    forks_url: "",
    full_name: "",
    git_commits_url: "",
    git_refs_url: "",
    git_tags_url: "",
    git_url: "",
    has_download: false,
    has_issues: false,
    has_pages: false,
    has_projects: false,
    has_wiki: false,
    homepage: "",
    hooks_url: "",
    html_url: "",
    id: 0,
    issue_comment_url: "",
    issue_events_url: "",
    issues_url: "",
    keys_url: "",
    labels_url: "",
    language: null,
    languages_url: "",
    license: null,
    merges_url: "",
    milestones_url: "",
    mirror_url: null,
    name: "",
    node_id: 0,
    notifications_url: "",
    open_issues: 0,
    open_issues_count: 0,
    owner: initialUserState,
    private: false,
    pulls_url: "",
    pushed_at: "",
    releases_url: "",
    size: 0,
    ssh_url: "",
    stargazers_count: 0,
    stargazers_url: "",
    statuses_url: "",
    subscribers_url: "",
    subscription_url: "",
    svn_url: "",
    tags_url: "",
    teams_url: "",
    trees_url: "",
    updated_at: "2020-01-01T00:00:00Z",
    url: "",
    watchers: 0,
    watchers_count: 0
}

export const repositoryAPI = (name: string) => {
    return async (dispatch: any) => {
        try {
            const response = await axios({
                method: "GET",
                url: "https://api.github.com/users/" + name + "/repos",
                headers: {
                    Accept: "application/vnd.github.inertia-preview+json"
                }
            });

            console.log(response.data);
            dispatch(getRepositoryData(response.data));
        } catch (error) {
            // alert(error.response.data.message);
        }
    }
}

function repository(state: RepositoryState[] = [initialRepositoryState], action: RepositoryAction) {
    switch(action.type) {
        case GET_REPOSITORY_DATA:
            return action.data;
        default:
            return state;
    }
}

export default repository;