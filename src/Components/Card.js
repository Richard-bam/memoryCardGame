import React from "react";

// class component for cards
class Card extends React.Component {
    constructor(props) {
        super(props);
        this.handle = this.handle.bind(this);
        this.state = {
            click: false
        }
    }

    // called onClick
    handle(){
        // alert if user wins. stops user from continuing to click
            if(this.props.matched.length == 5){
                alert("You have won winner")
            }else{
                // stops user picking same card twice
                if(this.props.selected.includes(this.props.index)){
                    alert("cant pick same card twice")
                }else{
                    // toggling state of click
                const clicked = !(this.state.click);
                this.setState({click: clicked})
                // passes index and value of card to game component for evaluation
                this.props.handleEvent(this.props.value, this.props.index)
                // resetting state of click after timeLot has passed
                setTimeout(() => this.setState({ click: !(this.state.click) }), this.props.timeLot);
                }
            }
    }


    render() {
        // evaluates wether front or back of card should be displayed
        let image = "./back.png";
        if(this.props.matched.includes(this.props.value)){
            image = this.props.value  
        }else if(this.state.click && this.props.selected.includes(this.props.index)){
            image = this.props.value
        }else{
            image = "./back.png"
        }

        return (
            // displays card image
            <div className="cardDiv">  
                <img id={this.props.index} value={this.props.value} onClick={this.handle} src={image}/>
            </div>
          );
    }
}
 
export default Card;