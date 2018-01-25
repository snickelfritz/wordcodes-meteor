import React, { Component } from 'react';
import Game from './Game'

export default class GameList extends Component {
  renderGames() {
    return this.props.games.map((game) => (
        <Game key={game._id} game={game} selectGame={this.props.selectGame}/>
    ));
  }
  render() {
      return (
          <div className="game-list">
            {this.renderGames()}
          </div>
      );
  }
};