import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchAPITrivia } from '../server';
import Header from '../components/Header';
import Timer from '../components/Timer';

class Game extends Component {
  constructor() {
    super();
    this.state = {
      questions: [],
      indexOf: 0,
      hidden: true,
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

  addClass = () => {
    const { questions, indexOf } = this.state;
    const answerCorrect = questions[indexOf].correct_answer;
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach((btn) => {
      if (btn.innerText === answerCorrect) {
        btn.style.border = '3px solid rgb(6, 240, 15)';
      } else {
        btn.style.border = '3px solid rgb(255, 0, 0)';
      }
    });
    this.setState({ hidden: false });
    // if (hidden) {
    //   this.setState({ hidden: false });
    // } else {
    //   this.setState({ hidden: true });
    // }
  }

  questionsOptions = () => {
    const { questions, indexOf } = this.state;
    const NUMB_HALF = 0.5;
    const options = [questions[indexOf]
      .correct_answer, ...questions[indexOf]
      .incorrect_answers];
    options.sort(() => Math.random() - NUMB_HALF); // ref.: https://flaviocopes.com/how-to-shuffle-array-javascript/
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

  render() {
    const { questions, indexOf, hidden } = this.state;
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
                  {questions[indexOf].category}
                </p>
                <p
                  data-testid="question-text"
                >
                  {questions[indexOf].question}
                </p>
                { this.questionsOptions() }
              </div>
            )
          }
        </div>

        <button
          data-testid="btn-next"
          name="next"
          id="next"
          type="button"
          hidden={ hidden }
          onClick={ () => {
            this.setState((prevState) => ({
              hidden: true,
              indexOf: prevState.indexOf + 1,
            }));
          } }
        >
          Next
        </button>
        <Timer />
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
