import React, { useState } from 'react'
import './SearchBar.css'
import {UilSearch, UilMultiply} from "@iconscout/react-unicons";
import {Link} from 'react-router-dom'

function SearchBar({ placeholder, data }) {

    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");
    
    const handleFilter = (event) => {
        const searchWord = event.target.value;

        setWordEntered(searchWord);

        const newFilter = data.filter((value) => {
            return value.Team.toLowerCase().includes(searchWord.toLowerCase());
        });
        setFilteredData(newFilter);
    };

    const clearInput = () => {
        setFilteredData([]);
        setWordEntered("");
    }

    return (
        <div className="search">
            <div className="searchInputs">
                <input type="text" value={wordEntered} placeholder={placeholder} data={data} onChange={handleFilter}/>
                <div className="searchIcon">
                    {filteredData.length === 0 ? (<UilSearch />) : (<UilMultiply id="clearSearch" onClick={clearInput}/>)}
                </div>
            </div>
            
            {(filteredData.length !== 0) && (
                <div className="dataResult">
                    {filteredData.map((item, index) => {
                        return (
                            <Link to={"/view/" + item.Team} className="dataItem" value={item.Team} ><p>{item.Team}</p></Link>
                        );
                    })}
                </div>
            )}
        </div>
    );  
}

export default SearchBar;