import localhost from "../network/localhost"

const GET_TOKEN = "token/GET_TOKEN" as const

export const getToken = (token: string) => ({
    type: GET_TOKEN,
    token
})

export type TokenAction = | ReturnType<typeof getToken>

export const tokenAPI = (code: string, state: string) => {
    return async (dispatch: any) => {
        try {
            const response = await localhost({
                method: "POST",
                url: "/github/getToken",
                data: {
                    code,
                    state
                }
            })

            dispatch(getToken(response.data.data.access_token))
        } catch (error) {
            console.log(error)
        }
    }
}

function token(state: string = "", action: TokenAction) {
    switch(action.type) {
        case GET_TOKEN:
            return action.token
        default:
            return state
    }
}

export default token