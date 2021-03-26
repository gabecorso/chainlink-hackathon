import React, { useState } from 'react';
import home from '../assets/styles/home.sass';

import Navbar from './common/Navbar';
import Hero from './Hero';
import Loading from './Loading'

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);
    let timer = setTimeout(() => setIsLoading(false), 3000);

    return (
        <div className="home"> 
            <Loading isLoading={isLoading}/>
            <Navbar isLoading={isLoading} />
            <Hero isLoading={isLoading} />
        </div>
    )
}
