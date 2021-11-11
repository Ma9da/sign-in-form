import React from 'react'

function ErrorText(props) {
    return (
        <div className="alert alert-danger my-3">
            {props.children}
        </div>
    )
}

export default ErrorText
