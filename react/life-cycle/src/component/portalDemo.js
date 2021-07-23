import React from 'react'
import ReactDOM from 'react-dom'

function PortalDemo(){
    return ReactDOM.createPortal(
        <h1>saloni</h1>,
        document.getElementById("potal-root")
    )
}

export default PortalDemo