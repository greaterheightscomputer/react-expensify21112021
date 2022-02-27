import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import EditExpensePage from "../components/EditExpensePage";
import AddExpensePage from "../components/AddExpensePage";
import ExpenseDashboardPage from "../components/ExpenseDashboard";
import HelpExpensePage from "../components/HelpExpensePage";
import NotFoundPage from "../components/NoteFoundPage";
import Header from "../components/Header";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true} />
        <Route path="/create" component={AddExpensePage} exact />
        <Route path="/edit/:id" component={EditExpensePage} exact />
        <Route path="/help" component={HelpExpensePage} exact />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
