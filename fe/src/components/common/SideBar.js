import React from 'react'
import sidebar from '../../styles/sidebar.sass'
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import { FontAwesomeIcon } from 'react'

export default function SideBar({isOpen, setIsOpen}) {
    const menuItems = ["Dashboard", "Your Companies", "Tasks", "Account", "About",];

    // const sideBarAnimation = useSpring({ 
    //         transform: isOpen ?  `translate3d(0,0,0) scale(1)`
    //         : `translate3d(6000px, -100vw,0) scale(0.6)`
    //   });

    return (
        <div 
            className={isOpen ? "side-menu open" : "side-menu"} 
        >
            <ul className="menu-items">
                {
                menuItems.map( item => {
                    return (
                        <div
                            className={isOpen ?  "open" : "closed"} 
                                        >
                            <li className= {"nav-item"} 
                                onClick={() => {setIsOpen(!isOpen)}}
                            >
                                <NavLink 
                                    to={"/".concat(item.includes(" ") ? 
                                            item.toLowerCase().split(" ").join("-") 
                                            : item.toLowerCase())
                                    } 
                                    activeStyle={{
                                        color: "gold"
                                    }}
                                >
                                    {item}
                                </NavLink>
                            </li>
                        </div>
                    )
                })
                }
            </ul>
        </div>
    )
}
