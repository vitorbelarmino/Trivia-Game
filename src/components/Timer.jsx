import React from 'react';
import '../styles/Timer.css';

class Timer extends React.Component {
  constructor() {
    super();

    this.state = {
      time: 30,
    };
  }

  handleTimer = () => {
    const SECOND = 1000;
    this.Timer = setInterval(() => {
      this.setState((prevState) => ({ time: prevState.time - 1 }));
    }, SECOND);
  };

  componentDidMount = () => {
    this.handleTimer();
  };

  disableBtn = () => {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach((btn) => {
      btn.setAttribute('disabled', 'true');
    });
  };

  componentDidUpdate = () => {
    const { time } = this.state;
    const COUNT = 0;
    if (time === COUNT) {
      clearInterval(this.Timer);
      this.disableBtn();
    }
  };

  render() {
    const { time } = this.state;
    return (
      <div id="timer" className="container-timer">
        <p className="timer">

          {' '}
          {time}
          {' '}
        </p>
      </div>);
  }
}

export default Timer;
