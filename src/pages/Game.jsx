import React, { Component } from 'react';
import Header from '../components/Header';
import Timer from '../components/Timer';
import Question from '../components/Question';

class Game extends Component {
  render() {
    return (
      <>
        <Header />
        <Question />
        <Timer />
      </>
    );
  }
}

export default Game;
