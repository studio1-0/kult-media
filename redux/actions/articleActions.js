import Router from 'next/router';
import axios from 'axios';
import { GET_ARTICLES } from '../types';
import { API } from '../../config';

// register user
const register = ({ firstname, lastname, mobile_no, email_id, password, confirm_password }, type) => {
  if (type !== 'register') {
    throw new Error('Wrong API call!');
  }
  return (dispatch) => {
    axios.post(`${API}/${type}`, {firstname, lastname, mobile_no, email_id, password, confirm_password })
      .then((response) => {
        Router.push('/signin');
        console.log(response.data.meta.message);
      })
      .catch((err) => {
        switch (error.response.status) {
          case 422:
            alert(error.response.data.meta.message);
            break;
          case 401:
            alert(error.response.data.meta.message);
            break;
          case 500:
            alert('Interval server error! Try again!');
            break;
          default:
            alert(error.response.data.meta.message);
            break;
        }
      });
  };
};

export function addArticle(payload) {
  return { type: AUTHENTICATE, payload };
}

export function getArticles() {
  return (dispatch, getState) => {
    
  };
}