// Code MovieReviews Here
import React from 'react'

const MovieReview = ( {reviews} ) => {
    return (
        <div className="review-list">
            {
                reviews.map(review => {
                    return <div key={review.display_title} className="review">{review.display_title}</div>
                })
            }
        </div>
    )
}

export default MovieReview