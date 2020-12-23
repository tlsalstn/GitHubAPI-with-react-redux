import React from 'react'

interface Props {
    show: boolean
    close: Function
    text: string
}

const Modal = ({ show, close, text }: Props) => {
    return (
        <div className="Modal-Overlay" style={{display: show ? 'block' : 'none'}}>
            <div className="Modal UserNotFound">
                <div className="Modal-Content">
                    <p>{text}</p>
                </div>
                <div className="Modal-Button">
                    <button className="Modal-Button-Close" onClick={() => close()}>Close</button>
                </div>
            </div>
        </div>
    )
}

export default Modal
