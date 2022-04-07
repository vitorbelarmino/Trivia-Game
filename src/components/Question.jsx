import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchAPITrivia } from '../server';
import { saveScore } from '../actions';

class Question extends Component {
  constructor() {
    super();
    this.state = {
      questions: [],
      indexOf: 0,
      hidden: true,
      OptionsRandom: [],
    };
  }

  componentDidMount() {
    this.sendResquestAPI();
  }

  sendResquestAPI = async () => {
    const { token } = this.props;
    const { results } = await fetchAPITrivia(token);
    this.setState({ questions: results }, () => this.questionsOptions());
  }

  getScore = ({ target }, answerCorrect) => {
    const { scoreGame } = this.props;
    const { questions, indexOf } = this.state;
    const { difficulty } = questions[indexOf];
    const timer = document.getElementById('timer').innerText;
    const MIN_SCORE = 10;
    const MEDIUM = 2;
    const HARD = 3;
    let level = 1;
    if (target.name === answerCorrect) {
      if (difficulty === 'medium') {
        level = MEDIUM;
      } else if (difficulty === 'hard') {
        level = HARD;
      }
      const score = (MIN_SCORE + Number(timer) * level);
      scoreGame(score);
    }
  };

  addClass = ({ target }) => {
    const { indexOf, questions } = this.state;
    const { history } = this.props;
    const answerCorrect = questions[indexOf]?.correct_answer;
    this.getScore({ target }, answerCorrect);
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach((btn) => {
      if (btn.innerText === answerCorrect) {
        btn.style.border = '3px solid rgb(6, 240, 15)';
      } else {
        btn.style.border = '3px solid rgb(255, 0, 0)';
      }
    });
    this.setState({ hidden: false });
  }

  nextQuest = () => {
    const { indexOf } = this.state;
    const { history } = this.props;
    console.log(indexOf);
    const number = 4;
    if (indexOf === number) {
      return history.push('/feedback');
    }
    this.setState((prevState) => ({
      hidden: true,
      indexOf: prevState.indexOf + 1,
      OptionsRandom: [],
    }), () => this.questionsOptions());
  }

  questionsOptions = () => {
    const { indexOf, questions } = this.state;
    const NUMB_HALF = 0.5;
    const optionCorrect = (
      <button
        className="btn"
        key="4"
        type="button"
        data-testid="correct-answer"
        name={ questions[indexOf].correct_answer }
        onClick={ this.addClass }
      >
        {questions[indexOf].correct_answer}
      </button>
    );
    const optionsIcorrects = [...questions[indexOf]?.incorrect_answers]
      .map((e, index) => (
        <button
          key={ index }
          className="btn"
          type="button"
          data-testid={ `wrong-answer-${index}` }
          name={ e }
          onClick={ this.addClass }
        >
          {e}
        </button>
      ));
    const allOptions = [optionCorrect, ...optionsIcorrects]
      .sort(() => Math.random() - NUMB_HALF); // ref.: https://flaviocopes.com/how-to-shuffle-array-javascript/
    this.setState({ OptionsRandom: [...allOptions] });
  }

  render() {
    const { indexOf, hidden, OptionsRandom, questions } = this.state;

    return (
      <div>
        { questions.length > 0 && (
          <div>
            <p
              data-testid="question-category"
            >
              {questions[indexOf]?.category}
            </p>
            <p
              data-testid="question-text"
            >
              {questions[indexOf]?.question}
            </p>
            <div data-testid="answer-options">
              {OptionsRandom.map((ele) => ele)}
            </div>
          </div>
        )}
        <button
          data-testid="btn-next"
          name="next"
          id="next"
          type="button"
          hidden={ hidden }
          onClick={ this.nextQuest }
        >
          Next
        </button>
      </div>
    );
  }
}

Question.propTypes = {
  token: PropTypes.string,
  scoreGame: PropTypes.func,
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;

const mapStateToProps = (state) => ({
  token: state.token,
});

const mapDispatchToProps = (dispatch) => ({
  scoreGame: (score) => dispatch(saveScore(score)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Question));
