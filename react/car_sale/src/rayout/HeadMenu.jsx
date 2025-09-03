import React from 'react';
import styles from './HeadMenu.module.css';
import { NavLink } from 'react-router-dom';

const menuItems = [
  { to: '/', label: '홈' },
  { to: '/car', label: '차량관리' },
  { to: '/register', label: '판매정보등록' },
  { to: '/sales', label: '판매목록조회' },
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
          {item.label}
        </NavLink>
      ))}
    </div>
  );
};

export default HeadMenu;
