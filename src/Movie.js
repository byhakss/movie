import React from "react";
import PropTypes from "prop-types";
import "./Movie.css"

function Movie({id, year, title, summary, genres, large_cover_image}) {
    return (
        <div id={"items-"+id} className="Movie">
            <div className="Movie__Column">
                <img className="Movie__Poster" src={large_cover_image} title={title} alt={title} />
            </div>
            
            <div className="Movie__Column">
                <h1>{title}</h1>
                <div className="Movie__Genres">{genres.map((genre, index)=> <span key={index} className="Movie__Genre">{genre}</span>)}</div>
                <h5>{year}</h5>
                <p>{summary.slice(0,180)}...</p>
                
            </div>
        </div>
    )
}

Movie.protoType = {
    id : PropTypes.number.isRequired,
    year : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    large_cover_image : PropTypes.number.isRequired,
}

export default Movie;