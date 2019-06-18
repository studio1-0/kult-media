import { GET_ARTICLES } from '../types';

const initialState = {
  ad: null,
  short: null,
  anim: null,
  music: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ARTICLES:
      return Object.assign({}, state, { articles: action.payload });
    default:
      return state;
  }
};