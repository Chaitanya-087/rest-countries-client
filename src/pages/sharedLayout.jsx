import React, {Suspense} from "react";
import {Outlet} from "react-router-dom";
import {Navbar} from "../components";

const SharedLayout = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Suspense fallback={<h5 style={{textAlign:'center'}}>Loading...</h5>}>
        <Outlet />
      </Suspense>
    </React.Fragment>
  );
};

export default SharedLayout;
