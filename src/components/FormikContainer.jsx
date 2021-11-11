import React from 'react'
import { Formik, Form } from 'formik';
import * as Yup from 'yup'
import FormikControl from './FormikControl';
function FormikContainer() {
    const initialValues = {
        email: '',
        password:''
    }
    const validationSchema = Yup.object({
        email: Yup.string().required('E-mail is required field'),
        password: Yup.string().required('Password is required field')
        })
    const onSubmit = values => {
        console.log('form data ', values);
    }
    return (
        <Formik initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {formik => (
                <Form>
                    <FormikControl control='input' type='email' label='Email' name='email'/>
                    <FormikControl control='password' type='password' label='Password' name='password'/>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </Form>
            )}
        </Formik>
    )
}

export default FormikContainer
