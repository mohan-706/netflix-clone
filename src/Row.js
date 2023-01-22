import React, { useState,useEffect } from 'react'
import './Row.css'
import axios from "./axios"

function Row({title , fetchUrl}){
    const [movies, setMovies] = useState([]);
    const base_url = "https://image.tmdb.org/t/p/original/";
    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    },[fetchUrl]);
    
console.log(movies);
    return(
        <div className='row'>
            <h1>{title}</h1>
            <div className='row_poster'>
            {movies.map(movie =>(
                <>
                <a href='https://www.youtube.com/watch?v=xvFZjo5PgG0'>
                <img className='row_posters' src={`${base_url}${movie.poster_path}`}/>
                <jj>bhj</jj>
                </a>
                
                </>
                
                
            ))}
           
            </div>
        </div>
    );
}

export default Row;