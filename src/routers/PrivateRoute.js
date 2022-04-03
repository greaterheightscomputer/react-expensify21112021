import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';

export const PrivateRoute = (props) => <Route {...props} />;

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid,
});
export default connect(mapStateToProps)(PrivateRoute);
//- let startup dev-server to see if our app we still work like before.
//- click on Create Expense tab to view it on the browser, its means our app is working like
//before
