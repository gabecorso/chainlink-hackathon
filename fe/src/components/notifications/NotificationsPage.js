import React from 'react'
import account from '../../styles/account.sass'
import Layout from '../common/Layout'
import { Container } from 'react-bootstrap'

export default function NotificationsPage() {
    return (
        <Layout mobileFooter={true}>
            <Container>
                <image src="../../assets/images/notifications.jpg"/>
            </Container>
        </Layout>
    )
}