import React, { useState } from 'react';
import createCompany from '../../styles/createCompany.sass'
import { useFormik } from 'formik';
import * as yup from 'yup'
import { Container, Card, Form, Button, Modal} from 'react-bootstrap'

import Layout from '../common/Layout';


export default function CreateCompany() {
    const formik = useFormik({
        initialValues: {
            companyName: '',
            companyBio: '',
            tokens: 0,
            tokenPrice: 0,
            tldAddress: '',   
            // terms: false,                  
        },
        validationSchema: yup.object({
            companyName: yup.string().required(),
            companyBio: yup.string().required(),
            tldAddress: yup.string().required(),
            tokens: yup.number().required(),
            tokenPrice: yup.number().required(),
            // terms: yup.bool().required().oneOf([true], 'Terms must be accepted'),
          }),
          onSubmit: values => {
            const newCompany ={values}
            postNewCompany(newCompany)
          }
    })

    const postNewCompany = company => {
      // axios.post('', company)
      // .then(res =>{
              // const goLogin = setTimeout(()=> history.push('/login'), 1500);
      // })
      // .catch(err =>{
      //     debugger
      //     setFormValues({
      //       ...form,
      //       username: initialFormValues.username
      //     })
      // })
    }

    const [modalIsOpen, setModalIsOpen] = useState(false)
    const handleShow = () => setModalIsOpen(true);
    const handleClose = () => setModalIsOpen(false);

    return (
        <Layout>
            <Container className="form-container mt-1">
                <h3>Create a Company</h3>
                <Form 
                    className="create-company-form" 
                    onSubmit={formik.handleSubmit}
                >
                    <Form.Group controlId="company-name">
                        <Form.Label>Company Name</Form.Label>
                        <Form.Control 
                            type="text"
                            onChangeText={formik.handleChange('companyName')}
                            value={formik.values.companyName}
                        />
                    </Form.Group>
                    <Form.Group controlId="">
                        <Form.Label>Company Description</Form.Label>
                        <Form.Control as="textarea"></Form.Control>
                        <Form.Text>Write 1-2 sentences about your company's DNA.</Form.Text>
                    </Form.Group>
                    <Form.Group controlId="">
                        <Form.Label>Company Ticker</Form.Label>
                        <Form.Control
                            type="Text" 
                            onChange={formik.handleChange}
                            value={formik.values.tldAddress}
                        />
                        <Form.Text>This will be your company's public address</Form.Text>
                    </Form.Group>
                    <Form.Group controlId="num-shares">
                            <Form.Label>Shares to Distribute</Form.Label>
                            <Form.Control 
                                type="range"
                                min="1000" 
                                max="1000000000" 
                                onChange={formik.handleChange}
                                value={formik.values.tokens}
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
                            />
                        </Form.Group>
                        <div>
                           Company Valuation: ${Math.round(formik.values.tokens * formik.values.tokenPrice)}
                        </div>
                    </Card>
                    <Button onClick={handleShow}>
                        Continue
                    </Button>
                    <Modal style={{display: "grid"}} show={modalIsOpen} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Review</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Edit details
                            </Button>
                            <Button variant="primary" onClick={handleClose}>
                                Confirm & Submit
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </Form>
            </Container>
        </Layout>
    )
}