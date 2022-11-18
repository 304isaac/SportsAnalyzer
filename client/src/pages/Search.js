import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import axios from 'axios';
import SearchBar from '../components/SearchBar';

export default function Search () {

    const [data, setData] = useState([]);

    const loadData = async () => {
        const response = await axios.get("http://localhost:3001/api/get/nbateams")
        setData(response.data);
    };

    useEffect(() => {
        loadData();
    }, []);

    return (
        <div className="wrapper">
            <h1>Search</h1>

            <div className="search">
                <SearchBar placeholder="Search..." data={data} />
            </div>
        </div>
    )
}