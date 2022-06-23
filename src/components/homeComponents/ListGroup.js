import React from "react";
import ListItem from "./ListItem";
import { Routes, Route } from "react-router-dom";
const ListGroup = ({ blogList }) => {
  return (
    <ul className="list-group w-100">
      {blogList.map((item, index) => (
        <ListItem item={item} key={index} />
      ))}
    </ul>
  );
};

export default ListGroup;
