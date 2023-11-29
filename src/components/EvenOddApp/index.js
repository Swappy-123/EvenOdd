// Write your code here

import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}
  getRandomNum = () => Math.ceil(Math.random() * 100)
  changeCount = () => {
    const randomNumber = this.getRandomNum()
    this.setState(prevNum => ({count: prevNum.count + randomNumber}))
  }
  render() {
    const {count} = this.state
    const choose = count % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="bg-container">
        <h1 className="head">Count {count}</h1>
        <p className="para">Count is {choose}</p>
        <button type="button" className="btn" onClick={this.changeCount}>
          Increment
        </button>
        <p className="des">*Increase By Random Number Between 0 to 100</p>
      </div>
    )
  }
}

export default EvenOddApp
