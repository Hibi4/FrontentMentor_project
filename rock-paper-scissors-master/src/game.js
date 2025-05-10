import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './game.css';
import image_rules from './images/image-rules.svg';
import closeIcon from './images/icon-close.svg'

function Game() {
    const [showRules, setShowRules] = useState(false);

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
                
                <div className='rule-btn'>
                    <Button variant="outline-light" onClick={() => setShowRules(true)}>
                        Règles
                    </Button>
                </div>
            </div>
            
            <Modal
                show={showRules}
                onHide={() => setShowRules(false)}
                centered
            >
                <Modal.Header className="d-flex justify-content-between align-items-center border-0">
                    <Modal.Title>Règles du jeu</Modal.Title>
                    <div> <img src={closeIcon} alt="close Icon" onClick={() => setShowRules(false)} style={{cursor : 'pointer'}} /> </div>
                </Modal.Header>
                <Modal.Body className="text-center">
                    <img src={image_rules} alt="Règles du jeu" style={{maxWidth: '100%'}} />
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