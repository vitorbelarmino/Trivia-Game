import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

class Message extends React.Component {
  render() {
    const { assertions } = this.props;
    const MIN_ACERTOS = 3;
    return (
      <div className="feedback-text">
        <h2 data-testid="feedback-text">
          {' '}
          { assertions >= MIN_ACERTOS ? 'Well Done!' : 'Could be better...' }
          {' '}
        </h2>
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
