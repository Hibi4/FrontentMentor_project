import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './game.css';
import bg_triangle from './images/bg-triangle.svg'
import image_rules from './images/image-rules.svg'
import closeIcon from './images/icon-close.svg'
import paper from './images/icon-paper.svg'
import scissors from './images/icon-scissors.svg'
import rock from './images/icon-rock.svg'

function Game() {
     const [showRules, setShowRules] = useState(false);
     const [playerChoice, setPlayerChoice] = useState(null);
     const [computerChoice, setComputerChoice] = useState(null);
     const [step, setStep] = useState('selection');
     // const [randomString, setRandomString] = useState('');
     // const strings = ['rock', 'paper', 'scissors'];

     /* function to pick randomly one item */

     const pickRandomString = () => {
          const choices = ['rock', 'paper', 'scissors'];
          const randomIndex = Math.floor(Math.random() * choices.length);
          return choices[randomIndex];
          
     }

     const computerchoice = (randomString) => {
          if(randomString === 'rock') { return rock ; }
          if(randomString === 'paper') { return paper ; }
          if(randomString === 'scissors') { return scissors ; }
          return null;
     }

     const handleItemClick = (choice) => {
          console.log(`You choose ${choice}`);
          setPlayerChoice(choice);

          // set a timer here for 3 seconds and generate the computer choice 
          // Générer le choix de l'ordinateur
          const computerPick = pickRandomString();
          console.log(`Computer choose ${computerPick}`);
          setComputerChoice(computerPick);
          
          setStep('result');
     }

     const getImage = (choice) => {
          if (choice === 'rock') { return rock; }
          if (choice === 'paper') { return paper; }
          if (choice === 'scissors') { return scissors }
          return null;
     }

     const getItemClass = (choice) => {
          if (choice === 'rock') { return 'rock-item'; }
          if (choice === 'paper') { return 'paper-item'; }
          if (choice === 'scissors') { return 'scissors-item'; }
          return '';
     }

     const resetGame = () => {
          setPlayerChoice(null);
          setComputerChoice(null);
          setStep('selection');
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
                    {/* start conditional rendering */}
                    {step === 'selection' ? (
                         // Selection screen with triangle
                         <div className='game-tag'>
                              <div className='triangle-bg'>
                                   <img src={bg_triangle} alt='triangle_bg' className='triangle-img' />

                                   <div className='game-item paper-item' onClick={() => handleItemClick('paper')}>
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
                    ) : (
                         // Result screen with user choice
                         <div className='game-area'>
                              <div className='choices'>
                                   <div className='user-pick'>
                                        <h4>You picked</h4>
                                        <div className={`game-item ${getItemClass(playerChoice)}`}>
                                             <div className='game-item-inner'>
                                                  <img src={getImage(playerChoice)} alt={playerChoice} />
                                             </div>
                                        </div>
                                   </div>

                                   <div className='house-pick'>
                                        <h4>The house picked</h4>
                                             <div className={`game-item ${getItemClass(computerChoice)}`}>
                                                  <div className='game-item-inner'>
                                                       <img src={getImage(computerChoice)} alt={computerChoice} />
                                                  </div>
                                             </div>
                                        {/* <div className='game-item-placeholder'>
                                             
                                             <img src={getImage(computerChoice)} alt={'randomString'} className='computerChoice' />
                                        </div> */ }
                                   </div>
                              </div>

                              <div className='result-actions'>
                                   <div>
                                        <h3 className='result-text'>YOU WIN</h3>
                                   </div>
                                   <Button variant="light" onClick={resetGame} className="play-again-btn">
                                        Play Again
                                   </Button>
                              </div>
                         </div>
                    )}
                    

                    <div className='rule-btn'>
                         <Button
                              variant="outline-light"
                              onClick={() => setShowRules(true)}
                              style={{ backgroundColor: 'transparent', color: 'white' }}
                         >
                              Règles
                         </Button>
                    </div>
               </div>

               <Modal
                    show={showRules}
                    onHide={() => setShowRules(false)}
                    centered
               >
                    <Modal.Header className="modal_header">
                         <Modal.Title>Règles du jeu</Modal.Title>
                         <div>
                              <img
                                   src={closeIcon}
                                   alt="close Icon"
                                   onClick={() => setShowRules(false)}
                                   style={{ cursor: 'pointer' }}
                              />
                         </div>
                    </Modal.Header>
                    <Modal.Body className="text-center">
                         <img src={image_rules} alt="Règles du jeu" style={{ maxWidth: '100%' }} />
                    </Modal.Body>
               </Modal>
          </>
     );
}

export default Game;