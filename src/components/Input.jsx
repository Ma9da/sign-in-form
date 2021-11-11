import React from 'react'
import { Field, ErrorMessage } from 'formik'
import ErrorText from './ErrorText'
function Input(props) {
    const { label, name, ...rest } = props
    return (
        <div className="form-group text-left">
            <label className="tw-bold text-white" htmlFor={name}>{label}</label>
            <Field
                className="form-control"
                id={name}
                name={name}
                {...rest}
            />
            <ErrorMessage name={name} component={ErrorText} />

        </div>
    )
}

export default Input
