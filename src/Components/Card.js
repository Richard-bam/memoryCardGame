import React from "react";

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.handle = this.handle.bind(this)
    }
    
    handle(e){
        this.props.handleEvent(e.target.value)
        console.log(e)
        
    }

    render() { 
        return (
            <div>
                <button onClick={this.handle} value={this.props.value}> <img src="./"/> </button>
            </div>
          );
    }
}
 
export default Card;