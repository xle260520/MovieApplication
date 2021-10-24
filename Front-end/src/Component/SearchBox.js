import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const SearchBox = (props) => {
    return (
        <form class="form-inline ">
             <input 
                class="form-control mr-sm-2"
                placeholder="Search Movie..." 
                value={props.value}
                onChange = {(event) => props.setSearch(event.target.value)}
                
            ></input>
        </form>
       
    )
}

export default SearchBox;