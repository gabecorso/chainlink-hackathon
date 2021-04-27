import React from 'react'
import token from '../../styles/token.sass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/pro-light-svg-icons'
import { Container } from 'react-bootstrap'
export default function Token({token}) {
    console.log(token)
    return (
        <Container className={'d-flex'}>
            <img src={token.icon}/>
            <h5>{token.ticker}</h5>
            <p>{token.quantity}</p>
            <FontAwesomeIcon icon={faChevronRight} />
        </Container>
    )
}
