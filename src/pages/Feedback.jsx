import React, { Component } from 'react';
import BtnHanking from '../components/BtnHanking';
import Header from '../components/Header';
import Message from '../components/Message';
import PlayAgain from '../components/PlayAgain';
import Score from '../components/Score';

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
