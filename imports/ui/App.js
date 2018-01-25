import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Games } from '../api/games.js';
import AccountsUIWrapper from './AccountsUIWrapper.js';
import Header from './Header'
import Body from './Body'

class App extends Component {
    render() {
        return (
            <div>
              <Header title="WordCodes"/>
              <AccountsUIWrapper />
              <Body games={this.props.games}/>
            </div>
        );
    }
};


export default withTracker(() => {
  return {
    currentUser: Meteor.user(),
  };
})(App);