import React from 'react';
import ReactDOM from 'react-dom';

import LatestMovieReviewsContainer from './components/LatestMovieReviewsContainer';
import SearchableMovieReviewsContainer from './components/SearchableMovieReviewsContainer';

ReactDOM.render(
    <div className="app">
        <div><h1>Search Reviews</h1></div>
        <SearchableMovieReviewsContainer/>
        <div><br/></div>
        <div><hr/></div>
        <div><hr/></div>
        <div><br/></div>
        <div><h1>Latest Movie Reviews</h1></div>
        <LatestMovieReviewsContainer/>
    </div>, document.getElementById('root')
)
