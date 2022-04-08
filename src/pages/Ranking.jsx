import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Ranking extends Component {
  constructor() {
    super();
    this.state = {
      players: [],
    };
  }

  componentDidMount() {
    this.getRanking();
  }

  getRanking = () => {
    const players = JSON.parse(localStorage.getItem('players'));
    if (players === null) {
      this.setState({ players: [] });
    } else {
      const playerOrder = players.sort((a, b) => b.score - a.score);
      this.setState({ players: playerOrder });
    }
  }

  render() {
    const { history } = this.props;
    const { players } = this.state;
    return (
      <div>
        <h1 data-testid="ranking-title"> Ranking</h1>
        {players.length > 0 ? (
          players.map((ele, index) => (
            <div key={ index }>
              <p data-testid={ `player-name-${index}` }>{ele.name}</p>
              <p data-testid={ `player-score-${ele.score}` }>{ele.score}</p>
            </div>
          ))
        ) : <h3>Raking Vazio</h3> }

        <button
          type="button"
          data-testid="btn-go-home"
          onClick={ () => history.push('/') }
        >
          Home

        </button>
        <button
          type="button"
          onClick={ () => {
            localStorage.removeItem('players');
            this.setState({ players: 0 });
          } }
        >
          limpar Ranking

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
