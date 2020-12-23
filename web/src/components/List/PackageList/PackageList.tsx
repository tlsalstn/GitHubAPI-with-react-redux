import React from 'react'

interface Props {
    isShow: boolean
    packages: []
}

const PackageList = ({ isShow, packages }: Props) => {
    return (
        <div className="PackageList" style={{display: isShow ? 'block' : 'none'}}>
            
        </div>
    )
}

export default PackageList
