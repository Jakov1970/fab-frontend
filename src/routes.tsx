import { Navigate } from "react-router-dom";
import { Dashboard } from "./Dashboard/Dashboard";

export const routes = (isAuth: boolean) => [
  {
    path: '/',
    element: isAuth ? <Navigate to="/dashboard" /> : <Navigate to="/" />,
  },
  { path: 'dashboard', element: isAuth ? <Dashboard /> : <Navigate to="/" /> },
  { path: '*', element: <Navigate to="/" /> },
];