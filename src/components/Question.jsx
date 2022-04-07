import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAPITrivia } from '../server';

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

  addClass = () => {
    const { indexOf, questions } = this.state;
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
  }

  questionsOptions = () => {
    const { indexOf, questions } = this.state;
    console.log(questions);
    console.log(indexOf);
    const NUMB_HALF = 0.5;
    const getCorrect = questions[indexOf].correct_answer;
    console.log(getCorrect);
    const optionCorrect = (
      <button
        className="btn"
        key="4"
        type="button"
        data-testid="correct-answer"
        onClick={ this.addClass }
      >
        {getCorrect}
      </button>
    );
    const optionsIcorrects = [...questions[indexOf].incorrect_answers];
    const optionsIcorrectsEle = optionsIcorrects.map((e, index) => (
      <button
        key={ index }
        className="btn"
        type="button"
        data-testid={ `wrong-answer-${index}` }
        onClick={ this.addClass }
      >
        {e}
      </button>
    ));
    const allOptions = [optionCorrect, ...optionsIcorrectsEle]
      .sort(() => Math.random() - NUMB_HALF);
    // ref.: https://flaviocopes.com/how-to-shuffle-array-javascript/
    // options.sort(() => Math.random() - NUMB_HALF); // ref.: https://flaviocopes.com/how-to-shuffle-array-javascript/
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
              {questions[indexOf].category}
            </p>
            <p
              data-testid="question-text"
            >
              {questions[indexOf].question}
            </p>
            {OptionsRandom.map((ele) => ele)}
          </div>
        )}
        <button
          data-testid="btn-next"
          name="next"
          id="next"
          type="button"
          hidden={ hidden }
          onClick={ async () => {
            this.setState((prevState) => ({
              hidden: true,
              indexOf: prevState.indexOf + 1,
              OptionsRandom: [],
            }), () => this.questionsOptions());
          } }
        >
          Next
        </button>
      </div>
    );
  }
}

Question.propTypes = {
  token: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  token: state.token,
});

export default connect(mapStateToProps)(Question);
