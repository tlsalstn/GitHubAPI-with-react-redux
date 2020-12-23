import React from 'react'
import './Loading.scss'

interface Props {
    show: boolean
}

const Loading = ({ show }: Props) => {
    return (
        <div className="Loading" style={{display: show ? "grid" : "none"}}>
            <img src="https://t1.daumcdn.net/cfile/blog/2260284A586B5E4821" alt="Loading Gif" />
        </div>
    )
}

export default Loading
