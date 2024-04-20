import { Navigate, Outlet, Route, Routes, redirect } from "react-router-dom";
import React from "react";
import Home from "./features/pages/home";
import Login from "./features/pages/login";
import SingUp from "./features/pages/signup";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SingUp />} />
      <Route element={<PrivateRoutes />}>
        <Route path="/home" element={<Home />} />
      </Route>
    </Routes>
  );
}
const PrivateRoutes = () => {
  let auth = localStorage.getItem("token") ? true : false;

  return auth ? <Outlet /> : <Navigate to="/login" />;
};
export default App;
