import React from 'react'

const MovieReviews = ({ reviews }) => {
    return (
        <div className="review-list">
        { Object.values(reviews).map(review=> {
            return (
                <div key={review.display_title}>
                    <div className="review">
                        <h3><a href={review.link.url}>{review.display_title}</a></h3>
                        <h5>{review.headline} - {review.byline}</h5>
                        <p>{review.summary_short}</p>
                    </div>
                    <div><br/></div>
                </div>
            )
        })
        }
        </div>
    )
}

export default MovieReviews
