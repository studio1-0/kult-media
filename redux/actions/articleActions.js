import Router from 'next/router';
import { SET_ARTICLES, SET_ACTIVE_ARTICLE, SET_MODAL_IS_OPEN } from '../types';
import { apiEndpoint, accessToken } from '../../config';
import Prismic from 'prismic-javascript';

export function addArticleAction(payload) {
  return { type: SET_ARTICLES, payload };
}

export function getArticlesAction() {
  return (dispatch, getState) => {
    Prismic.api(apiEndpoint, {accessToken}).then(api => {
      api.query(Prismic.Predicates.at('document.type', 'video'), { pageSize : 4 })
        .then(response => {
          if (response) {
            dispatch(addArticleAction(response.results));
          }}
        );
    });
  };
}

export function setActiveArticleAction(payload) {
  return { type: SET_ACTIVE_ARTICLE, payload };
}

export function setModalIsOpenAction(payload) {
  return { type: SET_MODAL_IS_OPEN, payload };
}