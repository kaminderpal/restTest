import React from 'react';
import Header from './Header';
import Main from './Main';
import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.container}>
      <Header title="Bench Test" />
      <Main />
    </div>
  );
};

export default App;
