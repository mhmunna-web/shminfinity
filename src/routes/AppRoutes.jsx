import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Booking from "../pages/Booking";
import AirportTransfer from "../pages/AirportTransfer";
import LongDistance from "../pages/LongDistance";
import BusinessPrivateTravel from "../pages/BusinessPrivateTravel";
import ToursFamilyTravel from "../pages/ToursFamilyTravel";
import DriverApplication from "../pages/DriverApplication";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/services/airport-transfer"
          element={<AirportTransfer />}
        />

        <Route
          path="/services/long-distance"
          element={<LongDistance />}
        />

        <Route
          path="/services/business-travel"
          element={<BusinessPrivateTravel />}
        />

        <Route
          path="/services/tours-family"
          element={<ToursFamilyTravel />}
        />

        <Route
          path="/booking"
          element={<Booking />}
        />

        <Route
          path="/driver-application"
          element={<DriverApplication />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />
      </Route>
    </Routes>
  );
};

export default AppRoutes;