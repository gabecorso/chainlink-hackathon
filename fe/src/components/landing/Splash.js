import React, { useState } from 'react';
import home from '../../styles/home.sass';

import Layout from '../common/Layout';
import Hero from './Hero';
import Loading from './Loading'

export default function Splash() {
    const [isLoading, setIsLoading] = useState(true);
    // const [isOpen, setIsOpen] = useState(false)
    let timer = setTimeout(() => setIsLoading(false), 3000);

    return (
        <Layout showMobileFooter={false} showNav={true} cName="home"> 
            <Loading isLoading={isLoading}/>
            <Hero isLoading={isLoading} />
        </Layout>
    )
}
