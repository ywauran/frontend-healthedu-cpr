import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import MainAdmin from "./pages/admin/MainAdmin";
import MainUser from "./pages/user/MainUser";
import Quis from "./pages/user/Quis/Quis";
import "@fontsource/poppins";
import Hero from "./pages/user/hero/Hero";
const App = () => {
  return (
    <div className="app">
      <>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/main" element={<MainUser />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/pages/*" element={<MainAdmin />} />
          <Route path="/quis/:name/:age/:gender" element={<Quis />} />
        </Routes>
      </>
    </div>
  );
};

export default App;
