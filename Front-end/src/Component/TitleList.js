import React from 'react';
import { Link } from 'react-router-dom';

const TitleList = (props) => {

     
    return (
        
        <>
            {props.titles.map((title) => (
              
            <div className='title'>
                <img src = {title.poster} alt='title'  width="300" height="400"></img>
                <div className="titleInfo">
                    <h4>{title.titleName}</h4>
                    <span>{title.releaseYear}</span>
                </div>

                <div className="title-over">
                    <h5>Overview:</h5>
                    <p className="storyLine">{title.storyLines[0].description}</p>
                    <Link to={`/details/${title.titleName}`} style={{ color:'black' }}>More info</Link>
                    
                </div>
               
                
            </div>
            
            ))}
        </>
    );
                                   
};

   

export default TitleList;