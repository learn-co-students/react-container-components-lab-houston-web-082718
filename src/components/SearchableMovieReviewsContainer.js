import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;


// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {

    constructor() {
        super()
        this.state = {
            reviews: [],
            searchTerm: ''
        }
    }

    handleChange = (e) => {
        this.setState({searchTerm: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch(URL + this.state.searchTerm)
        .then(response => response.json())
        .then(json => this.setState({reviews: json.results}))
    }
    
    render() {
        return (
        <div className="searchable-movie-reviews">
            <h3>Search Movie Reviews
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange}/>
                    <button>Search</button>
                </form>
            </h3>
            {this.state.reviews.length !== 0 ? (<MovieReviews reviews={this.state.reviews}/>) : null}
        </div>
        )
    }

}

export default SearchableMovieReviewsContainer