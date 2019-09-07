// 底部栏组件
import React from 'react';
import { Icon as Aicon, } from 'antd';
import { TabBar, } from 'antd-mobile';
import {connect, } from 'react-redux';
import {switchFooterTab, } from '../redux/actions/footer';

class Footbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      footerActive: this.props.footer.footerActive,
    };
  }

  // 在调用 render 方法之前调用，并且在初始挂载及后续更新时都会被调用。它应返回一个对象来更新 state，如果返回 null 则不更新任何内容
  static getDerivedStateFromProps(nextProps, prevState) {
    if (process.env.NODE_ENV === 'development') {
      console.log('nextProps:-------------', nextProps);
      console.log('prevState:-------------', prevState);
    }

    const path = nextProps.router.location.pathname.substr(1); // 删除第一个字符'/'

    // 选择当前路径的底部栏tab
    if (path !== prevState.footerActive) {
      return {
        footerActive: path,
      };
    }

    return {
      footerActive: nextProps.footer.footerActive,
    };
  }

  componentDidMount() {
    // todo
  }

  render() {
    return (
      <TabBar
        barTintColor="white"
        hidden={this.props.footer.footerHidden}
        tabBarPosition="bottom"
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
          onPress={() => this.props.switchFooterTab('battle')}
          selected={this.state.footerActive === 'battle' || this.state.footerActive === 'battle/result'}
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
          key="Popular"
          onPress={() => this.props.switchFooterTab('popular')}
          selected={this.state.footerActive === 'popular'}
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
          selected={this.state.footerActive === 'search'}
          selectedIcon={<Aicon style={{ fontSize: '20px', }}
            theme="twoTone"
            type="question-circle"
                        />}
          title="搜索"
        >
        </TabBar.Item>
      </TabBar>
    );
  }
}

// 将state映射到props
const mapStateToProps = (state) => {
  return {
    router: state.router,
    footer: state.footer,
  };
};

// 绑定分发器
const mapDispatchToProps = (dispatch) => {
  return {
    switchFooterTab: (name) => {
      console.log('switchFooterTab 触发后进入分发器dispatch, 0000');
      dispatch(switchFooterTab(name));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Footbar);
