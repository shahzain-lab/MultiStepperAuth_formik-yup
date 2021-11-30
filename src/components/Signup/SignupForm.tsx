import { Formik, Form, Field, ErrorMessage } from 'formik'
import React from 'react'
import * as Yup from 'yup';

interface Props {
    submitStep: React.Dispatch<React.SetStateAction<number>>
}

const SignupForm: React.FC<Props> = ({ submitStep }) => {
    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                age: 0,
                email: ''
            }}

            validationSchema={Yup.object({
                firstName: Yup.string().max(8, 'firstname should be less then 8 characters').required('required'),
                lastName: Yup.string().max(8, 'lastname should be less then 8 characters').required('required'),
                age: Yup.number().required('required'),
                email: Yup.string().email('Invalid email').required('required')
            })}

            onSubmit={(values, { setSubmitting, setValues }) => {
                console.log(values);
                submitStep(1)
                setSubmitting(false)

            }}

        >
            <Form>
                <label htmlFor="FirstName">FirstName</label>
                <Field type="text" placeholder="FirstName..." name="firstName" />
                <ErrorMessage name="firstName" />
                <label htmlFor="LastName">LastName</label>
                <Field type="text" placeholder="LastName..." name="lastName" />
                <ErrorMessage name="lastName" />
                <label htmlFor="Age">age</label>
                <Field type="text" placeholder="Enter age..." name="age" />
                <ErrorMessage name="age" />
                <label htmlFor="Email">Email</label>
                <Field type="text" placeholder="Enter email..." name="email" />
                <ErrorMessage name="email" />
                <button type="submit">Submit</button>
            </Form>
        </Formik>
    )
}

export default SignupForm
