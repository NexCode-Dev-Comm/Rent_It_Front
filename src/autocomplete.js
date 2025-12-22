import { useState } from "react";

const Autocomplete = ({data})=>{
    const [filtered, setFiltered] = useState([]);
    const [search, setSearch] = useState("");
    const Filter = (value) => {
        if (value.length) {
            const results = data.filter(item =>
            item.toLowerCase().includes(value.toLowerCase())
            );
            setFiltered(results);
            setSearch(value); 
        } else {
            setFiltered([]);
            setSearch(value); 
        }

    };
    const ChangeSearch = (setTo) => { 
        setSearch(setTo); 
        setFiltered([]);
    }; 
    return( 
        <div id="search">
            <input value={search} onChange={(e) => Filter(e.target.value)}/>
            <ul>
                {filtered.map((filtered, index) => (
                    <li key={index} onClick={() => ChangeSearch(filtered)} >{filtered}</li>
                ))}
            </ul>
        </div>


    );

};
export default Autocomplete;
