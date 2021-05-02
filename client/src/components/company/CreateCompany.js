import React, { useState } from 'react';
import createCompany from '../../styles/createCompany.sass'
import { Formik } from 'formik';
import * as yup from 'yup';
import { useHistory } from 'react-router-dom'
import { Container, Card, Form, Button, Modal, InputGroup} from 'react-bootstrap'
import Layout from '../common/Layout';

const initCompanyForm = {
    companyName: '',
    companyBio: '',
    tokens: 500000,
    tokenPrice: '2.0',
    tldAddress: '',   
    // terms: false,     
}

const validationSchema = yup.object({
    companyName: yup.string().required(),
    companyBio: yup.string().required(),
    tldAddress: yup.string().required(),
    tokens: yup.number().required(),
    tokenPrice: yup.string().required(),
    // terms: yup.bool().required().oneOf([true], 'Terms must be accepted'),
})

export default function CreateCompany() {         
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const handleShow = () => setModalIsOpen(true);
    const handleClose = () => setModalIsOpen(false);
    
    const history = useHistory();
    
    const currencyFormatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    
    const numWithCommas = (int) => {
        return int.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    
    const postNewCompany = company => {
        console.log('servers? who needs em?');
    }

    return (
        <Layout>
            <Container className="form-container mt-1">
                <h2 className="create-company-title">Create a Company</h2>
                <Formik 
                    validationSchema={validationSchema}
                    initialValues={initCompanyForm}
                    onSubmit={(values, actions) => {
                        this.handleSubmit(values);
                    }}
                    render = {
                        ({
                            values, touched, errors, dirty, 
                            isSubmitting, handleChange, handleSubmit
                        }) => (
                    <Form className={"create-company-form mt-3"} onSubmit={handleSubmit}>
                        <Form.Group controlId="company-name">
                            <Form.Label>Company Name</Form.Label>
                            <Form.Control 
                                type="text"
                                name="companyName"
                                placeholder="International Business Machines"
                                onChange={handleChange}
                                value={values.companyName}
                            />
                        </Form.Group>
                        <Form.Group controlId="company-bio">
                            <Form.Label>Company Description</Form.Label>
                            <Form.Control 
                                as="textarea"
                                name="companyBio"
                                placeholder="Founded in 1911, we are the leading American computer manufacturer."
                                onChange={handleChange}
                                value={values.companyBio}
                                ></Form.Control>
                            <Form.Text>Share 1-2 sentences about your company's DNA.</Form.Text>
                        </Form.Group>
                        <Form.Group controlId="company-ticker">
                            <Form.Label>Company Ticker</Form.Label>
                            <Form.Control
                                type="text"
                                name="tldAddress" 
                                placeholder="IBM"
                                onChange={handleChange}
                                value={values.tldAddress}
                            />
                            <Form.Text className="w-100">This will be your company's public wallet address.</Form.Text>
                        </Form.Group>
                        <Form.Group controlId="num-shares" id="share-slider">
                                <Form.Label>Shares to Distribute</Form.Label>
                                <Form.Control 
                                    type="range"
                                    name="tokens"
                                    min="1000" 
                                    max="1000000" 
                                    onChange={handleChange}
                                    value={values.tokens}
                                />
                                <Form.Text >
                                    Choose a number of shares between 1,000 & 1,000,000.
                                </Form.Text>
                        </Form.Group>
                        <h4 className={"m-3 num-shares"}>Number of Shares: <span id="share-num">{numWithCommas(values.tokens)}</span></h4>
                        <Form.Group controlId="price-shares" >
                            <Form.Label>Price per Share:</Form.Label>
                            <InputGroup hasValidation>
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroupPrepend">$</InputGroup.Text>
                                </InputGroup.Prepend>
                            <Form.Control 
                                type="number"
                                placeholder="$0.01 to $10,000.00"
                                className=""
                                name="tokenPrice"
                                value={(values.tokenPrice)}
                                onChange={handleChange}
                                />
                            </InputGroup>
                        </Form.Group>
                        
                        <Card className="share-price-card">
                            <h3 className={"d-flex flex-column align-items-center"}>
                            Total Valuation: <span>{currencyFormatter.format(values.tokens * values.tokenPrice)}</span>
                            </h3>
                        </Card>
                        <Button className={"mt-4 cont-btn"}onClick={handleShow}>
                            Continue
                        </Button>
                        <Modal className={"company-summary"} style={{display: "grid"}} show={modalIsOpen} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Review</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <h3 id="summ-title">Company Summary</h3>
                                <ul>
                                    <li id="summ-name">Company Name: <strong>{values.companyName}</strong></li>
                                    <li id="summ-descr">Company Description: <strong>{values.companyBio}</strong></li>
                                    <li id="summ-ticker">Company Ticker: <strong>{values.tldAddress}</strong></li>
                                    <li id="summ-shares">Number of Shares: <strong>{numWithCommas(values.tokens)}</strong></li>
                                    <li id="summ-price">Price per Share: <strong>{currencyFormatter.format(values.tokenPrice)}</strong></li>
                                    <li id="summ-val">Proposed Valuation: <strong>{currencyFormatter.format(values.tokenPrice * values.tokens)}</strong></li>
                                </ul>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Edit details
                                </Button>
                                <Button variant="primary" onClick={() => history.push('/your-ccompanies/1')}>
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