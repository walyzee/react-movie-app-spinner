import React from 'react';
import Rating from './Rating'

const RatingSearch = ({onChange, count}) => (
    <div className="search-rating">
        <span className="search-rating-text">Minimum rating</span>
        <Rating
            count={count}
            onChangeRating={(newRating) =>{
                onChange(newRating)
            }} 
        />
    </div>
)
    
export default RatingSearch