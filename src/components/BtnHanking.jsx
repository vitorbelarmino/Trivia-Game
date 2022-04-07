import React from 'react';
import { Redirect } from 'react-router-dom';

class BtnHanking extends React.Component {
  render() {
    return (
      <div>
        <button
          type="button"
          data-testid="btn-ranking"
        >
          onClick=
          <Redirect to="/ranking" />
          Ver Ranking
        </button>
      </div>
    );
  }
}

export default BtnHanking;
