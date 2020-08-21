import React, { useEffect } from 'react'
import './RedirectContainer.scss'
import useToken from '../../hooks/useToken'

function RedirectContainer() {
    const { token, getToken } = useToken()
    const getParam = (): Object => {
        let search: any = {}
        
        // eslint-disable-next-line array-callback-return
        window.location.search.substring(1).split("&").map((item: string) => {
            let parts = item.split("=")
            search[parts[0]] = parts[1]
        })
    
        return search
    }

    useEffect(() => {
        const params: any = getParam()

        getToken(params["code"], params["state"])
    })

    useEffect(() => {
        console.log(token)
        if(token) {
            window.localStorage.setItem('github_token', token)
            window.location.href = "/home"
        }
    }, [token])

    return (
        <div className="Container RedirectContainer">
            <span>Loading...</span>
        </div>
    )
}

export default RedirectContainer
