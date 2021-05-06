import React, { useState, useEffect } from 'react'
import signUp from '../../styles/signup.sass'
import { Helmet } from 'react-helmet'
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
        .matches(/^(?=.*[A-Z]).{8,}$/, 'Include at least 1 uppercase letter.')
        .matches(/^(?=.*[a-z]).{8,}$/, 'Include at least 1 lowercase letter.')
        .matches(/^(?=.*[0-9]).{8,}$/, 'Include at least 1 number.')
        .matches(/^(?=.*[!@#$%&* ]).{8,}$/, 'Use some special characters too, for good measure')
        .required('Password is required'),
})

export default function Login() {
    const history = useHistory();

    const postNewUser = user => {
        const goToDash = setTimeout(() =>  history.push('/dashboard'), 400)

  }

    return (
    <Layout cName="log-in" displayNav={false}>  
        <Helmet>
            <title>Log in | CashDapp</title>
        </Helmet>
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
                    </Form.Group>
                    <Form.Text>{errors.email}</Form.Text>
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
                    </Form.Group>
                    <Form.Text>{errors.password}</Form.Text>
                    <br />
                    <div className={'form-footer d-flex justify-content-end mt-3'}>
                        <p className={'mr-4'}>
                            Or if you need,  <br/>
                            <Link to="/sign-up">make an account.</Link>
                        </p>
                        <button type="submit" onClick={() => isValid && postNewUser(values)} disabled={!(isValid && dirty)}>Submit</button>
                    </div>
                </Form>
            )}/>
        </Container>
    </Layout>
    )
}
