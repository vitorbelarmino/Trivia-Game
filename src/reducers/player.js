import { SAVE_ASSERTIONS, SAVE_INFOS, SAVE_SCORE } from '../actions';

const INIT_STATE = {
  name: '',
  assertions: 1,
  score: 0,
  gravatarEmail: '',
};

const player = (state = INIT_STATE, action) => {
  switch (action.type) {
  case SAVE_INFOS:
    return { ...state,
      name: action.name,
      gravatarEmail: action.email };
  case SAVE_SCORE:
    return {
      ...state,
      score: state.score + action.payload,
    };
  case SAVE_ASSERTIONS:
    return {
      ...state,
      assertions: action.payload,
    };
  default: {
    return state;
  }
  }
};

export default player;
