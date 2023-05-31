import React from "react";
import { useNavigate } from "react-router";

const AuthGuard = ({ children }: { children: React.ReactElement }) => {
  //   const navigate = useNavigate;
  //   const { isAuthenticated } = useAuth();

  //   if (!isAuthenticated) {
  //     return navigate('/login');
  //   }

  return <div>{children}</div>;
};

export default AuthGuard;
