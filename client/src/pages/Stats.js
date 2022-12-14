import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import axios from 'axios';
import './stats.css'
import {Link} from 'react-router-dom'

const Stats = () => {

    const [team, setTeam] = useState([]);

    const loadTeam = async () => {
        const response = await axios.get("http://localhost:3001/api/get/teams")
        setTeam(response.data);
    };

    useEffect (() => {
        loadData();
    }, []);
    
    const [data, setData] = useState([]);

    const loadData = async () => {
        const response = await axios.get("http://localhost:3001/api/get/nbateams")
        setData(response.data);
    };

    useEffect (() => {
        loadData();
    }, []);

    return (
        <div className="wrapper">
            <table className="dataTable">
                <caption>Total Running NBA Team Stats</caption>
                <thead>
                    <tr>
                        <th>Team</th>
                        <th>Games</th>
                        <th>Points</th>
                        <th>Minutes</th>
                        <th>FGM</th>
                        <th>FGA</th>
                        <th>FG%</th>
                        <th>3PA</th>
                        <th>3P%</th>
                        <th>2PA</th>
                        <th>2P%</th>
                        <th>FTA</th>
                        <th>FT%</th>
                        <th>Reb.</th>
                        <th>Assists</th>
                        <th>Steals</th>
                        <th>Blocks</th>
                        <th>TOs</th>
                        <th>Fouls</th>
                    </tr>
                </thead>

                <tbody>        
                    {data.map((item, index) => {

                        return (
                            <tr key={item}>
                                <td className="teamName"><Link to={"/view/" + item.Team}><b>{item.Team}</b></Link></td>
                                <td>{item.gamesPlayed}</td>
                                <td>{item.Points}</td>
                                <td>{item.minutesPlayed}</td>
                                <td>{item.FGM}</td>
                                <td>{item.FGA}</td>
                                <td>{Math.round(item.FG_PCT*100) + "%"}</td>
                                <td>{item.ThreePA}</td>
                                <td>{Math.round(item.Three_PCT*100) + "%"}</td>
                                <td>{item.TwoPA}</td>
                                <td>{Math.round(item.Two_PCT*100) + "%"}</td>
                                <td>{item.FTA}</td>
                                <td>{Math.round(item.FT_PCT*100) + "%"}</td>
                                <td>{item.tRebounds}</td>
                                <td>{item.Assists}</td>
                                <td>{item.Steals}</td>
                                <td>{item.Blocks}</td>
                                <td>{item.Turnovers}</td>
                                <td>{item.Fouls}</td>   
                            </tr>
                        )
                        
                    })}
                </tbody>
            </table>

            
        </div>
    )
}

export default Stats;