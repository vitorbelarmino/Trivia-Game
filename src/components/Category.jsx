import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Category extends Component {
  render() {
    const { question, index } = this.props;
    return (
      <p
        data-testid="question-category"
      >
        {question[index]?.category}
      </p>
    );
  }
}

const mapStateToProps = (state) => ({
  question: state.player.questions,
  index: state.player.IndexOf,
});

Category.propTypes = {
  question: PropTypes.arrayOf(PropTypes.object),
  index: PropTypes.number,
}.isRequired;

export default connect(mapStateToProps)(Category);
