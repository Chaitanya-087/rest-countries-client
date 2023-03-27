import React, {Suspense} from "react";
import {Outlet} from "react-router-dom";
import {Navbar} from "../components";

const SharedLayout = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Suspense fallback={<span>Loading...</span>}>
        <Outlet />
      </Suspense>
    </React.Fragment>
  );
};

export default SharedLayout;
