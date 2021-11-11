import React from 'react'

function FormikControl(props) {
    const { control, ...rest } = props
    switch (control) {
        case 'input':
            return <input {...rest} />
        case 'textarea':
        case 'select':
        case 'radio':
        case 'checkbox':
        case 'date':
        default:
            return null;
    }
}

export default FormikControl
