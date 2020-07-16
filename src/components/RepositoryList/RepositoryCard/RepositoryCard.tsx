import React from 'react';
import "./RepositoryCard.scss";
import { RepositoryState } from "../../../modules/repository";

type Props = {
    repository: RepositoryState;
}

function RepositoryCard({ repository }: Props) {
    return (
        <div className="RepositoryCard">
            <div className="RepositoryCard-Info">
                <div className="RepositoryCard-Info-Title">
                    <div className="RepositoryCard-Info-Title-Name">
                        <p>{repository.name}</p>
                    </div>
                    <div className="RepositoryCard-Info-Title-Description">
                        <p>{repository.description}</p>
                    </div>
                    <div className="RepositoryCard-Info-Title-Language">
                        <p>{repository.language}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RepositoryCard;