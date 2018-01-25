import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        var title = this.props.title

        return (
            <header className="text-center">
                <h1>{title}</h1>
            </header>
        );
    }
};