import React from "react";
import { Link } from "react-router-dom";

const ListItem = ({ item }) => {
  return (
    <li className="list-group-item w-100">
      <Link to={`/blog/${item.id}`}>{item.title}</Link>
    </li>
  );
};

export default ListItem;
