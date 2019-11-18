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
        const { } = this.state;
        return (
            <div>
                <p className="nb-favoris">Minimum rating</p>
                <Rating />
            </div>
        )
    }
}

export default StarFilter