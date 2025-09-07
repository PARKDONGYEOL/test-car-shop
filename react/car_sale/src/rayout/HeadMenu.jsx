import React from 'react';
import styles from './HeadMenu.module.css';
import { NavLink } from 'react-router-dom';

const menuItems = [
  { to: '/', menu: '홈' },
  { to: '/car', menu: '차량관리' },
  { to: '/register', menu: '판매정보등록' },
  { to: '/sales', menu: '판매목록조회' },
];

const HeadMenu = () => {
  return (
    <div className={styles.head_div}>
      {menuItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) =>
            `${styles.menu_item} ${isActive ? styles.active : ''}`
          }
        >
          {item.menu}
        </NavLink>
      ))}
    </div>
  );
};

export default HeadMenu;
