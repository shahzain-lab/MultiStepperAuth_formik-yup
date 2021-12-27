import { Formik, Form, Field, ErrorMessage } from 'formik'
import React from 'react'
import * as Yup from 'yup';
import { FormContainer } from '../../styles/Stepper.style';
import '../Form.css';
import ImgBox from '../ImgBox';
import message from '../../assets/message.jpeg';
import { SubmitBtn } from '../../styles/Form.style';
import '../Form.css'

interface Props {
    handleNext: () => void;
}

const ContactForm: React.FC<Props> = ({ handleNext }) => {
    return (
        <FormContainer>
            <ImgBox url={message} />
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
                    handleNext()
                    setSubmitting(false)

                }}

            >
                <Form className="formBox">
                    <h3>Plaese enter your feedback</h3>
                    <Field values='' type="text" placeholder="Enter product name..." name="productName" />
                    <span className="error"><ErrorMessage name="productName" /></span>
                    <Field values='' type="text" placeholder="product ID..." name="productID" />
                    <span className="error"><ErrorMessage name="productID" /></span>
                    <Field values='' type="text" as="textarea" rows={5} placeholder="Enter message..." name="message" />
                    <span className="error"><ErrorMessage name="message" /></span>
                    <SubmitBtn type="submit">Submit</SubmitBtn>
                </Form>
            </Formik>
        </FormContainer>
    )
}

export default ContactForm
