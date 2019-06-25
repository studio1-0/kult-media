import React, {Fragment, useState, useEffect} from 'react';
import { connect } from 'react-redux';
import styled, { keyframes } from "styled-components";
import ShortLogo from '../static/logo/short.svg';
import AdLogo from '../static/logo/ad.svg';
import AnimLogo from '../static/logo/anim.svg';
import MusicLogo from '../static/logo/music.svg';

const DefaultLogo = () => (
    <svg width="133" height="133" viewBox="0 0 128 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="Text">
            <path id="Vector" d="M45.4202 33.1307L54.7082 50.9136H44.5141L39.3604 40.1532L35.9058 44.2875V50.857H27.1276V21.181H35.9624V32.9041L44.4575 21.181H54.4816L45.4202 33.1307Z" fill="black"/>
            <path id="Vector_2" d="M85.7434 46.6661C84.7806 48.1386 83.4214 49.3279 81.6658 50.1208C79.9101 50.9136 77.8713 51.3101 75.4927 51.3101H73.6238C71.3018 51.3101 69.263 50.9136 67.4507 50.1208C65.6951 49.3279 64.3359 48.1386 63.3731 46.6661C62.4103 45.1936 61.9006 43.438 61.9006 41.4558V21.181H71.0186V41.3425C71.0186 42.3053 71.3585 43.0982 72.0381 43.6645C72.7177 44.2875 73.5672 44.5707 74.5299 44.5707C75.4927 44.5707 76.3422 44.2875 77.0218 43.6645C77.7014 43.0416 78.0412 42.3053 78.0412 41.3425V21.181H87.1592V41.4558C87.1592 43.438 86.7062 45.1936 85.7434 46.6661Z" fill="black"/>
            <path id="Vector_3" d="M37.718 83.7046H50.404L51.4234 92.2563H26.901V57.2567H37.718V83.7046Z" fill="black"/>
            <path id="Vector_4" d="M87.1592 65.6951H78.2677V92.2563H67.6772V65.6951H58.7858V57.2567H87.1592V65.6951Z" fill="black"/>
            <g id="Group_2">
                <path id="Vector_5" d="M105.225 21.181H96.3339V75.436H105.225V21.181Z" fill="black"/>
                <path id="Vector_6" d="M105.225 83.5913H96.3339V92.2563H105.225V83.5913Z" fill="black"/>
            </g>
        </g>
        <g id="Ball">
            <ellipse id="BallShadow" cx="110.549" cy="20.4108" rx="14.2717" ry="14.4756" fill="#B586FB" fillOpacity="0.1"/>
            <ellipse id="BallMain" cx="112.588" cy="16.7408" rx="14.2717" ry="14.4756" fill="#B586FB"/>
            <circle id="BallSecondary" cx="117.481" cy="13.2749" r="5.70867" fill="#C886FB"/>
            <path id="Subtract" d="M124.886 24.09C122.562 25.7538 119.726 26.7312 116.665 26.7312C108.783 26.7312 102.394 20.2502 102.394 12.2556C102.394 9.57294 103.113 7.06071 104.367 4.90662C100.706 7.52726 98.3159 11.851 98.3159 16.741C98.3159 24.7356 104.706 31.2165 112.588 31.2165C117.825 31.2165 122.403 28.3553 124.886 24.09Z" fill="#9686FB"/>
        </g>
        <g id="Triangle">
            <path id="TriangleShadow" d="M10.5005 61.1643L43.3481 69.9658L1.699 94.0119L10.5005 61.1643Z" fill="#FEE333" fillOpacity="0.1"/>
            <path id="TriangleMain" d="M13.592 64.2558L46.4397 73.0573L4.79055 97.1034L13.592 64.2558Z" fill="#FEE333"/>
            <path id="Subtract_2" fillRule="evenodd" clipRule="evenodd" d="M46.4396 73.0573L13.592 64.2558L11.6442 71.5253C14.199 70.3323 17.049 69.666 20.0547 69.666C27.0246 69.666 33.1576 73.2489 36.7124 78.6733L46.4396 73.0573Z" fill="#FEDE33"/>
        </g>
        <g id="Bar">
            <rect id="BarShadow" x="68.5267" y="106.56" width="62.4737" height="10.7231" transform="rotate(-30 68.5267 106.56)" fill="#FD7FD4" fillOpacity="0.1"/>
            <rect id="BarMain" x="68.5267" y="110.289" width="62.4737" height="10.7231" transform="rotate(-30 68.5267 110.289)" fill="#FD7FD4"/>
            <path id="Subtract_3" d="M110.436 98.4892C111.682 94.9647 112.36 91.1719 112.36 87.2208C112.36 86.4871 112.336 85.7587 112.29 85.0366L122.639 79.062L128 88.3484L110.436 98.4892Z" fill="#FD7FAC"/>
        </g>
        <g id="Square">
            <rect id="SquareShadow" x="4.86646" y="11.037" width="27.8147" height="27.8147" transform="rotate(-15 4.86646 11.037)" fill="#0D38FB" fillOpacity="0.1"/>
            <rect id="SquareMain" y="8.22736" width="27.8147" height="27.8147" transform="rotate(-15 0 8.22736)" fill="#0D38FB"/>
            <path id="Subtract_4" fillRule="evenodd" clipRule="evenodd" d="M29.2191 9.80695C29.7895 18.2601 26.2167 26.3693 19.9135 31.6874L34.0659 27.8953L29.2191 9.80695Z" fill="#0D17FB"/>
        </g>
    </svg>);

const Logo = (props) => {
    const [ activeLogo, setActiveLogo ] = useState(<DefaultLogo />);

    useEffect(() => {
        if(props.activeArticle && props.modalIsOpen){
            switch(props.activeArticle.type){
                case 'anim': setActiveLogo(<AnimLogo/>); break;
                case 'short': setActiveLogo(<ShortLogo/>); break;
                case 'ad': setActiveLogo(<AdLogo/>); break;
                case 'music': setActiveLogo(<MusicLogo/>); break;
                    default: setActiveLogo(<DefaultLogo/>)
            }
        } else {
            setActiveLogo(<DefaultLogo/>);
        }
    }, [props.activeArticle, props.modalIsOpen]);

    return (
        <Fragment>
            {activeLogo}
            <style jsx>{`
            #Triangle {
                
            }
            `}</style>
        </Fragment>
    )
}

const mapStateToProps = state => {
    return {
      activeArticle: state.articles.activeArticle,
      modalIsOpen:  state.articles.modalIsOpen
    }
};

export default connect(mapStateToProps)(Logo);
