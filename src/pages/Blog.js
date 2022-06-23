import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Blog = () => {
  const params = useParams();
  const id = params.id;
  const [title, setTitle] = useState("");
  const [body, setbody] = useState("");

  useEffect(() => {
    const getBlogs = async () => {
      const request = await fetch("http://localhost:8080/api/v1/blog/" + id);
      const data = await request.json();
      setTitle(data.title);
      setbody(data.body);
    };
    getBlogs();
  }, []);
  return (
    <div className="container header">
      <h3 className="text-center">View Blog</h3>
      <div className="mb-3">
        <h3>{title}</h3>
      </div>
      <div className="mb-3">
        <textarea
          className="form-control"
          placeholder="Enter your blog body"
          readOnly
          rows="8"
          value={body}
        ></textarea>
      </div>
      <button type="button" className="btn btn-outline-dark w-100 mt-1">
        Back
      </button>
    </div>
  );
};

export default Blog;
