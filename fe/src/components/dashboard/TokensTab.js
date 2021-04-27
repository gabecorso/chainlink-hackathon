import React from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/pro-light-svg-icons'
import { v4 as uuid } from 'uuid'
import Token from './Token'
export default function TokensTab({ tokens }) {
    return (
        <Container className={"tokens-tab"}>
            <ol className={"m-3 d-flex flex-column token-list"}>
                { tokens ?
                    tokens.map(token => {
                        return (
                            <li key={uuid()}>
                                <Token token={token}/>
                            </li>
                        )
                    })
                    : <></>
                }
            </ol>
            <Button><FontAwesomeIcon icon={faPlus} /> Add Tokens</Button>
        </Container>
    )
}
