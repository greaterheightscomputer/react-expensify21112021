import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import EditExpensePage from '../components/EditExpensePage';
import AddExpensePage from '../components/AddExpensePage';
import ExpenseDashboardPage from '../components/ExpenseDashboard';
import HelpExpensePage from '../components/HelpExpensePage';
import NotFoundPage from '../components/NoteFoundPage';
import Header from '../components/Header';
import LoginPage from '../components/LoginPage';
import createHistory from 'history/createBrowserHistory';
import PrivateRoute from './PrivateRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={LoginPage} exact={true} />
        <PrivateRoute
          path="/dashboard"
          component={ExpenseDashboardPage}
          exact
        />
        <PrivateRoute path="/create" component={AddExpensePage} exact />
        <PrivateRoute path="/edit/:id" component={EditExpensePage} exact />
        <Route path="/help" component={HelpExpensePage} exact />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
