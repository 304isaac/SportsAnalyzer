import React from 'react'
import {useState, useEffect} from "react"
import axios from "axios"
import "./View.css"

function View (urlString) {

    const [team, setTeam] = useState([]);
    const [teamData, setTeamData] = useState([]);
    const [players, setPlayers] = useState([]);
    const [starters, setStarters] = useState([]);
    var path = (window.location.pathname);

    const loadTeam = async () => {
        const response = await axios.get("http://localhost:3001/api/get" + path);
        setTeam(response.data);
        
    };

    useEffect (() => {
        loadTeam([]);
    }, []);    


    const loadTeamData = async () => {
        const response = await axios.get("http://localhost:3001/api/get" + path + "/data");
        setTeamData(response.data);
    };

    useEffect (() => {
        loadTeamData();
    }, []);


    const loadPlayers = async () => {
        const response = await axios.get("http://localhost:3001/api/get" + path + "/players");
        setPlayers(response.data);
    };

    useEffect (() => {
        loadPlayers();
    }, []);


    const loadStarters = async () => {
        const response = await axios.get("http://localhost:3001/api/get" + path + "/starters");
        setStarters(response.data);
    };

    useEffect (() => {
        loadStarters();
    }, []);


        return (
            <div className="wrapper">
                <div className="infoBar">
                    {team.map((item, index) => {
                        return (
                            <div className="teamHeading">
                                <h1 className="team">{item.teamName}</h1>
                                <p classname="record">{item.W + "-" + item.L}</p>
                            </div>
                        )
                    })}

                    <div className="starters">
                            {starters.map((item, index) => {
                                return (
                                    <table>
                                        <caption>Starting 5</caption>       
                                        <tbody>
                                            <tr key={item.PG}>
                                                <th>PG</th>
                                                <td>{item.PG}</td>
                                            </tr>

                                            <tr key={item.SG}>
                                                <th>SG</th>
                                                <td>{item.SG}</td>
                                            </tr>

                                            <tr key={item.SF}>
                                                <th>SF</th>
                                                <td>{item.SF}</td>
                                            </tr>

                                            <tr key={item.PF}>
                                                <th>PF</th>
                                                <td>{item.PF}</td>
                                            </tr>

                                            <tr key={item.C}>
                                                <th>C</th>
                                                <td>{item.C}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                );
                             })}
                    </div>
                </div>

                <div className="playerStats">
                    <table>
                        <caption>Team Performers</caption>
                        <thead>
                            <tr>
                                <th>Player</th>
                                <th>Position</th>
                                <th>Played</th>
                                <th>Started</th>
                                <th>Minutes</th>
                                <th>PTS</th>
                                <th>FG%</th>
                                <th>FGA</th>
                                <th>2P%</th>
                                <th>2PA</th>
                                <th>3P%</th>
                                <th>3PA</th>
                                <th>eFG%</th>
                                <th>REB</th>
                                <th>AST</th>
                                <th>STL</th>
                                <th>BLK</th>
                                <th>TOV</th>
                                <th>PF</th>
                            </tr>
                        </thead>    

                        <tbody>
                            {players.map((item, index) => {
                                return (
                                    <tr key={item}>
                                        <td>{item.Player}</td>
                                        <td>{item.Pos}</td>
                                        <td>{item.G}</td>
                                        <td>{item.GS}</td>
                                        <td>{item.MP}</td>
                                        <td>{item.PTS}</td>
                                        <td>{item.FG_PCT}</td>
                                        <td>{item.FGA}</td>
                                        <td>{item.Two_PCT}</td>
                                        <td>{item.TwoPA}</td>
                                        <td>{item.Three_PCT}</td>
                                        <td>{item.ThreePA}</td>
                                        <td>{item.eFG_PCT}</td>
                                        <td>{item.TRB}</td>
                                        <td>{item.AST}</td>
                                        <td>{item.STL}</td>
                                        <td>{item.BLK}</td>
                                        <td>{item.TOV}</td>
                                        <td>{item.PF}</td>
                                    </tr>
                                );
                             })}
                        </tbody>
                    </table>
                </div>

                <div className="teamStats">
                
                    <div className="offense">
                    <h1>Offense</h1>
                    </div>

                    
                    <div className="defense">
                    <h1>Defense</h1>
                        
                    </div>
                </div>
            </div>
        );

}

export default View;