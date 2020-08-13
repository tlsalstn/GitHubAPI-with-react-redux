import React from 'react';
import RepositoryCard from './RepositoryCard/RepositoryCard';
import { RepositoryState } from "../../modules/repository";

type Props = {
    repositories: RepositoryState[];
}

function RepositoryList({ repositories }: Props) {
    return (
        <React.Fragment>
            {repositories.map((item: RepositoryState, key: number) => {
                return <RepositoryCard key={key} repository={item} />;
            })}
        </React.Fragment>
    );
}

export default RepositoryList;