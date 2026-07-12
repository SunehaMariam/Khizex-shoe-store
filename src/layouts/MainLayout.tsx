import { Outlet } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import OfflineBanner from "../components/OfflineBanner";

const MainLayout = () => {
  return (
    <>
      {/* Offline / Online Status Banner */}
      <OfflineBanner />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="min-h-screen pt-14">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default MainLayout;