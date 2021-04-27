import React, { useState } from 'react'
import dashboard from '../../styles/dashboard.sass'
import CollectiblesTab from './CollectiblesTab'
import TokensTab from './TokensTab'
import JDenticon from '../common/JDenticon'
import Layout from '../common/Layout'
import { Container, Tabs, Tab, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/pro-light-svg-icons'

const seedData = {
    user: {
        firstName: "Victor",
        walletAddress: "0xc0ffee254729296a45a3885639AC7E10F9d54979",
        tokens: [
             {
                tokenName: "ethereum",
                ticker: "ETH",
                icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ethereum-icon-purple.svg/1200px-Ethereum-icon-purple.svg.png",
                quantity: 1.45,
            },
            {
                tokenName: "codeBerry",
                icon: "https://res-5.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco/v1502910380/diilvtog7xtxak3hhia5.png",
                ticker: "CB",
                quantity: 100,
            },
        ]
    },
    prices: {
        ethereum: 2483.63,
        codeBerry: 200
    }
}

export default function Dashboard() {
    const [dashState, setdashState] = useState(seedData)

    
    const totalWallet = (tokens, prices) => {
        let total = 0;

        const currencyFormatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
          });

        for (let i=0; i < tokens.length; i++) {
            total += tokens[i]['quantity'] * prices[tokens[i]['tokenName']]
        }
        return currencyFormatter.format(total);
    }

    const abbrevAddress = dashState.user.walletAddress.slice(0,6) + "..." + dashState.user.walletAddress.slice(-3);
    let walletTotal = totalWallet(dashState.user.tokens, dashState.prices)

    return (
        <Layout cName ="dashboard">
            <section className={"mt-5 dash-overview"}>
                <JDenticon className={"m- acct-photo"} size={85} value={'213taa679dfsafbnhdusiao'}/>
                <h1 className={"user-name"}>{dashState.user.firstName}'s Account</h1>
                <h2>{walletTotal}</h2>
                <h3 className="wallet-address">{abbrevAddress}</h3>
            </section>
            <section className="dash-tabs">
                <Tabs defaultActiveKey="tokens" className={"mt-4"}>
                    <Tab eventKey="tokens" title="tokens">
                        <TokensTab tokens={dashState.user.tokens} prices={dashState.prices} />
                    </Tab>
                    <Tab eventKey="collectibles" title="collectibles">
                        <CollectiblesTab />
                    </Tab>
                </Tabs>
               
            </section>
        </Layout>
    )
}
