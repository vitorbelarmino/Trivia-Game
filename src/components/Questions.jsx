import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Questions extends Component {
  render() {
    const { question, index } = this.props;
    return (
      <p
        data-testid="question-text"
      >
        {question[index]?.question}
      </p>
    );
  }
}

const mapStateToProps = (state) => ({
  question: state.player.questions,
  index: state.player.IndexOf,
});

Questions.propTypes = {
  question: PropTypes.arrayOf(PropTypes.object),
  index: PropTypes.number,
}.isRequired;

export default connect(mapStateToProps)(Questions);
