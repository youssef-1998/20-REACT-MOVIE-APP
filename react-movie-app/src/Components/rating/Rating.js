import React, { Component } from 'react';
import './RatingStyle.css';

class Rating extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }

    }

    render() {
        const { } = this.state;
        return (

            <div className="favoris">
                <i className="fas fa-star text-primary"></i>
                <i className="fas fa-star text-primary"></i>
                <i className="fas fa-star text-primary"></i>
                <i className="fas fa-star text-primary"></i>
                <i className="fas fa-star text-primary"></i>
            </div>

        )
    }
}

export default Rating