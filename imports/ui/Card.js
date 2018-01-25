import React, { Component } from 'react';

export default class Card extends Component {
    render() {
        var cardData = this.props.cardData;

        return (
            <td className="card">{cardData}</td>
        );
    }
};