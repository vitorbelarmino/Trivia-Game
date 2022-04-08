import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Ranking extends Component {
  render() {
    const { history } = this.props;
    const players = JSON.parse(localStorage.getItem('players'))
      .sort((a, b) => b.score - a.score);
    return (
      <div>
        <h1 data-testid="ranking-title"> Ranking</h1>
        {players.map((ele, index) => (
          <div key={ index }>
            <p data-testid={ `player-name-${index}` }>{ele.name}</p>
            <p data-testid={ `player-score-${ele.score}` }>{ele.score}</p>
          </div>
        ))}
        <button
          type="button"
          data-testid="btn-go-home"
          onClick={ () => history.push('/') }
        >
          Home

        </button>
      </div>
    );
  }
}

Ranking.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(Ranking);
