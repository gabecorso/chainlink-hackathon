import React from 'react'
import loading from '../../styles/loading.sass'

export default function Loading({isLoading}) {
    return (
        <div className='loading' style={isLoading ?{display: 'grid'} : {display: 'none'}}>
            <h1>iOwnThis</h1>
        </div>
    )
}
