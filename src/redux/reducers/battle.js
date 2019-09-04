// redux的reducer,操作battle信息
import {CHANGE_PLAYERA, CHANGE_PLAYERB, } from '../actions/battle';
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

};

// reducer是一个计划函数，接收旧的 state 和 action，生成新的 state
export default function reducer(state = initState, action) {
  // const avatar = (typeof (action.payload.info) !== 'undefined' && typeof (action.payload.info.avatar_url) !== 'undefined') ? action.payload.info.avatar_url : 'http://www.gravatar.com/avatar';
  let avatar = 'http://www.gravatar.com/avatar';

  if (myFun.isObject(action) && typeof (action.data) !== 'undefined') {
    if (action.data.username === '') {
      avatar = '';
    } else if (typeof (action.data.info.avatar_url) !== 'undefined') {
      avatar = action.data.info.avatar_url;
    }
  }
  console.log('battle reducer:', action, avatar);

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
  default:
    if (action.entities && action.entities.comments) {
      return merge({}, state, action.entities.comments.byId);
    }
    return state;
  }
}
