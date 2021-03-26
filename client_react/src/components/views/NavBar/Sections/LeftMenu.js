import React from 'react';
import { Menu } from 'antd';
import {Link} from 'react-router-dom';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
    <Menu.Item key="main">
      <Link to="/">Home</Link>
    </Menu.Item>
    <Menu.Item key="about">
      <Link to="/about">About</Link>
    </Menu.Item>
    <Menu.Item key="project">
      <Link to="/project">Project</Link>
    </Menu.Item>
    <Menu.Item key="calligraphy">
      <Link to="/calligraphy">Calligraphy</Link>
    </Menu.Item>
  </Menu>
  )
}

export default LeftMenu