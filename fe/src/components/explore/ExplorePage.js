import React from 'react'
import explore from '../../styles/explore.sass'
import Layout from '../common/Layout'
import { Container } from 'react-bootstrap'

export default function ExplorePage() {
    return (
        <Layout mobileFooter={true}>
        <div className="proto-bg">
            <img className={"mt-4 prototype"} src="/assets/images/explore.jpg"/>
        </div>
    </Layout>
    )
}