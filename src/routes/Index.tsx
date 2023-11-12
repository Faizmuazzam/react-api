// import React from 'react'
import { Routes, Route } from "react-router-dom";
import Movie from "../pages/Movie";
import Create from "../pages/Create";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Movie />} />
      <Route path="/create" element={<Create />} />
    </Routes>
  );
};

export default Router;
