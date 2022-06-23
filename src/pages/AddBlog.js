import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [body, setbody] = useState("");
  const Navigate = useNavigate();

  const onClick = async (e) => {
    const request = await fetch("http://localhost:8080/api/v1/blog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, body }),
    });
    const data = await request.json();
    if (request.status === 201) {
      Navigate("/");
    }
  };
  return (
    <div className="container header">
      <h3 className="text-center">Add Blog</h3>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter your title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <textarea
          className="form-control"
          placeholder="Enter your blog body"
          rows="8"
          value={body}
          onChange={(e) => setbody(e.target.value)}
        ></textarea>
      </div>
      <button
        onClick={onClick}
        type="button"
        className="btn btn-outline-dark w-100 mt-1"
      >
        Add Blog
      </button>
    </div>
  );
};

export default AddBlog;
