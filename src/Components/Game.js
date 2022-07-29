import React from "react";
import Card from "./Card";

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {values:['./owlHead.jpg', './owlHead.jpg', './tigerHead.jpg', './tigerHead.jpg', './frogHead.jpg', './froghead.jpg', './elephantHead.jpg', './elephantHead.jpg', './horseHead.jpg', './horseHead.jpg'],
                        clicks:0,
                        selected:[],
                        turns:0,
                        turnsAllowed:25}

        this.handleEvent = this.handleEvent.bind(this)
    }

    handleEvent(val){
        const turns= this.state.turns+1
        this.setState({turns: turns})
        console.log(turns)
        if(this.state.clicks == 0){
            const clicks = this.state.clicks + 1;
            this.setState({ selected: [val], clicks: clicks })

        }
        else if(this.state.clicks<2){
            this.state.selected[0] === val?alert("snap"): alert("not snap")
            
            this.setState({selected:[], clicks:0})
                        
        }else{
            this.setState({selected:[], clicks:0, turns:turns})
            
        }
    }

    render() { 
        const values = this.state.values;

        const snapArr = values.map((element, index) => {
            return <Card key={index} value={values[index]} handleEvent={this.handleEvent}/>
        })
        
        return ( 
        <div className="GameDiv"> 
            {snapArr}
        </div> );
    }
}
 
export default Game;