import React from 'react'
import './RepositoryList.scss'
import { RepositoryState } from '../../../modules/repository'
import Repository from './Repository/Repository'

interface Props {
    repositories: RepositoryState[]
}

const RepositoryList = ({ repositories }: Props) => {
    return (
        <div className="RepositoryList">
            {
            repositories.length === 0 ?
                <span>No repository</span>
                :
                <div className="RepositoryList-Wrap">
                    <div className="RepositoryList-Wrap-Count">
                        <span>{repositories.length} Repositories</span>
                    </div>
                    {
                        repositories.map((item: RepositoryState, key: number) => {
                            return (
                                <Repository name={item.name} description={item.description} language={item.language} time={item.updated_at} key={key} />
                            )
                        })
                    }
                </div>
            }
        </div>
    )
}

export default React.memo(RepositoryList)
