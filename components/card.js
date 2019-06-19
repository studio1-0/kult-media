import React from 'react';
import { TYPES } from '../config';

const Card = props => {
    let artifacts = '';

    switch(props.type) {
        case TYPES.ANIM: artifacts = ''; break;
        case TYPES.AD: artifacts = ''; break;
        case TYPES.SHORT: artifacts = ''; break;
        case TYPES.MUSIC: artifacts = ''; break;
        default: artifacts = null;
    }
    
    return (
        props.article ?
        <div className="card-article" onClick={props.onCardClick}>
            <img src={props.preview}></img>
            <h1>{props.article.director}</h1>
            <h2>{props.article.title}</h2>
    
            <style jsx>{`
                .card-article {
                    
                }
            `}</style>
        </div> :
        <div className="card-video" onClick={props.onCardClick}>
            <span className="play"></span>
            <style jsx>{`
                .card-video {
                    display: flex;
                    height: 100%;
                    justify-content: center;
                    align-items: center;
                    background-image: url(${props.preview});
                    background-position: center;
                    background-size: cover;
                    border-radius: 8px;
                }
                .play {
                    display:flex;
                    width: 80px;
                    height: 80px;
                    background-image: url('/static/play_button.svg');
                    background-repeat: no-repeat;
                    background-position: center;
                }
            `}</style>
        </div>
    )
}

export default Card;
