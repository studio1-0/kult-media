import React, { useState } from 'react';
import ReactPlayer from 'react-player';

const Modal = props => {
    const [ isArticle, setIsArticle ] = useState(false);

    return (
        props.isOpen && <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={props.onCloseClick}></span>
                
                {!isArticle ?
                    <div className="content video-mode">
                        <h1>Le temps des cerises</h1>
                        <ReactPlayer url='https://www.youtube.com/watch?v=WMa_Qsbmzpg' playing={false} controls={true}/>
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
                    max-width: 70%;
                }
                span {
                    display:flex;
                    width: 56px;
                    height: 56px;
                    background-repeat: no-repeat;
                    background-position: center;
                }
                .close {
                    align-self: flex-end;
                    background-image: url('/static/cross.svg');
                }
                .close:hover {
                    cursor: pointer;
                }
                .director {
                    display: flex;
                }
                .director img {
                    border-radius: 50%;
                }

                .player {
                    border-radius: 20px;
                }
            `}</style>
        </div>
    )
}

export default Modal;
