import React from 'react';
import { Drawer, List, NavBar, Icon } from 'antd-mobile';
import './App.less';
import thumbImg from './assets/image/gray.png'

class App extends React.Component {
  state = {
    open: true,
  }
  onOpenChange = (...args) => {
    console.log(args);
    this.setState({ open: !this.state.open });
  }
  render() {

      const menus = [
      {
        title : "首页",
        path : "/",
        thumb : thumbImg,
      },
      {
        title : "对比",
        path : "/battle",
        thumb : thumbImg,
      },
      {
        title : "热门",
        path : "/popular",
        thumb : thumbImg,
      },
      {
        title : "搜索",
        path : "/search",
        thumb : thumbImg,
      }
    ];

    const sidebar = (<List>
      {menus.map((menu, index) => {
        return (<List.Item key={index}
          thumb={menu.thumb}
        >{menu.title}</List.Item>);
      })}
    </List>);

    return (<div>
      <NavBar icon={<Icon type="ellipsis" />} onLeftClick={this.onOpenChange}>Battle</NavBar>
      <Drawer
        className="my-drawer"
        style={{ minHeight: document.documentElement.clientHeight }}
        enableDragHandle
        contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42 }}
        sidebar={sidebar}
        open={this.state.open}
        onOpenChange={this.onOpenChange}
      >
        Github battle
      </Drawer>
    </div>);
  }
}

export default App;
