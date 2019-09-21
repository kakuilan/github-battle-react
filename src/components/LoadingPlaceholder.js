import React from 'react';
import loadImg from '../assets/image/loading-bars.svg';

class LoadingPlaceholder extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <img height="100"
        src={loadImg}
      ></img>
    );
  }
}

export default LoadingPlaceholder;
