import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from "yup"
const initialValues = {
    email: '',
    password: ''
}
const onSubmit = (values) => {
    console.log(values);
}
const validationSchema = yup.object({
    email: yup.string().email('invaild Format for E-mail').required('E-mail is required field'),
    password: yup.string().required('password is required field')
})
const SignInForm = () => {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            <div className="container">
                <div className="row py-5 ">
                    <div className="col-8  shadow rounded">
                        <Form>
                            <div className="form-group text-left">
                                <label className="tw-bold text-white" htmlFor="email">Email address</label>
                                <Field type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    aria-describedby="emailHelp"
                                    placeholder="Enter email"
                                />
                                <ErrorMessage name="email" component={'div'} className="alert alert-danger my-3" role="alert"
                                />
                            </div>
                            <div className="form-group text-left">
                                <label className="tw-bold text-white" htmlFor="password">Password</label>
                                <Field type="password"
                                    className="form-control"
                                    id="password"
                                    name="password"
                                    placeholder="Password"
                                />
                                <ErrorMessage name="password" component={'div'} className="alert alert-danger my-3" role="alert"
                                />
                            </div>
                            <button type="submit" className="btn btn-primary my-3">Submit</button>
                        </Form>
                    </div>
                </div>
            </div>
        </Formik>
    );
};


export default SignInForm;