import { useState } from "react";
import searchIcon from './search (1).svg'

export default function SearchBar({setTerm}) {
    const [searchTerm, setSearchTerm] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        setTerm(searchTerm);
        setSearchTerm('')
      };
    return(
        <div className="searchfixed">
            <div className="header">
            <div className="logo">
                <h4>FAYVIN</h4>
            </div>
            <form className="searchBar" onSubmit={handleSubmit}>
                <input type="text"  placeholder="search images e.g cat" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                <button className="search-lg">Search</button>
                <button className="search-md"><img src={searchIcon} alt="search" /></button>
            </form>
            </div>
        </div>
    )
}