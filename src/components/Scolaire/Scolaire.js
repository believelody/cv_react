import React from 'react';

class Scolaire extends React.Component {

  expandBlock = () => {
    if (this.props.index !== -1) {
      console.log(this.props.index);
      this.props.expandBlock(this.props.index);
    }
  }

  minimizeBlock = () => {
    if (this.props.index === -1) {
      this.props.expandBlock(-1);
    }
  }

  expand = () => (
    <ul className="scolaire" onClick={this.expandBlock.bind(this)}>
      <li><h1>{this.props.title}</h1><span className="close" onClick={this.minimizeBlock.bind(this)}>X</span></li>
      <li className="scolar-items"><b>2018 - 2019</b> <i>Master 1 GIME</i></li>
      <li className="scolar-items"><b>2017 - 2018</b> <i>Master 1 GIME</i></li>
      <li className="scolar-items"><b>2013 - 2014</b> <i>Licence 3 GEII</i></li>
      <li className="scolar-items"><b>2012 - 2013</b> <i>DUT 2 GEII</i></li>
      <li className="scolar-items"><b>2011 - 2012</b> <i>DUT 1 GEII</i></li>
    </ul>
  )

  minimize = () => (
    <ul className={this.props.boxStyle} onClick={this.expandBlock.bind(this)}>
      <li><h1><span><img src={require("./img/graduate.png")} alt="" /></span> {this.props.title}</h1></li>
      <li className="scolar-items"><b>2017 - 2018</b> <i>Master 1 GIME</i></li>
      <li className="scolar-items"><b>2014 - 2015</b> <i>Licence 3 GEII</i></li>
      <li className="scolar-items"><b>2012 - 2013</b> <i>DUT 2 GEII</i></li>
      <li className="scolar-items"><b>2011 - 2012</b> <i>DUT 1 GEII</i></li>
    </ul>
  )

  render() {
    return (
      this.props.index !== -1 ?
        this.minimize()
        :
        this.expand()
    );
  }
}

export default Scolaire;
