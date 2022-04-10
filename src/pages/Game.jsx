import React, { Component } from 'react';
import Header from '../components/Header';
import Timer from '../components/Timer';
import Question from '../components/Question';
import '../styles/Game.css';

class Game extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="container-game">

          <main className="main-game">
            <Question />
          </main>
          <aside className="aside-game">
            <Timer />
          </aside>
        </div>
      </>
    );
  }
}

export default Game;
