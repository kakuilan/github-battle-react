import React from 'react';
import {connect, } from 'react-redux';
import { push, } from 'connected-react-router';
import { Toast, } from 'antd-mobile';
import {compareClear, compareResult, } from '../redux/actions/battle';
import Player from '../components/Player';

class BattleResult extends React.Component {
  constructor(props) {
    super(props);
  }

  // 在挂载之前被调用
  componentWillMount() {

  }

  // 组件挂载后（插入 DOM 树中）立即调用
  componentDidMount() {
    this.doCompare();
  }

  // 在已挂载的组件接收新的 props 之前被调用,用以更新状态state
  componentWillReceiveProps(nextProps) {
    if (process.env.NODE_ENV === 'development') {
      console.log('componentWillReceiveProps:', nextProps);
    }
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
    const { player_winner, player_loser, } = this.props.battle;

    // 条件渲染
    if (this.props.battle.battle_result === 0) {
      return (<div></div>);
    } else if (this.props.battle.battle_result === -1) {
      return (<div>PK失败</div>);
    }

    return (
      <div className="row">
        <Player label="胜出"
          profile={player_winner.profile}
          score={player_winner.score}
        />
        <Player label="战败"
          profile={player_loser.profile}
          score={player_loser.score}
        />
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
