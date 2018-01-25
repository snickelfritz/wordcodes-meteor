import React, { Component } from 'react';
import BoardRow from './BoardRow'

export default class Board extends Component {

    render() {
        var wordList = this.props.game ? this.props.game.words : []
        return (

            <table className="game-board">
              <thead></thead>
              {this.props.game ? <tbody>
                    <BoardRow wordList={wordList.slice(0, 5)}/>
                    <BoardRow wordList={wordList.slice(5, 10)}/>
                    <BoardRow wordList={wordList.slice(10, 15)}/>
                    <BoardRow wordList={wordList.slice(15, 20)}/>
                    <BoardRow wordList={wordList.slice(20)}/>
                  </tbody> : <tbody></tbody>}
            </table>

        );

    }
};