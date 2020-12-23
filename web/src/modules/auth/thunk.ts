import localhost from '../../network/localhost'

export const tokenAPI = (code: string, state: string) => localhost({
    method: "POST",
    url: "/github/getToken",
    data: {
        code,
        state
    }
})