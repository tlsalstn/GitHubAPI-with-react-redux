import React from 'react';
import "./RepositoryList.scss";
import RepositoryCard from './RepositoryCard/RepositoryCard';
import { RepositoryState } from "../../modules/repository";

type Props = {
    repositories: RepositoryState[];
}

function RepositoryList({ repositories }: Props) {
    return (
        <div className="RepositoryList">
            <div className="RepositoryList-Option">

            </div>
            <div className="RepositoryList-Content">
                {repositories.map((item: RepositoryState, key: number) => {
                    return <RepositoryCard key={key} repository={item} />;
                })}
            </div>
        </div>
    )
}

export default RepositoryList;