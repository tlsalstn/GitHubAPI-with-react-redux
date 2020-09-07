import React from 'react'
import './Loading.scss'

interface Props {
    show: boolean
}

const Loading = ({ show }: Props) => {
    return (
        <div className="Loading" style={{display: show ? "grid" : "none"}}>
            <div className="loadingio-spinner-spinner-v8pl236sxg">
                <div className="ldio-b38t6mcayng">
                    <div/><div/><div/><div/><div/><div/><div/><div/><div/><div/>
                </div>
            </div>
        </div>
    )
}

export default Loading
