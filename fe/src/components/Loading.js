import React from 'react'
import loading from '../assets/styles/loading.sass'

export default function Loading({isLoading}) {
    return (
        <div className='loading' style={isLoading ?{display: 'inherit'} : {display: 'none'}}>
            <h1>iOwnThis</h1>
        </div>
    )
}
