import React, { Component } from 'react';
import './MoviesListStyle.css';

import MoviesCard from '../movies-card/MoviesCard'

class MoviesList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }

    }

    render(props) {
        const { } = this.state;
        return (

            <div >
                <MoviesCard />
            </div>
            
        )
    }
}

export default MoviesList