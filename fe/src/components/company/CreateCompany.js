import React, { useState } from 'react';
import createCompany from '../../styles/createCompany.sass'
import { Formik } from 'formik';
import * as yup from 'yup'
import { Tabs, Tab, Container, Form, Button, Modal} from 'react-bootstrap'

import Layout from '../common/Layout';

export default function CreateCompany() {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const handleShow = () => setModalIsOpen(true);
    const handleClose = () => setModalIsOpen(false);

    const schema = yup.object().shape({
        firstName: yup.string().required(),
        lastName: yup.string().required(),
        username: yup.string().required(),
        city: yup.string().required(),
        state: yup.string().required(),
        zip: yup.string().required(),
        terms: yup.bool().required().oneOf([true], 'Terms must be accepted'),
      });

    return (
        <Layout>
            <Container className="form-container mt-1">
                <h3>Create a Company</h3>
                <Formik
                    validationSchema={schema}
                    onSubmit={console.log}
                    initialValues={{
                        firstName: 'Mark',
                        lastName: 'Otto',
                        username: '',
                        city: '',
                        state: '',
                        zip: '',
                        terms: false,
                    }}
                >
                {({
                    handleSubmit,
                    handleChange,
                    handleBlur,
                    values,
                    touched,
                    isValid,
                    errors,
                }) => (
                <Form className="create-company-form">
                    <Tabs defaultActiveKey="page-1">
                        <Tab className={'mt-4'} eventKey="page-1" title="Page 1">
                            <Form.Group controlId="company-name">
                                <Form.Label>Company Name</Form.Label>
                                <Form.Control type=""></Form.Control>
                            </Form.Group>
                            <Form.Group controlId="">
                                <Form.Label>Company Description</Form.Label>
                                <Form.Control as="textarea"></Form.Control>
                                <Form.Text>Write 1-2 sentences about your company's DNA.</Form.Text>
                            </Form.Group>
                            <Form.Group controlId="">
                                <Form.Label>Company Ticker</Form.Label>
                                <Form.Control type=""></Form.Control>
                                <Form.Text>This will be your company's public address</Form.Text>
                            </Form.Group>
                        </Tab>
                        <Tab className={'mt-4'} eventKey="page-2" title="Page 2">
                            <Form.Group controlId="num-shares">
                                    <Form.Label>Shares to Distribute</Form.Label>
                                    <Form.Control min="1000" max="1000000000" type="range"></Form.Control>
                                    <Form.Text >
                                        Choose a number of shares between 1,000 & 100,000,000.
                                    </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="add-shareholders">
                                <Form.Label></Form.Label>
                                <Form.Control type=""></Form.Control>
                            </Form.Group>
                            <Button onClick={handleShow}>
                                Continue
                            </Button>
                        </Tab>
                    </Tabs>
                </Form>
                )}
                </Formik>
            </Container>
            <Modal style={{display: "grid"}} show={modalIsOpen} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
            </Modal>
        </Layout>
    )
}