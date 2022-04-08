import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

class Header extends React.Component {
  render() {
    const { name, score, image } = this.props;
    return (
      <div>
        <header>
          <p>Header!</p>
          <img
            src={ image }
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
  image: state.player.image,
});

Header.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, null)(Header);
