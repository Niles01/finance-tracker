import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { ClerkProvider, SignIn } from "@clerk/clerk-react";
import Dashboard from "./components/Dashboard";
import Section from "./components/Section";
import Navbar from "./components/Navbar";
import PrivateRoute from "./Auth/PrivateRoute";
import PublicRoute from "./Auth/PublicRoute";
import React from "react";
function App() {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/sign-in" element={<PublicRoute element={<SignIn />} />} />

          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/finance" element={<Section />} />
          </Route>

          <Route path="*" element={<Navigate to="/sign-in" replace />} />
        </Routes>
      </Router>
  );
}

export default App;
