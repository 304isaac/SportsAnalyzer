import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import axios from 'axios';
import './nba.css'
import {Link} from 'react-router-dom'

function Nba() {

    const [west, setWest] = useState([]);

    const loadWest = async () => {
        const response = await axios.get("http://localhost:3001/api/get/west/standings")
        setWest(response.data);
    };

    useEffect (() => {
        loadWest();
    }, []);

    const [east, setEast] = useState([]);

    const loadEast = async () => {
        const response = await axios.get("http://localhost:3001/api/get/east/standings")
        setEast(response.data);
    }
    
    useEffect(() => {
        loadEast();
    }, []);

    return (
        <div className="wrapper">
            <h1>NBA</h1>

            <div className="standings">
                <h1>Current Standings</h1>

                <div className="container">
                    <table className="westStandings">
                        <caption>West Standings</caption>
                        <thead>
                            <tr>
                                <th>Rank</th>
                                <th>Team</th>
                                <th>W</th>
                                <th>L</th>
                                <th>Win PCT</th>
                            </tr>
                        </thead>

                        <tbody>
                        {west.map((item, index) => {
                            return (
                            <tr key={item.index}>
                                <th scope="row">{index+1}</th>
                                <td className="teamName"><Link to={"/view/" + item.Team}>{item.Team}</Link></td>
                                <td>{item.W}</td>
                                <td>{item.L}</td>
                                <td>{item.winPCT}</td>
                            </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </div>
                
                <div className="container">
                <table className="eastStandings">
                        <caption>East Standings</caption>
                        <thead>
                            <tr>
                                <th>Rank</th>
                                <th>Team</th>
                                <th>W</th>
                                <th>L</th>
                                <th>Win PCT</th>
                            </tr>
                        </thead>

                        <tbody>
                        {east.map((item, index) => {
                            return (
                            <tr key={item.index}>
                                <th scope="row">{index+1}</th>
                                <td className="teamName"><Link to={"/view/" + item.Team}>{item.Team}</Link></td>
                                <td>{item.W}</td>
                                <td>{item.L}</td>
                                <td>{item.winPCT}</td>
                            </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default Nba;