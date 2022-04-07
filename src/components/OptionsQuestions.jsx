import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class OptionsQuestions extends Component {
  constructor() {
    super();
    this.state = {
      options: [],

    };
  }

  componentDidMount() {
    const { question, index } = this.props;
    console.log(question, index);
    if (question.length !== 0) {
      const options = [question[index].correct_answer,
        ...question[index].incorrect_answers];
      const NUMB_HALF = 0.5;
      options.sort(() => Math.random() - NUMB_HALF); // ref.: https://flaviocopes.com/how-to-shuffle-array-javascript/
      console.log(options);
      this.setState({ options });
    }
  }

  render() {
    return (
      <div data-testid="answer-options">
        {
          options.map((opt, index) => {
            if (opt === questions[indexOf].correct_answer) {
              return (
                <button
                  key={ opt }
                  className="btn"
                  type="button"
                  data-testid="correct-answer"
                  onClick={ this.addClass }
                >
                  {opt}
                </button>
              );
            }
            return (
              <button
                key={ opt }
                className="btn"
                type="button"
                data-testid={ `wrong-answer-${index}` }
                onClick={ this.addClass }
              >
                {opt}
              </button>
            );
          })
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  question: state.player.questions,
  index: state.player.IndexOf,
});

OptionsQuestions.propTypes = {
  question: PropTypes.arrayOf(PropTypes.object),
  index: PropTypes.number,
}.isRequired;

export default connect(mapStateToProps)(OptionsQuestions);
