import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import Card from '../components/card';
import Modal from '../components/modal';


const Home = () => {
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

  const onCardClick = () => {
    setModalIsOpen(true);
  }

  const onCloseClick = () => {
    setModalIsOpen(false);
  }

  return (
    <>
      <ul className="cards">
        {articleIsSelected ? articles.map(({ key, type, preview, author, title }) => (
          <li key={key}>
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
            opacity: ${modalIsOpen ? '0.1' : '1'};
            z-index: 0;
          }
          .cards li {
            display: flex;
            flex-direction: column;
            width: 415px;
            height: 350px;
            margin: 15px;
            border: 1px solid lightgray;
            border-radius: 8px;
            transition: all .2s ease-in-out; 
          }
          .cards li:hover {
            cursor: pointer;
            transform: scale(1.05); 
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
