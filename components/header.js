import React from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import Logo from './logo';

const Header = (props) => (
  <div className="header">
    <Link prefetch href="/">
      <span><Logo /></span>
    </Link>

    <style jsx>{`
      .header {
        max-width: 150px;
        padding: 15px 0 0 15px;
        z-index: 2;
      }

      .header span:hover {
        cursor: pointer;
      }

      span:after {
        content: ${props.modalIsOpen ? 'to creativity and beyond' : 'to creativity and beyond'};
        position: absolute;
        margin: 35px 0 0 20px;
      }
    `}</style>
  </div>
)

const mapStateToProps = state => {
  return {
    modalIsOpen:  state.articles.modalIsOpen
  }
};

export default connect(mapStateToProps)(Header);
