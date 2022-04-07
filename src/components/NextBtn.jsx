import React, { Component } from 'react';
import { connect } from 'react-redux';

class NextBtn extends Component {
  render() {
    return (
      <button
        data-testid="btn-next"
        name="next"
        id="next"
        type="button"
        hidden={ hidden }
        onClick={ () => {
          this.setState((prevState) => ({
            // hidden: true,
            indexOf: prevState.indexOf + 1,
          }));
        } }
      >
        Next
      </button>
    );
  }
}

export default connect(null, null)(NextBtn);
