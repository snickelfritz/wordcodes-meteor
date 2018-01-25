import React, { Component } from 'react';
import Card from './Card'

export default class BoardRow extends Component {
    render() {
        var wordListHtml = this.props.wordList.map(function(cardData) {
            return (<Card key={cardData.word} cardData={cardData.word}/>);
        });

        return (
            <tr>
                {wordListHtml}
            </tr>
        );
    }
};