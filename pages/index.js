import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Card from '../components/card';
import Modal from '../components/modal';
import theme from '../styles/theme';
import * as articleActions from '../redux/actions/articleActions';


const Home = (props) => {
  const mock = [
    { 
      type: 'anim', 
      video: {
        thumbnail_url:'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/c3680581391631.5d050d825ed4b.jpg'
      }
    },
    { 
      type: 'short', 
      video: {
        thumbnail_url:'https://cdn.dribbble.com/users/1322388/screenshots/6647930/fortress.jpg' 
      }
    },
    { 
      type: 'ad', 
      video: {
        thumbnail_url:'https://www.danstapub.com/wp-content/uploads/2017/05/dans-ta-pub-lacoste-timeless-1920x1080.png'
      }
    },
    { 
      type: 'music', 
      video: {
        thumbnail_url:'https://phototrend.fr/wp-content/uploads/2017/09/cilp-orelsan-basique-drone-1-759x500.jpg'
      }
    },
  ];

  const [cards, setCards] = useState(mock);

  useEffect(() => {
    props.getArticles();
  }, []);

  useEffect(() => {
    props.articles.contents.length > 0 && setCards(props.articles.contents);
  }, [props.articles.contents]);

  const [ articleIsSelected, setArticleIsSelected ] = useState(false);
  const [ hoveredCard, setHoveredCard ] = useState(null);

  const onCardClick = (_article) => {
    props.setActiveVideo(_article);
  }

  const mouseOver = (type) => {
    setHoveredCard(type);
  }

  return (
    <div className="container">
      <div className="filters">
        <div className="top">
          <span>videos</span>
          <span>articles</span>
        </div>
        <div className="bottom">
          <div className="browse">
            <span>browse by week</span>
            <span>browse by day</span>
          </div>
          <div className="date">
            <span>{'<'}</span>
            <span>june 26</span>
            <span>{'>'}</span>
          </div>
        </div>
      </div>
      <ul className="cards">
        {articleIsSelected ? cards.map((_article) => (
          <li key={`article-${_article.type}`} className={`article-${_article.type}`} onMouseOver={mouseOver(type)}>
            <Card article={_article}
              type={_article.type}
              preview={_article.video.thumbnail_url}
              onCardClick={onCardClick}
            />
          </li>
        )) :
        cards.map((_article) => (
          <li key={`card-${_article.type}`} className={`card-kult${_article.type}`}>
            <Card article={_article}
              type={_article.type}
              preview={_article.video.thumbnail_url}
              onCardClick={onCardClick}
            />
          </li>
        ))}
      </ul>
      <Modal />
      <style jsx>{`
          .container {
            display: flex;
            flex-direction: column;
            max-width: 1200px;
          }
          .filters {
            display: flex;
            height: 140px;
            margin: 20px 0 5px;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            text-transform: lowercase;
            position: relative;
            filter: ${props.articles.modalIsOpen ? 'blur(5px)' : null};
            font-family: 'Dosis', sans-serif;
            font-style: normal;
            font-weight: bold;
            font-size: 20px;
            line-height: 25px;
            letter-spacing: 0.04em;
            color: rgba(51, 51, 51, 0.4);
          }
          .filters .top {
            display: flex;
            position: relative;
            justify-content: center;
          }
          .filters .top span {
            display: flex;
            justify-content: center;
            padding: 0 25px;
            text-align: center;
          }
          .filters .top span:nth-child(1) {
            border-right: solid 3px;
            font-weight: bold;
            color: black;
          }
          .filters span {
            cursor: pointer;
          }
          .filters .top span:nth-child(1):before{
            content: "";
            position: absolute;
            height: 48px;
            width: 48px;
            background-color: rgba(253, 127, 212, 0.1);
            border-radius: 50%;
            top: -10px;
          }
          .filters .bottom {
            display: flex;
            flex-direction: row;
            width: 100%;
            justify-content: space-evenly;
          }
          .filters .bottom span {
            position: relative;
          }
          .filters .bottom .browse {
            display: flex;
          }
          .filters .bottom .browse span {
            display: flex;
            justify-content: center;
            padding: 0 25px;
          }
          .filters .bottom .browse span:nth-child(1) {
            border-right: solid 3px;
          }
          .filters .bottom .browse span:nth-child(2) {
            font-weight: bold;
            color: black;
          }
          .filters .bottom .browse span:nth-child(2):before {
            content: "";
            position: absolute;
            height: 48px;
            width: 48px;
            background-color: rgba(13, 56, 251, 0.1);
            border-radius: 50%;
            top: -15px;
          }
          .filters .bottom .date span:nth-child(2) {
            margin: 0 25px;
            font-weight: bold;
            color: black;
          }
          .cards {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-evenly;
            padding: 0;
            margin: 0;
            filter: ${props.articles.modalIsOpen ? 'blur(5px)' : null};
            opacity: ${props.articles.modalIsOpen ? '0.1' : '1'};
            z-index: 0;
          }
          .cards li {
            display: flex;
            flex-direction: column;
            width: 285px;
            height: 315px;
            margin: 15px;
            border-radius: 8px;
            transition: all .2s ease-in-out; 
            z-index: 0;
          }
          .cards li:before, .cards li:after {
            animation: sheen 1s forwards;
            transition: all 1s ease-in-out; 
          }
          .cards li:nth-child(2) {
            height: 285px;
            width: 490px;
          }
          .cards li:nth-child(3) {
            height: 340px;
            width: 610px;
          }
          .cards li:nth-child(4) {
            width: 305px;
            height: 370px;
          }
          .cards li:hover {
            cursor: pointer;
            transform: scale(1.05);
          }
          .cards li:before {
            background-size: 10px, 10px;
            background-position: right 20px, left top;
            transition: all 2s ease-in-out;
          }
          .cards li:hover:before {
            content: "";
            position: absolute;
            background-size: 30px, 70px;
            background-position: left 20px, right top;
            background-repeat: no-repeat;
            padding: 50px 175px;
            margin: -25px;
          }
          .cards .card-kultmusic:hover:before {
            background-image: ${theme.objects.music}, ${theme.objects.music};
          }
          .cards .card-kultad:hover:before {
            background-image: ${theme.objects.ad}, ${theme.objects.ad};
          }
          .cards .card-kultshort:hover:before {
            background-image: ${theme.objects.short}, ${theme.objects.short};
          }
          .cards .card-kultanim:hover:before {
            background-image: ${theme.objects.anim}, ${theme.objects.anim};
          }
          .cards li:hover:after {
            content: "";
            position: absolute;
            background-size: 50px, 100px;
            background-position: left bottom, right bottom;
            background-repeat: no-repeat;
            padding: 170px 185px;
            margin: 0 0 0 -25px;
          }
          .cards li:nth-child(2):hover:after {
            padding: 160px 285px;
          }
          .cards li:nth-child(3):hover:after {
            padding: 200px 345px;
          }
          .cards li:nth-child(4):hover:after {
            padding: 200px 220px;
          }
          .cards .card-kultmusic:hover:after {
            background-image: ${theme.objects.music}, ${theme.objects.music};
          }
          .cards .card-kultad:hover:after {
            background-image: ${theme.objects.ad}, ${theme.objects.ad};
          }
          .cards .card-kultshort:hover:after {
            background-image: ${theme.objects.short}, ${theme.objects.short};
          }
          .cards .card-kultanim:hover:after {
            background-image: ${theme.objects.anim}, ${theme.objects.anim};
          }
        `}</style>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    articles: state.articles
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getArticles: () => { dispatch(articleActions.getArticlesAction()) },
    setActiveVideo: article => {
      dispatch(articleActions.setActiveArticleAction(article));
      dispatch(articleActions.setModalIsOpenAction(true)); 
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
