import React, { Component } from 'react';
import './Timer.css';

function formatTime(seconds) {
    let mins = Math.floor(seconds / 60).toString().padStart(2, '0');
    let secs = (seconds % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  }
  
  class Timer extends Component {
  
    handleTick = () => {
      // Ignore ticks?
      if (!this.props.isTiming) return;
      this.props.handleTimerUpdate();
    };
  
    /*--- Lifecycle Methods ---*/
  
    componentDidMount() {
      this.timerId = setInterval(this.handleTick, 1000);
    }
  
    componentWillUnmount() {
      clearInterval(this.timerId);
    }
  
    render() {
      return (
        <div className="Timer">
          {formatTime(this.props.remainingTime)}
        </div>
      );
    }
  }
  
  export default Timer;
  