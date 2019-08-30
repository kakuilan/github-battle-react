// redux的action,操作侧边栏
const TOGGLE_SIDBAR = 'slidebar/TOGGLE';

// 侧边栏切换
const toggleSlidebar = function () {
  console.log('toggleSlidebar 调起action动作, 1111');
  return {
    type: TOGGLE_SIDBAR,
  };
};

export {
  TOGGLE_SIDBAR,
  toggleSlidebar,
};
