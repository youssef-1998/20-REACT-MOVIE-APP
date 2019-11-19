import React, { Component } from 'react';
import './StarFilterStyle.css';

import Rating from '../rating/Rating'

class StarFilter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }

    }

    render() {
        return (
            <div>
                <p className="nb-favoris">Minimum rating</p>
                <Rating rating={this.props.rating} ratingStars={stars => this.props.rateIt(stars)}/>
            </div>
        )
    }
}

export default StarFilter