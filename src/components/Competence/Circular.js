import React from 'react';

class Circular extends React.Component {

  componentDidMount() {
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext('2d');
    let i = 0; // Starting point
    let pointToFill = 4.72; // Point from where circle starts to fill
    let cw = ctx.canvas.width; // Return canvas width
    let ch = ctx.canvas.height; // Return canvas height
    let val = ctx.canvas.dataset.value;
    let diff; // Find the difference between current value (no) and targeted value (100)

    function fillCircular() {
      diff = ((i/100)*Math.PI*2*10);
      ctx.clearRect(0, 0, cw, ch); // Clear canvas every time when function is call
      ctx.lineWidth = 5; // size of stroke;
      ctx.fillStyle = "#fff" // Color that you want to fill in ctx/circle
      ctx.strokeStyle = "#F5E0A9"; // Stroke Color
      ctx.beginPath();
      ctx.arc(22, 25, 20, pointToFill, diff/10 + pointToFill); // arc(x, y, radius, start, stop)
      if (i <= 25) {
        ctx.strokeStyle = "#c23616";
      }
      if (i > 25 && i <= 50) {
        ctx.strokeStyle = "#fbc531";
      }
      if (i > 50 && i <= 75) {
        ctx.strokeStyle = "#44bd32";
      }
      if (i > 75 && i <= 100) {
        ctx.strokeStyle = "#487eb0";
      }
      ctx.stroke();

      if (i >= val) {
        clearTimeout(fill);
      }
      i++;
    }

    var fill = setInterval(fillCircular, 50);
  }

  render() {
    return (
      <canvas ref="canvas" width={this.props.size} height={this.props.size} data-value={this.props.value} />
    );
  }
}

export default Circular;
