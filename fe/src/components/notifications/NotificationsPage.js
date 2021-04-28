import React, { useState }from 'react'
import notifications from '../../styles/notifications.sass'
import Layout from '../common/Layout'
import Container from 'react-bootstrap/Container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTh } from '@fortawesome/free-solid-svg-icons';

const seedData = {
    notifications: [
        {
            message: "Governance Proposal #1 has expired",
            img: "https://res-5.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco/v1502910380/diilvtog7xtxak3hhia5.png",
            dateTime: "about 2 hours ago"
        },
        {
            message: "@Latedec made an offer on your token",
            img: "https://res-5.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco/v1502910380/diilvtog7xtxak3hhia5.png",
            dateTime: "about 3 hours ago"
        },
        {
            message: "Governance Proposal #1 is expiring soon",
            img: "https://res-5.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco/v1502910380/diilvtog7xtxak3hhia5.png",
            dateTime: "about 4 hours ago"
        },
        {
            message: "Your ETH/DAI loan was successful",
            img: "https://www.coinopsy.com/media/img/quality_logo/Aave.png",
            dateTime: "about 4 hours ago"
        },
        {
            message: "Your account was verified",
            img: "",
            dateTime: "about 2 days ago"
        },
        {
            message: "Submit your documents",
            img: "",
            dateTime: "about 2 days ago"
        },
    ]
}
export default function NotificationsPage() {
    const [notifications, setNotifications ] = useState(seedData.notifications)
    return (
        <Layout cName="notifications-page">
            <Container className="notif-container">
                <h1 id="notif-title">Notifications</h1>
                <ol className={"mt-3 notif-list"}>
                    {
                        notifications && notifications.map( notif => {
                            return(
                                <li className={"notification mt-1"}>
                                    {notif.img ? <img src={notif.img} alt="ipsum"/> : <FontAwesomeIcon icon={faTh} size="lg"/>}
                                    <div>
                                        <p className="notif-message">{notif.message}</p>
                                        <p className="notif-time">{notif.dateTime}</p>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ol>
            </Container>
        </Layout>
    )
}