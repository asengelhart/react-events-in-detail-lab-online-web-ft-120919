import React, {Component} from 'react';

class CoordinatesButton extends Component {
  clickHandler = (event) => {
    const coords = [event.clientX, event.clientY];
    this.props.onReceiveCoordinates(coords);
  }

  render() {
    return (
      <button onClick={this.clickHandler}>CoordinatesButton</button>
    )
  }
}
export default CoordinatesButton;