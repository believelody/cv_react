import React from 'react';

class Info extends React.Component {

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
    <ul className="info" onClick={this.expandBlock.bind(this)}>
      <li><h1>{this.props.title} <span className="close" onClick={this.minimizeBlock.bind(this)}>X</span></h1></li>
      <li>
        <h2>Believe LODY</h2>
        <h4>Développeur Javascript</h4>
      </li>
      <li><span><i className="fas fa-home"></i></span> <h6>404 rue des Ecoles 76410 Cleon</h6></li>
      <li><span><i className="fas fa-phone"></i></span> <h6>06.63.74.19.76</h6></li>
      <li><span><i className="fas fa-at"></i></span> <h6>believelody@gmail.com</h6></li>
      <li><span><i className="fas fa-car"></i></span> <h6>Permis B</h6></li>
    </ul>
  )

  minimize = () => (
    <ul className={this.props.boxStyle} onClick={this.expandBlock.bind(this)}>
      <li><h1><span><img src={require("./img/user.png")} alt="" /></span> {this.props.title}</h1></li>
      <li>
        <h2>Believe LODY</h2>
        <h4>Développeur Javascript</h4>
      </li>
      <li><span><i className="fas fa-home"></i></span> <h6>404 rue des Ecoles 76410 Cleon</h6></li>
      <li><span><i className="fas fa-phone"></i></span> <h6>06.63.74.19.76</h6></li>
      <li><span><i className="fas fa-at"></i></span> <h6>believelody@gmail.com</h6></li>
      <li><span><i className="fas fa-car"></i></span> <h6>Permis B</h6></li>
    </ul>
  )

  render() {
    return (
      this.props.index === -1 ?
      this.expand()
      :
      this.minimize()
    );
  }
}

export default Info;
