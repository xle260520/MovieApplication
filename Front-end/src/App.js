import React, {useEffect, useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TitleList from './Component/TitleList';
import SearchBox from './Component/SearchBox';


const App = () => {
  const [titles, setTitles] = useState([]);
  const [searchValue,setSearchValue] = useState('');
  
  const getTitleRequest = async() => {
  const url = `https://localhost:44354/api/titles/${searchValue}`;
  const response = await fetch(url);
  const responseJson = await response.json();
  if (responseJson){
    setTitles(responseJson);
  }
  } ;
  useEffect(()=>{
    getTitleRequest();
  },[searchValue]);

     return (
        <>
        <nav class="navbar navbar-dark bg-dark ">
            <a class="navbar-brand" href="/"><b>Popcorn Time</b></a>
            <img src="https://cdn1.vectorstock.com/i/1000x1000/07/30/juice-and-popcorn-for-movie-night-poster-vector-20220730.jpg" width="40" height="40" alt=""></img>
             <SearchBox searchValue={searchValue} setSearch={setSearchValue}></SearchBox>
        </nav>
        
        <div className = "title-container">
          <TitleList titles = {titles}/>
      </div>
      </>
     );
};

export default App;
