import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Card from '../components/card';
import Modal from '../components/modal';
import theme from '../styles/theme';


const Home = (props) => {
  console.log("REDUX: ", props.articles);

  const cards = [
    { type: 'ANIM', preview: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/c3680581391631.5d050d825ed4b.jpg'},
    { type: 'SHORT', preview: 'https://cdn.dribbble.com/users/1322388/screenshots/6647930/fortress.jpg' },
    { type: 'AD', preview: 'https://www.danstapub.com/wp-content/uploads/2017/05/dans-ta-pub-lacoste-timeless-1920x1080.png' },
    { type: 'MUSIC', preview: 'https://phototrend.fr/wp-content/uploads/2017/09/cilp-orelsan-basique-drone-1-759x500.jpg' }
  ].map(card => {
    card.key = `card-${card.type}`
    return card
  });

  const articles = [
    { type: 'ANIM', preview: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/c3680581391631.5d050d825ed4b.jpg', author: 'Charlotte Abramow', intro: "My inspirations before making Angèle’s music videos were really wide…"},
    { type: 'SHORT', preview: 'https://cdn.dribbble.com/users/1322388/screenshots/6647930/fortress.jpg' },
    { type: 'AD', preview: 'https://www.danstapub.com/wp-content/uploads/2017/05/dans-ta-pub-lacoste-timeless-1920x1080.png' },
    { type: 'MUSIC', preview: 'https://phototrend.fr/wp-content/uploads/2017/09/cilp-orelsan-basique-drone-1-759x500.jpg' }
  ].map(art => {
    art.key = `card-${art.type}`
    return art
  });

  const [ modalIsOpen, setModalIsOpen ] = useState(false);
  const [ articleIsSelected, setArticleIsSelected ] = useState(false);
  const [ hoveredCard, setHoveredCard ] = useState(null);

  const onCardClick = () => {
    setModalIsOpen(true);
  }

  const onCloseClick = () => {
    setModalIsOpen(false);
  }

  const mouseOver = (type) => {
    setHoveredCard(type);
  }

  return (
    <>
      <ul className="cards">
        {articleIsSelected ? articles.map(({ key, type, preview, author, title }) => (
          <li key={key} onMouseOver={mouseOver(type)}>
            <Card article={''}
              type={type}
              preview={preview}
              onCardClick={onCardClick}
            />
          </li>
        )) :
        cards.map(({ key, type, preview }) => (
          <li key={key}>
            <Card article={''}
              type={type}
              preview={preview}
              onCardClick={onCardClick}
            />
          </li>
        ))}

        <style jsx>{`
          .cards {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-evenly;
            max-width: 1000px;
            padding: 0;
            filter: ${modalIsOpen ? 'blur(5px)' : null};
            opacity: ${modalIsOpen ? '0.1' : '1'};
            z-index: 0;
          }
          .cards li {
            display: flex;
            flex-direction: column;
            width: 415px;
            height: 350px;
            margin: 15px;
            border-radius: 8px;
            transition: all .2s ease-in-out; 
            z-index: 0;
          }
          .cards li:hover {
            cursor: pointer;
            transform: scale(1.05);
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
          .cards li:nth-child(1):hover:before {
            background-image: ${theme.objects.anim}, ${theme.objects.anim};
          }
          .cards li:nth-child(2):hover:before {
              background-image: ${theme.objects.ad}, ${theme.objects.ad};
          }
          .cards li:nth-child(3):hover:before {
              background-image: ${theme.objects.short}, ${theme.objects.short};
          }
          .cards li:nth-child(4):hover:before {
              background-image: ${theme.objects.music}, ${theme.objects.music};
          }
          .cards li:hover:after {
            content: "";
            position: absolute;
            background-size: 50px, 100px;
            background-position: left bottom, right bottom;
            background-repeat: no-repeat;
            padding: 175px 210px;
            margin: 0 0 0 -25px;
          }
          .cards li:nth-child(1):hover:after {
            padding: 185px 250px;
            background-image: ${theme.objects.anim}, ${theme.objects.anim};
          }
          .cards li:nth-child(2):hover:after {
            background-image: ${theme.objects.ad}, ${theme.objects.ad};
          }
          .cards li:nth-child(3):hover:after {
            padding: 220px 230px;
            background-image: ${theme.objects.short}, ${theme.objects.short};
          }
          .cards li:nth-child(4):hover:after {
            padding: 170px 270px;
            background-image: ${theme.objects.music}, ${theme.objects.music};
          }
          .cards li:nth-child(2) {
            height: 420px;
            width: 290px;
          }
          .cards li:nth-child(3) {
            height: 420px;
            width: 350px;
          }
          .cards li:nth-child(4) {
            width: 450px;
            height: 300px;
          }
        `}</style>
      </ul>
      <Modal isOpen={modalIsOpen} onCloseClick={onCloseClick} />
    </>
  )
}

const mapStateToProps = state => {
  return {
    articles: state.articles
  }
};

export default connect(mapStateToProps)(Home);
