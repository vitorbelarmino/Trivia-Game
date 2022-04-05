import { ADD_TOKEN } from '../actions';

const INIT_STATE = '';

const token = (state = INIT_STATE, action) => {
  switch (action.type) {
  case ADD_TOKEN:
    return action.payload;
  default: {
    return state;
  }
  }
};

export default token;
