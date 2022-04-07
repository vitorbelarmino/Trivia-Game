import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchAPITrivia } from '../server';
import Header from '../components/Header';
import { saveScore } from '../actions';
// import Timer from '../components/Timer';

class Game extends Component {
  constructor() {
    super();
    this.state = {
      questions: [],
      time: 30,
    };
  }

  componentDidMount() {
    this.sendResquestAPI();
    this.handleTimer();
  }

  handleTimer = () => {
    const SECOND = 1000;
    this.Timer = setInterval(() => {
      this.setState((prevState) => ({ time: prevState.time - 1 }));
    }, SECOND);
  };

  sendResquestAPI = async () => {
    const { token } = this.props;
    const { results } = await fetchAPITrivia(token);
    this.setState({ questions: results });
  }

  disableBtn = () => {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach((btn) => {
      btn.setAttribute('disabled', 'true');
    });
  }

  componentDidUpdate = () => {
    const { time } = this.state;
    const COUNT = 0;
    if (time === COUNT) {
      clearInterval(this.Timer);
      this.disableBtn();
    }
  }

  getScore = () => {
    const { questions } = this.state;
    const { scoreGame } = this.props;
    const { difficulty } = questions[0];
    const levels = [' easy', 'medium', 'hard'];
    levels.forEach((level, index) => {
      if (level === difficulty) {
        const MIN_SCORE = 10;
        const timer = document.getElementById('timer').innerText;
        const score = (MIN_SCORE + Number(timer) * (index + 1));
        scoreGame(score);
      }
    });
  }

  addClass = () => {
    const { questions } = this.state;
    const answerCorrect = questions[0].correct_answer;
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach((btn) => {
      if (btn.innerText === answerCorrect) {
        btn.style.border = '3px solid rgb(6, 240, 15)';
        this.getScore();
      } else {
        btn.style.border = '3px solid rgb(255, 0, 0)';
      }
    });
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

  render() {
    const { questions, time } = this.state;
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
        <div id="timer">
          { time }
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.token,
});

const mapDispatchToProps = (dispatch) => ({
  scoreGame: (score) => dispatch(saveScore(score)),
});

Game.propTypes = {
  token: PropTypes.string,
  scoreGame: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Game);
