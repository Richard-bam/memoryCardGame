import React from "react";
import {Link} from 'react-router-dom'

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state= {isToggled : false}

        this.showRules = this.showRules.bind(this)
    }

    showRules(){
        this.setState((prevstate)=>({isToggled: !prevstate.isToggled}))
    }

    render() { 
        return (
            <div>
                <button><Link to="/game">Start</Link></button>
                <button onClick={this.showRules}>Rules</button>
                {this.state.isToggled?
                <div>
                    <p>rules here</p>
                </div>:
                null}
            </div>
        );
    }
}
 
export default Menu;