import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";

// function for randomly shuffling an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }}

class Game extends React.Component {
    constructor(props) {
        super(props);
        // storing items in state
        this.state = {values:['./owlHead.jpg', './owlHead.jpg', './tigerHead.jpg', './tigerHead.jpg', './frogHead.jpg', './frogHead.jpg', './elephantHead.jpg', './elephantHead.jpg', './horseHead.jpg', './horseHead.jpg'],
                        clicks:0,
                        turns:0,
                        selected:[],
                        matched: '',
                        checker: '',
                        prevID: '',
                        turnsAllowed:30,
                        toggled: false,
                        timeLot: 6000,
                        shuffled: false
                    }

        // binding all my functions to the component
        this.handleEvent = this.handleEvent.bind(this)
        this.toggle = this.toggle.bind(this)
        this.setShuffle = this.setShuffle.bind(this)
        this.setEasy = this.setEasy.bind(this)
        this.setMedium = this.setMedium.bind(this)
        this.setHard = this.setHard.bind(this)
        this.reload = this.reload.bind(this)
    }

    // toggle used to toggle display of difficulty options
    toggle(){
        this.setState(prevstate => ({toggled: !prevstate.toggled}))
    }

    //set state of shuffled to true 
    setShuffle(){
        this.setState({shuffled: true})
    }
    // sets easy difficulty 
    setEasy(){
        this.setState({turnsAllowed: 30, timeLot: 6000})
    }
    // sets medium difficulty
    setMedium(){
        this.setState({turnsAllowed: 20, timeLot: 4000})
    }
    // sets hard difficulty
    setHard(){
        this.setState({turnsAllowed: 15, timeLot: 3000})
    }

    // called from card component
    // counts turns and clicks, evaluates whats has matched or not and stores what is currently selected
    handleEvent(val, index){
        //ending game if user reaches turnsAllowed
        if(this.state.turns < this.state.turnsAllowed){
                const turns= this.state.turns+1
                this.setState({turns: turns})
        switch(this.state.clicks){
            case 0:
                const clicks = this.state.clicks+1
                this.setState({clicks: clicks, checker: val, prevID: index})
                this.setState(prevState => ({selected: [index, ...prevState.selected]}))
                break
            case 1:
                const var1 = (this.state.checker)
                const var2 = (val)
                
                var1 == var2? this.setState(prevState => ({matched: [val, ...prevState.matched]})): console.log("not match")
                this.setState(prevState => ({selected: [index, ...prevState.selected]}))
                this.setState({clicks: 0, selected: []})
                break
            case 2:
                
                break
        }
    }else{
        // alerts if user has lost the game 
        alert("You have Lost, Loser")
    }
    
}
// reloads window
    reload(){
        window.location = "/game"
    }

    render() { 
        const values = this.state.values;
        // alerts when player wins game
        if(this.state.matched.length == 5){
            alert("winner winner chicken dinner")
        }
        //stops array from shuffling every time the component renders
        // calling setShuffle gives a warning however it is required to prevent constant shuffling of array
        if(this.state.shuffled === false){
            shuffleArray(values)
            this.setShuffle()
        }

        // mapping card components and passing down props
        const snapArr = values.map((element, index) => {
            return <Card key={index} timeLot={this.state.timeLot} prevID={this.state.prevID} value={values[index]} matched={this.state.matched} handleEvent={this.handleEvent} index={index} selected={this.state.selected}/>
        })
        

        return ( 
        <div className="entireBoard">
            <div className="difficultyDiv">
                {/* toggles difficulty options */}
                <button onClick={this.toggle}>Select Difficulty:</button>
                {this.state.toggled?<div className="difficultyButtons">
                    {/* difficulty options */}
                    <button onClick={this.setEasy}>easy</button>
                    <button onClick={this.setMedium}>medium</button>
                    <button onClick={this.setHard}>hard</button>
                </div>: null}
                
            </div>
            <div className="turnCounter">
                {/* shows user how many turns they have  */}
                <p>TURNS: {this.state.turns}/ {this.state.turnsAllowed}</p>
            </div>
            <div className="GameDiv"> 
            {/* displays game */}
                {snapArr}
            </div>
            <div className="buttonDiv">
                {/* link to home and restart button which will reload the window */}
                <button className="restartBtn" onClick={this.reload}>Restart</button>
                <button className="homeBtn"><Link to="/">Home</Link></button>
            </div>
        </div> );
    }
}
 
export default Game;