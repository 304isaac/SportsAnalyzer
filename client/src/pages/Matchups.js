import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Matchups.css';

export default function Matchups() {
    
    Axios.defaults.withCredentials = true;
    const [role, setRole] = useState("");
    const [matchups, setMatchups] = useState([]);
    const [show, toggleShow] = useState();
    var [pick, setPick] = useState("");
    var [matchNum, setMatchNum] = useState("");

    const loadMatchups = async () => {
        const response = await Axios.get("http://localhost:3001/api/get/matchups")
        setMatchups(response.data);
    };

    useEffect (() => {
        loadMatchups();
    }, []);

    useEffect(() => {
        Axios.get("http://localhost:3001/login").then((response) => {
            if(response.data.loggedIn === true){
                setRole(response.data.user[0].role)
                if(response.data.user[0].role === "admin"){
                    toggleShow(true);
                }else{
                    toggleShow(false);
                }
            }
        })
    });


    const pickTeam = () => {
        Axios.post('http://localhost:3001/pick',
            {
            matchNum: matchNum,
            pick: pick,
            });
    };


    return (
        <div className="wrapper">
            <h1>Matchups</h1>
            {role}


            <div className="matchups">

                <h1 className="home">Home</h1>
                <h1 className="away">Away</h1>

                {matchups.map((item, index) => {
                    const matchNumReg = item.matchNum;
                    const homeReg = item.Home;
                    const awayReg = item.Away;

                    return (
                        <div className="matchupCard">
                            <div className="homeTeam"><h1>{item.Home}</h1></div>
                                <div className={`pickButton ${show? "active" : "inactive"}`}>
                                    <button onClick={event => {
                                        setPick(homeReg);
                                        setMatchNum(matchNumReg);
                                        pickTeam();
                                    }}>
                                        Pick
                                    </button>
                                </div>

                            <div className="middle">
                                <h1><div className="dateTime">{item.fdate.substring(0,9)} {item.pick}<br/><div className="time">{item.fdate.substring(9, item.fdate.length)}</div></div>@<br/><div className="location">{item.location}</div></h1>
                            </div>

                                <div className={`pickButton ${show? "active" : "inactive"}`}>
                                    <button onClick={event => {
                                        setPick(awayReg);
                                        setMatchNum(matchNumReg);
                                        pickTeam();
                                        }}>
                                        Pick
                                    </button>
                                </div>

                            <div className="awayTeam"><h1>{item.Away}</h1></div>
                        </div>
                    );
                })}
            </div>
        </div>
    );

}