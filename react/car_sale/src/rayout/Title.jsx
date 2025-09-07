import React, { useEffect, useState } from 'react';
import styles from './Title.module.css';

const Title = () => {

  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.title_div}>
      <p className={visible ? styles.show : ""} >
        차량 판매 정보 시스템
      </p>
      </div>
  )
}

export default Title