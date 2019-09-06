import React from 'react';
import { Toast, } from 'antd-mobile';
import animate from '@jam3/gsap-promise';
import {connect, } from 'react-redux';
import Language from '../components/Language';
import RepoGrid from '../components/RepoGrid';
import {changeLanguage, clearRepository, } from '../redux/actions/popular';

class Popular extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    animate.from(this.topHeader, 0.2, { y: -200, delay: 0.1, });
    this.updateLanguage();
  }

  updateLanguage(lang) {
    Toast.loading('Loading...', 0);

    this.props.clear();
    this.props.changeLanguage(lang, () => {
      // 有结果后关闭loading
      Toast.hide();
    });
    return;
  }

  render() {
    return (
      <div>
        <h1 ref={(c) => { this.topHeader = c; }}>热门项目</h1>
        <Language
          onSelect={this.updateLanguage.bind(this)}
          selectedLang={this.props.popular.selectedLang}
        />

        {this.props.popular.repositories && <RepoGrid repos={this.props.popular.repositories}></RepoGrid>}
      </div>
    );
  }
}

// 将state映射到props
const mapStateToProps = (state) => {
  return {
    popular: state.popular,
  };
};

// 绑定分发器
const mapDispatchToProps = (dispatch) => {
  return {
    clear: () => {
      dispatch(clearRepository());
    },
    changeLanguage: (v, callback) => {
      dispatch(changeLanguage(v, callback));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Popular);
