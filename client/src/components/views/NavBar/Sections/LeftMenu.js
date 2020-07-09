import React from 'react';
import { Menu } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
    <Menu.Item key="main">
      <a href="/">Home</a>
    </Menu.Item>
    <Menu.Item key="about">
      <a href="/about">About</a>
    </Menu.Item>
    <Menu.Item key="project">
      <a href="/project">Project</a>
    </Menu.Item>
    <Menu.Item key="calligraphy">
      <a href="/calligraphy">Calligraphy</a>
    </Menu.Item>
  </Menu>
  )
}

export default LeftMenu