import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

class Score extends React.Component {
  render() {
    const { assertions, score } = this.props;
    return (
      <div className="feedback-score">
        <h3 data-testid="feedback-total-question">
          { `Você acertou ${assertions} questões!` }
        </h3>
        <h3 data-testid="feedback-total-score">
          { `Um total de ${score} pontos` }
        </h3>
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
