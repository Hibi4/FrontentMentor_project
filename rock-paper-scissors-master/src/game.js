import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './game.css';
import bg_triangle from './images/bg-triangle.svg'
import image_rules from './images/image-rules.svg';
import closeIcon from './images/icon-close.svg'
import paper from './images/icon-paper.svg'
import scissors from './images/icon-scissors.svg'
import rock from './images/icon-rock.svg'

function Game() {
    const [showRules, setShowRules] = useState(false);
    const [playerChoice, setPlayerChoice] = useState({});

    const handleItemClick = (item) => {
          console.log(`You choose ${item}`);
          setPlayerChoice(item);
    } 
    return (
         <>
              <div className='main'>
                   <div className='header'>
                        <div className='names-tag'>
                             <p>Rock</p>
                             <p>Paper</p>
                             <p>Scissors</p>
                        </div>
                        <div className='score-tag'>
                             <span>Score</span> <br />
                             <span id='score'>12</span>
                        </div>
                   </div>
                   {/* start main section page */}
                   <div className='game-tag'>
                        <div className='triangle-bg'>
                             <img src={bg_triangle} alt='triangle_bg' className='triangle-img' />

                             <div className='game-item paper-item' onClick={ () => handleItemClick('paper')}>
                                  <div className='game-item-inner'>
                                       <img src={paper} alt='paper' />
                                  </div>
                             </div>

                             <div className='game-item scissors-item' onClick={() => handleItemClick('scissors')}>
                                  <div className='game-item-inner'>
                                       <img src={scissors} alt='scissors' />
                                  </div>
                             </div>

                             <div className='game-item rock-item' onClick={() => handleItemClick('rock')}>
                                  <div className='game-item-inner'>
                                       <img src={rock} alt='rock' />
                                  </div>
                             </div>
                        </div>
                   </div>
                   {/* end main section page */}

                   {/* start game area*/ }
                   <div className='game-area'>
                        <div className='choices'>
                             <div>
                                  <h4>You picked</h4>
                             </div>
                             <div>
                                  <h4>The house picked</h4>
                             </div>

                        </div>
                        <div className='game-zone'>
                             {/* start part for user's choice */}
                             <div className='game-are-inner user-choice'>

                             </div>
                             <div className='game-are-inner computer-choice'>

                             </div>
                             {/* end part for user's choice */}
                        </div>

                   </div>
                   {/* end game area*/ }
                   <div className='rule-btn'>
                        <Button variant="outline-light" onClick={() => setShowRules(true)} style={ { backgroundColor: 'transparent', color: 'white' } }>
                             Règles
                        </Button>
                   </div>
              </div>

              <Modal
                   show={showRules}
                   onHide={() => setShowRules(false)}
                   centered
              >
                   {/*
                    className="d-flex justify-content-between align-items-center border-0" 
               */ }
                   <Modal.Header className="modal_header">
                        <Modal.Title>Règles du jeu</Modal.Title>
                        <div> <img src={closeIcon} alt="close Icon" onClick={() => setShowRules(false)} style={{ cursor: 'pointer' }} /> </div>
                   </Modal.Header>
                   <Modal.Body className="text-center">
                        <img src={image_rules} alt="Règles du jeu" style={{ maxWidth: '100%' }} />
                   </Modal.Body>
                   {/* <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowRules(false)}>
                        Fermer
                    </Button>
                </Modal.Footer>*/ }
              </Modal>
         </>
    );
}

export default Game;