import React ,{ useEffect,useState }from "react";
import "./Banner.css";
import axios from "./axios";
import requests from "./Request";


function Banner(){
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1 )
                ]
            );
            return request;
        }
        fetchData();
    }, []);

    console.log(movie)

    function truncate(string,n){
        return string?.length > n ? string.substr(0,n-1) + '....' : string;
    }
    return(
        <header 
            className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")` ,
                
                backgroundPosition: "center center",
            }}
            >
                <div className="banner_content">
                    <h1 className="banner_title">{movie?.title || movie?.name || movie?.original_name }</h1>
                    <div className="banner_buttons">
                        <a href="https://www.youtube.com/watch?v=xvFZjo5PgG0">
                        <button className="banner_button_play">Play</button>
                        </a>
                        <button className="banner_button_list">My List</button>
                    </div>
                    <h1 className="banner_description"> {truncate(movie?.overview ,200)} </h1>

                </div>
                <div className="banner_fade"/>
            </header>
    );
}

export default Banner;