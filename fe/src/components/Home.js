import React, { useState } from 'react';
import home from '../styles/home.sass';

import Navbar from './NavBar';
import Hero from './Hero';
import Loading from './Loading'

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);
    // const [isOpen, setIsOpen] = useState(false)
    let timer = setTimeout(() => setIsLoading(false), 3000);

    return (
        <div className="home"> 
            <Loading isLoading={isLoading}/>
            {/* <Navbar isLoading={isLoading} isSimple={false} isOpen={isOpen} /> */}
            <Hero isLoading={isLoading} />
        </div>
    )
}
