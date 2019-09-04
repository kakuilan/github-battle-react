// redux的action,操作battle信息
import api from '../../api';

const CHANGE_PLAYERA = 'battle/PLAYERA';
const CHANGE_PLAYERB = 'battle/PLAYERB';

const changePlayer = function (userName = '', type = '') {
  const data = {
    username: userName,
    status: false,
    info: {},
  };

  return (dispatch) => {
    api.getUserByName(userName).then((res) => {
      data.status = true;
      data.info = res;
      dispatch({
        type: type,
        data: data,
      });
    }).catch(() => {
      dispatch({
        type: type,
        data: data,
      });
    });
  };
};

// 改变选手A的名称
const changePlayerA = function (userName = '') {
  return changePlayer(userName, CHANGE_PLAYERA);
};

// 改变选手B的名称
const changePlayerB = function (userName = '') {
  return changePlayer(userName, CHANGE_PLAYERB);
};

export {
  CHANGE_PLAYERA,
  CHANGE_PLAYERB,
  changePlayerA,
  changePlayerB,
};
