import React from 'react';
import Rating from '../Search/Rating';

const MovieCard = (props) => {
  const {movie = {}} = props
  const {
      title = '',
      year = '',
      image = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png',
      rating = 0
  } = movie
  return (
      <div className="movie-card">
          <div className="movie-rating"><Rating count={rating} /></div>
          <div
              className="movie-image"
              style={{
              backgroundImage:
                  `url('${image}')`
              }}
          />
          <div className="movie-description">{title} - {year}</div>
          </div>
  )
}

export default MovieCard;