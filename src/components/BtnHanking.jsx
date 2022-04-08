import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

class BtnHanking extends React.Component {
  handleClick = () => {
    const { history } = this.props;
    history.push('/ranking');
  }

  render() {
    return (
      <div>
        <button
          type="button"
          data-testid="btn-ranking"
          onClick={ this.handleClick }
        >
          Ver Ranking
        </button>
      </div>
    );
  }
}

BtnHanking.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;

export default withRouter(BtnHanking);
