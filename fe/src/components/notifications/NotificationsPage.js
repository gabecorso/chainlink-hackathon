import React from 'react'
import notificationsPage from '../../styles/notificationsPage.sass'
import Layout from '../common/Layout'
import { Container } from 'react-bootstrap'

export default function NotificationsPage() {
    return (
        <Layout mobileFooter={true}>
            <div className="proto-bg">
                <img className={"prototype"} src="/assets/images/notifications.jpg"/>
            </div>
        </Layout>
    )
}