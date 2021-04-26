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
        tokens: {
            ethereum: {
                icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ethereum-icon-purple.svg/1200px-Ethereum-icon-purple.svg.png",
                ticker: "ETH",
                quantity: 1.45,
            },
            codeBerry: {
                icon: "https://res-5.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco/v1502910380/diilvtog7xtxak3hhia5.png",
                ticker: "CB",
                quantity: "200",
            }
        }
    },
    prices: {
        ethereum: 2483.63,
        codeBerry: 2
    }
}

export default function Dashboard() {
    const [accountDetails, setAccountDetails] = useState(seedData.user)
    const [prices, setPrices ] = useState(seedData.prices)

    
    const totalWallet = (userTokens) => {
        let total = 0;

        const currencyFormatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
          });

        for (let token in userTokens) {
            total += (userTokens[token].quantity * prices[token])
        }
        return currencyFormatter.format(total);
    }

    const abbrevAddress = accountDetails.walletAddress.slice(0,6) + "..." + accountDetails.walletAddress.slice(-3);
    let walletTotal = totalWallet(accountDetails.tokens)

    return (
        <Layout cName ="dashboard">
            <section className={"mt-5 dash-overview"}>
                <JDenticon className={"m- acct-photo"} size={100} value={'213taa679dfsafbnhdusiao'}/>
                <h1>{accountDetails.firstName}'s Account</h1>
                <h2>{walletTotal}</h2>
                <h3>{abbrevAddress}</h3>
            </section>
            <section className="dash-tabs">
                <Tabs defaultActiveKey="tokens" className={"mt-4"}>
                    <Tab eventKey="tokens" title="tokens">
                        <TokensTab />
                    </Tab>
                    <Tab eventKey="collectibles" title="collectibles">
                        <CollectiblesTab />
                    </Tab>
                </Tabs>
               
            </section>
        </Layout>
    )
}
