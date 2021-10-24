import React from 'react';
import { useState,useEffect } from 'react'
import Details from './Details';

const TitleDetails = (props) => {
    const name = props.match.params.name;
    const [titleDetails, setTitleDetails] = useState([]);
    const getMovieDetails = async () => {
        const url = `https://localhost:44354/api/titles/${name}`;
        const response = await fetch(url)
        const responseJson = await response.json();
        if (responseJson){
            setTitleDetails(responseJson);
          }
    }   
    useEffect(()=>{
        getMovieDetails();
      },[]);
    return (
        <>
        <div>
        <Details results = {titleDetails}/>
        </div>
    </>
    );
  }
export default TitleDetails;