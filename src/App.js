import React from 'react';
import { Drawer, NavBar, Icon, } from 'antd-mobile';
import {connect, } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Footbar from './components/Footbar';
import {toggleSlidebar, } from './redux/actions/slidebar';
import Home from './pages/Home';
import Battle from './pages/Battle';
import Popular from './pages/Popular';
import Search from './pages/Search';

import './styles/App.less';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
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
            sidebar={<Sidebar />}
            style={{ minHeight: document.documentElement.clientHeight - 95, }}
          >
            <Switch>
              <Route component={Home}
                exact
                path="/"
              />
              <Route component={Battle}
                exact
                path="/battle"
              />
              <Route component={Popular}
                path="/popular"
              />
              <Route component={Search}
                path="/search"
              />
              <Route
                render={function () {
                  return <p>Not Found</p>;
                }}
              />
            </Switch>
          </Drawer>
          <Footbar></Footbar>
        </div>
      </Router>
    );
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
