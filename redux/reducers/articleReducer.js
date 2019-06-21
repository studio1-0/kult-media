import { GET_ARTICLES, SET_ACTIVE_TYPE } from '../types';

const initialState = {
  contents: {
    ad: null,
    short: null,
    anim: null,
    music: null,
  },  
  types: {
    anim: 'ANIM',
    short: 'SHORT',
    ad: 'AD',
    music: 'MUSIC',
  },
  activeType: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ARTICLES:
      return Object.assign({}, state, { contents: action.payload });
    case SET_ACTIVE_TYPE:
      return Object.assign({}, state, { activeType: action.payload });
    default:
      return state;
  }
};