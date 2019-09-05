import React from 'react';
import {connect, } from 'react-redux';
import { Toast, } from 'antd-mobile';
import { push, } from 'connected-react-router';
import api from '../api';

class BattleResult extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      winner: null,
      loser: null,
      show: false,
    };
  }

  // 组件挂载后（插入 DOM 树中）立即调用
  componentDidMount() {
    this.doCompare();
  }

  // 执行比较
  doCompare = () => {
    if (!this.props.battle.player_a_status) {
      Toast.fail('选手A不存在!', 2);
      this.props.inputCompare();
      return;
    } else if (!this.props.battle.player_b_status) {
      Toast.fail('选手B不存在!', 2);
      this.props.inputCompare();
      return;
    }

    Toast.loading('Loading...', 0);
    const res = api.battleCompare([this.props.battle.player_a_name, this.props.battle.player_b_name, ]);

    console.log('res:', res);

    return;
  }

  render() {
    return (
      <div>
      </div>
    );
  }
}

// 将state映射到props
const mapStateToProps = (state) => {
  return {
    battle: state.battle,
  };
};

// 绑定分发器
const mapDispatchToProps = (dispatch) => {
  return {
    // 跳转到输入页面
    inputCompare: () => {
      setTimeout(() => {
        dispatch(push('/battle'));
      }, 2000);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps )(BattleResult);
