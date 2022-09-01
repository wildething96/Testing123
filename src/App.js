import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Navbar } from "./components/navbar";
import { CompanySelection } from "./pages/companySelection";
import { CompanyMaintenance } from "./pages/companyMaintenance";
import { MainMenu } from "./pages/mainMenu";
import { Dashboard_b } from "./pages/dashboard_b";
import { Login } from "./pages/login";
import { postComp } from "./utils/fetchRequest";
import { Signup } from "./pages/signup";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      {/* < Signup /> */}
      {/* <Toolbar /> */}
      <Router>
        <Routes>
          <Route path="/a" element={<CompanySelection />} />
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/company-maintenance" element={<CompanyMaintenance />} />
          <Route path="/main-menu" element={<MainMenu />} />
          <Route path="/home" element={<Dashboard_b />} />
        </Routes>
      </Router>
    </div>
  );
}
