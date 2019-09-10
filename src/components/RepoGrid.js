// 仓库表格组件
import React from 'react';
import PropTypes from 'prop-types';
// import animate from '@jam3/gsap-promise';
// import Lazyload from 'react-lazyload';
import LazyLoad from 'react-lazy-load';

class RepoGrid extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mounted: false,
    };
  }

  componentDidMount() {
    // animate.staggerFrom(
    //   '.popular-item',
    //   0.5,
    //   {
    //     x: -1500,
    //     opacity: 0.5,
    //     delay: 0.2,
    //   },
    //   0.035
    // );

    // setState更新的数据必须是对象;
    this.setState({mounted: true, });
  }

  // 组件更新之后触发
  componentDidUpdate() {
    // animate.staggerFrom(
    //   '.popular-item',
    //   0.5,
    //   {
    //     x: -1500,
    //     opacity: 0.5,
    //     delay: 0.2,
    //   },
    //   0.035
    // );
  }

  render() {
    const repos = this.props.repos;

    return (
      <ul className="popular-list">
        {repos.map((repo, index) => {
          return (

            <li
              className="popular-item"
              key={repo.name}
            >
              <div className="popular-rank">#{index + 1}</div>
              <ul className="space-list-items">
                <li>
                  <LazyLoad height={150}
                    offsetVertical={200}
                  >
                    <img
                      alt={`Avatar for ${repo.owner.login}`}
                      className="avatar"
                      src={repo.owner.avatar_url}
                    />
                  </LazyLoad>
                </li>

                <li>
                  <a href={repo.html_url} >
                    {repo.name}
                  </a>
                </li>
                <li>@{repo.owner.login}</li>
                <li>{repo.stargazers_count} stars</li>
              </ul>
            </li>

          );
        })}
      </ul>
    );
  }
}

RepoGrid.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default RepoGrid;
