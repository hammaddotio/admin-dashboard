import React from "react";
import Register from "./auth/Register.jsx";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./admin/Dashboard.jsx";
import Login from "./auth/Login.jsx";
import { Toaster } from "react-hot-toast";
import UpdateUserDetailsByAdmin from "./admin/UpdateUserDetailsByAdmin.jsx";

const App = () => {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard/user/update/:id" element={<UpdateUserDetailsByAdmin />} />
      </Routes>
    </>
  );
};

export default App;
