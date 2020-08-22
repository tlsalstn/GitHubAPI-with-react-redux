import React from 'react'
import './Repository.scss'
import { Link, Redirect } from 'react-router-dom'

interface Props {
    name: string
    description: string
    language: string | null
    time: string
}

const Repository = ({ name, description, language, time }: Props) => {
    const getElapsedTime = (time: string): string => {
        const gap = new Date().getTime() - new Date(time).getTime()

        const sec = 1000
        const min = sec * 60
        const hour = min * 60
        const day = hour * 24
        const month = day * 31
        const year = month * 12

        if(gap / year > 1) {
            const elapsed = Math.floor(gap / year)

            return `Updated ${elapsed} year${elapsed !== 1 ? "s" : ""} ago`
        } else if(gap / month > 1) {
            const elapsed = Math.floor(gap / month)

            return `Updated ${elapsed} month${elapsed !== 1 ? "s" : ""} ago`
        } else if(gap / day > 1) {
            const elapsed = Math.floor(gap / day)

            return `Updated ${elapsed} day${elapsed !== 1 ? "s" : ""} ago`
        } else if(gap / hour > 1) {
            const elapsed = Math.floor(gap / hour)

            return `Updated ${elapsed} hour${elapsed !== 1 ? "s" : ""} ago`
        } else if(gap / min > 1) {
            const elapsed = Math.floor(gap / min)

            return `Updated ${elapsed} minute${elapsed !== 1 ? "s" : ""} ago`
        } else if(gap / sec > 1) {
            const elapsed = Math.floor(gap / sec)

            return `Updated ${elapsed} second${elapsed !== 1 ? "s" : ""} ago`
        } else {
            return "Updated just ago"
        }
    }

    return (
        <div className="Repository">
            <div className="Repository-Content">
                <div className="Repository-Content-Title">
                    <p>{name}</p>
                    <p>{description}</p>
                </div>
                <div className="Repository-Content-Info">
                    {language && <p>{language}</p>}
                    <p>{getElapsedTime(time)}</p>
                </div>
            </div>
        </div>
    )
}

export default Repository
