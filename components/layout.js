import React, { Fragment } from 'react';
import theme from '../styles/theme';
import Header from '../components/header';
import Nav from '../components/nav';


const Layout = props => {
    return (
      <Fragment>
        <Header />
        {props.children}
        <Nav />

        <style jsx global>{`
          html {
            height: 100%;
          }
          body { 
            height: 100%;
            margin: 0;
            padding: 0;
          }
          #__next {
            display: flex;
            height: 100%;
            justify-content: space-between;
            color: ${theme.colors.text};
            background-color: ${theme.colors.background};
            font-family: 'Chivo', sans-serif;
            font-style: normal;
            font-weight: normal;
            font-size: 18px;
            line-height: 21px;
            text-transform: uppercase;
          }
        `}</style>
      </Fragment>
    )
  }
  
  export default Layout;