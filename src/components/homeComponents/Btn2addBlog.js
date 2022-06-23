import React from "react";

const Btn2addBlog = ({ onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="btn btn-outline-dark w-100 mt-3"
    >
      Add New Blog
    </button>
  );
};

export default Btn2addBlog;
