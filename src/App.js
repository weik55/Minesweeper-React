import React, { Component } from 'react';
import UserInterface from './UserInterface';
import GameBoard from './GameBoard';
//import logo from './logo.svg';
import './css/main.css';

class App extends Component {
  constructor(props ){
    super(props);

    this.state = {
      gameState: "tutorial",
      level: 0,
      playerLife: 3,
      score: 0,
      air: 15,
    }
  }

  startGame(){
    this.setState({
      gameState: "playing",
      level: 0,
      playerLife: 3,
      score: 0,
      air: 1000,
    })

    this.timer = setInterval(
			() => this.decreaseAir(),
			1000
		);
  }

  // Adds points to your score
  addPoints(points){
    this.setState({score: this.state.score + points});
  }

  // Adds air
  addAir(){
    this.setState({air: this.state.air + 8});
  }

  decreaseAir(){
    if (this.state.air -1 < 0){
      this.setState({gameState: "gameover"});
      clearInterval(this.timer);
    }
    this.setState({air: this.state.air - 1});
  }

  render() {
    let board = <GameBoard 
      rows = {10}
      cols = {10}
      addPoints = {this.addPoints.bind(this)}
      addAir = {this.addAir.bind(this)}
    />
    if (this.state.gameState === "gameover"){
      board = <GameOver />
    }

    if (this.state.gameState === "tutorial"){
      board = <Tutorial />
    }
    return(
      <div id="page">
        <h1>Minesweeper <i className="far fa-smile-wink"></i></h1>
        <div id="gameApp">
          <UserInterface 
            startGame = {this.startGame.bind(this)}
            gameState = {this.state.gameState}
            playerLife = {this.state.playerLife}
            score = {this.state.score}
            decreaseAir = {this.decreaseAir.bind(this)}
            air = {this.state.air}
          />
          {board}
        </div>
      </div>
    );
  }
}

class GameOver extends Component {

  render(){
    return(
      <div id="game-over-screen">
        <div id="game-over-text">
          Oh No! Game Over!
        </div>
      </div>
    )
  }
}

class Tutorial extends Component {

  render(){
    return(
      <div id="tutorial-screen">
        <p>You are a minesweeper.</p>
        <p>A local mine needs cleaning! Sweep up garbage for points!</p>
        <p>Use the arrow keys to navigate the mine. Don't run out of life or air!</p>
        <p>You get a little bit more air everytime you find an exit to the next floor.</p> 
        <ul id="tutorial-list">
          <li>
            <div className="tile tile-empty inline">
              <div className="player"></div>
            </div> This is you.
            
          </li>
          <li>
            <div className="tile tile-empty inline">
              <div className="collectable"></div>
            </div> This is a garbage tile.
            
          </li>
          <li>
            <div className="tile tile-empty inline">
              <div className="exit"></div>
            </div> This is the exit to the next floor.
          </li>
          <li>
            <div className="tile tile-empty inline">
              <div className="block"></div>
            </div> This is an unpassable block.
          </li>
        </ul>
      </div>
    )
  }
}

export default App;
