import { Content } from 'modules/github/content/actions'
import React from 'react'

interface Props {
    contents: Content[]
}

const FileList: React.FunctionComponent<Props> = ({ contents }) => {
    return (
        <div className="FileList">
            {contents.map((content, key) => (
                <div className="File">
                    
                </div>
            ))}
        </div>
    )
}

export default FileList
