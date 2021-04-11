import React from 'react'
import account from '../../styles/account.sass'
import Layout from '../common/Layout'
import { Container } from 'react-bootstrap'

export default function Account() {
    return (
        <Layout mobileFooter={true}>
        <div className="proto-bg">
            <img className={"prototype"} src="/assets/images/tasks.jpg"/>
        </div>
        </Layout>
    )
}
