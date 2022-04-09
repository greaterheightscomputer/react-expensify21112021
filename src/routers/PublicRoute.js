import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export const PublicRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => (
  <div>
    <Route
      {...rest}
      component={(props) =>
        isAuthenticated ? (
          <Redirect to="/dashboard" /> //once the user is login and its redirect user to Dashboard page
        ) : (
          <Component {...props} /> //if user is not login its will view loginPage
        )
      }
    />
  </div>
);

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid,
});
export default connect(mapStateToProps)(PublicRoute);
