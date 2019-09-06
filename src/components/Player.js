import React from 'react';
import PropTypes from 'prop-types';
import Profile from './Profile';

class Player extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1 className="header">{this.props.label}</h1>
        <h3 className="score">得分: {this.props.score}</h3>
        <Profile info={this.props.profile} />
      </div>
    );
  }
}

// 注意：组件使用小写的propTypes属性,而类型检查包使用大写的PropTypes
Player.propTypes = {
  label: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  profile: PropTypes.object.isRequired,
};

export default Player;
