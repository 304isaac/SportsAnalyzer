import React from 'react'
import { useState } from 'react'
import {Link} from "react-router-dom"
import {UilFootballAmerican, UilBasketball} from "@iconscout/react-unicons";
import './Dropdown.css'


function Dropdown () {

    const [open, setOpen] = useState(false);

    return (
        <div className="menuContainer">
            <div className="toggleMenu" onClick={() => {setOpen(!open)}}>
                Sports
            </div>

            <div className="dropDownMenu">
                <ul>
                <li>
                        <Link to="/nfl">
                            <div className="menuItem">

                                <div className="itemLogo">
                                    <UilFootballAmerican/>
                                </div>

                                <span><h1>NFL</h1></span>
                            </div>
                        </Link>
                    </li>
                    

                    <li>
                        <Link to="/nba">
                            <div className="menuItem">

                                <div className="itemLogo">
                                    <UilBasketball/>
                                </div>

                            <span><h1>NBA</h1></span>
                            </div>
                        </Link>
                    </li>


                    <li>
                        <Link to="/ncaaf">
                            <div className="menuItem">

                                <div className="itemLogo">
                                    <UilFootballAmerican/>
                                </div>

                                <span><h1>NCAAF</h1></span>
                            </div>
                        </Link>
                    </li>


                    <li>
                        <Link to="/ncaam">
                            <div className="menuItem">

                                <div className="itemLogo">
                                    <UilBasketball/>
                                </div>

                                <span><h1>NCAAM</h1></span>
                            </div>
                        </Link>
                    </li>
                </ul>

            </div>

        </div>
    )
}

export default Dropdown