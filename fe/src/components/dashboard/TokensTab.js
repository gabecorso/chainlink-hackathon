import React from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/pro-light-svg-icons'
export default function CollectiblesTab() {
    return (
        <Container className={"d-flex flex-column tokens-tab"}>
            
            <Button><FontAwesomeIcon icon={faPlus} /> Add Tokens</Button>
        </Container>
    )
}
