import { SAVE_INFOS } from '../actions';

const INIT_STATE = {
  name: '',
  assertions: 0,
  score: 0,
  gravatarEmail: '',

};

const player = (state = INIT_STATE, action) => {
  console.log(action);
  switch (action.type) {
  case SAVE_INFOS:
    return { ...state,
      name: action.name,
      gravatarEmail: action.email };
  default: {
    return state;
  }
  }
};

export default player;
