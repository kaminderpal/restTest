import React from 'react';
import styles from './Datatable.module.css';

const Datatable = ({ total }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Data</th>
          <th>Company</th>
          <th>Account</th>
          <th>{`$${total}`}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Hello</td>
          <td>sam</td>
          <td>wool</td>
          <td>25</td>
        </tr>
        <tr>
          <td>Hello</td>
          <td>sam</td>
          <td>wool</td>
          <td>25</td>
        </tr>
        <tr>
          <td>Hello</td>
          <td>sam</td>
          <td>wool</td>
          <td>25</td>
        </tr>
        <tr>
          <td>Hello</td>
          <td>sam</td>
          <td>wool</td>
          <td>25</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Datatable;
