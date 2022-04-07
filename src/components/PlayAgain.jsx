import React from 'react';
import { Redirect } from 'react-router-dom';

class PlayAgain extends React.Component {
  render() {
    return (
      <div>
        <button
          type="button"
          data-testid="btn-play-again"
        >
          onClick=
          <Redirect to="/" />
          Play Again
        </button>
      </div>
    );
  }
}

export default PlayAgain;
