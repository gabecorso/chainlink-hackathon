import React, { useState, useEffect } from 'react'
import signUp from '../../styles/signup.sass'
import { useHistory, Link } from 'react-router-dom'
import * as yup from 'yup';
import { Formik } from 'formik';
import axios from 'axios';
import { Container, Form } from 'react-bootstrap';
import Layout from '../common/Layout';

const initialFormValues={
    email: '',
    password: '',
}

const validationSchema = yup.object({
    email: yup
        .string()
        .required('Email is required')
        .email('Please input a valid email'),
    password: yup
        .string()
        .min(8, 'Password is too short')
        .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, 'Password must contain at least 8 characters, including 1 letter, 1 number, and 1 special character.')
        .required('Password is required'),
})

export default function SignUp() {

    const [form, setForm] = useState(initialFormValues)
    const [buttonDisabled, setButtonDisabled] = useState(true)
    const [hasSubmitted, setHasSubmitted] = useState(false)

    const history = useHistory();
    
    // const onChange = (e) => {
    //     e.persist()
    //    const name = e.target.name
    //    const value = e.target.value;

    //    yup
    //    .reach(LoginSchema, name)
    //    .validate(value)
    //    .then(valid => {
    //        setErrors({
    //            ...errors,
    //            [name]: ''
    //        })
    //    })
    //    .catch(err => {
    //        hasSubmitted && setErrors({
    //            [name]: err.errors[0]
    //        })
    //    })

    //     setForm({
    //     ...form,
    //     [name] : value
    //     })
    // }

  const postNewUser = user => {
        setHasSubmitted(true);
        // history.push('/dashboard');

  }

    return (
    <Layout cName="log-in" displayNav={false}>  
        <Container>
            <h2>Log In</h2> 
            <Formik
                validationSchema={validationSchema}
                initialValues={initialFormValues}
                onSubmit={(values, actions) => {
                    this.handleSubmit(values)
                }} 
                render = {
                    ({
                        values, touched, errors, dirty, isValid,
                        isSubmitting, handleChange, handleSubmit
                    }) => (
                <Form className='form' onSubmit={handleSubmit}>
                    {/* {IF FAULTY CREDENTIALS ADD ERROR HANDLING} */}
                    <Form.Group>
                        <Form.Label htmlFor="email" >Email</Form.Label>
                        <Form.Control 
                            name="email"
                            placeholder="you@xyz.com"
                            type="text"
                            onChange= { handleChange }
                            value={values.email}
                            />
                    <Form.Text>{errors.email}</Form.Text>
                    </Form.Group>
                    < br />
                    <Form.Group>
                        <Form.Label htmlFor="password" >Password</Form.Label>
                        <Form.Control
                            name="password"
                            placeholder="enter your secret phrase"
                            type="password"
                            onChange= { handleChange }
                            value={values.password}
                            />
                        <Form.Text>{errors.password}</Form.Text>
                    </Form.Group>
                    <br />
                    <div className={'form-footer d-flex justify-content-end mt-3'}>
                        <p className={'mr-4'}>
                            Or if you need,  <br/>
                            <Link to="/sign-up">make an account.</Link>
                        </p>
                        <button type="submit" disabled={!isValid}>Submit</button>
                    </div>
                </Form>
            )}/>
        </Container>
    </Layout>
    )
}
