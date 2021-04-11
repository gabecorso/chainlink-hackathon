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
                    <Button className={'create-btn mt-4'}>
                        <Link to="/create">Add New Company</Link>
                    </Button>

                    <Link to="/company/charles-physical-therapy">
                        <Card className="charles-card">
                            <img src="/assets/images/charles.jpg"></img>
                            <div className="company-overview">
                                <h4 className="company-name">Charles' Physical Therapy</h4>    
                                <p className="company-description">Ex-NFL Linebacker providing bespoke personal training services</p>
                            </div>                       
                        </Card>
                    </Link>
            </Container>
        </Layout>
    )
}
