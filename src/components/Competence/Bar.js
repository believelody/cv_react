import React, { Component } from 'react';

class Bar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      percent: 0
    };
  }

  componentDidMount() {
    let bar = this.refs.bar;
    let width = 0;
    let percent = this.state.percent;
    let fill = setInterval(() => {
      if (width > bar.dataset.value) {
        clearInterval(fill);
      }
      else {
        bar.style.width = `${width}%`;
        width++;
      }
    }, 50);
    let per = setInterval(() => {
      if (percent > bar.dataset.value) {
        clearInterval(per);
      }
      else {
        this.setState({percent});
        percent++;
      }
    }, 50);
  }

  render() {
    const clearStyle = {
      clear: "both"
    };
    const {name, value} = this.props;
    return (
      <div className="bar">
        <div className="bar-label">
          <h5>{name}</h5>
          <span className="percent">{this.state.percent}%</span>
          <div style={clearStyle}></div>
        </div>
        <div className="jauge">
          <div className="progress" data-value={value} ref="bar"></div>
        </div>
      </div>
    )
  }
}

export default Bar;
