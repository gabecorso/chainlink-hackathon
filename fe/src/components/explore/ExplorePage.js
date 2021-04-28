import React, { useState } from 'react'
import explore from '../../styles/explore.sass'
import Layout from '../common/Layout'
import { Container } from 'react-bootstrap'
import SearchBar from './SearchBar'

const seedData = {
    companyCategories: [
    {
        title: 'Featured',
        companies: [
            {name: 'Opportune Homes', imgSrc: '', description:'Outfitting exquisite properties for the Tri-State Area',}, {name: 'Golden Magnolia Gardeners', imgSrc: '', description:'Cultivating the finest flora in Sonoma, CA',}, {name: 'Zephyr Aero', imgSrc: '', description:'Bespoke aircrafts, on demand',},
        ],
    },
    {
        title: 'Health & Wellness',
        companies: [
            {name: "Charles' PT", imgSrc: '', description:'Ex-NFL Linebacker and Personal Trainer',}, {name: 'Shakegenix', imgSrc: '', description:'A new paradigm in personal nutrition',}, {name: 'Big Brawn Rock Climbing Gym', imgSrc: '', description:'8 walls with challenge levels for all ages',},
        ],
    },
    {
        title: 'Education',
        companies: [
            {name: 'CodeBerry', imgSrc: '', description:'Online code academy for children grades k-12',}, {name: 'Target Ace Testing', imgSrc: '', description:'An assessment facility for professional certifications',}, {name: 'The TutorDome', imgSrc: '', description:'Delivering completed homework to college students since 1997',},
        ],
    },
    ],} 

export default function ExplorePage() {
    return (
    <Layout mobileFooter={true}>
        <Container className="explore-page">
            <SearchBar />
            
        </Container>
    </Layout>
    )
}