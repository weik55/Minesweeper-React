import React, { Component } from 'react';

// Overall UI component
class UserInterface extends Component {
	render() {
		return(
			<div>
				<div id="score-row">
					{`Score: ${this.props.score}`} 
				</div>
				<div id="user-interface-row">
					<LifeUI playerLife = {this.props.playerLife}/>
					<SmileyUI startGame = {this.props.startGame}/>
					<div id="timer-ui">
						{`Air: ${this.props.air}`}
					</div>
				</div>
			</div>
		);
	}
}

// Smiley face UI component, resets game
class SmileyUI extends Component {
	render() {
		return(
			<div id="smiley-ui">
				<button type="button" onClick={this.props.startGame}>New Game <i className="far fa-smile"></i></button>
			</div>
		)
	}
}

// Simple UI component to keep track of life. Probably isn't necessary, but I'm keeping here incase I want to extend it. 
class LifeUI extends Component {
	render() {
		return(
			<div id="life-ui">
				{`Life: ${this.props.playerLife}`}
			</div>
		)
	}
}
  
export default UserInterface;