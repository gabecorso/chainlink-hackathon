import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Formik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
    query: yup.string().required()
})

export default function SearchBar() {
    return (
    <div className={"search-bar m-4 p-4"}>
        <Formik 
            validationSchema={validationSchema}
            initialValues={{query:""}}
            onSubmit={(values, actions) => {
                this.handleSubmit(values)
            }}
            render= {
                ({
                    values, touched, errors, dirty, 
                    isSubmitting, handleChange, handleSubmit  
                }) => (
                    <Form onSubmit={handleSubmit}>

                        <Form.Control 
                        name="query"
                        type="text"
                        placeholder="find companies on web3."
                        onChange={handleChange}
                        value={values.query}
                        />
                        <Button>Search</Button>
                    </Form>
                    )}
                />
    </div>
)}
                    