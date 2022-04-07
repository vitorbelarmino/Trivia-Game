import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

class Score extends React.Component {
  render() {
    const { assertions, score } = this.props;
    return (
      <div>
        <p data-testid="feedback-total-question">
          {' '}
          { assertions }
          {' '}
        </p>
        <p data-testid="feedback-total-score">
          {' '}
          { score }
          {' '}
        </p>
      </div>
    );
  }
}

Score.propTypes = {
  assertions: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  assertions: state.player.assertions,
  score: state.player.score,
});

export default connect(mapStateToProps, null)(Score);
