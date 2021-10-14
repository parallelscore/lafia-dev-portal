import React from 'react';
import './headerStyle.scss';
import logo from './../../images/lafia_logo 1.svg';
import { Link } from 'react-router-dom';
import { CaretDownOutlined, GlobalOutlined } from '@ant-design/icons';
import { Menu, Dropdown, Button } from 'antd';
import { Avatar, Image } from 'antd';

const Header = () => {
  const menu = (
    <Menu>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          1st menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          2nd menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          3rd menu item
        </a>
      </Menu.Item>
    </Menu>
  );
  return (
    <div className="header">
      <div className="header__wrapper">
        <div>
          <Link className="header__wrapper__logo" to="/client-list">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="d-flex">
          <div className="header-display-wrapper">
            <Dropdown overlay={menu} placement="bottomCenter" arrow>
              <Button style={{ border: 'none' }}>
                <GlobalOutlined className="myGlobe" />
                <span className="header-text">EN</span>
              </Button>
            </Dropdown>
          </div>

          <div className="header-display-wrapper">
            <Avatar
              style={{ width: '3.5rem' }}
              src={
                <Image src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
            />
            <Dropdown overlay={menu} placement="bottomCenter" arrow>
              <Button style={{ border: 'none' }}>
                <span className="header-text">Enlongated Mask</span>
                <CaretDownOutlined />
              </Button>
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
