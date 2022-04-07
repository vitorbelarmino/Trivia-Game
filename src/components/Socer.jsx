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
};
