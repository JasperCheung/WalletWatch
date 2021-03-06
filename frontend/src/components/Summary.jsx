import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Summary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      spent: 70,
      dPercentSpent: 5,
      earned: 50,
      dPercentEarned: 10
    };
  }

  getNet() {
    return this.state.earned - this.state.spent;
  }

  formatNegativeDollar(dollars) {
    let negative = dollars < 0 ? "-" : "";
    dollars = Math.abs(dollars);
    return `${negative}$${dollars}`;
  }

  percentMessage(percent) {
    if (percent === 0) {
      return "the usual";
    } else if (percent > 0) {
      return `${percent}% more `;
    } else {
      return `${Math.abs(percent)}% less `;
    }
  }

  render() {
    let spentPercentClass = this.state.dPercentSpent > 0 ? "red-text" : "green-text";
    let earnedPercentClass = this.state.dPercentEarned < 0 ? "red-text" : "green-text";
    let netPercentClass = this.getNet() < 0 ? "red-text" : "green-text";
    return (
      <div>
        <center>
          <h3>Last Two Weeks:</h3>
          <div style={{width: 600}}>
            <h4>
              You earned {this.formatNegativeDollar(this.state.earned)} (
              <Link to="/earned" className={earnedPercentClass}>
                {this.percentMessage(this.state.dPercentEarned)}
              </Link>
              than usual)
            </h4>
            <h4>
              You spent {this.formatNegativeDollar(this.state.spent)} (
              <Link to="/spent" className={spentPercentClass}>
                {this.percentMessage(this.state.dPercentSpent)}
              </Link>
              than usual)
            </h4>
            <h4>
              Overall, your balance changed by 
              <Link to="/net" className={netPercentClass}>
                &nbsp;{this.formatNegativeDollar(this.getNet())}
              </Link>
            </h4>
          </div>
        </center>
      </div>
      );
  }
};

export default Summary;

