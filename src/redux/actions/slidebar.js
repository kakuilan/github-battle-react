// redux的action
export const TOGGLE_SIDBAR = 'slidebar/TOGGLE';

// 侧边栏切换
export const toggleSlidebar = function () {
  console.log('00000');
  return {
    type: TOGGLE_SIDBAR,
  };
};

// export default {
//   TOGGLE_SIDBAR,
//   toggleSlidebar,
// };
