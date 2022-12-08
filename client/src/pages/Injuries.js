import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import './Injuries.css';

export default function Injuries () {

    const [data, setData] = useState([]);

    const loadData = async () => {
        const response = await axios.get("http://localhost:3001/api/get/injuries")
        setData(response.data);
    };

    useEffect (() => {
        loadData();
    }, []);

    return (
        <div className="wrapper">
            <h1>Injury Report</h1>

            <table className="injuries">
            <thead>
                    <tr>
                        <th>Player</th>
                        <th>Team</th>
                        <th>Updated</th>
                        <th>Description</th>
                    </tr>
                </thead>

                <tbody>
                    {data.map((item, index) => {
                        return (
                            <tr key={item}>
                                <td><b>{item.Player}</b></td>
                                <td>{item.Team}</td>
                                <td>{item.Update}</td>
                                <td className="description">{item.Description}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>   
    )
}