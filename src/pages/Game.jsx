import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Timer from '../components/Timer';
import Question from '../components/Question';
import '../styles/Game.css';

class Game extends Component {
  render() {
    const { time } = this.props;
    return (
      <>
        <Header />
        <div className="container-game">

          <main className="main-game">
            <Question />
          </main>
          <aside className="aside-game">
            {
              time && <Timer />
            }
          </aside>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  time: state.player.time,
});

Game.propTypes = {
  time: PropTypes.bool,
}.isRequired;

export default connect(mapStateToProps)(Game);
