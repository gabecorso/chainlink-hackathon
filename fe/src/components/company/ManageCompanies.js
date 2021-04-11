import React, { useState } from 'react'
import {Container, Card, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import manageCompanies from '../../styles/manageCompanies.sass'
import Layout from '../common/Layout'

export default function ManageCompanies({isManagingCompanies=false}) {

    return (
        <Layout>
            <Container className={'manage-companies-page mt-8 mb-8 h-100 '}>
                <h2>Your Companies</h2>
                <Card className={'add-company-card w-auto d-flex flex-column'}>
                    <p>Add a business that you want to manage using the iOwnThis protocols. </p>
                    <Button className={'create-btn mt-4'} onClick={() => { console.log("yeah")}}>
                        <Link to="/create">Create Company</Link>
                    </Button>
                </Card>
            </Container>
        </Layout>
    )
}
