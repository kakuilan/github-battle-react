import React from 'react';
import { Drawer, NavBar, Icon, } from 'antd-mobile';
import {connect, } from 'react-redux';
import Sidebar from './components/Sidebar';
import Footbar from './components/Footbar';
import {toggleSlidebar, } from './redux/actions/slidebar';
import './styles/App.less';
import thumbImg from './assets/image/gray.png';

class App extends React.Component {
  render() {
    const menus = [
      {
        title: '首页',
        path: '/',
        thumb: thumbImg,
      },
      {
        title: '对比',
        path: '/battle',
        thumb: thumbImg,
      },
      {
        title: '热门',
        path: '/popular',
        thumb: thumbImg,
      },
      {
        title: '搜索',
        path: '/search',
        thumb: thumbImg,
      },
    ];

    return (<div>
      <NavBar icon={<Icon type="ellipsis" />}
        onLeftClick={() => this.props.toggleSlidebar()}
      >
      Github Battle
      </NavBar>
      <Drawer
        className="my-drawer"
        contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42, }}
        enableDragHandle
        onOpenChange={() => this.props.toggleSlidebar()}
        open={this.props.slidebar.sliderOpen}
        sidebar={<Sidebar menus={menus}/>}
        style={{ minHeight: document.documentElement.clientHeight - 95, }}
      >
        主体内容在这里。Github battle
      </Drawer>

      <Footbar></Footbar>
    </div>);
  }
}

// 将state映射到props
const mapStateToProps = (state) => {
  return {
    slidebar: state.slidebar,
  };
};

// 绑定分发器
const mapDispatchToProps = (dispatch) => {
  return {
    toggleSlidebar: () => {
      console.log('toggleSlidebar 触发后进入分发器dispatch, 0000');
      dispatch(toggleSlidebar());
    },
  };
};

// export default App;
export default connect(mapStateToProps, mapDispatchToProps)(App);
