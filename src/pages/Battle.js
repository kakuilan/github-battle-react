import React from 'react';
import { push, } from 'connected-react-router';
import { InputItem, WhiteSpace, Button, } from 'antd-mobile';
import { Avatar, } from 'antd';
import { Toast, } from 'antd-mobile';
import {connect, } from 'react-redux';
import {changePlayerA, changePlayerB, } from '../redux/actions/battle';

class Battle extends React.Component {
    onChangeA = (value) => {
      value = value.replace(/\s/g, '');
      return this.props.changeA(value);
    }
    onChangeB = (value) => {
      value = value.replace(/\s/g, '');
      return this.props.changeB(value);
    }
    willCompare = () => {
      setTimeout(() => {
        if (!this.props.battle.player_a_status) {
          return Toast.fail('选手A不存在!', 2);
        } else if (!this.props.battle.player_b_status) {
          return Toast.fail('选手B不存在!', 2);
        }

        return this.props.willCompare();
      }, 250);
    }

    render() {
      return (<div>
        <h1>对比战斗</h1>
        <InputItem
          clear
          defaultValue={this.props.battle.player_a_name}
          onBlur={this.onChangeA}
          placeholder="请输入选手A"
        >
          <Avatar className="avatar"
            icon="user"
            src={this.props.battle.player_a_avatar}
          />
        </InputItem>
        <WhiteSpace />
        <InputItem
          clear
          defaultValue={this.props.battle.player_b_name}
          onBlur={this.onChangeB}
          placeholder="请输入选手B"
        >
          <Avatar className="avatar"
            icon="user"
            src={this.props.battle.player_b_avatar}
          />
        </InputItem>
        <WhiteSpace />
        <Button inline
          onClick={this.willCompare}
          style={{ marginRight: '4px', }}
          type="primary"
        >开始PK</Button>
      </div>);
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
    changeA: (v) => {
      dispatch(changePlayerA(v));
    },
    changeB: (v) => {
      dispatch(changePlayerB(v));
    },
    willCompare: () => {
      dispatch(push('/battle/result'));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Battle);
