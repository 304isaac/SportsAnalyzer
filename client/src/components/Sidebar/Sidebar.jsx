import React from 'react'
import './Sidebar.css'
//import Logo from '/imgs/logo.png'
import { Link } from "react-router-dom"
import {UilEstate, UilSearch, UilFootballAmerican, UilBasketball, UilChartBar, UilPlay, UilExclamationTriangle, UilChartLine, UilPadlock, UilAngleDown} from "@iconscout/react-unicons";
import { useState } from 'react';



const Sidebar = () => {
    // const path = window.location.pathname;
    const [open, setOpen] = useState(false);
    return (
        <div className="Sidebar">

            <div className="logo">
                <span><Link to="/"><UilPadlock className="logoIcon"/></Link></span>
            </div>     


            <div className="menu">


                <ul className="SideBarList">
                    <li>   
                        <Link to ="/">
                            <div className="menuItem">

                                <div className="itemLogo">
                                    <UilEstate/>
                                </div>

                                <span><Link to="/">Home</Link></span>
                            </div>
                        </Link>
                    </li> 
                    

                    <li>
                        <Link to="/search">
                            <div className="menuItem">

                                <div className="itemLogo">
                                    <UilSearch/>
                                </div>

                                <span><h1>Search</h1></span>
                            </div>
                        </Link>
                    </li>


                    <li>
                        <Link to="/matchups">
                            <div className="menuItem">

                                <div className="itemLogo">
                                    <UilPlay/>
                                </div>

                                <span><h1>Matchups</h1></span>
                            </div>
                        </Link>
                    </li>


                    <li>
                        <Link to="/stats">
                            <div className="menuItem">

                                <div className="itemLogo">
                                    <UilChartBar/>
                                </div>

                                <span><h1>Stats</h1></span>
                            </div>
                        </Link>
                    </li>
                    

                    <li>
                        <Link to="/injuries">
                            <div className="menuItem">

                                <div className="itemLogo">
                                    <UilExclamationTriangle/>
                                </div>

                                <span><h1>Injury Report</h1></span>
                            </div>
                        </Link>
                    </li>


                    <li>
                        <Link to="/performance">
                            <div className="menuItem">

                                <div className="itemLogo">
                                    <UilChartLine/>
                                </div>

                                <span><h1>Performance</h1></span>
                            </div>
                        </Link>
                    </li>

                    <li>



                        <div className="menuContainer">
                            <div className="toggleMenu">
                                <div className="menuItem" onClick={() => {setOpen(!open)}}>
                                            
                                        <UilAngleDown className="dropDownLogo"/><h1>Sports</h1>
                                </div>
                            </div>

                            <div className={`dropDownMenu ${open? "active" : "inactive"}`}>

                                <ul>
                                    <li>
                                        <Link to="/nfl">
                                            <div className="dropDownItem">

                                                <div className="itemLogo">
                                                    <UilFootballAmerican/>
                                                </div>

                                                <span><h1>NFL</h1></span>
                                            </div>
                                        </Link>
                                    </li>
                                    

                                    <li>
                                        <Link to="/nba">
                                            <div className="dropDownItem">

                                                <div className="itemLogo">
                                                    <UilBasketball/>
                                                </div>

                                            <span><h1>NBA</h1></span>
                                            </div>
                                        </Link>
                                    </li>


                                    <li>
                                        <Link to="/ncaaf">
                                            <div className="dropDownItem">

                                                <div className="itemLogo">
                                                    <UilFootballAmerican/>
                                                </div>

                                                <span><h1>NCAAF</h1></span>
                                            </div>
                                        </Link>
                                    </li>


                                    <li>
                                        <Link to="/ncaam">
                                            <div className="dropDownItem">

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
                        </li>
                    </ul>
                    
                    {/*
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
                    */}

              

                    


                {/*
                <a href="/">
                    <div className="menuItem">

                        <div className="itemLogo">
                            <UilEstate/>
                        </div>

                        <span><Link to="/">Home</Link></span>
                    </div>
                </a>

                <a href="/search">
                    <div className="menuItem">

                        <div className="itemLogo">
                            <UilSearch/>
                        </div>

                        <span><h1>Search</h1></span>
                    </div>
                </a>

                <a href="/matchups">
                    <div className="menuItem">

                        <div className="itemLogo">
                            <UilPlay/>
                        </div>

                        <span><h1>Matchups</h1></span>
                    </div>
                </a>

                <a href="/stats">
                    <div className="menuItem">

                        <div className="itemLogo">
                            <UilChartBar/>
                        </div>

                        <span><h1>Stats</h1></span>
                    </div>
                </a>

                <a href="/injuries">
                    <div className="menuItem">

                        <div className="itemLogo">
                            <UilExclamationTriangle/>
                        </div>

                        <span><h1>Injury Report</h1></span>
                    </div>
                </a>

                <a href="/nfl">
                    <div className="menuItem">

                        <div className="itemLogo">
                            <UilFootballAmerican/>
                        </div>

                        <span><h1>NFL</h1></span>
                    </div>
                </a>

                <a href="/nba">
                    <div className="menuItem">

                        <div className="itemLogo">
                            <UilBasketball/>
                        </div>

                    <span><h1>NBA</h1></span>
                    </div>
                </a>

                <a href="/ncaaf">
                    <div className="menuItem">
                        <div className="itemLogo">
                            <UilFootballAmerican/>
                        </div>
                        <span><h1>NCAAF</h1></span>
                    </div>
                </a>

                <a href="/ncaam">
                    <div className="menuItem">

                        <div className="itemLogo">
                            <UilBasketball/>
                        </div>

                        <span><h1>NCAAM</h1></span>
                    </div>
                </a>
                */}



            </div>

        </div>


    )
}


export default Sidebar;