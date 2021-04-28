import React from 'react'
import token from '../../styles/token.sass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/pro-light-svg-icons'
export default function Token({token, price}) {
    const currencyFormatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      });

    return (
        <div className={'token'}>
            <img src={token.icon} className={'token-icon'}/>
            <div className={"d-flex flex-column align-items-center"}>
                <h5>
                    {token.quantity} {token.ticker}
                </h5>
                <h6>
                    {currencyFormatter.format(token.quantity * price)}
                </h6>
            </div>
            <FontAwesomeIcon icon={faChevronRight} />
        </div>
    )
}
