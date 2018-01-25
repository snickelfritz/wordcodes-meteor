import React, { Component } from 'react';

export default class Button extends Component {
    render() {
        var buttonText = this.props.buttonText;
        var onClickFn = this.props.onClickFn;

        return (
            <button onClick={onClickFn}>{buttonText}</button>
        );
    }
};
