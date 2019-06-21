import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import theme from '../styles/theme';

const Modal = props => {
    const [ isArticle, setIsArticle ] = useState(false);

    const playerStyle = {
        filter: 'drop-shadow(0 0 0.75rem grey)'
    };

    return (
        props.isOpen && <div className="modal">
            <div className="modal-content" onBlur={props.onCloseClick}>
                <span className="close" onClick={props.onCloseClick}>close</span>
                
                {!isArticle ?
                    <div className="content video-mode">
                        <h1>Le temps des cerises</h1>
                        <ReactPlayer
                            url='https://www.youtube.com/watch?v=WMa_Qsbmzpg'
                            playing={false}
                            controls={true}
                            height="540px"
                            width="100%"
                            style={playerStyle}
                        />
                        <div className="director">
                            <img src="https://source.unsplash.com/random/100x100?portrait"></img>
                            <h2>Jean-Michel Dupont</h2>
                            <h3>Paris - Motion Designer Freelance</h3>
                        </div>
                    </div>
                    :
                    <div className="content article-mode">
                        <div className="video">
                            
                        </div>
                        <div>
                            <h1>Le temps des cerises</h1>
                            <h2>My inspirations before making Angèle’s music videos were really wide…</h2>
                            <p><b>Lorem Ipsum</b> dolor sit amet.</p>
                        </div>
                    </div>
                }
            </div>

            <style jsx>{`
                .modal {
                    display: flex;
                    position: absolute;
                    left: 0;
                    right: 0;
                    height: 100%;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    z-index: 1;
                }
                .modal-content {
                    display: flex;
                    width: 60%;
                    flex-direction: column;
                    justify-content: space-between;
                    align-items: flex-start;
                }
                .content {
                    width: 100%;
                }
                span {
                    display:flex;
                    background-repeat: no-repeat;
                    background-position: center;
                }
                .close {
                    position: absolute;
                    height: 59px;
                    line-height: 59px;
                    align-self: flex-end;
                    background-image: url('/static/cross.svg');
                    background-position: right;
                    padding-right: 30px;
                    text-transform: lowercase;
                    font-weight: bold;
                }
                .close:hover {
                    cursor: pointer;
                }
                h1 {
                    margin-top: 0;
                }
                .director {
                    display: flex;
                    max-height: 95px;
                    margin: 0 40px;
                    padding: 10px 30px;
                    justify-content: space-between;
                    border-radius: 0 0 8px 8px;
                    background-color: ${theme.colors.background};
                    filter: drop-shadow(0 0 0.75rem grey);
                }
                .director img {
                    max-width: 75px;
                    max-height: 75px;
                    border-radius: 8px;
                    border: 1px solid grey;
                }
                .director h2, h3 {
                    font-size: 14px;
                    line-height: 17px;
                    margin: 0;
                }
                .player {
                    border-radius: 20px;
                }
            `}</style>
        </div>
    )
}

export default Modal;
