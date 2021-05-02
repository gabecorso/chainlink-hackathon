import React, { useState } from 'react'
import explore from '../../styles/explore.sass'
import Layout from '../common/Layout'
import { Container } from 'react-bootstrap'
import SearchBar from './SearchBar'
import FeaturedCarousel from './ExploreCompanyCategory'
import ExploreCompanyCategory from './ExploreCompanyCategory'

const seedData = {
    companyCategories: [
    {
        title: 'Featured',
        companies: [
            {
                name: 'Opportune Homes', 
                imgSrc: 'https://image.freepik.com/free-vector/real-estate-logo_74869-167.jpg', 
                description:'Outfitting exquisite properties for the Tri-State Area',
            }, 
            {
                name: 'Golden Magnolia Gardeners', 
                imgSrc: 'https://new.48hourslogo.com/48hourslogo_data/2020/05/17/96583_1589653902.png', 
                description:'Cultivating the finest flora in Sonoma, CA',
            }, 
            {
                name: 'Zephyr Aero', 
                imgSrc: 'https://scalebranding.com/wp-content/uploads/2020/09/plane-1.jpg', 
                description:'Bespoke aircrafts, on demand',
            },
        ],
    },
    {
        title: 'Health & Wellness',
        companies: [
            {
                name: "Charles' PT", 
                imgSrc: 'https://www.collaborativehp.com/images/Site-Images/physical-therapy-employee-healthcare_providers-lynchburg-01.png', 
                description:'Ex-NFL Linebacker and Personal Trainer',
            }, 
            {
                name: 'Shakegenix', 
                imgSrc: 'https://www.levanamealreplacement.com/wp-content/uploads/doctors-shakes-master7681-500x333.jpg', 
                description:'A new paradigm in personal nutrition',
            }, 
            {
                name: 'Big Brawn Rock Climbing Gym', 
                imgSrc: 'https://cf-images.us-east-1.prod.boltdns.net/v1/static/5615998023001/9e4779bc-2be8-4353-aa0d-a3becbba654c/9687f7f8-43a5-488d-9b0e-8a11e2a82cda/1280x720/match/image.jpg', 
                description:'8 walls with challenge levels for all ages',
            },
        ],
    },
    {
        title: 'Education',
        companies: [
            {
                name: 'CodeBerry', 
                imgSrc: 'https://gocode.asia/wp-content/uploads/2019/11/IMG_4992-1024x768.jpg', 
                description:'Online code academy for children grades k-12',}, 
            {
                name: 'Target Ace Testing', 
                imgSrc: 'https://i1.wp.com/images.onwardstate.com/uploads/2011/10/Untitled-1.jpg', 
                description:'An assessment facility for professional certifications',}, 
            {
                name: 'The TutorDome', 
                imgSrc: 'https://image.freepik.com/free-vector/graduation-background-with-proud-student_23-2147628319.jpg', 
                description:'Delivering completed homework to college students since 1997',},
        ],
    },
    ],} 

export default function ExplorePage() {
    const [ companies, setCompanies ] = useState(seedData)
    return (
    <Layout mobileFooter={true}>
        <Container className="explore-page">
            <SearchBar />
            <section className= {"categories mt-3"}>
                {
                    companies.companyCategories.map( category => {
                        return (
                            <ExploreCompanyCategory category={category} />
                        )
                    })
                }
            </section>
        </Container>
    </Layout>
    )
}