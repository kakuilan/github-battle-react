// 侧边栏组件
import React from 'react';
import { List, } from 'antd-mobile';
import {connect, } from 'react-redux';
import thumbImg from '../assets/image/gray.png';
import {toggleSlidebar, } from '../redux/actions/slidebar';
import {switchFooterTab, } from '../redux/actions/footer';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const menus = [
      {
        title: '首页',
        name: 'home',
        thumb: thumbImg,
      },
      {
        title: '对比',
        name: 'battle',
        thumb: thumbImg,
      },
      {
        title: '热门',
        name: 'popular',
        thumb: thumbImg,
      },
      {
        title: '搜索',
        name: 'search',
        thumb: thumbImg,
      },
    ];

    return (
      <List>
        {menus.map((menu, index) => {
          return (
            <List.Item key={index}
              onClick={() => this.props.sliderClick(menu.name)}
              thumb={menu.thumb}
            >
              {menu.title}
            </List.Item>);
        })}
      </List>
    );
  }
}

// 将state映射到props
const mapStateToProps = (state) => {
  return state;
};

// 绑定分发器
const mapDispatchToProps = (dispatch) => {
  return {
    sliderClick: (name) => {
      console.log('slider click:', name);
      dispatch(toggleSlidebar());
      dispatch(switchFooterTab(name));
    },
  };
};

// export default Sidebar;
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
