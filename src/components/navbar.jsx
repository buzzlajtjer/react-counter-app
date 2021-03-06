import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <span className="navbar-brand mb-0 h1">Navbar</span>
          <span>Total Counters: {this.props.totalCounters}</span>
        </nav>
      </div>
    );
  }
}

export default Navbar;
