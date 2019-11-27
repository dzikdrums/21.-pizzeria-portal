import React from 'react';
import PageNav from '../PageNav/PageNav';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Container } from '@material-ui/core';

const MainLayout = ({ children }) => (
  <div>
    <AppBar>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <PageNav />
        </Toolbar>
      </Container>
    </AppBar>
    <Container maxWidth="lg">
      <Toolbar />
      {children}
    </Container>
  </div>
);

export default MainLayout;

MainLayout.propTypes = {
  children: PropTypes.any,
};
