import React from 'react'
import './style.css';


/* This is a very simple component.. it probably doesn't need to be a smart component at this point but you never know what's goingto happen in the future */

function PublicRoute() {

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm">
                </div>
                <div className="col-sm">
                    <div className="dino"></div>
                    <h3>Welcome to Dino Game</h3>
                    <div className="card">
  <div className="card-header">
    Introduction
  </div>
  <div className="card-body">
    <h5 className="card-title">Dino Game</h5>
    <p className="card-text">Combined with two best technologies, 
    Dino Game is a game so enjoyable that allows you to take control of a 
    Dinosaur running towards the end of the Earth until you head somewhere unexpected.
    Your highscore will be shown up to see how well you did. So, what are you waiting for? Sign up and play the game because you will
    have a blast!</p>
  </div>
</div>
                </div>
                <div className="col-sm">
                    
                </div>
            </div>
        </div>
    )
}


export default PublicRoute