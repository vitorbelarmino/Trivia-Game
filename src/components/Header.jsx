import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import '../styles/Header.css';

class Header extends React.Component {
  render() {
    const { name, score, image } = this.props;
    return (
      <header className="container-header">
        <img
          src={ image }
          alt="imagem player"
          data-testid="header-profile-picture"
          className="profile-picture"
        />
        <div className="container-infos">
          <p data-testid="header-player-name" className="player-name">
            Jogador:
            {' '}
            { name }
          </p>
          <p data-testid="header-score" className="score">
            { score }
            {' '}
            pontos
          </p>

        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  gravatarEmail: state.player.gravatarEmail,
  name: state.player.name,
  score: state.player.score,
  image: state.player.image,
});

Header.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, null)(Header);
