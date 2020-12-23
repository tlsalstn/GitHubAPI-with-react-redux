import React from 'react'
import './RepositoryList.scss'
import RepositoryItem from './Repository/RepositoryItem'
import { Repository } from '../../../modules/github/repository/actions'

interface Props {
    isShow: boolean
    setSort: Function
    repositories: Repository[]
}

const RepositoryList = ({ isShow, setSort, repositories }: Props) => {
    return (
        <div className="RepositoryList" style={{display: isShow ? 'block' : "none"}}>
            {
            repositories.length === 0 ?
                <p>No repository</p>
                :
                <div className="RepositoryList-Wrap">
                    <div className="RepositoryList-Wrap-Info">
                        <select onChange={e => setSort(e.currentTarget.selectedOptions[0].value)}>
                            <option value="updated">Updated</option>
                            <option value="created">Created</option>
                            <option value="pushed">Pushed</option>
                        </select>
                        <span>{repositories.length} Repositories</span>
                    </div>
                    {repositories.map((item: Repository, key: number) => <RepositoryItem name={item.name} description={item.description} language={item.language} time={item.updated_at} key={key} /> )}
                </div>
            }
        </div>
    )
}

export default React.memo(RepositoryList)
