import React from 'react'
import explore from '../../styles/explore.sass'
import Layout from '../common/Layout'
import { Container } from 'react-bootstrap'
import SearchBar from './SearchBar'

export default function ExplorePage() {
    return (
    <Layout mobileFooter={true}>
        <Container className="explore-page">
            <SearchBar />
        </Container>
    </Layout>
    )
}