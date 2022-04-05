import React, { Component } from 'react';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      name: '',
      isDisabled: true,
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

  handleClick = () => {
    //
  }

  render() {
    const { email, name, isDisabled } = this.state;
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
      </>
    );
  }
}

export default Login;
