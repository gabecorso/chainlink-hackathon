import React from 'react'
import Card  from 'react-bootstrap/Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTh } from '@fortawesome/free-solid-svg-icons';

export default function NotificationCard({ notif }) {
    return (
        <li className={"list-item mt-1"}>
            <Card className={"notification-card d-flex flex-row"}>
                {notif.img ? <img src={notif.img} alt="ipsum"/> : <FontAwesomeIcon icon={faTh} size="lg"/>}
                <div>
                    <p className="notif-message">{notif.message}</p>
                    <p className="notif-time">{notif.dateTime}</p>
                </div>
            </Card>
        </li>
    )
}
