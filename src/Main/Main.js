import React from 'react';
import Datatable from '../Datatable';
import styles from './Main.module.css';

const Main = () => {
  return (
    <div className={styles.main}>
      <Datatable total={100} />
    </div>
  );
};

export default Main;
