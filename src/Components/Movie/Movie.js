import React from 'react';
import './Movie.css';


function Movie(props) {
    const title = props.movie.title;
    const year = props.movie.year;

    function addMovie() {
        let movie = props.movie;
        props.onAdd(movie);
    }

    function removeMovie() {
        let movie = props.movie;
        props.onRemove(movie);
    }

    function renderAction() {
        if (props.isRemoval) {
            return <button className="Movie-action" onClick={removeMovie}>Remove</button>;
        } else {
            return <button disabled={props.disabled} className="Movie-action" onClick={addMovie}>Nominate</button>;
        }
    }

    return(
        <div className="Movie">
            <div className="movie-results">
                <ul>
                    <li>{title} ({year})</li>
                </ul>
                {/* {renderAction()} */}
                {
                    props.isRemoval ? (<button className="Movie-action" onClick={removeMovie}>Remove</button>) : (<button disabled={props.disabled} className="Movie-action" onClick={addMovie}>Nominate</button>)
                }
            </div>
        </div>
    );
};

export default Movie;