import React from 'react';
import {connect, } from 'react-redux';
import animate from '@jam3/gsap-promise';
import { InputItem, Button, Toast, WhiteSpace, } from 'antd-mobile';
import {searchUser, searchRepos, clearSearch, } from '../redux/actions/search';
import SearchUser from '../components/SearchUser';
import SearchRepos from '../components/SearchRepos';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
    };
  }

  componentDidMount() {
    animate.from(this.topHeader, 0.2, { y: -200, delay: 0.1, });
    this.props.clear();
  }

  onChange(value) {
    value = value.replace(/\s/g, '');
    // 调用处须绑定this,否则提示Cannot read property 'setState' of undefined
    this.setState({ username: value, });
  }

  willSearch() {
    this.props.clear();
    if (this.state.username === '') {
      Toast.fail('请输入用户名');
    } else {
      Toast.loading('Loading...', 0);
      this.props.searchUser(this.state.username, () => {
        // 有结果后关闭loading
        Toast.hide();

        // 然后搜索用户的仓库
        this.props.searchRepos(this.state.username);
      });
    }
    return;
  }

  render() {
    return (<div>
      <h1 ref={(c) => { this.topHeader = c; }}>搜索</h1>
      <WhiteSpace />
      <div>
        <InputItem
          clear
          defaultValue=""
          onChange={this.onChange.bind(this)}
          placeholder="请输入要查找的用户名"
        >用户</InputItem>
        <WhiteSpace />
        <Button inline
          onClick={this.willSearch.bind(this)}
          style={{ marginRight: '4px', }}
          type="primary"
        >查找</Button>
      </div>
      <div className="profile">
        {this.props.search.userInfo && <SearchUser profile={this.props.search.userInfo} />}
        {this.props.search.userRepos && <SearchRepos repos={this.props.search.userRepos} />}
      </div>
    </div>);
  }
}

// 将state映射到props
const mapStateToProps = (state) => {
  return {
    search: state.search,
  };
};

// 绑定分发器
const mapDispatchToProps = (dispatch) => {
  return {
    clear: () => {
      dispatch(clearSearch());
    },
    searchUser: (v, callback) => {
      dispatch(searchUser(v, callback));
    },
    searchRepos: (v, callback) => {
      dispatch(searchRepos(v, callback));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
