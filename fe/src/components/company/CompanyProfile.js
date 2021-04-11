import React, {Fragment} from 'react';
import companyProfile from '../../styles/companyProfile.sass';
import {Container, Row, Col, Tabs, Tab} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import JDenticon from "../common/JDenticon";
import Layout from "../common/Layout";
import DocumentsTab from "./DocumentsTab";
import AccountsTab from "./CreditTab";


export default function CompanyProfile({company={name: 'Charles\' PT', desc: 'Ex-NFL Linebacker providing bespoke personal training services', etherScan: 'https://etherscan.io/chart/etherprice'}}) {
    const {name, desc, etherScan} = company;
    return (
        <Layout >
            <Container className={'mt-8 mb-8 company-page'}>
                <section className={'d-flex mt-2 profile-header align-items center' }>
                    <JDenticon className={'d-flex align-items-center mr-3'} size={100} value={'213taa679dfsafbnhdusiao'} />
                    <div className={'d-flex flex-column align-items-center p-2'} style={{wordBreak: 'break-word'}}>
                        <h3 className={'pb-2'}>{name}</h3>
                        <p className={'pb-2'}>{desc}</p>
                        <a href={etherScan} target={'_blank'} >View on Etherscan <FontAwesomeIcon className={'ml-1'} icon={faEye} /></a>
                    </div>
                </section>

                <Tabs className={'mt-4'} defaultActiveKey="accounts" id="company-profile-tab">
                    <Tab eventKey="accounts" title="Accounts">
                      <AccountsTab />
                    </Tab>
                    <Tab eventKey="documents" title="Documents">
                        <DocumentsTab />
                    </Tab>
                </Tabs>

            </Container>
        </Layout>
    )
}