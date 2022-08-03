import React from "react";
import {Link} from 'react-router-dom'

// class component for menu. contains start link and rules item
class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state= {isToggled : false}

        this.showRules = this.showRules.bind(this)
    }
    // will toggle rules toggle state either true or false
    showRules(){
        this.setState((prevstate)=>({isToggled: !prevstate.isToggled}))
    }

    render() { 
        return (
            <div className="menuDiv">
                <div className="startDiv">
                    {/* linking to the game component */}
                    <button className="startButton"><Link to="/game">Start</Link></button>
                </div>
                <div className="ruleDiv">
                    <button className="ruleButton" onClick={this.showRules}>Rules</button>
                </div>
                {/* if toggled is true will show rules otherwise will show nothing */}
                {this.state.isToggled?
                <div className="rules">
                    <p>The game starts with all the cards face down and the player takes turns to turn over a card and check if it matches another card. If the two cards have the same picture, then the cards will remain facing up, otherwise they turn the cards face down again. You win if all the cards are face up before you run out of turns. You can restart at anytime with the restart button and the cards will be reshuffled.The difficulty settings are easy, medium and hard. These affect the amount of turns allowed as well as the amount of time you are allowed to look at your card before it is turned back over. The default difficulty is easy</p>
                </div>:
                null}
            </div>
        );
    }
}
 
export default Menu;