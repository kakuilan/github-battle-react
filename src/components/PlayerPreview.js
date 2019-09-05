// 选手预览组件
import React from 'react';
import PropTypes from 'prop-types';

class PlayerPreview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="column">
          <img
            alt={'Avatar for ' + this.props.username}
            className="avatar"
            src={this.props.avatar}
          />
          <h2 className="username">@{this.props.username}</h2>
        </div>
        {this.props.children}
      </div>
    );
  }
}

// 类型检查
PlayerPreview.propTypes = {
  avatar: PropTypes.string.isRequired, // isRequired,必传属性
  username: PropTypes.string.isRequired,
};

export default PlayerPreview;
