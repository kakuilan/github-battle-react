import React from 'react';
import {connect, } from 'react-redux';
import { Toast, } from 'antd-mobile';
import { push, } from 'connected-react-router';
import {compareClear, compareResult, } from '../redux/actions/battle';

class BattleResult extends React.Component {
  constructor(props) {
    super(props);
  }

  // 组件挂载后（插入 DOM 树中）立即调用
  componentDidMount() {
    this.doCompare();
  }

  // 执行比较
  doCompare = () => {
    if (!this.props.battle.player_a_status || !this.props.battle.player_b_status) {
      Toast.fail('需要有2个选手才能PK!', 2);
      this.props.inputCompare();
      return;
    }

    Toast.loading('Loading...', 0);
    this.props.clear();
    this.props.doCompare([this.props.battle.player_a_name, this.props.battle.player_b_name, ], () => {
      // 有结果后关闭loading
      Toast.hide();
    });

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
    clear: () => {
      dispatch(compareClear());
    },
    doCompare: (userNames, callback) => {
      dispatch(compareResult(userNames, callback));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps )(BattleResult);
