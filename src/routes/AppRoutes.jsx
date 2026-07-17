import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Booking from "../pages/Booking";

function AppRoutes() {
  return (
    <Routes>

      <Route element={<MainLayout />}>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        <Route
          path="/booking"
          element={<Booking />}
        />

      </Route>

    </Routes>
  );
}

export default AppRoutes;