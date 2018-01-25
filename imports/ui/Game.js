import React, { Component } from 'react';

export default class Game extends Component {
    render() {
        return (
            <div className="game" onClick={this.props.selectGame(this.props.game._id)}>
                <p>Game {this.props.game._id}</p>
                <p>Created at {this.props.game.createdAt.toDateString()}</p>
            </div>
        );
    }
};