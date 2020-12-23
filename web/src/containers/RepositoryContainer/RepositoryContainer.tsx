import React, { useEffect, useRef, useState } from 'react'
import { RouteComponentProps, Link } from 'react-router-dom'
import './RepositoryContainer.scss'
import ReactMarkdown from 'react-markdown'
import useRepository from '../../hooks/useRepository'
import useContents from '../../hooks/useContents'

interface MatchParams {
    username: string
    repo: string
}

function RepositoryContainer({ match }: RouteComponentProps<MatchParams>) {
    const { params } = match
    const { repositoryState, getRepositoryData, getBranchListData } = useRepository()
    const { contentsState, getContentsData } = useContents()

    const [selected, setSelected] = useState<number>(0)
    const selectRef = useRef<HTMLSelectElement>({} as HTMLSelectElement)
    
    const menus = ['Code', 'Commits']

    const getRoots = () => location.pathname.split("/").slice(4, location.pathname.split("/").length).join("/")

    useEffect(() => {
        getRepositoryData(params.username, params.repo)
        getBranchListData(params.username, params.repo)
    }, [location.pathname])

    useEffect(() => {
        console.log(selectRef.current.selectedIndex)
        const roots = getRoots()

        getContentsData(params.username, params.repo, roots, selectRef.current.value)
    }, [selectRef.current.selectedIndex])

    const a = () => console.log(selectRef.current.selectedIndex)

    return (
        <div className="Container RepositoryContainer">
            <div className="RepositoryContainer-Wrap">
                <p>{repositoryState.repository.name + (getRoots() && "/" + getRoots())}</p>
                <div className="Card RepositoryContainer-Wrap-Content">
                    <div className="RepositoryContainer-Wrap-Content-Menu">
                        <ul>
                            {menus.map((menu, key) => (
                                <li data-aria-selected={selected === key} onClick={() => setSelected(key)} key={key}>{menu}</li>
                            ))}
                        </ul>
                    </div>
                    {!Array.isArray(contentsState.contents) ?
                        <div itemProp="text" data-paste-markdown-skip>
                            {/* <ReactMarkdown source={atob(contentsState.contents.content)} /> */}
                        </div>
                    : contentsState.contents.length > 0 ?
                    <div className="RepositoryContainer-Wrap-Content-List">
                        <div className="RepositoryContainer-Wrap-Content-List-Type">
                            <select name="Type" ref={selectRef}>
                                <option value={"master"}>master</option>
                                {repositoryState.branches.map((item, key) => {
                                    if(item.name !== "master") {
                                        return <option value={item.name} key={key}>{item.name}</option>
                                    }
                                })}
                            </select>
                        </div>
                        <button onClick={() => a()}>d</button>
                        <ul>
                            {contentsState.contents.map((item, key) => (
                                <li key={key}>
                                    <Link to={location.pathname + "/" + item.name}>{item.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    :
                    <button onClick={() => a()}>No File/Folder</button>}
                </div>
            </div>
        </div>
    )
}

export default RepositoryContainer
