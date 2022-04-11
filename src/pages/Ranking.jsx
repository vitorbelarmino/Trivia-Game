import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import '../styles/Ranking.css';

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
      <div className="container-ranking-page">
        <h1 data-testid="ranking-title"> Ranking</h1>
        <div className="button-content">
          <button
            type="button"
            data-testid="btn-go-home"
            className="button-ranking"
            onClick={ () => history.push('/') }
          >
            Home

          </button>
          <button
            type="button"
            className="button-ranking"
            onClick={ () => {
              localStorage.removeItem('players');
              this.setState({ players: 0 });
            } }
          >
            Limpar Ranking

          </button>
        </div>
        <div className="ranking-main">
          {players.length > 0 ? (
            players.map((ele, index) => (
              <div key={ index } className="ranking-card">
                <h2>{`${index + 1}º Lugar`}</h2>
                <div className="ranking-image">
                  <img src={ ele.image } alt="" />
                </div>
                <div className="ranking-infos">
                  <p data-testid={ `player-name-${index}` }>{ele.name}</p>
                  <p data-testid={ `player-score-${ele.score}` }>{ele.score}</p>

                </div>
              </div>
            ))
          ) : <h3>Ranking Vazio</h3> }
        </div>

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
