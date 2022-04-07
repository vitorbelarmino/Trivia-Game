import React, { Component } from 'react';
import Header from '../components/Header';
import Message from '../components/Message';
import PlayAgain from '../components/PlayAgain';
import Score from '../components/Score';
import BtnHanking from '../components/BtnHanking';

class Feedback extends Component {
  render() {
    return (
      <div>
        <Header />
        <Message />
        <Score />
        <PlayAgain />
        <BtnHanking />
      </div>
    );
  }
}

export default Feedback;
