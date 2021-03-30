import React, { Component } from 'react'
import hero from '../assets/styles/hero.sass'
import { Jumbotron, Container } from 'react-bootstrap'

export default function Hero({ isLoading })  {
        return (
            <section className="welcome">
                <Jumbotron fluid>
                    <Container className="splash container">
                        <h2>
                            Small Business. <br /> 
                            <span>HUGE</span> potential.
                        </h2> 
                    </Container>
                </Jumbotron>
            </section>
        )
}
