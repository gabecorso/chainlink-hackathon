import React, { useState, useEffect,  useRef } from 'react';
import signUp from '../../styles/signup.sass';
import { useHistory, Link } from 'react-router-dom';
import * as yup from 'yup';
import { Formik } from 'formik';
import axios from 'axios';
import { Container, Modal, Form, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/pro-light-svg-icons';
import Layout from '../common/Layout';

const initialFormValues={
    fullName:'',
    email: '',
    password: '',
    passwordConfirmation: '',
}

export default function SignUp() {
    const [showTooltip, setShowToolTip] = useState(false);
    const history = useHistory();

    const validationSchema = yup.object({
        fullName: yup
        .string()
        .required('Name is required'),
        email: yup
        .string()
        .required('Email is required')
        .email('Please input a valid email'),
        password: yup
        .string()
        .min(8, 'Password is too short')
        .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]$/, 'Password must include at least 1 letter, number, and special character.')
        .required('Password is required'),
        passwordConfirmation: yup.string()
        .oneOf([yup.ref('password'), null], 'Passwords must match')
        .required('please confirm your password')
    
    });

    const postNewUser = user => {
        const goLogin = setTimeout(()=> history.push('/login'), 1500);

    };

    const renderTooltip = (props) => (
        <Tooltip id="password-tooltip" {...props}>
            Password must be at least 8 characters, including 1 letter, number, and special character.
        </Tooltip>
    )

    return (
        <Layout cName='sign-up' displayNav={false}>
                {/* MAKE IT WORK ::??:: <Modal className="success-dialog">
                    <Modal.Header closeButton>
                        <Modal.Title>Congrats!</Modal.Title>
                        <Modal.Body>
                            <p>You've signed up, woohoo! now go ahead and log in. We'll send you a confirmation email (eventually). </p>
                        </Modal.Body>
                    </Modal.Header>
                </Modal> */}
            <Container>
                <h2>Make An Account</h2> 
                <Formik
                    validationSchema={validationSchema}
                    initialValues={initialFormValues}
                    onSubmit={( values, actions) => {
                        this.handleSubmit(values)
                    }}
                    render = {
                        ({
                            values, errors, touched, dirty, isValid,
                            isSubmitting, handleChange, handleSubmit
                        }) => (
                        <Form className='form' onSubmit={handleSubmit}>
                            <Form.Group>
                                <Form.Label htmlFor="fullName" >Full Name</Form.Label>
                                    <Form.Control
                                        name="fullName"
                                        placeholder="Ada Lovelace"
                                        type="text"
                                        onChange= { handleChange }
                                        value={values.lastName}
                                        />
                            </Form.Group>
                            <Form.Text>{errors.fullName}</Form.Text>
                            < br />
                            <Form.Group>
                                <Form.Label htmlFor="email" >Email</Form.Label>
                                <Form.Control 
                                    name="email"
                                    placeholder="thinking.machine@gmail.com"
                                    type="text"
                                    onChange= { handleChange }
                                    value={values.email}
                                    />
                            </Form.Group>
                            <Form.Text>{errors.email}</Form.Text>
                            < br />
                            <Form.Group>
                                <Form.Label htmlFor="password"  onTouchStart={() => setShowToolTip(true)} onTouchEnd={() => setShowToolTip(false)}>
                                    Password &nbsp;
                                    <OverlayTrigger
                                        placement="top"
                                        delay={{ show: 240, hide: 480 }}
                                        overlay={renderTooltip}
                                    >
                                        <FontAwesomeIcon icon={faQuestionCircle}/>
                                    </OverlayTrigger>
                                </Form.Label>
                                    <Form.Control 
                                        name="password"
                                        placeholder="Choose a secret phrase"
                                        type="password"
                                        onChange= { handleChange }
                                        value={values.password}
                                        />
                            </Form.Group>
                            <Form.Text>{ errors.password }</Form.Text>
                            <br />
                            <Form.Group>
                                <Form.Label htmlFor="passwordConfirmation" >Confirm password</Form.Label>
                                    <Form.Control 
                                        name="passwordConfirmation"
                                        placeholder="Keep it safe!"
                                        type="password"
                                        onChange= { handleChange }
                                        value={values.passwordConfirmation}
                                        />
                            </Form.Group>
                            <Form.Text>{errors.passwordConfirmation}</Form.Text>
                            <br />
                            <div className={'form-footer d-flex justify-content-end mt-3'}>
                                <p className={'mr-4'}>
                                    Already have an account?  <br/>
                                    <Link to="/login">Sign in.</Link>
                                </p>
                                <button type="submit" disabled={!isValid}>Submit</button>
                            </div>
                        </Form>
                    )} 
                />
            </Container>
        </Layout>
    )
}
