import React from 'react';
import Button from 'react-bootstrap/Button';

const Details = (props) => {
  
    return (
        
     
        <>
         <nav class="navbar navbar-dark bg-dark ">
                <a class="navbar-brand" href="/">
                    <img src="https://cdn1.vectorstock.com/i/1000x1000/07/30/juice-and-popcorn-for-movie-night-poster-vector-20220730.jpg" width="40" height="40" alt="" class="d-inline-block align-top"></img>
                   <b>Popcorn Time</b></a>
        </nav>
            {props.results.map((title) => (
                <section className="detail">
                    <div className = "content">
                        <img className="detailImage" src = {title.poster} alt='title'  width="400" height="550"></img>
                    
                        <div className="plot">
                            <h2 className="name">{title.titleName} <span>({title.releaseYear})</span></h2>
                            <p>{title.storyLines[0].description}</p>
                            
                            {title.awards.length > 0 && <h5 >Awards</h5> }
                    
                            {title.awards.map((award) => (

                                <div className="award"> 
                                    {award.awardWon == true && <div>{award.award1} ({award.awardYear}) awarded by {award.awardCompany}</div>}
                                </div>
                            ))}

                            <div class="col-md-12 text-center">
                            <Button className="backButton" href="/" variant="light">Back</Button>{' '}

                    </div>
                
                    
                        </div>

                    </div>

                   

                 

             
              
      
                </section>
              
              
          
            
            ))}
        </>
    );
                                   
};

   

export default Details;