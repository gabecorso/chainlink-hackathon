import React, { useState } from 'react';
import {Helmet} from 'react-helmet'

import landing from '../../styles/landing.sass';
import Hero from './Hero';
import Loading from './Loading'

export default function Splash() {
    const [isLoading, setIsLoading] = useState(true);
    // const [isOpen, setIsOpen] = useState(false)
    let timer = setTimeout(() => setIsLoading(false), 3000);

    return (
        <> 
            <Helmet>
                <title>Welcome to CashDapp</title>
            </Helmet>
            <Loading isLoading={isLoading}/>
            <Hero isLoading={isLoading} />
        </>
    )
}
