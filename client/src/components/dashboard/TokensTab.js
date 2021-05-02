import React from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/pro-light-svg-icons'
import { v4 as uuid } from 'uuid'
import Token from './Token'
export default function TokensTab({ tokens, prices }) {

    const filteredTokens = tokens.sort((t1, t2) => {
        return t1.quantity * prices[t1.tokenName] > 
                t2.quantity * prices[t2.tokenName] ? -1 : 1
    })

    return (
        <Container className={"tokens-tab"}>
            <ol className={"m-2 d-flex flex-column token-list"}>
                { filteredTokens ?
                    filteredTokens.map(token => {
                        return (
                            <li key={uuid()}>
                                <Token token={token} price={prices[token['tokenName']]}/>
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
