import React from 'react';
import { Icon as Aicon, } from 'antd';
import { Drawer, NavBar, TabBar, Icon, } from 'antd-mobile';
import Sidebar from './components/Sidebar';
import './styles/App.less';
import thumbImg from './assets/image/gray.png';

class App extends React.Component {
  state = {
    sliderOpen: false,
    footerActive: 'home',
    footerHidden: false,
  }

  onOpenChange = (...args) => {
    console.log(args);
    this.setState({ sliderOpen: !this.state.sliderOpen, });
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
        onLeftClick={this.onOpenChange}
      >
      Github Battle
      </NavBar>
      <Drawer
        className="my-drawer"
        contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42, }}
        enableDragHandle
        onOpenChange={this.onOpenChange}
        open={this.state.sliderOpen}
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
          onPress={() => {
            this.setState({
              footerActive: 'home',
            });
          }}
          selected={this.state.footerActive === 'home'}
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
          onPress={() => {
            this.setState({
              footerActive: 'battle',
            });
          }}
          selected={this.state.footerActive === 'battle'}
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
          onPress={() => {
            this.setState({
              footerActive: 'fire',
            });
          }}
          selected={this.state.footerActive === 'fire'}
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
          onPress={() => {
            this.setState({
              footerActive: 'search',
            });
          }}
          selected={this.state.footerActive === 'search'}
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

export default App;
