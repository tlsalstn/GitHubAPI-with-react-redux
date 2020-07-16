import React from 'react';
import "./StoneCard.scss";

type Props = {
    type: string;
}

function StoneCard({ type }: Props) {
    return (
        <div className="StoneCard">
            <span>{type}</span>
        </div>
    )
}

export default StoneCard;