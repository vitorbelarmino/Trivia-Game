import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

class Message extends React.Component {
  render() {
    const { assertions } = this.props;
    const MIN_ACERTOS = 3;
    return (
      <div>
        <p data-testid="feedback-text">
          {' '}
          { assertions >= MIN_ACERTOS ? 'Muito bem' : 'Podia ser melhor...' }
          {' '}
        </p>
      </div>
    );
  }
}

Message.propTypes = {
  assertions: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  assertions: state.player.assertions,

});

export default connect(mapStateToProps, null)(Message);
