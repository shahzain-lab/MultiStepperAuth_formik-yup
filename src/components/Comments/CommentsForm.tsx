import { Formik, Form, Field, ErrorMessage } from 'formik'
import React from 'react'
import * as Yup from 'yup';


interface Props {
    submitStep: React.Dispatch<React.SetStateAction<number>>
}

const ContactForm: React.FC<Props> = ({ submitStep }) => {
    return (
        <Formik
            initialValues={{
                productName: '',
                productID: '',
                message: ''
            }}

            validationSchema={Yup.object({
                productName: Yup.string().min(5, 'productName should be greater then 5 characters').required('required'),
                productID: Yup.string().max(12, 'Product must have less then 12 characters').required('required'),
                message: Yup.string().min(15, 'Message should be greater than 15 characters').min(15, 'Message should be less than 40 characters').required('required'),
            })}

            onSubmit={(values, { setSubmitting }) => {
                console.log(values);
                submitStep(1)
                setSubmitting(false)

            }}

        >
            <Form>
                <label htmlFor="FirstName">Product Name</label>
                <Field type="text" placeholder="Enter product name..." name="productName" />
                <ErrorMessage name="productName" />
                <label htmlFor="LastName">Product ID</label>
                <Field type="text" placeholder="product ID..." name="productID" />
                <ErrorMessage name="productID" />
                <label htmlFor="message">Message</label>
                <Field type="text" placeholder="Enter message..." name="message" />
                <ErrorMessage name="message" />
                <button type="submit">Submit</button>
            </Form>
        </Formik>
    )
}

export default ContactForm
