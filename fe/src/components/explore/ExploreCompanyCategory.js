import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container'    
export default function ExploreCompanyCategory({category}) {
    return (
        <Container className={category.title.toLowerCase().split(' ')[0]}>
            <h3 className={"carousel-title m-2"}>{category.title}</h3>
            <Carousel fade interval={null}>
                {
                    category.companies.map( company => {
                        return(
                            <Carousel.Item interval={false}>
                                <img 
                                    src={company.imgSrc}
                                    alt={company.imgAlt}
                                />
                                <Carousel.Caption>
                                    <h4>{company.name}</h4>
                                    <p>{company.description}</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        )
                    })
                }
            </Carousel>
            <div className="divider"/>
        </Container>
    )
}
