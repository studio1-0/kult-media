import { SET_ARTICLES, SET_ACTIVE_ARTICLE, SET_MODAL_IS_OPEN } from '../types';
import sanitize from '../../utils/sanitize';

const initialState = {
  contents: {},  
  types: {
    anim: 'anim',
    short: 'short',
    ad: 'ad',
    music: 'music',
  },
  activeArticle: null,
  modalIsOpen: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ARTICLES:
      let result = [];
      action.payload.map((article) => {
        result.push(sanitize(article));
      });
      return Object.assign({}, state, { contents: result });
    case SET_ACTIVE_ARTICLE:
      return Object.assign({}, state, { activeArticle: action.payload });
    case SET_MODAL_IS_OPEN:
      return Object.assign({}, state, { modalIsOpen: action.payload });
    default:
      return state;
  }
};