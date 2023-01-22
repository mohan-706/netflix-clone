import React from 'react'
import './HomeScreen.css'
import Nav from './Nav'
import Banner from './Banner'
import Row from './Row'
import requests from './Request'
function HomeScreen() {
    return(
        <div className="homeScreen">
            <Nav/>
            <Banner/>
            <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
            <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals}/>
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
            <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
        </div>
    );
}

export default HomeScreen;

