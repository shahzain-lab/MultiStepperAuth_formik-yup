import { Formik, Form, Field, ErrorMessage } from 'formik'
import React from 'react'
import * as Yup from 'yup';
import signup from '../../assets/signup.jpg';
import { SubmitBtn } from '../../styles/Form.style';
import { FormContainer } from '../../styles/Stepper.style';
import ImgBox from '../ImgBox';
import '../Form.css';

interface Props {
    handleNext: () => void;
}

const SignupForm: React.FC<Props> = ({ handleNext }) => {
    return (
        <FormContainer>
            <ImgBox url={signup} />
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
                    age: Yup.number().min(18, 'minimum 18 plus age is required').max(60, "your age must be below than 60").required('required'),
                    email: Yup.string().email('Invalid email').required('required')
                })}

                onSubmit={(values, { setSubmitting, setValues }) => {
                    handleNext()
                    setSubmitting(false)

                }}

            >
                <Form className="formBox">
                    <h3>Please signup to create account</h3>
                    <Field type="text" placeholder="FirstName..." name="firstName" />
                    <span className="error"><ErrorMessage name="firstName" /></span>
                    <Field type="text" placeholder="LastName..." name="lastName" />
                    <span className="error"><ErrorMessage name="lastName" /></span>
                    <Field type="number" placeholder="Enter age..." name="age" />
                    <span className="error"><ErrorMessage name="age" /></span>
                    <Field type="text" placeholder="Enter email..." name="email" />
                    <span className="error"><ErrorMessage name="email" /></span>
                    <SubmitBtn type="submit">Submit</SubmitBtn>
                </Form>
            </Formik>
        </FormContainer>
    )
}

export default SignupForm
