import { GET_CONTENTS_REQUEST, GET_CONTENTS_SUCCESS, GET_CONTENTS_FAILURE } from "./types";

export const getContentsRequest = () => ({
    type: GET_CONTENTS_REQUEST
})
export const getContentsSuccess = (contents: Content | Content[]) => ({
    type: GET_CONTENTS_SUCCESS,
    contents
})
export const getContentsFailure = (error: string) => ({
    type: GET_CONTENTS_FAILURE,
    error
})

export type ContentsAction =
    | ReturnType<typeof getContentsRequest>
    | ReturnType<typeof getContentsSuccess>
    | ReturnType<typeof getContentsFailure>

export type Content = {
    type: string
    encoding: string
    size: number
    name: string
    path: string
    content: string
    sha: string
    url: string
    git_url: string
    html_url: string
    download_url: string
    _links: Links
}

type Links = {
    git: string
    self: string
    html: string
}