import React from 'react'
import account from '../../styles/account.sass'
import Layout from '../common/Layout'
import { Container } from 'react-bootstrap'

export default function Account() {
    return (
        <Layout mobileFooter={true}>
            <Container>
                <h1> 
                    This is the Notifications Page
                </h1>
            </Container>
        </Layout>
    )
}

}
