import React from 'react'
import "./Badge.scss"

interface Props {
    text: string
}

const Badge = ({ text }: Props) => {
    return (
        <div className="Badge">
            <span>{text}</span>
        </div>
    )
}

export default Badge
