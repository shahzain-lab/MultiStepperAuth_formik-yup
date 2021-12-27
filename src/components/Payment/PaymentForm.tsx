import { Formik, Form, Field, ErrorMessage } from 'formik'
import React from 'react'
import * as Yup from 'yup';
import { FormContainer } from '../../styles/Stepper.style';
import ImgBox from '../ImgBox';
import payment from '../../assets/payment.jpg';
import '../Form.css';
import { SubmitBtn } from '../../styles/Form.style';

interface Props {
    handleNext: () => void;
}

const PaymentForm: React.FC<Props> = ({ handleNext }) => {
    return (
        <FormContainer>
            <ImgBox url={payment} />
            <Formik
                initialValues={{
                    cardName: '',
                    cardNumber: 0,
                    securityCode: 0,
                    birthday: '',
                    expiryDate: ''
                }}

                validationSchema={Yup.object({
                    cardName: Yup.string().min(8, 'Card Name should be greater than 6 characters').required('required'),
                    cardNumber: Yup.number().min(12, 'Card number should contains at least 12 characters').required('required'),
                    securityCode: Yup.number().required('required'),
                    birthday: Yup.string().required('required'),
                    expiryDate: Yup.string().required('required')
                })}

                onSubmit={(values, { setSubmitting, setValues }) => {
                    handleNext()
                    setSubmitting(false)

                }}

            >
                <Form className="formBox">
                    <h3>Enter your credit information</h3>
                    <Field type="text" placeholder="Enter Card Name..." name="cardName" />
                    <span className="error"><ErrorMessage name="cardName" /></span>
                    <Field type="number" placeholder="Enter Card Number..." name="cardNumber" />
                    <span className="error"><ErrorMessage name="cardNumber" /></span>
                    <Field type="number" placeholder="Enter Security Code..." name="securityCode" />
                    <span className="error"><ErrorMessage name="securityCode" /></span>
                    <Field type="date" placeholder="Select your birthday" name="birthday" />
                    <span className="error"><ErrorMessage name="birthday" /></span>
                    <Field type="date" placeholder="Enter Expiry Date..." name="expiryDate" />
                    <span className="error"><ErrorMessage name="expiryDate" /></span>
                    <SubmitBtn type="submit">Submit</SubmitBtn>
                </Form>
            </Formik>
        </FormContainer>
    )
}

export default PaymentForm
