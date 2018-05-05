import React from 'react'

const ViewFlagValue = (props) => {
    return <p>{props.flag ? '有効' : '無効'}</p>
}

export default ViewFlagValue