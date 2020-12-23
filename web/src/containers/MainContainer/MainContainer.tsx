import React, { useState, useEffect } from 'react'
import { RouteComponentProps, Redirect } from 'react-router-dom'
import "./MainContainer.scss"
import useAuth from '../../hooks/useAuth'
import useUser from '../../hooks/useUser'
import useRepository from '../../hooks/useRepository'
import useModal from '../../hooks/useModal'
import Profile from '../../components/Profile/Profile'
import Footer from '../../components/Footer/Footer'
import RepositoryList from '../../components/List/RepositoryList/RepositoryList'
import ProjectList from '../../components/List/ProjectList/ProjectList'
import PackageList from '../../components/List/PackageList/PackageList'
import Loading from '../../components/Loading/Loading'
import Modal from '../../components/Modals/Modal'
import Search from '../../components/Nav/Search'

interface MatchProps {
    username: string
}

function MainContainer({ match }: RouteComponentProps<MatchProps>) {
    const [name, setName] = useState<string>(match.params.username || "")
    const [category, setCategory] = useState<Number>(0)
    const [sort, setSort] = useState<string>("updated")

    const { authState } = useAuth()
    const { userState, getUserData } = useUser()
    const { repositoryState, getRepositoryListData } = useRepository()
    // const { projectState, getProjectList } = useProject()
    const { modalState, openModal, closeModal } = useModal()

    const menus = ['Repositories', 'Projects', 'Packages']

    const onKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
        // Search for user when the enter key is pressed
        if (!userState.fetchingUpdate) {
            if (e.key === "Enter") {
                window.history.pushState(name, 'username', '/' + name.toLowerCase())

                getUserData(name)
            }
        }
    }

    // Check that the object is empty
    const isEmpty = (obj: Object) => Object.keys(obj).length === 0

    useEffect(() => {
        if (name) getUserData(name)
    }, [])

    useEffect(() => {
        if (userState.error === "Not Found") openModal("userNotFound")
    }, [userState.error])

    useEffect(() => {
        if (!isEmpty(userState.user)) {
            getRepositoryListData(userState.user.login, userState.user.type, sort)
            // getProjectList(userState.user.login, userState.user.type)
        }
    }, [userState.user, sort])

    if (!authState.token) {
        return <Redirect to="/login" />
    }

    return (
        <div className="Container MainContainer">
            <Search value={name} setValue={setName} onKeyUp={onKeyUp} />
            <div className="MainContainer-Wrap">
                {!isEmpty(userState.user) ?
                    <>
                        <div className="MainContainer-Wrap-Content">
                            <Profile imgUrl={userState.user.avatar_url} name={userState.user.login} type={userState.user.type} followers={userState.user.followers} following={userState.user.following} bio={userState.user.bio} location={userState.user.location} blog={userState.user.blog} />
                            <div className="MainContainer-Wrap-Content-List Card">
                                <div className="MainContainer-Wrap-Content-List-Tab">
                                    <ul>
                                        {menus.map((item, key) => (
                                            <li data-aria-selected={category === key} onClick={() => setCategory(key)}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="MainContainer-Wrap-Content-List-Item">
                                    <RepositoryList isShow={category === 0} setSort={setSort} repositories={repositoryState.repositories} />
                                    {/* <ProjectList isShow={category === 1} projects={projectState.projects} /> */}
                                    {/* <PackageList isShow={category === 2} packages={[]} /> */}
                                </div>
                            </div>
                        </div>
                        <Footer github={userState.user.html_url} twitter={userState.user.twitter_username} />
                    </>
                    :
                    <div className="Wait">
                        <svg fill="rgba(0, 0, 0)" height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
                    </div>
                }
            </div>
            <Loading show={userState.fetchingUpdate || repositoryState.fetchingUpdate} />
            <Modal show={modalState.userNotFound} close={() => closeModal("userNotFound")} text={"User not found"} />
        </div>
    )
}

export default MainContainer;