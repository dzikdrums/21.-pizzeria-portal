import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import {Button} from '@material-ui/core';
import styles from './Form.module.scss';

class Form extends React.Component {
  state = {
    name: 'Name',
    phoneNumber: '123-456-789',
    table: 'Table 1',
    time: '12:00',
    length: 'one hour',
    tabs: this.props.tabValue,
    tables: [
      {
        value: 'Table 1',
      },
      {
        value: 'Table 2',
      },
      {
        value: 'Table 3',
      },
      {
        value: 'Table 4',
      },
    ],
    hours: ['12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'],
    lengths: ['one hour', 'two hours', 'three hours'],
  };

    handleInputChange = e => {
      this.setState({
        [e.target.name]: e.target.value,
      });
    };

    addItem =(e) => {
      e.preventDefault();
    }

    render() {
      return(
        <form 
          className={styles.container} 
          noValidate 
          autoComplete="off"
          onSubmit={(e) => this.addItem(e)}
        >
          <TextField
            disabled
            label="Disabled"
            value= {this.props.tabValue === 0 ? 'Booking' : 'Event' }
            className={styles.textField}
            margin="normal"
          />
          <TextField
            select
            label="Select table"
            className={styles.textField}
            defaultValue={this.state.table}
            value={this.state.table}
            onChange={this.handleInputChange}
            helperText="Please select your table"
            margin="normal"
            name="table"
          >
            {this.state.tables.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            name="time"
            label="Select"
            className={styles.textField}
            value={this.state.time}
            onChange={this.handleInputChange}
            helperText="Please select time of booking"
            margin="normal"
          >
            {this.state.hours.map(hour => (
              <MenuItem key={hour} value={hour}>
                {hour}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            name="length"
            select
            className={styles.textField}
            value={this.state.length}
            onChange={this.handleInputChange}
            helperText="Please select length of booking"
            margin="normal"
          >
            {this.state.lengths.map(hour => (
              <MenuItem key={hour} value ={hour}>
                {hour}
              </MenuItem>
            ))};
          </TextField>
          <TextField
            required
            label="Required"
            value={this.state.name}
            className={styles.textField}
            margin="normal"
            onChange={this.handleInputChange}
            name="name"
          />
          <TextField
            required
            id="standard-required"
            label="Required"
            value={this.state.phoneNumber}
            className={styles.textField}
            margin="normal"
            onChange={this.handleInputChange}
            name="phoneNumber"
          />
          <Button className={styles.button} variant="contained" type="submit" color="primary">
            Add new
          </Button>
        </form>
      );}
}

export default Form;