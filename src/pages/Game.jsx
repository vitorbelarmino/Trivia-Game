import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchAPITrivia } from '../server';

class Game extends Component {
  componentDidMount() {
    const { token } = this.props;
    console.log(token);
    fetchAPITrivia(token);
  }

  render() {
    return (
      <>
        <p data-testid="question-category">Categoria</p>
        <p data-testid="question-text">Texto da Pergunta</p>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.token,
});

Game.propTypes = {
  token: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps)(Game);
