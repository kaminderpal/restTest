import React from 'react';
import styles from './Header.module.css';

const Header = ({ title }) => {
  return <div className={styles.root}>{title}</div>;
};

export default Header;
