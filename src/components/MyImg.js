import React from 'react';
import PropTypes from 'prop-types';
import defaultImg from '../assets/image/gray.png';

class MyImg extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      src: this.props.src ? this.props.src : '',
    };
  }

  handleImageLoaded() {
    // 加载完毕
  }

  handleImageErrored() {
    // 加载失败
    this.setState({
      src: defaultImg,
    });
  }

  render() {
    const props = this.props;

    const {src, } = this.state;

    return (
      <img
        {...props}
        onError={this.handleImageErrored.bind(this)}
        onLoad={this.handleImageLoaded.bind(this)}
        src={src}
      />
    );
  }
}

MyImg.propTypes = {
  src: PropTypes.string.isRequired,
};

export default MyImg;
