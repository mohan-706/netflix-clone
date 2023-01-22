import React from 'react'
import Row from './Row'
import requests from './Request'

function Series(){
    return(
        
        <div>
            
            <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals}/>
            <Row title="Animation" fetchUrl={requests.fetchAnimationSeries}/>
            <Row title="Comedy" fetchUrl={requests.fetchComedySeries}/>
            <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
            <Row title="Action & Adventure" fetchUrl={requests.fetchActionSeries}/>
            <Row title="Sic fi & Fantasy" fetchUrl={requests.fetchScifiSeries}/>
            <Row title="Crime" fetchUrl={requests.fetchCrimeSeries}/>
            <Row title="Family" fetchUrl={requests.fetchFamilySeries}/>
        </div>
    )
}
export default Series;