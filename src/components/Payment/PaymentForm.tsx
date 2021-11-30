import { Formik, Form, Field, ErrorMessage } from 'formik'
import React from 'react'
import * as Yup from 'yup';


interface Props {
    submitStep: React.Dispatch<React.SetStateAction<number>>
}

const PaymentForm: React.FC<Props> = ({ submitStep }) => {
    return (
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
                console.log(values);
                submitStep(2)
                setSubmitting(false)

            }}

        >
            <Form>
                <label htmlFor="Card Name">Card Name</label>
                <Field type="text" placeholder="Enter Card Name..." name="cardName" />
                <ErrorMessage name="cardName" />
                <label htmlFor="Card Number">Card Number</label>
                <Field type="number" placeholder="Enter Card Number..." name="cardNumber" />
                <ErrorMessage name="cardNumber" />
                <label htmlFor="Security Code">Security Code</label>
                <Field type="number" placeholder="Enter Security Code..." name="securityCode" />
                <ErrorMessage name="securityCode" />
                <label htmlFor="Birthday">Birthday</label>
                <Field type="date" name="birthday" />
                <ErrorMessage name="birthday" />
                <label htmlFor="Expiry Date">Expiry Date</label>
                <Field type="text" placeholder="Enter Expiry Date..." name="expiryDate" />
                <ErrorMessage name="expiryDate" />
                <button type="submit">Submit</button>
            </Form>
        </Formik>
    )
}

export default PaymentForm
