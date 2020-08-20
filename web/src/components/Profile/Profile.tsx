import React from 'react'
import "./Profile.scss"
import Badge from '../Badge/Badge'

interface Props {
    imgUrl: string
    name: string
    type: string
    followers: number
    following: number
    bio: string | null
    location: string | null
    blog: string
}

const Profile = ({ imgUrl, name, type, followers, following, bio, location, blog }: Props) => {
    return (
        <div className="Profile">
            <div className="Profile-Image">
                <img src={imgUrl} alt="avatar" />
            </div>
            <div className="Profile-Info">
                <div className="Profile-Info-Name">
                    <span>{name}</span>
                    <Badge text={type} />
                </div>
                <div className="Profile-Info-Follow">
                    <button>{followers} followers</button>
                    <span>●</span>
                    <button>{following} following</button>
                </div>
                {bio &&
                <div className="Profile-Info-Bio">
                    <span>{bio}</span>
                </div>}
                {location &&
                <div className="Profile-Info-Location">
                    <span>{location}</span>
                </div>}
                {blog &&
                <div className="Profile-Info-Blog">
                    <a href={blog} target="_blank" rel="noopener noreferrer">{blog}</a>
                </div>}
            </div>
        </div>
    )
}

export default Profile