import { SAVE_INFOS, SAVE_SCORE, GET_QUESTIONS } from '../actions';

const INIT_STATE = {
  name: '',
  assertions: 0,
  score: 0,
  gravatarEmail: '',
  questions: [],
  IndexOf: 0,

};

const player = (state = INIT_STATE, action) => {
  switch (action.type) {
  case SAVE_INFOS:
    return { ...state,
      name: action.name,
      gravatarEmail: action.email };
  case GET_QUESTIONS:
    return {
      ...state,
      questions: action.payload,

    };
  case SAVE_SCORE:
    return {
      ...state,
      score: state.score + action.payload,
    };
  default: {
    return state;
  }
  }
};

export default player;
