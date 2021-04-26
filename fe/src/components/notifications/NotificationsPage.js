import React from 'react'
import notificationsPage from '../../styles/notificationsPage.sass'
import Layout from '../common/Layout'

export default function NotificationsPage() {
    return (
        <Layout cName="notifications-page">
            <div className="proto-bg">
                <img className={"prototype"} src="/assets/images/notifications.jpg"/>
            </div>
        </Layout>
    )
}