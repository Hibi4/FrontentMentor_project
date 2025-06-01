import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './game.css';
import bg_triangle from './images/bg-triangle.svg'
import bg_pentagone from './images/bg-pentagon.svg'
import image_rules from './images/image-rules.svg'
import closeIcon from './images/icon-close.svg'
import paper from './images/icon-paper.svg'
import scissors from './images/icon-scissors.svg'
import rock from './images/icon-rock.svg'
import lizard from './images/icon-lizard.svg'
import spock from './images/icon-spock.svg'

function Game() {
     const [showRules, setShowRules] = useState(false);
     const [playerChoice, setPlayerChoice] = useState(null);
     const [computerChoice, setComputerChoice] = useState(null);
     const [step, setStep] = useState('selection');
     const [roundOutcome, setRoundOutcome] = useState(''); // State for the round's outcome text
     const [playerScore, setPlayerScore] = useState(0);
     const [isBonusMode, setIsBonusMode] = useState(false);
     const [computerScore, setComputerScore] = useState(0);
     const gameRules = {
          rock: 'scissors',
          scissors: 'paper',
          paper: 'rock',
          lizard: 'spock',
          spock: 'lizard'
     }

     /* 
     Game rules : 
     Rock beats Scissors
     Scissors beats Paper
     Paper beats Rock
     */
     const getResult = (playerChoice, computerChoice) => {
          if (playerChoice === computerChoice) { return 'TIE'; }
          /* if(gameRules[playerChoice] === computerChoice) { 
               setPlayerScore( (playerScore) => playerScore + 1);
               return 'WIN'; 
          } */
          // setComputerScore( (computerScore) => computerScore + 1);
          //return 'LOSE';
          return gameRules[playerChoice] === computerChoice ? 'WIN' : 'LOSE';
          /* if (result === 'WIN') {
               setPlayerScore((playerScore) => playerScore + 1);
          } else if (result === 'LOSE') {
               setComputerScore((computerScore) => computerScore + 1);
          }
          return result;*/
     }

     /* const playGame = (playerChoice, computerChoice) => {
          const result = getResult(playerChoice, computerChoice);

          if (result === 'WIN') {
               // setPlayerChoice((playerChoice) => playerChoice + 1);
               setPlayerScore( (prev) => prev + 1 );
          } else if (result === 'LOSE') {
               setComputerScore( (prev) => prev + 1 );
               // setComputerChoice((computerChoice) => computerChoice + 1);
          }
          return result
     }
 */
     useEffect(() => {
          if (step === 'result' && playerChoice && computerChoice) {
               const result = getResult(playerChoice, computerChoice);
               setRoundOutcome(result);

               if (result === 'WIN') {
                    setPlayerScore((prev) => {
                         const newScore = prev + 1;
                         if(newScore === 3 ) {
                              setIsBonusMode(true);
                              console.log("Vous passez en mode pentagone");
                         }
                         return newScore; // why return here 
                    });

               } else if (result === 'LOSE') {
                    setComputerScore((prev) => prev + 1);
               }
          }
     }, [step, playerChoice, computerChoice]);
     /* 
     useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }) */


     /* function to pick randomly one item */

     const pickRandomString = () => {
          const choices = ['rock', 'paper', 'scissors'];
          const randomIndex = Math.floor(Math.random() * choices.length);
          return choices[randomIndex];

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
          if (choice === 'lizard') { return lizard; }
          if (choice === 'spock') { return spock; }
          return null;
     }

     const getItemClass = (choice) => {
          if (choice === 'rock') { return 'rock-item'; }
          if (choice === 'paper') { return 'paper-item'; }
          if (choice === 'scissors') { return 'scissors-item'; }
          if (choice === 'lizard') { return 'lizard-item'; }
          if (choice === 'spock') { return 'spock-item'; }
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
                              <p> {isBonusMode ? 'Lizard' : ''} </p>
                              <p> {isBonusMode ? 'Spock' : ''} </p>
                         </div>
                         <div className={`score-tag ${isBonusMode ? 'bonus-mode' : ''}`}>
                              <span>Score</span> <br />
                              <span id='score'> {playerScore} </span>
                         </div>
                    </div>
                    {/* start conditional rendering */}
                    { step === 'selection' && !isBonusMode ? (
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
                    ) : step === 'selection' && isBonusMode ? (
                         // Rendu du pentagone bonus
                              <div className='game-tag'>
                                   <div className='pentagon-bg'>
                                        <img src={bg_pentagone} alt='pentagon_bg' className='pentagon-img' />

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

                                        <div className='game-item lizard-item' onClick={() => handleItemClick('lizard')}>
                                             <div className='game-item-inner'>
                                                  <img src={lizard} alt='lizard' />
                                             </div>
                                        </div>

                                        <div className='game-item spock-item' onClick={() => handleItemClick('spock')}>
                                             <div className='game-item-inner'>
                                                  <img src={spock} alt='spock' />
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
                                   </div>
                              </div>

                              <div className='result-actions'>
                                   <div>
                                        <h3 className='result-text'>YOU {roundOutcome}</h3>
                                   </div>
                                   {/*
                                   <div>
                                        <h3 className='result-text'>YOU {getResult(playerChoice, computerChoice)}</h3>
                                   </div>
                                   */ }
                                   <Button variant="light" onClick={resetGame} className="play-again-btn">
                                        Play Again
                                   </Button>
                              </div>
                         </div>
                    )}
                    
                    


                    <div className='rule-btn' id='rule-btn'>
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