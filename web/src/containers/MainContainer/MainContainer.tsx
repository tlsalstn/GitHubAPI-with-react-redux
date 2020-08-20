import React, { useState, useEffect } from 'react';
import "./MainContainer.scss"
import useToken from "../../hooks/useToken"
import useUser from '../../hooks/useUser';
import Profile from '../../components/Profile/Profile';
import Footer from '../../components/Footer/Footer';
import useRepository from '../../hooks/useRepository';
import { authUrl } from '../../config/github';

function MainContainer() {
    const [isLogin, setIsLogin] = useState(window.localStorage.getItem('github_token') !== null)
    const [name, setName] = useState("")
    const [category, setCategory] = useState(0)
    const { token, getToken } = useToken()
    const { user, getUserData } = useUser()
    const { repository, getRepositoryData } = useRepository()

    const getParam = (): string => {
        let search: any = {}
        
        // eslint-disable-next-line array-callback-return
        window.location.search.substring(1).split("&").map((item: string) => {
            let parts = item.split("=")
            search[parts[0]] = parts[1]
        })
    
        console.log(isLogin)
        return search
    }

    useEffect(() => {
        const params: any = getParam()

        if(params["code"] && params["state"]) getToken(params["code"], params["state"])
    })

    useEffect(() => {
        if(token) {
            window.localStorage.setItem('github_token', token)
        }
    }, [token])

    const onKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
        // Search for user when the enter key is pressed
        if (e.keyCode === 13) {
            window.history.pushState(name, 'username', '/' + name)
            getUserData(name)
        }
    }

    const logout = () => {
        window.localStorage.clear()
        window.location.href = "/"
    }

    // Check that the object is empty
    const isEmpty = (obj: Object) => Object.keys(obj).length === 0

    return (
        <div className="MainContainer">
            <div className="MainContainer-Navbar">
                <input type="text" value={name} onChange={e => setName(e.currentTarget.value)} onKeyUp={onKeyUp} placeholder="Search.." autoComplete="false" spellCheck="false" />
                {window.localStorage.getItem('github_token') ?
                    <button onClick={logout}>LOG OUT</button>
                    :
                    <a href={authUrl}>Login with GitHub</a>
                }
            </div>
            <div className="MainContainer-Wrap">
                {!isEmpty(user) ?
                    <>
                        <div className="MainContainer-Wrap-Content">
                            <Profile imgUrl={user.avatar_url} name={user.login} type={user.type} followers={user.followers} following={user.following} bio={user.bio} location={user.location} blog={user.blog} />
                            <div className="MainContainer-Wrap-Content-A">
                                <div className="MainContainer-Wrap-Content-Menu">
                                    <ul>
                                        <li data-aria-selected={category === 0} onClick={() => setCategory(0)}>Repositories</li>
                                        <li data-aria-selected={category === 1} onClick={() => setCategory(1)}>Projects</li>
                                        <li data-aria-selected={category === 2} onClick={() => setCategory(2)}>Packages</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <Footer github={user.html_url} twitter={user.twitter_username} />
                    </>
                    :
                    <svg className="bgimg" fill="rgba(0, 0, 0)" height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
                }
            </div>
        </div>
    )
}

export default MainContainer;