// import React from 'react'
import { Routes, Route } from "react-router-dom";
import Movie from "../pages/Movie";
import Create from "../pages/Create";
import Read from "../pages/Read";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Movie />} />
      <Route path="/create" element={<Create />} />
      <Route path="/detail/:id" element={<Read />} />
    </Routes>
  );
};

export default Router;
