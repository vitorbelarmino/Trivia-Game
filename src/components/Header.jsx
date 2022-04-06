import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import md5 from 'crypto-js/md5';

class Header extends React.Component {
  render() {
    const { gravatarEmail, name, score } = this.props;
    const gravatar = `https://www.gravatar.com/avatar/${md5(gravatarEmail).toString()}`;
    return (
      <div>
        <header>
          <p>Header</p>
          <img
            src={ gravatar }
            alt="imagem player"
            data-testid="header-profile-picture"
          />
          <p data-testid="header-player-name">{ name }</p>
          <div data-testid="header-score">{ score }</div>

        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  gravatarEmail: state.player.gravatarEmail,
  name: state.player.name,
  score: state.player.score,
});

Header.propTypes = {
  gravatarEmail: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, null)(Header);
