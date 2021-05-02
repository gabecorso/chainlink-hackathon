import React, { useState } from 'react'
import tasks from '../../styles/tasks.sass'
import Layout from '../common/Layout'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { v4 as uuid } from 'uuid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/pro-light-svg-icons'

const seedData = {
    taskSections: [
        {
            title: "Upcoming Deadlines", 
            tasks: [{title: "Add a profile picture", dateDue: "May 13th, 2021"}]
        },
        {
            title: "Submit Documents", 
            tasks: [{title: "Bank statements"}, {title: "Articles of Organization"}]
        },
        {
            title: "Governance", 
            tasks: [{title:"CB Proposal #4", dateDue: "May 14th, 2021"}, {title:"LBBQ Proposal #12", dateDue: "May 15th, 2021"},{title:"CB Q3 Airdrop", dateDue: "June 1st, 2021"},]
        },
        {
            title: "Loans Due", 
            tasks: [{title: "Outstanding $3,000 ETH/ DAI", dateDue: "June 1st, 2021"}]
        },
    ]
}

export default function Account() {
    const [tasks, setTasks]  = useState(seedData.taskSections)
    return (
        <Layout cName="tasks-page">
            <Container>
                <h1 id="tasks-title">Tasks</h1>
                {
                    tasks.map( section => {
                        return(
                            <section key={uuid()}>
                                <h2 className="section-title">{section.title}</h2>
                                <ol type="1">
                                    {
                                    section.tasks.map( task => {
                                        return(
                                            <li className="task" key={uuid()}>
                                                <p className="task-title">{section.tasks.indexOf(task) + 1}.&nbsp;{task.title}</p>
                                                <p className="task-due">{task.dateDue && task.dateDue}</p> 
                                            </li>
                                        )
                                    })
                                    }
                                </ol>
                            </section>
                        )
                    })
                }
                <Button className="task-button"><FontAwesomeIcon icon={faPlus} /> Add A Task</Button>
            </Container>
        </Layout>
    )
}
