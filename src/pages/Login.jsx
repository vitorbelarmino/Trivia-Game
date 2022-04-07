import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect, withRouter } from 'react-router-dom';
import { tokenAction, saveInfos } from '../actions';
import fetchToken from '../server';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      name: '',
      isDisabled: true,
      isRedirect: false,
    };
  }

  validade = () => {
    const { name, email } = this.state;
    const isNameValid = name.length > 0;
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); // ref. https://github.com/tryber/sd-019-c-live-lectures/blob/lecture/11.5/aula_extra/src/App.js
    if (isNameValid && isEmailValid) {
      this.setState({ isDisabled: false });
    } else {
      this.setState({ isDisabled: true });
    }
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value }, () => this.validade());
  }

  handleClick = async () => {
    const { email, name } = this.state;
    const { savedToken, history, playerInfos } = this.props;
    const { token } = await fetchToken();
    savedToken(token);
    playerInfos(email, name);
    history.push('/game');
  }

  redirectClick = () => {
    this.setState({ isRedirect: true });
  }

  render() {
    const { email, name, isDisabled, isRedirect } = this.state;
    return (
      <>
        <h1>Trivia</h1>
        <form>

          <label htmlFor="email">
            Email:
            <input
              id="email"
              data-testid="input-gravatar-email"
              type="text"
              name="email"
              value={ email }
              onChange={ this.handleChange }
            />
          </label>

          <label htmlFor="name">
            Nome:
            <input
              id="name"
              type="text"
              data-testid="input-player-name"
              name="name"
              value={ name }
              onChange={ this.handleChange }
            />
          </label>

          <button
            type="button"
            data-testid="btn-play"
            disabled={ isDisabled }
            onClick={ this.handleClick }
          >
            Play
          </button>
        </form>
        <button
          type="button"
          data-testid="btn-settings"
          onClick={ this.redirectClick }
        >
          Settings

        </button>
        { isRedirect && <Redirect to="/settings" /> }
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  savedToken: (token) => dispatch(tokenAction(token)),
  playerInfos: (email, name) => dispatch(saveInfos(email, name)),
});

Login.propTypes = {
  savedToken: PropTypes.func,
  playerInfos: PropTypes.func,
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;

export default withRouter(connect(null, mapDispatchToProps)(Login));
