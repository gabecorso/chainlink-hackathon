import React, { Component } from 'react'
import hero from '../../styles/hero.sass'

import { Jumbotron, Container, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


export default function Hero({ isLoading })  {
        const history = useHistory();
        console.log(history)
        const routeToSignUp = () => {
            history.push('/sign-up');
        }

        return (
            <section className="welcome" style={isLoading ? {display: 'none'} : {display: 'grid'}}>
                <Jumbotron className="hero "fluid>
                        <h2>
                            Small Business. <br /> 
                            <span>HUGE</span> potential.
                        </h2> 
                        <p className="explainer">Manage your company with Web 3.0.</p>
                        <Button className="sign-up-btn" onClick={routeToSignUp}>Get Started</Button>
                </Jumbotron>
            </section>
        )
}
