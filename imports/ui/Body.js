import React, { Component } from 'react';
import Board from './Board'
import Button from './Button'
import { Games } from './../api/games'
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import GameList from './GameList';
import _ from 'underscore';

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedGameId: null
    };
  }

  createNewGame() {
    Meteor.call('games.insert');
  }

  selectGame(id){
    this.state.selectedGameId = id;
  }

  selectedGame(){
    return _.filter(this.props.games, (game) => game._id === this.state.selectedGameId)[0];
  }

  render() {

      return (
          <div className="body">
            { this.props.currentUser ?
            <Button buttonText="Create New Game" onClickFn={this.createNewGame} />
                : ""
            }
            <GameList games={this.props.games} selectGame={this.selectGame.bind(this)} />
            <Board game={this.selectedGame()}/>
          </div>
      );

  }
};

export default withTracker(() => {
  return {
    games: Games.find({}).fetch(),
    currentUser: Meteor.user(),
  };
})(Body);