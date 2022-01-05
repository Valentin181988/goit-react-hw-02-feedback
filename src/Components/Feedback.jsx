import React, {Component} from "react";
import { Controls } from './Controls';
import { Statistics } from "./Statistics";

export class Feedback extends Component {
    
    state = {
        good: this.props.initialValue,
        neutral: this.props.initialValue,
        bad: this.props.initialValue
      };

    handleIncrementGood = () => {
        this.setState(prevState => ({
            good: prevState.good + 1,
        }));
    };
            

    handleIncrementNeutral = () => {
        this.setState(prevState => ({
            neutral: prevState.neutral + 1,
        }));
    };

    handleIncrementBad = () => {
        this.setState(prevState => ({
            bad: prevState.bad + 1,
        }));
    };
    

    render() {

        return(
            <div>
                <h2>Please leave feedback</h2>
                <Controls onIncrementGood={this.handleIncrementGood} onIncrementNeutral={this.handleIncrementNeutral} onIncrementBad={this.handleIncrementBad}/>
                <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad}/>
            </div>
            
        );
    };
    
}