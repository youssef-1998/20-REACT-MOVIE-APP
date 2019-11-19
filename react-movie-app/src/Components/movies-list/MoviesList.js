import React, { Component } from 'react';
import './MoviesListStyle.css';

import MoviesCard from '../movies-card/MoviesCard'

class MoviesList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }

    }

    render() {
        const {x} = this.props;
        return (

            <div >
                {x.map(el => <MoviesCard movie={el} />)}
                
            </div>
            
        )
    }
}

export default MoviesList