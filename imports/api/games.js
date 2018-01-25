import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import _ from 'underscore';

export const Games = new Mongo.Collection('games');

Meteor.methods({
  'games.insert'() {
    // Make sure the user is logged in before inserting a task
    if (! this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    let words = JSON.parse(Assets.getText('words.json'));
    let gameWords = [];

    let getRandomWord = () => words.splice(_.random(words.length), 1)[0];

    let startingTeam = '';
    let secondTeam = '';
    if(Math.random() < 0.5){
      startingTeam = 'red';
      secondTeam = 'blue';
    } else {
      startingTeam = 'blue';
      secondTeam = 'red';
    }

    for(let i = 0; i < 25; i++){
      let type = 'civilian';
      if(i === 0){
        type = 'assassin';
      } else if(i < 10){
        type = startingTeam;
      } else if(i < 18){
        type = secondTeam;
      }
      gameWords.push({
        word: getRandomWord(),
        type,
        guessed: false
      })
    }

    Games.insert({
      createdAt: new Date(),
      owner: this.userId,
      username: Meteor.users.findOne(this.userId).username,
      startingTeam,
      words: _.shuffle(gameWords)
    });
  }
});