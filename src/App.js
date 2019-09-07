import React from 'react';
import {connect, } from 'react-redux';
import { Route, Switch, } from 'react-router-dom';
import { Avatar, } from 'antd';
import { Drawer, NavBar, Icon, } from 'antd-mobile';
import Sidebar from './components/Sidebar';
import Footbar from './components/Footbar';
import {toggleSlidebar, } from './redux/actions/slidebar';
import Home from './pages/Home';
import Battle from './pages/Battle';
import BattleResult from './pages/BattleResult';
import Popular from './pages/Popular';
import Search from './pages/Search';
import './styles/App.less';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <NavBar icon={<Icon type="ellipsis" />}
          onLeftClick={() => this.props.toggleSlidebar()}
          rightContent={
            <Avatar className="avatar"
              icon="user"
              src={this.props.user.avatar}
            />
          }
        >
          Github Battle
        </NavBar>
        <Drawer
          className="my-drawer"
          contentStyle={{ color: '#A6A6A6', textAlign: 'center', }}
          onOpenChange={() => this.props.toggleSlidebar()}
          open={this.props.slidebar.sliderOpen}
          sidebar={<Sidebar />}
          style={{ minHeight: document.documentElement.clientHeight - 95, }}
        >
          {/** 定义路由页面组件 */}
          <Switch>
            <Route component={Home}
              exact
              path="/"
            />
            <Route component={Home}
              exact
              path="/home"
            />
            <Route component={Battle}
              exact
              path="/battle"
            /><Route component={BattleResult}
              exact
              path="/battle/result"
            />
            <Route component={Popular}
              path="/popular"
            />
            <Route component={Search}
              path="/search"
            />
            <Route
              render={() => {return <p>Not Found</p>;}}
            />
          </Switch>
        </Drawer>
        <Footbar></Footbar>
      </div>
    );
  }
}

// 将state映射到props
const mapStateToProps = (state) => {
  return {
    slidebar: state.slidebar,
    user: state.user,
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
