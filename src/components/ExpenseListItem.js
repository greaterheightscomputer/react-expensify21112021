import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import numerial from "numeral";

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>
      {"₦" + numerial(amount / 100).format("0,0.00")}-
      {moment(createdAt).format("MMMM Do, YYYY")}
    </p>
  </div>
);

export default ExpenseListItem;
