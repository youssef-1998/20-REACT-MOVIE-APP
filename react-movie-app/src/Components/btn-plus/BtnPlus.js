import React, { Component } from 'react';
import './BtnPlusStyle.css';

class BtnPlus extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }

    }

    render() {
        const { } = this.state;
        return (

            <div>
                <button>{+window.prompt("message", "défaut")}</button>
                
            </div>

        )
    }
}

export default BtnPlus