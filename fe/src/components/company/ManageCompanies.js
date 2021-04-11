import React from 'react'
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
                    <p>It appears you don't currently own shares in any companies. </p>
                    <Button className={'create-btn mt-4'}>
                        <Link to="/create">Create Company</Link>
                    </Button>
                </Card>
            </Container>
        </Layout>
    )
}
