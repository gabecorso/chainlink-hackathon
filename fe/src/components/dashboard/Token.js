import React from 'react'
import { token } from '../../styles/token'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/pro-light-svg-icons'
import { Container } from 'react-bootstrap'
export default function Token() {
    return (
        <Container className={'d-flex'}>
            <FontAwesomeIcon icon={faChevronRight} />
        </Container>
    )
}
