import React, { useState } from 'react';
import createCompany from '../../styles/createCompany.sass'
import { Formik } from 'formik';
import * as yup from 'yup'
import { Container, Card, Form, Button, Modal} from 'react-bootstrap'
import Layout from '../common/Layout';

const initCompanyForm = {
    companyName: '',
    companyBio: '',
    tokens: 0,
    tokenPrice: 2.50,
    tldAddress: '',   
    // terms: false,     
}

const validationSchema = yup.object({
    companyName: yup.string().required(),
    companyBio: yup.string().required(),
    tldAddress: yup.string().required(),
    tokens: yup.number().required(),
    tokenPrice: yup.number().required(),
    // terms: yup.bool().required().oneOf([true], 'Terms must be accepted'),
})

export default function CreateCompany() {         
    const postNewCompany = company => {
        console.log('servers? who needs em?')
    }

    const [modalIsOpen, setModalIsOpen] = useState(false)
    const handleShow = () => setModalIsOpen(true);
    const handleClose = () => setModalIsOpen(false);

    return (
        <Layout>
            <Container className="form-container mt-1">
                <h3>Create a Company</h3>
            
                <Formik 
                    validationSchema={validationSchema}
                    initialValues={initCompanyForm}
                    onSubmit={(values, actions) => {
                        this.handleSubmit(values);
                    }}
                    render = {({
                        values, touched, errors, dirty, isSubmitting, handleChange, handleSubmit
                    }) => (
                    <Form className="create-company-form" onSubmit={handleSubmit}>
                        <Form.Group controlId="company-name">
                            <Form.Label>Company Name</Form.Label>
                            <Form.Control 
                                type="text"
                                name="companyName"
                                onChange={handleChange}
                                value={values.companyName}
                            />
                        </Form.Group>
                        <Form.Group controlId="company-description">
                            <Form.Label>Company Description</Form.Label>
                            <Form.Control 
                                as="textarea"
                                name="companyDescription"
                                onChange={handleChange}
                                ></Form.Control>
                            <Form.Text>Write 1-2 sentences about your company's DNA.</Form.Text>
                        </Form.Group>
                        <Form.Group controlId="">
                            <Form.Label>Company Ticker</Form.Label>
                            <Form.Control
                                type="text"
                                name="tldAddress" 
                                onChange={handleChange}
                                value={values.tldAddress}
                            />
                            <Form.Text>This will be your company's public address</Form.Text>
                        </Form.Group>
                        <Form.Group controlId="num-shares">
                                <Form.Label>Shares to Distribute</Form.Label>
                                <Form.Control 
                                    type="range"
                                    name="tokens"
                                    min="1000" 
                                    max="1000000000" 
                                    onChange={handleChange}
                                    value={values.tokens}
                                />
                                <Form.Text >
                                    Choose a number of shares between 1,000 & 100,000,000.
                                </Form.Text>
                        </Form.Group>
                        <Card className="share-price-card">
                            <Form.Group controlId="price-shares">
                                <Form.Label>Price per Share:</Form.Label>
                                <Form.Control 
                                    type="number"
                                    placeholder="$0.01 to $10,000.00"
                                    name="tokenPrice"
                                    value={values.tokenPrice}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <div>
                            Company Valuation: ${Math.round(values.tokens * values.tokenPrice)}
                            </div>
                        </Card>
                        <Button onClick={handleShow}>
                            Continue
                        </Button>
                        <Modal style={{display: "grid"}} show={modalIsOpen} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Review</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <h3>Company Summary</h3>
                                <ul>
                                    <li>Company Name: <strong>{}</strong></li>
                                    <li>Company Description: <strong>{}</strong></li>
                                    <li>Company Ticker: <strong>{}</strong></li>
                                    <li>Owner: <strong>{}</strong></li>
                                    <li>Number of Shares: <strong>{}</strong></li>
                                    <li>Price per Share: <strong>{}</strong></li>
                                    <li>Proposed Valuation: <strong>{}</strong></li>
                                </ul>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Edit details
                                </Button>
                                <Button variant="primary" onClick={handleClose}>
                                    Confirm & Submit
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </ Form>
                    )}
                    />
            </Container>
        </Layout>
    )
}