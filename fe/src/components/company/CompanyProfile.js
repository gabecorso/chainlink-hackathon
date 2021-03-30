import React, {Fragment} from 'react';
import Layout from "../common/Layout";
import {Container, Row, Col, Tabs, Tab} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import JDenticon from "../common/JDenticon";
import DocumentsTab from "./DocumentsTab";
import AccountsTab from "./AccountsTab";


export default function CompanyProfile({company={name: 'CodeBerry', desc: 'We create artificially intelligent children', etherScan: 'https://etherscan.io/chart/etherprice'}}) {
    const {desc, name, etherScan} = company;
    return (
        <Layout>
            <Container>
                <div className={'d-flex mt-4'}>
                    <JDenticon className={'d-inline-block mr-3'} size={100} value={'213taa679dfsafbnhdusiao'} />
                    <div className={'d-inline-block'} style={{wordBreak: 'break-word'}}>
                        <h3 className={'pb-2'}>{name}</h3>
                        <p className={'pb-2'}>{desc}</p>
                        <a href={etherScan} target={'_blank'} >View on Etherscan <FontAwesomeIcon className={'ml-1'} icon={faEye} /></a>
                    </div>
                </div>

                <Tabs defaultActiveKey="accounts" id="company-profile-tab">
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