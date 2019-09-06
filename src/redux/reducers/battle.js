// redux的reducer,操作battle信息
import {CHANGE_PLAYERA, CHANGE_PLAYERB, COMPARE_CLEAR, COMPARE_RESULT, } from '../actions/battle';
import merge from 'lodash/merge';
import myFun from '../../assets/js/myFun';

// 初始化状态
const initState = {
  // 选手A的用户名、状态、信息和头像
  player_a_name: '',
  player_a_status: false,
  player_a_info: {},
  player_a_avatar: '',

  // 选手B的用户名、状态、信息和头像
  player_b_name: '',
  player_b_status: false,
  player_b_info: {},
  player_b_avatar: '',

  // 对比结果,赢输的选手信息
  battle_result: 0, // 0等待结果,-1失败,1成功
  player_winner: {},
  player_loser: {},

};

// reducer是一个计划函数，接收旧的 state 和 action，生成新的 state
export default function reducer(state = initState, action) {
  let avatar = 'http://www.gravatar.com/avatar';

  console.log('battle reducer:', action);

  if (myFun.isObject(action) && typeof (action.data) !== 'undefined') {
    if (action.data.username === '') {
      avatar = '';
    } else if (typeof (action.data.info.avatar_url) !== 'undefined') {
      avatar = action.data.info.avatar_url;
    }
  }

  switch (action.type) {
  case CHANGE_PLAYERA:
    return merge({}, state, {
      player_a_name: action.data.username,
      player_a_status: action.data.status,
      player_a_info: action.data.info,
      player_a_avatar: avatar,
    });
  case CHANGE_PLAYERB:
    return merge({}, state, {
      player_b_name: action.data.username,
      player_b_status: action.data.status,
      player_b_info: action.data.info,
      player_b_avatar: avatar,
    });
  case COMPARE_CLEAR:
    return merge({}, state, {
      player_winner: {},
      player_loser: {},
      battle_result: 0,
    });
  case COMPARE_RESULT:
    return merge({}, state, {
      battle_result: action.result ? 1 : -1,
      player_winner: action.result ? action.players[0] : {},
      player_loser: action.result ? action.players[1] : {},
    });
  default:
    if (action.entities && action.entities.comments) {
      return merge({}, state, action.entities.comments.byId);
    }
    return state;
  }
}
