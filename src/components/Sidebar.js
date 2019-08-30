// 侧边栏组件
import React from 'react';
import { List, } from 'antd-mobile';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <List>
        {this.props.menus.map((menu, index) => {
          return (
            <List.Item key={index}
              thumb={menu.thumb}
            >
              {menu.title}
            </List.Item>);
        })}
      </List>
    );
  }
}

export default Sidebar;
