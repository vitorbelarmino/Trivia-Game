import React, { Component } from 'react';
import Header from '../components/Header';
import Message from '../components/Message';
import PlayAgain from '../components/PlayAgain';
import Score from '../components/Score';
import BtnHanking from '../components/BtnHanking';
import '../styles/Feedback.css';

class Feedback extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="form-container">

          <main className="main-feedback">
            <Message />
            <Score />
          </main>
          <div className="feedback-btns">
            <PlayAgain />
            <BtnHanking />
          </div>

        </div>
      </>
    );
  }
}

export default Feedback;
