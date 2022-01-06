import './App.css';
import React, { Component } from 'react';
import { FeedbackOptions } from './Components/FeedbackOptions';
import { Statistics } from './Components/Statistics';
import { Notification } from './Components/Notification';
import { Section } from './Components/Section';
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    visible: false,
  };

  handleLiveFeedback = (value) => {

    if (value === 'good') {
      this.setState(prevState => ({
        good: prevState.good + 1,
      }));
    };

    if (value === 'neutral') {
      this.setState(prevState => ({
        neutral: prevState.neutral + 1,
      }));
    };

    if (value === 'bad') {
      this.setState(prevState => ({
        bad: prevState.bad + 1,
     }));
    }

    this.showNotification();
  };

  countTotalFeedback = () => {
      return this.state.good + this.state.neutral + this.state.bad
  };

  countPositiveFeedbackPercentage = () => {
    if (this.state.good === 0) {
      return 0;
    };

    if (this.state.neutral === 0 && this.state.bad === 0) {
      return 100;
    };

    return Math.trunc((this.state.good / (this.state.neutral + this.state.bad + this.state.good)) * 100);      
  };

  showNotification = () => {
    this.setState(prevState => ({
      visible: true,
    }))
  };

  render() {
    const { visible } = this.state;
        
    return (
        <>
          <Section title="Please leave feedback" good={this.state.good}>
          <FeedbackOptions
            onLiveFeedback={this.handleLiveFeedback} />

            {visible ? (
              <Statistics 
              good={this.state.good} 
              neutral={this.state.neutral} 
              bad={this.state.bad} 
              total={this.countTotalFeedback()}
              positivePercent={this.countPositiveFeedbackPercentage()} />
            ) : (<Notification message="There is no feedback" />)} 

          </ Section>
        </>
    );
  };
} 

export default App;
