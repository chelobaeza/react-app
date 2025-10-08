import React from "react";
import { Outlet } from "react-router";
import RequireAuth from "~/components/RequireAuth";

const AuthLayout: React.FC = () => {
  return (
    <RequireAuth>
      <Outlet />
    </RequireAuth>
  );
};

export default AuthLayout;
