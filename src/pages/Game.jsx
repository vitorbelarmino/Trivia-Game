import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchAPITrivia } from '../server';
import Header from '../components/Header';

class Game extends Component {
  constructor() {
    super();
    this.state = {
      questions: [],
    };
  }

  componentDidMount() {
    this.sendResquestAPI();
  }

  sendResquestAPI = async () => {
    const { token } = this.props;
    const { results } = await fetchAPITrivia(token);
    this.setState({ questions: results });
  }

  questionsOptions = () => {
    const { questions } = this.state;
    const NUMB_HALF = 0.5;
    const options = [questions[0].correct_answer, ...questions[0].incorrect_answers];
    options.sort(() => Math.random() - NUMB_HALF); // ref.: https://flaviocopes.com/how-to-shuffle-array-javascript/
    return (
      <div data-testid="answer-options">
        {
          options.map((opt, index) => {
            if (opt === questions[0].correct_answer) {
              return (
                <button
                  key={ opt }
                  type="button"
                  data-testid="correct-answer"
                >
                  {opt}
                </button>
              );
            }
            return (
              <button
                key={ opt }
                type="button"
                data-testid={ `wrong-answer-${index}` }
              >
                {opt}
              </button>
            );
          })
        }
      </div>
    );
  }

  render() {
    const { questions } = this.state;
    return (
      <>
        <Header />
        <div>
          {
            questions.length > 0 && (
              <div>
                <p
                  data-testid="question-category"
                >
                  {questions[0].category}
                </p>
                <p
                  data-testid="question-text"
                >
                  {questions[0].question}
                </p>
                { this.questionsOptions() }
              </div>
            )
          }
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.token,
});

Game.propTypes = {
  token: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps)(Game);
