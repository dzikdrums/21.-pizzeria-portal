import React from 'react';
import styles from './Tables.module.scss';
import TablesBookings from '../../features/TablesBookings/TablesBookings';
import Form from './Form';
import {Paper, Tabs, Tab} from '@material-ui/core';
import {  useHistory } from 'react-router-dom';

const Tables = props => {
  let history = useHistory();

  let value = 0;
  value = props.location.pathname === '/tables/booking/events/new' ? 1 : 0;

  function handleClick(reservationType) {
    history.push(`/tables/booking/${reservationType}/new`);
  }


  return (
    <div className={styles.component}>
      <Paper className={styles.paper}>
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab onClick={() => handleClick('booking')} label='New booking' />
          <Tab onClick={() => handleClick('events')} label='New event' />
        </Tabs>
      </Paper>
      <Paper className={styles.paper}>
        <Form tabValue={value}/>
      </Paper>
      <Paper className={styles.paper}>
        <TablesBookings/>
      </Paper>
    </div>
  );};

export default Tables;


// to={`${process.env.PUBLIC_URL}/tables/booking/booking/new`}
// to={`${process.env.PUBLIC_URL}/tables/booking/events/new`}