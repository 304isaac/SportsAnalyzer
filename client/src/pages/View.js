import React from 'react'
import {useState, useEffect} from "react"
import axios from "axios"
import "./nba.css"

function View (urlString) {

    urlString = window.location.pathname;
    const [data, setData] = useState([]);

    var path = (urlString);

    const loadData = async () => {
        const response = await axios.get("http://localhost:3001/api/get" + path);
        setData(response.data);
    };

    useEffect (() => {
        loadData();
    }, []);

    console.log(data);
        return (
            <div>
                {data.map((item, index) => {
                    return (
                        <div>
                            <p>{item.Team}</p>
                            <p>{item.Points}</p>
                        </div>
                    )
                })}
            </div>
        );

}

export default View;