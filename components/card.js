import React from 'react';

const Card = props => {
    const onClick = () => {
        props.onCardClick(props.article);
    }

    return (
        <div className="card-video" onClick={onClick}>
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
                    z-index: 1;
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
