import React from 'react';
import { Icon as Aicon, } from 'antd';
import { Drawer, NavBar, TabBar, Icon, } from 'antd-mobile';
import Sidebar from './components/Sidebar';
import {connect, } from 'react-redux';
import {toggleSlidebar, } from './redux/actions/slidebar';
import {switchFooterTab, } from './redux/actions/footer';
import './styles/App.less';
import thumbImg from './assets/image/gray.png';

class App extends React.Component {
  state = {
    footerActive: 'home',
    footerHidden: false,
  }

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

      <TabBar
        barTintColor="white"
        hidden={this.state.footerHidden}
        tintColor="#33A3F4"
        unselectedTintColor="#949494"
      >
        <TabBar.Item
          data-seed="logId"
          icon={<Aicon style={{ fontSize: '20px', }}
            type="home"
                />}
          key="Home"
          onPress={() => this.props.switchFooterTab('home')}
          selected={this.props.footer.footerActive === 'home'}
          selectedIcon={<Aicon style={{ fontSize: '20px', }}
            theme="twoTone"
            type="home" />}
          title="首页"
        >
        </TabBar.Item>
        <TabBar.Item
          icon={<Aicon style={{ fontSize: '20px', }}
            type="compass"
                />}
          key="Battle"
          onPress={() => this.props.switchFooterTab('battle')}
          selected={this.props.footer.footerActive === 'battle'}
          selectedIcon={<Aicon style={{ fontSize: '20px', }}
            theme="twoTone"
            type="compass"
                        />}
          title="对比"
        >
        </TabBar.Item>
        <TabBar.Item
          icon={<Aicon style={{ fontSize: '20px', }}
            type="fire"
          />}
          key="Fire"
          onPress={() => this.props.switchFooterTab('fire')}
          selected={this.props.footer.footerActive === 'fire'}
          selectedIcon={<Aicon style={{ fontSize: '20px', }}
            theme="twoTone"
            type="fire" />}
          title="热门"
        >
        </TabBar.Item>
        <TabBar.Item
          icon={<Aicon style={{ fontSize: '20px', }}
            type="question-circle"
          />}
          key="Search"
          onPress={() => this.props.switchFooterTab('search')}
          selected={this.props.footer.footerActive === 'search'}
          selectedIcon={<Aicon style={{ fontSize: '20px', }}
            theme="twoTone"
            type="question-circle"
          />}
          title="搜索"
        >
        </TabBar.Item>
      </TabBar>
    </div>);
  }
}

// 将state映射到props
const mapStateToProps = (state) => {
  return {
    slidebar: state.slidebar,
    footer: state.footer,
  };
};

// 绑定分发器
const mapDispatchToProps = (dispatch) => {
  return {
    toggleSlidebar: () => {
      console.log('toggleSlidebar 触发后进入分发器dispatch, 0000');
      dispatch(toggleSlidebar());
    },
    switchFooterTab: (name) => {
      console.log('switchFooterTab 触发后进入分发器dispatch, 0000');
      dispatch(switchFooterTab(name));
    },
  };
};

// export default App;
export default connect(mapStateToProps, mapDispatchToProps)(App);
