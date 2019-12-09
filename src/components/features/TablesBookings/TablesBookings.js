import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from '../../common/Title/Title';
import styles from './TablesBookings.module.scss';
import {  useHistory } from 'react-router-dom';

// Generate Order Data
function createData(id, time, table1, table2, table3, table4) {
  return { id, time, table1, table2, table3, table4 };
}

const rows = [
  createData(
    12,
    '12:00',
    'BillyBoi',
    'available',
    'available',
    'Mark',
  ),
  createData(
    13,
    '13:00',
    'available',
    'Jacob',
    'available',
    'Stephen',
  ),
  createData(
    14,
    '14:00',
    'Harari',
    'available',
    'Joseph',
    'Owane',
  ),
  createData(
    15,
    '15:00',
    'Joe',
    'Steve',
    'available',
    'available',
  ),
  createData(
    16,
    '16:00',
    'available',
    'available',
    'Bill',
    'Donald',
  ),
];

const Tables = () => {
  let history = useHistory();

  function handleRouting(reservationName) {
    history.push(`/tables/booking/book/${reservationName}`);
  }

  function createCell(availability) {
    if (availability === 'available') {
      return <TableCell>{availability}</TableCell>;
    } else {
      return <TableCell 
        onClick={() => handleRouting(availability)} 
        className={styles.tableCellActive}
      >{availability}</TableCell>;
    }
  }
  
  return (
    <>
      <Title>Recent Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Time</TableCell>
            <TableCell>Table 1</TableCell>
            <TableCell>Table 2</TableCell>
            <TableCell>Table 3</TableCell>
            <TableCell>Table 4</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell className={styles.tableCell}>{row.time}</TableCell>
              {createCell(row.table1)}
              {createCell(row.table2)}
              {createCell(row.table3)}
              {createCell(row.table4)}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default Tables;