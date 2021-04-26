import React from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/pro-light-svg-icons'
export default function CollectiblesTab() {
    return (
        <Container className={"d-flex flex-column collectibles-tab"}>
           <h4 className={"m-3 collect-title"}>
               Your NFTs and other collectibles go here! 
            </h4>
            <Button><FontAwesomeIcon icon={faPlus} /> Add Goodies</Button>
        </Container>
    )
}
