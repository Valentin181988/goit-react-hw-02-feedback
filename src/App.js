import './App.css';
import React, { Component } from 'react';
import { FeedbackOptions } from './Components/FeedbackOptions';
import { Statistics } from './Components/Statistics';
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercent:0,
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

  countTotalFeedback = () => {
    this.setState({
      total: this.state.good + this.state.neutral + this.state.bad,
    })     
  };

  countPositiveFeedbackPercentage = () => {
     this.setState({
       positivePercent: Math.trunc((this.state.good / (this.state.neutral + this.state.bad)) * 100)
     });    
  };

  render() {
     
    return (
        <>
          <h2>Please leave feedback</h2>
          <FeedbackOptions 
            onIncrementGood={this.handleIncrementGood} 
            onIncrementNeutral={this.handleIncrementNeutral} 
            onIncrementBad={this.handleIncrementBad}
            onCountPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage}/>
          <Statistics 
            good={this.state.good} 
            neutral={this.state.neutral} 
            bad={this.state.bad} 
            total={this.state.total}
            positivePercent={this.state.positivePercent} />
        </>
    );
  };
} 

export default App;
