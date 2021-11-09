import { useFormik } from 'formik';
import React from 'react';

const initialValues = {
    email: '',
    password: ''
}
const onSubmit = (values) => {
    console.log(values);
}
const validate = (values) => {
    let errors = {}
    // email
    if (!values.email) {
        errors.email = 'Required'
    } else if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(values.email)) {
        errors.email = 'Invaild E-mail format'
    }
    //password
    if (!values.password) {
        errors.password = 'Required'
    }
    return errors
}
const SignInForm = () => {
    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    })
    console.log(formik.errors);
    return (
        <>
            <div className="container">
                <div className="row py-5 ">
                    <div className="col-8  bg-dark">
                        <form onSubmit={formik.handleSubmit}>
                            <div className="form-group text-left">
                                <label className="tw-bold text-white" htmlFor="email">Email address</label>
                                <input type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    aria-describedby="emailHelp"
                                    placeholder="Enter email"
                                    onChange={formik.handleChange}
                                    value={formik.values.email}
                                />
                                {formik.errors.email ?
                                    <div className="alert alert-danger my-3" role="alert">
                                        {formik.errors.email}
                                    </div>
                                    : null}
                            </div>
                            <div className="form-group text-left">
                                <label className="tw-bold text-white" htmlFor="password">Password</label>
                                <input type="password"
                                    className="form-control"
                                    id="password"
                                    name="password"
                                    placeholder="Password"
                                    onChange={formik.handleChange}
                                    value={formik.values.password}
                                />
                                {formik.errors.password ? <div className="alert alert-danger my-3" role="alert">
                                    {formik.errors.password}
                                </div> : null}
                            </div>
                            <button type="submit" className="btn btn-primary my-3">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};


export default SignInForm;