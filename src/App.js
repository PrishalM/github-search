import React from "react";
import { Routes, Route } from "react-router-dom";

import { SearchPage, UserPage, RepoPage, NotFoundPage } from "./pages";

import { default as Layout } from "./layouts";

import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<SearchPage />} />
        <Route path=":git_name" element={<UserPage />} />
        <Route path=":git_name/:repo_name" element={<RepoPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
