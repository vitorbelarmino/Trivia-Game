export const ADD_TOKEN = 'ADD_TOKEN';
export const SAVE_INFOS = 'SAVE_INFOS';
export const SAVE_SCORE = 'SAVE_SCORE';
export const GET_QUESTIONS = 'GET_QUESTIONS';

export const tokenAction = (value) => ({ type: ADD_TOKEN, payload: value });

export const saveInfos = (email, name) => (
  {
    type: SAVE_INFOS,
    email,
    name,
  });

export const getQuestionsAction = (value) => ({ type: GET_QUESTIONS, payload: value });

export const saveScore = (value) => ({ type: SAVE_SCORE, payload: value });
