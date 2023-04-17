import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import MainAdmin from "./pages/admin/MainAdmin";
import MainUser from "./pages/user/MainUser";
import Quis from "./pages/user/Quis/Quis";
const App = () => {
  return (
    <div className="app">
      <>
        <Routes>
          <Route path="/" element={<MainUser />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/pages/*" element={<MainAdmin />} />
          <Route path="/quis/:name/:age/:gender" element={<Quis />} />
        </Routes>
      </>
    </div>
  );
};

export default App;
