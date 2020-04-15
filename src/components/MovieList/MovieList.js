import React from 'react';
import MovieCard from './MovieCard';
import AddMovie from './AddMovie'


const MovieList = ({movies = [], onAddMovie = () => {}}) => (
    <div className="movie-list">
        {
            movies.map(el => <MovieCard key={el.id} movie={el} />)
        }
        <AddMovie newMovie={onAddMovie} />
    </div>
)
export default MovieList;