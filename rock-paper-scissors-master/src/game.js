import React from 'react';
import ReactDOM from 'react-dom/client';
import './game.css'
import background from './images/bg-pentagon.svg'


function Game() {
    {/* 
         <img src={icon__fb} alt='bookmark-logo-footer' />    
    */ }

    return (
       <div className='main'> 
       <div className='header'>
       <div className='names-tag'>
               <p>Rock</p>
               <p>Paper</p>
               <p>Scissors</p>
          </div>
          <div className='score-tag'>
               <span>Score</span> <br/>
               <span id='score'>12</span>
               {/* <p>Score</p>
               <p className='score'>
                    <span>1254</span>
               </p> */ }
          </div>
       </div>
          
          {/* <img src={background} alt='Background'/>*/ }
       </div> 
    )
}

export default Game;