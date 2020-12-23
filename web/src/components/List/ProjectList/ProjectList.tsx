import React from 'react'
import './ProjectList.scss'
import { Project } from 'modules/project'

interface Props {
    isShow: boolean
    projects: Project[]
}

const ProjectList = ({ isShow, projects }: Props) => {
    return (
        <div className="ProjectList" style={{display: isShow ? 'block' : 'none'}}>
            
        </div>
    )
}

export default React.memo(ProjectList)
