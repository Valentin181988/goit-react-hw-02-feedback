import './App.css';
import React, { Component } from 'react';
import { FeedbackOptions } from './Components/FeedbackOptions';
import { Statistics } from './Components/Statistics';
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
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
    return (
      <>
        <h2>Please leave feedback</h2>
        <FeedbackOptions onIncrementGood={this.handleIncrementGood} onIncrementNeutral={this.handleIncrementNeutral} onIncrementBad={this.handleIncrementBad}/>
        <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad}/>
      </>
    );
  };
}

export default App;
