import { SAVE_ASSERTIONS, SAVE_INFOS, SAVE_SCORE, INDEX_OF, TIMER } from '../actions';

const INIT_STATE = {
  name: '',
  assertions: 0,
  score: 0,
  gravatarEmail: '',
  indexOf: 0,
  time: false,
};

const player = (state = INIT_STATE, action) => {
  switch (action.type) {
  case SAVE_INFOS:
    return { ...state,
      name: action.name,
      gravatarEmail: action.email,
      image: action.image,
      score: 0,
      indexOf: 0,
    };
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
  case INDEX_OF:
    return {
      ...state,
      indexOf: state.indexOf + 1,
    };
  case TIMER:
    return {
      ...state,
      time: !state.time,
    };
  default: {
    return state;
  }
  }
};

export default player;
