import React from "react";

import { Outlet, NavLink, useNavigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();
  const handleBackBtn = () => {
    navigate(-1);
  };

  return (
    <>
      {" "}
      <header>
        <h1>Github Search</h1>
        <nav>
          <NavLink to="/">Home</NavLink>
          <a onClick={handleBackBtn}>Back</a>
        </nav>
      </header>
      <Outlet />
      <footer>
        <p>© 2022 Github Search. </p>
        <p>
          &nbsp; Created by <a href="https://github.com/PrishalM">Prishal</a>
        </p>
      </footer>
    </>
  );
};

export default Layout;
