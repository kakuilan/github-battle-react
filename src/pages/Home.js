import React from 'react';
import { InputItem, WhiteSpace, } from 'antd-mobile';
import {connect, } from 'react-redux';
import {changeEmail, } from '../redux/actions/user';

class Home extends React.Component {
    onChange = (value) => {
      value = value.replace(/\s/g, '');
      return this.props.changeEmail(value);
    }

    render() {
      return (<div>
        <h1>首页</h1>
        <p>来试试github PK赛</p>
        <WhiteSpace />
        <div>
          <InputItem
            clear
            onChange={this.onChange}
            placeholder="请输入你的邮箱"
            value={this.props.user.email}
          >邮箱</InputItem>
        </div>
      </div>);
    }
}

// export default Home;
// 将state映射到props
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

// 绑定分发器
const mapDispatchToProps = (dispatch) => {
  return {
    changeEmail: (v) => {
      dispatch(changeEmail(v));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
