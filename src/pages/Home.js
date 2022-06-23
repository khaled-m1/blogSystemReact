import React, { useEffect, useState } from "react";
import ListGroup from "../components/homeComponents/ListGroup";
import Btn2addBlog from "../components/homeComponents/Btn2addBlog";
import { useNavigate, useParams } from "react-router-dom";

const Home = () => {
  const Navigate = useNavigate();
  const [blogList, setBlogList] = useState([]);
  const params = useParams();
  console.log(params.id);
  const onClick = (e) => {
    Navigate("/addblog");
  };
  useEffect(() => {
    const getBlogs = async () => {
      const request = await fetch("http://localhost:8080/api/v1/blog");
      const data = await request.json();
      setBlogList(data);
    };
    getBlogs();
  }, []);
  return (
    <div className="header container">
      <ListGroup blogList={blogList} />
      <Btn2addBlog onClick={onClick} />
    </div>
  );
};

export default Home;
