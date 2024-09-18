// Write your code here
import {Component} from 'react'

import './index.css'

class StopWatch extends Component {
  state = {seconds: 0}

  componentWillUnmount() {
    clearInterval(this.startTime)
  }

  onStartButton = () => {
    this.intervaId = setInterval(this.startTime, 1000)
  }

  startTime = () => {
    this.setState(preState => ({seconds: preState.seconds + 1}))
  }

  onStopButton = () => {
    clearInterval(this.intervaId)
  }

  onResetButton = () => {
    this.setState({seconds: 0})
    clearInterval(this.intervaId)
  }

  timeInSeconds = () => {
    const {seconds} = this.state
    const sec = Math.floor(seconds % 60)
    if (sec > 9) {
      return sec
    }
    return `0${sec}`
  }

  timeInMinutes = () => {
    const {seconds} = this.state
    const min = Math.floor(seconds / 60)
    if (min > 9) {
      return min
    }
    return `0${min}`
  }

  render() {
    const returnMinutes = this.timeInMinutes()
    const returnSeconds = this.timeInSeconds()
    const getTime = `${returnMinutes}:${returnSeconds}`
    return (
      <div className="bg-container">
        <div className="head-and-card-con">
          <h1 className="heading">Stopwatch</h1>
          <div className="card">
            <div className="stopwatch-img-con">
              <img
                className="img"
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
              />
              <p className="timer-name">Timer</p>
            </div>
            <h1 className="time">{getTime}</h1>
            <div className="button-con">
              <button
                onClick={this.onStartButton}
                type="button"
                className="start-button"
              >
                Start
              </button>
              <button
                onClick={this.onStopButton}
                type="button"
                className="stop-button"
              >
                Stop
              </button>
              <button
                onClick={this.onResetButton}
                type="button"
                className="reset-button"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default StopWatch
